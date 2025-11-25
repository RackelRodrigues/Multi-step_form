import { AdditionalDTO } from "../../DTO/AdditionalDTO";

import styles from "./styles.module.scss";

interface props extends AdditionalDTO {
  onClick?: () => void;
}

const Additional = ({
  name,
  description,
  priceMonth,
  priceYear,
  checked,
  onClick,
}: props) => {
  // const handleClick = (Additional: AdditionalDTO) => {
  //   console.log("Clicked on:", name);
  //   console.log(Additional);
  //   if (onClick) onClick(Additional.name);
  // };
  return (
    <div
      className={`${styles.container} ${checked ? styles.active : ""}`}
      onClick={onClick}
    >
      <input type="checkbox" checked={checked} readOnly />
      <div className={styles.info}>
        <div>
          <h2>{name}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        {priceMonth ? (
          <p className={styles.price}>+${priceMonth}/mo</p>
        ) : (
          <p className={styles.price}>+${priceYear}/yr</p>
        )}
      </div>
    </div>
  );
};

export default Additional;
