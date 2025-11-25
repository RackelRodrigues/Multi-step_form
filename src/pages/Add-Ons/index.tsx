import { useState } from "react";
import Additional from "../../components/additional";
import Button from "../../components/button";
import styles from "./styled.module.scss";
import "../../styles/global.scss";
import { variablesAddOns } from "../../server/index";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { AdditionalDTO } from "../../DTO/AdditionalDTO";

interface Props extends AdditionalDTO {
  nameAddOn: string;
  descrition: string;
  priceMonth: number;
  priceYear: number;
  PlanType: string;
  promotion?: string;
}

const Addons = () => {
  const { steps, setSteps, AddOns, setAddOns, planType } =
    useContext(GlobalContext);
  const [selectedAddOns, setSelectedAddOns] = useState<AdditionalDTO[]>([]);

  function handleClick(Addon: any) {
    console.log(Addon);
    setSelectedAddOns((prev) => {
      const exists = prev.find((item) => item.name === Addon.nameAddOn);

      const updated = exists
        ? prev.filter((item) => item.name !== Addon.nameAddOn)
        : [...prev, Addon];
      console.log("Updated Add-ons:", updated);
      if (setAddOns) setAddOns(updated);

      return updated;
    });

    console.log("Clicked Add-on:", Addon);
    console.log(selectedAddOns);
  }

  // console.log("Selected Add-ons:", selectedAddOns);
  return (
    <div className={styles.container}>
      <h1 className="Title">Pick Add-ons</h1>
      <p className="Subtitle">Add-ons help enhance gaming experience.</p>
      <div className={styles.containerAdditional}>
        {variablesAddOns.map((addOn, index) => (
          <Additional
            key={index}
            name={addOn.nameAddOn}
            description={addOn.descrition}
            priceMonth={planType === "monthly" ? addOn.priceMonth : 0}
            priceYear={planType === "yearly" ? addOn.priceYear : 0}
            // hasFrequency={true}
            checked={selectedAddOns.some((n) => n.name === addOn.nameAddOn)}
            onClick={() => handleClick(addOn)}
          />
        ))}
      </div>
      <div className={styles.buttons}>
        <Button
          className="primary"
          disabled={false}
          onClick={() => setSteps(steps - 1)}
        >
          Go Back
        </Button>
        <Button
          className="secondary"
          disabled={!selectedAddOns.length}
          onClick={() => setSteps(steps + 1)}
        >
          Next step
        </Button>
      </div>
    </div>
  );
};

export default Addons;
