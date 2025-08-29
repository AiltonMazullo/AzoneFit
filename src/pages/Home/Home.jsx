import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import NavBar from "../../components/UI/NavBar/NavBar";
import personalImg from "../../assets/personal.png";
import groupImg from "../../assets/group.png";
import appleImg from "../../assets/apple.png";
import { Router } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/form');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <div className={styles.logo}>
        <h1>DM</h1>
        <h3>
          <span>DM WORKOUT</span>
        </h3>
      </div>
      <main className={styles.main}>
        <h2>
          <span>ELEVATE YOUR FITNESS</span>
        </h2>
        <p>Transform your body and reach your potential</p>

        <div className={styles.Box}>
          <ul className={styles.BoxList}>
            <li className={styles.BoxListItem}>
              <img src={personalImg} alt="Personal Training" className={styles.serviceIcon} />
              <h4 className={styles.headerTextBlue}>PERSONAL TRAINING</h4>
              <p>1-on-1 tailored sessions</p>
            </li>

            <li className={styles.BoxListItem}>
              <img src={groupImg} alt="Group Classes" className={styles.serviceIcon} />
              <h4 className={styles.headerTextBlue}>GROUP CLASSES</h4>
              <p>Energy, connection, and motivation</p>
            </li>

            <li className={styles.BoxListItem}>
              <img src={appleImg} alt="Nutrition Coaching" className={styles.serviceIcon} />
              <h4 className={styles.headerTextBlue}>NUTRITION COACHING</h4>
              <p>Build nutrition habits</p>
            </li>
          </ul>
        </div>
        
        <div className={styles.testimonial}>
          <p>"This program has completely changed my life."</p>
        </div>
        
        <div className={styles.ctaSection}>
          <button className={styles.getStartedBtn} onClick={handleGetStarted}>GET STARTED</button>
        </div>
      </main>
    </div>
  );
}
