import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import NavBar from "../../components/UI/NavBar/NavBar";
import DM from "../../assets/DM.svg";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={DM} alt="Logo DM" />
      </div>
      <main className={styles.main}>
        <div className={styles.errorCode}>
          <span>404</span>
        </div>
        <h2>
          <span>PAGE NOT FOUND</span>
        </h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>

        <div className={styles.testimonial}>
          <p>"Every setback is a setup for a comeback."</p>
        </div>

        <div className={styles.ctaSection}>
          <button className={styles.goHomeBtn} onClick={handleGoHome}>
            GO HOME
          </button>
        </div>
      </main>
    </div>
  );
}