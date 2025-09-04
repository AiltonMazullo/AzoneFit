import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import NavBar from "../../components/UI/NavBar/NavBar";
import DM from "../../assets/DM.svg";
import Box from "../../components/UI/Box/Box";

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
        <img src={DM} alt="Logo DM Home" />
      </div>
      <main className={styles.main}>
        <h2>
          <span>DISCIPLINE BEYOND LIMITS</span>
        </h2>
        <p>Transform your body, sharpen your mind, and live with purpose.</p>

        <div className={styles.testimonial}>
          <p>"This is not a workout. This is your mission."</p>
        </div>
        <Box />
        <div className={styles.ctaSection}>
          <button className={styles.getStartedBtn} onClick={handleGetStarted}>
            GET STARTED
          </button>
        </div>
      </main>
    </div>
  );
}
