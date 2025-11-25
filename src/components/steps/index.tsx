import { StepsDTO } from "../../DTO/StepsDTO";
import styles from "./styles.module.scss";

interface Props extends StepsDTO {}

const Steps = ({ namePlan, stepNumber, isActive }: Props) => {
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
