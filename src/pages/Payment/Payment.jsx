import styles from "./Payment.module.css";
import NavBar from "../../components/UI/NavBar/NavBar";
import PaymentBox from "../../components/UI/PaymentBox/PaymentBox";

const Payment = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <h2>
          <span>CHOOSE YOUR TRANSFORMATION</span>
        </h2>
        <p>Select the plan that fits your goals and commitment level.</p>

        <div className={styles.testimonial}>
          <p>"Investment in yourself pays the best interest."</p>
        </div>
        <PaymentBox />
        <div className={styles.ctaSection}>
        </div>
      </main>
    </div>
  );
};

export default Payment;
