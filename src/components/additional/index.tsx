import { AdditionalDTO } from "../../DTO/AdditionalDTO";

import styles from "./styles.module.scss";
import * as Input from "../../components/input";

interface props extends AdditionalDTO {
  onClick?: () => void;
}

const Additional = ({
  name,
  description,
  priceMonth,
  priceYear,
  ischecked,
  onClick,
}: props) => {
  return (
    <div
      className={`${styles.container} ${ischecked ? styles.active : ""}`}
      onClick={onClick}
    >
      <Input.Field type="checkbox" checked={ischecked} readOnly />
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
