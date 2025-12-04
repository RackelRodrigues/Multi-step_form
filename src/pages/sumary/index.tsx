import Button from "../../components/button";
import styles from "./styles.module.scss";
import "../../styles/global.scss";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const Sumary = () => {
  const [total, setTotal] = useState(0);
  const { steps, setSteps, addOns, plan, planType } = useContext(GlobalContext);

  const handleSum = () => {
    const totalAddOns =
      addOns?.reduce(
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
  }, [addOns, plan]);
  return (
    <div className={styles.containerMobile}>
      <div className={styles.containerAll}>
        <div className={styles.title}>
          <h1 className="Title">Finishing up</h1>
          <p className="Subtitle">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <div className={styles.container}>
          <div>
            <div className={styles.containerInfo}>
              <h2>Arcade({planType})</h2>
              {planType === "monthly" ? (
                <h2>${plan?.priceMonth}/mo</h2>
              ) : (
                <h2>${plan?.priceYear}/yr</h2>
              )}
            </div>
            <a href="" onClick={changePlan}>
              Change
            </a>
          </div>

          <span className={styles.line} />
          {addOns?.map((addOn, index) => (
            <div key={index} className={styles.containerInfo}>
              <p className={styles.label}>{addOn.name}</p>
              <p className={styles.price}>
                +${planType === "monthly" ? addOn.priceMonth : addOn.priceYear}
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
        <div className={styles.containerButtons}>
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
      <div className={styles.containerButtonsMobile}>
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
