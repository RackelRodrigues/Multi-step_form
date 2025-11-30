import styles from "./styles.module.scss";
import Planners from "../../components/Planners";
import Button from "../../components/button";
import ToggleSwitch from "../../components/ToggleSwitch";
import "../../styles/global.scss";
import { variablesPlans } from "../../server/index";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { PlannersDTO } from "../../DTO/PlannersDTO";

const SelectPlans = () => {
  const { steps, setSteps, setPlan, plan, setPlanType, planType } =
    useContext(GlobalContext);

  const [activePlanPrice, setActivePlanPrice] = useState<PlannersDTO | null>(
    null
  );

  const nameSwitch = ["Monthly", " Yearly"];

  useEffect(() => {
    if (plan !== null && steps === 2) {
      setActivePlanPrice(plan);
    }
  }, [steps]);

  const handlePrice = (plan: PlannersDTO) => {
    setActivePlanPrice(plan);
    setPlan(plan);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      <h1 className="Title">Select your plan</h1>
      <p className="Subtitle">
        You have the option of monthly or yearly biling.
      </p>
      <div className={styles.planners}>
        {variablesPlans.map((plan, index) => (
          <Planners
            key={index}
            name={plan.name}
            imageURL={plan.url}
            priceMonth={planType === "monthly" ? plan.priceMonth : 0}
            priceYear={planType === "yearly" ? plan.priceYear : 0}
            isActive={activePlanPrice?.id === plan.id}
            hasFrequency={planType === "yearly"}
            onClick={() => handlePrice(plan)}
          />
        ))}
      </div>
      <div className={styles.switch}>
        <ToggleSwitch names={nameSwitch} />
      </div>
      <div className={styles.containerButtons}>
        <Button
          className="primary"
          disabled={false}
          onClick={() => setSteps(steps - 1)}
        >
          Go back
        </Button>
        <Button
          className="secondary"
          disabled={!activePlanPrice}
          onClick={() => setSteps(steps + 1)}
        >
          Next step
        </Button>
      </div>
    </div>
  );
};

export default SelectPlans;
