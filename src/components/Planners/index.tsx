import { PlannersDTO } from "../../DTO/PlannersDTO";
import { StepsDTO } from "../../DTO/StepsDTO";
import styles from "./styles.module.scss";

interface Props extends PlannersDTO {
  onClick: () => void;
}

const Planners = ({
  name,
  priceMonth,
  priceYear,
  imageURL,
  isActive,
  onClick,
  hasFrequency,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${
        isActive ? styles.isActive : styles.notActive
      }`}
    >
      <img src={imageURL} className={styles.img} />
      <div className={styles.containerInfo}>
        <h1>{name}</h1>

        {hasFrequency ? <p>${priceYear}/yr</p> : <p>${priceMonth}/mo</p>}

        {hasFrequency && <span>2 months free</span>}
      </div>
    </div>
  );
};

export default Planners;
