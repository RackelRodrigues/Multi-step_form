import styles from "./styles.module.scss";

interface props {
  // id: number | ;
  nameAddOn: string;
  descrition: string;
  price: number;
  PlanType: string;
  onCheck?: boolean;
  onClick?: (name: string) => void;
}

const Additional = ({
  nameAddOn,
  descrition,
  price,
  PlanType,
  onCheck,
  onClick,
}: props) => {
  const handleClick = () => {
    if (onClick) onClick(nameAddOn);
  };
  return (
    <div
      className={`${styles.container} ${onCheck ? styles.active : ""}`}
      onClick={handleClick}
    >
      <input type="checkbox" checked={onCheck} readOnly />
      <div className={styles.info}>
        <div>
          <h2>{nameAddOn}</h2>
          <p className={styles.description}>{descrition}</p>
        </div>
        <p className={styles.price}>
          +${price}/{PlanType}
        </p>
      </div>
    </div>
  );
};

export default Additional;
