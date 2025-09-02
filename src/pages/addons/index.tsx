import { useState } from "react";
import Additional from "../../components/additional";
import Button from "../../components/button";
import styles from "./styled.module.scss";
import "../../styles/global.scss";
import { variablesAddOns } from "../../server/index";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";

interface Addon {
  nameAddOn: string;
  descrition: string;
  price: number;
}

const Addons = () => {
  const { steps, setSteps, AddOns, setAddOns } = useContext(GlobalContext);
  const [selectedAddOns, setSelectedAddOns] = useState<Addon[]>([]);
  const handleClick = (Addon: Addon) => {
    setSelectedAddOns((prev) => {
      const exists = prev.find((item) => item.nameAddOn === Addon.nameAddOn);

      const updated = exists
        ? prev.filter((item) => item.nameAddOn !== Addon.nameAddOn)
        : [...prev, Addon];
      console.log("Updated Add-ons:", updated);
      if (setAddOns) setAddOns(updated);

      return updated;
    });
  };

  console.log("Selected Add-ons:", selectedAddOns);
  return (
    <div className={styles.container}>
      <h1 className="Title">Pick Add-ons</h1>
      <p className="Subtitle">Add-ons help enhance gaming experience.</p>
      <div className={styles.containerAdditional}>
        {variablesAddOns.map((addOn, index) => (
          <Additional
            // id={index}
            key={index}
            nameAddOn={addOn.nameAddOn}
            descrition={addOn.descrition}
            price={addOn.price}
            PlanType={addOn.PlanType || "mo"}
            onCheck={selectedAddOns.some(
              (n) => n.nameAddOn === addOn.nameAddOn
            )}
            onClick={() => handleClick(addOn)}
          />
        ))}
      </div>
      <div className={styles.buttons}>
        <Button
          variant="primary"
          Value="Go Back"
          isDisabled={false}
          onClick={() => setSteps(steps - 1)}
        />
        <Button
          variant="terciary"
          Value="Next Step"
          isDisabled={!selectedAddOns.length}
          onClick={() => setSteps(steps + 1)}
        />
      </div>
    </div>
  );
};

export default Addons;
