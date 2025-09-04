import styles from "./Box.module.css";
import onlineCoachingImg from "../../../assets/onlineCoaching.svg"
import groupImg from "../../../assets/group.svg";
import Challenge15Days from "../../../assets/15days.svg";
import { useNavigate } from "react-router-dom";

const Box = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/form");
  };

  return (
    <div className={styles.Box}>
      <ul className={styles.BoxList}>
        <li className={styles.BoxListItem} onClick={handleGetStarted}>
          <img
            src={onlineCoachingImg}
            alt="Coaching"
            className={styles.serviceIcon}
          />
          <h4 className={styles.headerTextBlue}>ONLINE COACHING</h4>
          <p>
            Personalized guidance for training, nutrition, and lifestyle
            anytime, anywhere.
          </p>
        </li>

        <li className={styles.BoxListItem} onClick={handleGetStarted}>
          <img src={groupImg} alt="Aliança" className={styles.serviceIcon} />
          <h4 className={styles.headerTextBlue}>ALLIANCE</h4>
          <p>
            Train together, grow together, connect with people who share your
            journey.
          </p>
        </li>

        <li className={styles.BoxListItem} onClick={handleGetStarted}>
          <img
            src={Challenge15Days}
            alt="Desafio 15 dias"
            className={styles.serviceIconCalendar}
          />
          <h4 className={styles.headerTextBlue}>CHALLENGE 15 DAYS</h4>
          <p>
            Push your limits and unlock a stronger version of yourself in just
            two weeks.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Box;
