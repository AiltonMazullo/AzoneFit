import React, { useEffect } from "react";
import styles from "./PaymentBox.module.css";
import basicIcon from "../../../assets/onlineCoaching.svg";
import premiumIcon from "../../../assets/group.svg";
import eliteIcon from "../../../assets/Elite.svg";
import ChallengeIcon from "../../../assets/15days.svg";

const PaymentBox = () => {
  useEffect(() => {
    const renderPayPalButtons = () => {
      if (window.paypal && window.paypal.HostedButtons) {
        try {
          // Basic Plan
          window.paypal
            .HostedButtons({
              hostedButtonId: "UGF3YFETDFKNQ",
            })
            .render("#paypal-container-basic");

          // Premium Plan
          window.paypal
            .HostedButtons({
              hostedButtonId: "QGK35ZVYRF7X6",
            })
            .render("#paypal-container-premium");

          // Elite Plan
          window.paypal
            .HostedButtons({
              hostedButtonId: "YAAQ3VPBEEJRE",
            })
            .render("#paypal-container-elite");

          // Challenge Plan
          window.paypal
            .HostedButtons({
              hostedButtonId: "TR5FFRKJAGGHS",
            })
            .render("#paypal-container-challenge");
        } catch (error) {
          console.error("Erro ao renderizar botões PayPal:", error);
        }
      } else {
        setTimeout(renderPayPalButtons, 500);
      }
    };

    setTimeout(renderPayPalButtons, 100);
  }, []);

  return (
    <div className={styles.BoxList}>
      <div className={styles.BoxListItem}>
        <img src={basicIcon} alt="Basic Plan" className={styles.serviceIcon} />
        <h4 className={styles.headerTextBlue}>BASIC PLAN</h4>
        <div
          id="paypal-container-basic"
          className={styles.paypalContainer}
        ></div>
      </div>

      <div className={styles.BoxListItem}>
        <img
          src={premiumIcon}
          alt="Premium Plan"
          className={styles.serviceIcon}
        />
        <h4 className={styles.headerTextBlue}>PREMIUM PLAN</h4>
        <div
          id="paypal-container-premium"
          className={styles.paypalContainer}
        ></div>
      </div>

      <div className={styles.BoxListItem}>
        <img src={eliteIcon} alt="Elite Plan" className={styles.serviceIcon} />
        <h4 className={styles.headerTextBlue}>ELITE PLAN</h4>
        <div
          id="paypal-container-elite"
          className={styles.paypalContainer}
        ></div>
      </div>

      <div className={styles.BoxListItem}>
        <img
          src={ChallengeIcon}
          alt="Challenge Plan"
          className={styles.serviceIcon}
        />
        <h4 className={styles.headerTextBlue}>CHALLENGE</h4>
        <div
          id="paypal-container-challenge"
          className={styles.paypalContainer}
        ></div>
      </div>
    </div>
  );
};

export default PaymentBox;
