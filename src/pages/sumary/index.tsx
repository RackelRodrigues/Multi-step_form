import Button from "../../components/button";
import styles from "./styles.module.scss";
import "../../styles/global.scss";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { set } from "react-hook-form";

const Sumary = () => {
  const [total, setTotal] = useState(0);
  const { steps, setSteps, AddOns, plan, planType } = useContext(GlobalContext);

  const handleSum = () => {
    const totalAddOns =
      AddOns?.reduce(
        (acc, addon) =>
          acc + (planType === "monthly" ? addon.priceMonth : addon.priceYear),
        0
      ) ?? 0;

    setTotal(
      (planType === "monthly" ? plan?.priceMonth ?? 0 : plan?.priceYear ?? 0) +
        totalAddOns
    );
  };

  const changePlan = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setSteps(2);
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
            {planType === "monthly" ? (
              <h4>${plan?.priceMonth}/mo</h4>
            ) : (
              <h4>${plan?.priceYear}/yr</h4>
            )}
          </div>
          <a href="" onClick={changePlan}>
            Change
          </a>
        </div>

        <span className={styles.line} />
        {AddOns?.map((addon, index) => (
          <div key={index} className={styles.containerInfo}>
            <p className={styles.label}>{addon.nameAddOn}</p>
            <p className={styles.price}>
              +${planType === "monthly" ? addon.priceMonth : addon.priceYear}
              {planType === "monthly" ? "/mo" : "/yr"}
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
          className="primary"
          disabled={false}
          onClick={() => setSteps(steps - 1)}
        >
          Go Back
        </Button>
        <Button
          className="terciary"
          disabled={false}
          onClick={() => setSteps(steps + 1)}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Sumary;
