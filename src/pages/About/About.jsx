import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/UI/NavBar/NavBar";
import onlineCoachingImg from "../../assets/onlineCoaching.svg";
import groupImg from "../../assets/group.svg";
import Box from "../../components/UI/Box/Box";
import styles from "./About.module.css";

const About = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/form");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.textImageSection}>
            <div className={styles.textContent}>
              <p className={styles.mainText}>
                At DM Aeon, fitness is more than movement it's the discipline that shapes who you become.
              </p>
              <p className={styles.subText}>
                We exist to help people break limits, build lasting strength,
                and discover the version of themselves they didn't know was
                possible.
              </p>
            </div>
            <div className={styles.imageContent}>
              <img
                src={onlineCoachingImg}
                alt="Fitness Training"
                className={styles.sectionImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.imageTextSection}>
            <div className={styles.imageContent}>
              <img
                src={groupImg}
                alt="Diego Lins"
                className={styles.sectionImage}
              />
            </div>
            <div className={styles.textContent}>
              <p className={styles.mainText}>
                Founded by Diego Lins — certified trainer and former Army
                officer.
              </p>
              <p className={styles.subText}>
                From years in the military, Diego learned that true progress
                comes from discipline, resilience, and consistency.
                DM Workout was born to bring that same edge into fitness and
                life.
              </p>
              <p className={styles.subText}>
                This is not a quick fix.
                It's precision, science, and mindset combined to forge results
                that last.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <Box />
        </section>

        <section className={styles.section}>
          <div className={styles.textSection}>
            <p className={styles.highlightText}>
              What makes DM Workout different?
              We don't just train bodies we rewire mindsets.
            </p>
            <p className={styles.subText}>
              Better health, unshakable confidence
              and discipline that expands into every part of life
              That's the ripple effect of transformation.
            </p>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Your next chapter starts here
              Strong body. Strong mind. Strong life.
            </h2>
            <button className={styles.getStartedBtn} onClick={handleGetStarted}>
              GET STARTED
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
