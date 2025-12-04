import { useEffect, useState } from "react";
import Additional from "../../components/additional";
import Button from "../../components/button";
import styles from "./styled.module.scss";
import "../../styles/global.scss";
import { variablesAddOns } from "../../server/index";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { AdditionalDTO } from "../../DTO/AdditionalDTO";

interface Props extends AdditionalDTO {}

const Addons = () => {
  const { steps, setSteps, addOns, setAddOns, planType } =
    useContext(GlobalContext);
  const [selectedAddOns, setSelectedAddOns] = useState<AdditionalDTO[]>([]);

  useEffect(() => {
    if (steps === 3 && addOns !== undefined) {
      setSelectedAddOns(addOns);
    }
  }, [steps]);

  function handleClick(Addon: AdditionalDTO) {
    setSelectedAddOns((prev) => {
      const exists = prev.find((item) => item.name === Addon.name);

      const updated = exists
        ? prev.filter((item) => item.name !== Addon.name)
        : [...prev, Addon];
      if (setAddOns) setAddOns(updated);

      return updated;
    });
  }

  return (
    <div className={styles.containerMobile}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className="Title">Pick Add-ons</h1>
          <p className="Subtitle">Add-ons help enhance gaming experience.</p>
        </div>

        <div className={styles.containerAdditional}>
          {variablesAddOns.map((addOn, index) => (
            <Additional
              id={index}
              key={index}
              name={addOn.name}
              description={addOn.description}
              priceMonth={planType === "monthly" ? addOn.priceMonth : 0}
              priceYear={planType === "yearly" ? addOn.priceYear : 0}
              checked={selectedAddOns.some((n) => n.id === addOn.id)}
              onClick={() => handleClick(addOn)}
            />
          ))}
        </div>
        <div className={styles.containerButtons}>
          <Button
            className="primary"
            disabled={false}
            onClick={() => setSteps(steps - 1)}
          >
            Go Back
          </Button>
          <Button className="secondary" onClick={() => setSteps(steps + 1)}>
            Next step
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
        <Button className="secondary" onClick={() => setSteps(steps + 1)}>
          Next step
        </Button>
      </div>
    </div>
  );
};

export default Addons;
