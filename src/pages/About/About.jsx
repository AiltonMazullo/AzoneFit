import React from 'react';
import NavBar from "../../components/UI/NavBar/NavBar";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>ABOUT US</h1>
          
          <div className={styles.introSection}>
            <p className={styles.introText}>
              At DM Workout, we believe fitness is more than exercise—
              <br />it's transformation.
            </p>
          </div>
          
          <div className={styles.missionSection}>
            <p className={styles.missionText}>
              Our mission is to empower people of all backgrounds, 
              men and women, to discover their best version 
              through training, discipline, and balance.
            </p>
          </div>
          
          <div className={styles.founderSection}>
            <p className={styles.founderText}>
              Founded by Diego Lins, a certified personal trainer 
              and former Army officer, DM Workout combines 
              military discipline with modern fitness science to 
              deliver workouts that are challenging, effective, 
              and sustainable.
            </p>
          </div>
          
          <div className={styles.servicesSection}>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>
                <span className={styles.serviceBullet}>•</span>
                <span className={styles.serviceText}>
                  <strong>ONLINE COACHING</strong> – Personalized guidance for training, nutrition, and lifestyle anytime, anywhere.
                </span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.serviceBullet}>•</span>
                <span className={styles.serviceText}>
                  <strong>ALLIANCE</strong> – Train together, grow together, connect with people who share your journey.
                </span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.serviceBullet}>•</span>
                <span className={styles.serviceText}>
                  <strong>CHALLENGE 15 DAYS</strong> – Push your limits and unlock a stronger version of yourself in just two weeks.
                </span>
              </li>
            </ul>
          </div>
          
          <div className={styles.philosophySection}>
            <p className={styles.philosophyText}>
              What sets us apart is not just the workout itself, but the 
              lifestyle change it inspires. From improved health to stronger 
              relationships and greater confidence, our programs create 
              a ripple effect that goes far beyond the gym.
            </p>
          </div>
          
          <div className={styles.missionStatement}>
            <p className={styles.missionStatementText}>
              At DM Workout, we don't just train bodies—
              <br />we shape mindsets, habits, and lives.
            </p>
          </div>
          
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>
              JOIN US AND BECOME
              <br />THE BEST VERSION
              <br />OF YOURSELF.
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;