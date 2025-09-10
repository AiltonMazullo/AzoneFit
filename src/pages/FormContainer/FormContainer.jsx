import React, { useState } from "react";
import { useFormState } from "../../hooks/useFormState";
import ProgressBar from "../../components/Form/ProgressBar/ProgressBar";
import styles from "./FormContainer.module.css";
import LogoFormIcon from "../../assets/logo-form-icon.svg";
import LogoFormNome from "../../assets/logo-form-nome.svg";
import api from "../../services/api";

const FormContainer = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    answers,
    nextQuestion,
    previousQuestion,
    updateAnswer,
  } = useFormState();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const [isEntering, setIsEntering] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleAnswerChange = (e) => {
    updateAnswer(e.target.value);
  };

  const handleNext = async () => {
    if (isAnswerValid()) {
      setTransitionDirection("next");
      setIsTransitioning(true);

      if (currentQuestionIndex === 8) {
        try {
          const formData = {
            name: answers[0],
            instagram: answers[1],
            email: answers[2],
            fitness_level: answers[3],
            fitness_goal: answers[4],
            impediment: answers[5],
            motivated_scale: answers[6],
            economized: answers[7],
            when_start: answers[8],
          };

          const response = await api.post("/form-register", formData);
          console.log("Formulário enviado com sucesso!", response.data);
        } catch (error) {
          console.error(
            "Erro ao enviar formulário:",
            error.response?.data || error.message
          );
        }
      }

      setTimeout(() => {
        if (currentQuestionIndex === 8) {
          setShowThankYou(true);
        } else {
          nextQuestion();
        }
        setIsEntering(true);
        setTimeout(() => {
          setIsTransitioning(false);
          setIsEntering(false);
        }, 50);
      }, 300);
    }
  };

  const handlePrevious = () => {
    setTransitionDirection("prev");
    setIsTransitioning(true);
    setTimeout(() => {
      previousQuestion();
      setIsEntering(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setIsEntering(false);
      }, 50);
    }, 300);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && answers[currentQuestionIndex]?.trim()) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleRadioChange = (value) => {
    updateAnswer(value);
  };

  const handleCheckboxChange = (value) => {
    const currentAnswers = answers[currentQuestionIndex] || [];
    const updatedAnswers = currentAnswers.includes(value)
      ? currentAnswers.filter((item) => item !== value)
      : [...currentAnswers, value];

    updateAnswer(updatedAnswers);
  };

  const isAnswerValid = () => {
    const currentAnswer = answers[currentQuestionIndex];
    const question = currentQuestion;

    if (!question?.required) return true;

    switch (question.type) {
      case "text":
      case "email":
      case "textarea":
        return currentAnswer && currentAnswer.trim().length > 0;

      case "radio":
        return currentAnswer && currentAnswer.length > 0;

      case "checkbox":
        return Array.isArray(currentAnswer) && currentAnswer.length > 0;

      default:
        return (
          currentAnswer && currentAnswer.trim && currentAnswer.trim().length > 0
        );
    }
  };

  const renderInput = () => {
    const question = currentQuestion;
    const currentAnswer = answers[currentQuestionIndex] || "";

    switch (question?.type) {
      case "text":
      case "email":
        return (
          <input
            type={question.type === "email" ? "email" : "text"}
            className={styles.input}
            placeholder={question.placeholder || "Type your answer here..."}
            value={currentAnswer}
            onChange={handleAnswerChange}
            onKeyPress={handleKeyPress}
          />
        );

      case "textarea":
        return (
          <div>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder={question.placeholder || "Type your answer here..."}
              value={currentAnswer}
              onChange={handleAnswerChange}
              rows={4}
            />
            {question.instruction && (
              <div className={styles.instruction}>{question.instruction}</div>
            )}
          </div>
        );

      case "radio":
        return (
          <div className={styles.radioGroup}>
            {question.options?.map((option) => (
              <label key={option.id} className={styles.radioOption}>
                <div className={styles.radioCircle}>{option.id}</div>
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option.value || option.label}
                  checked={currentAnswer === (option.value || option.label)}
                  onChange={() =>
                    handleRadioChange(option.value || option.label)
                  }
                  className={styles.radioInput}
                />
                <span className={styles.radioLabel}>{option.label}</span>
              </label>
            ))}
          </div>
        );

      case "checkbox":
        return (
          <div className={styles.checkboxGroup}>
            {question.subtitle && (
              <p className={styles.subtitle}>{question.subtitle}</p>
            )}
            {question.options?.map((option) => (
              <label key={option.id} className={styles.checkboxOption}>
                <div className={styles.checkboxCircle}>{option.id}</div>
                <input
                  type="checkbox"
                  value={option.label}
                  checked={
                    Array.isArray(currentAnswer) &&
                    currentAnswer.includes(option.label)
                  }
                  onChange={() => handleCheckboxChange(option.label)}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxLabel}>{option.label}</span>
              </label>
            ))}
          </div>
        );

      default:
        return (
          <input
            type="text"
            className={styles.input}
            placeholder="Type your answer here..."
            value={currentAnswer}
            onChange={handleAnswerChange}
            onKeyPress={handleKeyPress}
          />
        );
    }
  };

  return (
    <div className={styles.formContainer}>
      {/* Progress Bar */}
      <ProgressBar currentQuestion={currentQuestionIndex} totalQuestions={9} />

      <div className={styles.logo}>
        <img src={LogoFormIcon} alt="Ícone DM" className={styles.logoIcon} />
        <img src={LogoFormNome} alt="DM Workout" className={styles.logoText} />
      </div>

      {/* Main */}
      <div className={styles.mainContent}>
        {showThankYou ? (
          <div
            className={`${styles.questionSection} ${
              isTransitioning
                ? transitionDirection === "next"
                  ? styles.slideOutUp
                  : styles.slideOutDown
                : isEntering
                ? transitionDirection === "next"
                  ? styles.slideInFromBottom
                  : styles.slideInFromTop
                : styles.slideIn
            }`}
          >
            <div className={styles.thankYouSection}>
              <h1 className={styles.thankYouText}>Thank you!</h1>
            </div>
          </div>
        ) : (
          <div
            className={`${styles.questionSection} ${
              isTransitioning
                ? transitionDirection === "next"
                  ? styles.slideOutUp
                  : styles.slideOutDown
                : isEntering
                ? transitionDirection === "next"
                  ? styles.slideInFromBottom
                  : styles.slideInFromTop
                : styles.slideIn
            }`}
          >
            <div className={styles.questionText}>
              <span className={styles.questionNumber}>
                {currentQuestionIndex + 1}
              </span>
              <span className={styles.arrow}>→</span>
              <span className={styles.question}>
                {currentQuestion?.question || "What is your full name?"}
              </span>
            </div>

            {currentQuestion?.example && (
              <div className={styles.example}>{currentQuestion.example}</div>
            )}

            <div className={styles.inputSection}>
              {renderInput()}
              <div className={styles.buttonRow}>
                <button
                  className={styles.okButton}
                  onClick={handleNext}
                  disabled={!isAnswerValid()}
                >
                  {currentQuestion?.buttonLabel || "OK"}
                </button>
                <span className={styles.buttonHint}>
                  {currentQuestion?.buttonText || "press Enter ↵"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {!showThankYou && (
        <div className={styles.footer}>
          <div className={styles.navigationButtons}>
            <button
              className={styles.navButton}
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              ▲
            </button>
            <button
              className={styles.navButton}
              onClick={handleNext}
              disabled={!isAnswerValid()}
            >
              ▼
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormContainer;
