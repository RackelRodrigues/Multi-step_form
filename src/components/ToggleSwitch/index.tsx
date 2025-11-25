import { useState, useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import { GlobalContext } from "../../contexts/globalContext";

interface Props {
  checked?: boolean;
  onChange?: () => void;
  names: string[];
}

const ToggleSwitch = ({ checked, onChange, names }: Props) => {
  const { setPlanType } = useContext(GlobalContext);
  const [ischecked, setisChecked] = useState(false);

  useEffect(() => {
    setPlanType("monthly");
  }, []);
  // const [plantype, setplanType] = useState("monthly");

  const handleClick = () => {
    setisChecked((prev) => !prev);
    // console.log(ischecked);
    // console.log(ischecked ? "monthly" : "yearly");

    ischecked ? setPlanType("monthly") : setPlanType("yearly");
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
