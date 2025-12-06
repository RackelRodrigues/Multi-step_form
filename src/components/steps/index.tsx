import { StepsDTO } from "../../DTO/StepsDTO";
import styles from "./styles.module.scss";

interface Props extends StepsDTO {}

const Steps = ({ namePlan, stepNumber, isActive }: Props) => {
  return (
    <div className={styles.container}>
      <span className={`${styles.circle} ${isActive ? styles.active : ""}`}>
        {stepNumber}
      </span>
      <div className={styles.containerNames}>
        <span className={styles.step}>Step {stepNumber}</span>
        <h1 className={styles.name}>{namePlan}</h1>
      </div>
    </div>
  );
};

export default Steps;
