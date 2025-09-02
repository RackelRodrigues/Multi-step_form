import styles from "./styles.module.scss";

interface props {
  namePlan: string;
  stepNumber: number;
  isActive?: boolean;
}

const Steps = ({ namePlan, stepNumber, isActive }: props) => {
  return (
    <div className={styles.container}>
      <span className={`${styles.circle} ${isActive ? styles.active : ""}`}>
        {stepNumber}
      </span>
      <div>
        <h4 className={styles.step}>Step {stepNumber}</h4>
        <h2 className={styles.name}>{namePlan}</h2>
      </div>
    </div>
  );
};

export default Steps;
