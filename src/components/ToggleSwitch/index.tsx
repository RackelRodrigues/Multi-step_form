import { useState, useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import { GlobalContext } from "../../contexts/globalContext";
import * as Input from "../../components/input";

interface Props {
  names: string[];
}

const ToggleSwitch = ({ names }: Props) => {
  const { setPlanType, steps, plan, planType } = useContext(GlobalContext);
  const [ischecked, setisChecked] = useState(false);

  useEffect(() => {
    if (steps === 2 && plan === null) {
      setPlanType("monthly");
    } else if (steps === 2 && plan !== null) {
      setisChecked(planType === "yearly");
    }
  }, [steps]);

  const handleClick = () => {
    setisChecked((prev) => !prev);
    ischecked ? setPlanType("monthly") : setPlanType("yearly");
  };

  return (
    <div className={styles.container}>
      <span
        className={`${styles.label} ${ischecked ? "" : styles.activeLabel}`}
      >
        {names[0]}
      </span>
      <label
        className={`${styles.toggleSwitchWrapper} ${
          ischecked ? styles.checked : ""
        }`}
        onClick={handleClick}
      >
        <Input.Field
          type="checkbox"
          className={styles.input}
          checked={ischecked}
          readOnly
        />
        <span className={styles.span} onClick={handleClick}></span>
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
