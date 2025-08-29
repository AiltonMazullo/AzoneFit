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
                  <strong>Personal Training</strong> – 1-on-1 tailored sessions.
                </span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.serviceBullet}>•</span>
                <span className={styles.serviceText}>
                  <strong>Group Classes</strong> – energy, connection, and motivation.
                </span>
              </li>
              <li className={styles.serviceItem}>
                <span className={styles.serviceBullet}>•</span>
                <span className={styles.serviceText}>
                  <strong>Online Coaching</strong> – flexibility to train anywhere.
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