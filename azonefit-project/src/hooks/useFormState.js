import { useState } from "react";
import { questions } from "../data/questions";

export const useFormState = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const updateAnswer = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));
  };

  const submitForm = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Formulário enviado:", answers);
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setLoading(false);
    }
  };

  const getProgress = () => {
    return Math.round((currentQuestionIndex / (questions.length - 1)) * 100);
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    answers,
    loading,
    nextQuestion,
    previousQuestion,
    updateAnswer,
    getProgress,
    submitForm,
  };
};
