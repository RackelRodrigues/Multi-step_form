import Button from "../../components/button";
import styles from "./styles..module.scss";
import "../../styles/global.scss";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const Sumary = () => {
  const [total, setTotal] = useState(0);
  const { steps, setSteps, AddOns, plan, planType } = useContext(GlobalContext);

  const handleSum = () => {
    const totalAddOns =
      AddOns?.reduce((acc, addon) => acc + addon.price, 0) ?? 0;
    console.log("Total Add-ons:", totalAddOns);
    setTotal(plan + totalAddOns);
  };

  useEffect(() => {
    handleSum();
  }, [AddOns, plan]);
  return (
    <div>
      <h1 className="Title">Finishing up</h1>
      <p className="Subtitle">
        Double-check everything looks OK before confirming.
      </p>
      <div className={styles.container}>
        <div>
          <div className={styles.containerInfo}>
            <h4>Arcade({planType})</h4>
            <h4>
              ${plan}/{planType === "monthly" ? "mo" : "yro"}
            </h4>
          </div>
          <a href="">Change</a>
        </div>

        <span className={styles.line} />
        {AddOns?.map((addon, index) => (
          <div key={index} className={styles.containerInfo}>
            <p className={styles.label}>{addon.nameAddOn}</p>
            <p className={styles.price}>
              +${addon.price}/{planType === "monthly" ? "mo" : "yro"}
            </p>
          </div>
        ))}
      </div>
      <div className={`${styles.containerInfo} ${styles.total}`}>
        <p className={styles.label}>
          Total (per {planType === "monthly" ? "month" : "year"})
        </p>
        <h3>
          + ${total}/{planType === "monthly" ? "mo" : "yro"}
        </h3>
      </div>
      <div className={styles.containerInfo}>
        <Button
          variant="primary"
          Value="Go Back"
          isDisabled={false}
          onClick={() => setSteps(steps - 1)}
        />
        <Button
          variant="terciary"
          Value="Confirm"
          isDisabled={false}
          onClick={() => console.log("Confirm")}
        />
      </div>
    </div>
  );
};

export default Sumary;
