import styles from "./styles.module.scss";
import "../../styles/global.scss";

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <img src="/images/icon-thank-you.svg" alt="thank you" />
      <h1 className="Title">Thank You!</h1>
      <p className={`Subtitle ${styles.info}`}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
export default ThankYou;
