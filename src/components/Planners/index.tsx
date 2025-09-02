import styles from "./styles.module.scss";

interface props {
  name: string;
  imageURL: string;
  price: number;
  isActive?: boolean;
  onClick: () => void;
}

const Planners = ({ name, price, imageURL, isActive, onClick }: props) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${
        isActive ? styles.isActive : styles.notActive
      }`}
    >
      <img src={imageURL} className={styles.img} />
      <div className={styles.containerInfo}>
        <h4>{name}</h4>
        <p>${price}/mo</p>
      </div>
    </div>
  );
};

export default Planners;
