import { useState, useContext } from "react";
import styles from "./styles.module.scss";
import { GlobalContext } from "../../contexts/globalContext";
interface props {
  checked?: boolean;
  onChange?: () => void;
  names: string[];
}

const ToggleSwitch = ({ checked, onChange, names }: props) => {
  const { setPlanType } = useContext(GlobalContext);

  const [ischecked, setisChecked] = useState(false);

  const handleClick = () => {
    setisChecked((prev) => !prev);
    ischecked ? setPlanType("monthly") : setPlanType("yearly");
    console.log(ischecked);
  };
  return (
    <div className={styles.container}>
      <span
        className={`${styles.label} ${!ischecked ? styles.activeLabel : ""}`}
      >
        {names[0]}
      </span>
      <label
        className={`${styles.toggleSwitchWrapper} ${
          checked ? styles.checked : ""
        }`}
        onClick={handleClick}
      >
        <input
          type="checkbox"
          className={styles.input}
          checked={checked}
          onChange={onChange}
          readOnly
        />
        <span className={styles.span}></span>
      </label>
      <span
        className={`${styles.label} ${ischecked ? styles.activeLabel : ""}`}
      >
        {names[1]}
      </span>
    </div>
  );
};

export default ToggleSwitch;
