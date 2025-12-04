import styles from "./styles.module.scss";
import "../../styles/global.scss";
import JSConfetti from "js-confetti";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const ThankYou = () => {
  const { name } = useContext(GlobalContext);

  useEffect(() => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }, []);

  return (
    <div className={styles.containerMobile}>
      <div className={styles.container}>
        <img src="/images/icon-thank-you.svg" alt="thank you" />
        <h1 className="Title">Thank You!</h1>
        <p className={`Subtitle ${styles.info}`}>
          Thanks {name} for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free to
          email us at <span>support@loremgaming.com</span>.
        </p>
      </div>
    </div>
  );
};
export default ThankYou;
