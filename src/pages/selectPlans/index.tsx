import styles from "./styles.module.scss";
import Planners from "../../components/Planners";
import Button from "../../components/button";
import ToggleSwitch from "../../components/ToggleSwitch";
import "../../styles/global.scss";
import { variablesPlans } from "../../server/index";
import { useState, useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const SelectPlans = () => {
  const { steps, setSteps, setPlan, setPlanType, planType } =
    useContext(GlobalContext);

  const [activePlanPrice, setActivePlanPrice] = useState<number | null>(null);
  console.log("planType:", planType);

  const nameSwitch = ["Monthly", " Yearly"];

  const handlePrice = (plan: any) => {
    console.log("Selected price:", plan);
    // console.log(plan);
    setActivePlanPrice(plan);

    console.log("Active plan price:", activePlanPrice);
    setPlan(plan);
  };

  const handleToggle = (value: any) => {
    console.log("entrou");
    console.log("value:", value);

    // setPlan(
    //   type: plan.type === "monthly" ? "yearly" : "monthly",
    // );
  };
  return (
    <div>
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
            isActive={
              activePlanPrice ===
              (planType === "monthly" ? plan.priceMonth : plan.priceYear)
            }
            hasFrequency={planType === "yearly"}
            onClick={() => handlePrice(plan)}
          />
        ))}
      </div>
      <div className={styles.switch}>
        <ToggleSwitch names={nameSwitch} onChange={() => handleToggle} />
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
