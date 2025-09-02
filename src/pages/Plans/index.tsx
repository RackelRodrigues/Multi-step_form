import styles from "./styles.module.scss";
import Planners from "../../components/Planners";
import Button from "../../components/button";
import ToggleSwitch from "../../components/ToggleSwitch";
import "../../styles/global.scss";
import { variablesPlans } from "../../server/index";
import { useState, useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const Plans = () => {
  const { steps, setSteps, setPlan, setPlanType } = useContext(GlobalContext);
  const [activePlanPrice, setActivePlanPrice] = useState<number | null>(null);

  const nameSwitch = ["Monthly", " Yearly"];

  const HandlePrice = (price: number) => {
    // console.log(plan);
    setActivePlanPrice(price);
    setPlan(price);
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
        You have the option of monthly or yarly biling.
      </p>
      <div className={styles.planners}>
        {variablesPlans.map((plan, index) => (
          <Planners
            key={index}
            name={plan.name}
            imageURL={plan.url}
            price={plan.price}
            isActive={activePlanPrice === plan.price}
            onClick={() => HandlePrice(plan.price)}
          />
        ))}
      </div>
      <div className={styles.switch}>
        <ToggleSwitch names={nameSwitch} onChange={() => handleToggle} />
      </div>
      <div className={styles.containerButtons}>
        <Button
          variant="primary"
          Value="Go back"
          isDisabled={false}
          onClick={() => setSteps(steps - 1)}
        />
        <Button
          variant="terciary"
          Value="Next step"
          isDisabled={!activePlanPrice}
          onClick={() => setSteps(steps + 1)}
        />
      </div>
    </div>
  );
};

export default Plans;
