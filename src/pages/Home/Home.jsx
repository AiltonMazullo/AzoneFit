import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import NavBar from "../../components/UI/NavBar/NavBar";
import onlineCoachingImg from "../../assets/onlineCoaching.svg";
import groupImg from "../../assets/group.svg";
import Challenge15Days from "../../assets/15days.svg"

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/form");
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
          <span>DISCIPLINE BEYOND LIMITS</span>
        </h2>
        <p>Transform your body, sharpen your mind, and live with purpose.</p>

        <div className={styles.Box}>
          <ul className={styles.BoxList}>
            <li className={styles.BoxListItem} onClick={handleGetStarted}>
              <img
                src={onlineCoachingImg}
                alt="Coaching"
                className={styles.serviceIcon}
              />
              <h4 className={styles.headerTextBlue}>ONLINE COACHING</h4>
              <p>Personalized guidance for training, nutrition, and lifestyle anytime, anywhere.</p>
            </li>

            <li className={styles.BoxListItem} onClick={handleGetStarted}>
              <img
                src={groupImg}
                alt="Aliança"
                className={styles.serviceIcon}
              />
              <h4 className={styles.headerTextBlue}>ALLIANCE</h4>
              <p>Train together, grow together, connect with people who share your journey.</p>
            </li>

            <li className={styles.BoxListItem} onClick={handleGetStarted}>
              <img
                src={Challenge15Days}
                alt="Desafio 15 dias"
                className={styles.serviceIcon}
              />
              <h4 className={styles.headerTextBlue}>CHALLENGE 15 DAYS</h4>
              <p>Push your limits and unlock a stronger version of yourself in just two weeks.</p>
            </li>
          </ul>
        </div>

        <div className={styles.testimonial}>
          <p>"This is not a workout. This is your mission."</p>
        </div>

        <div className={styles.ctaSection}>
          <button className={styles.getStartedBtn} onClick={handleGetStarted}>
            GET STARTED
          </button>
        </div>
      </main>
    </div>
  );
}
