import styles from "./styled.module.scss";
import Steps from "../../components/steps";

import SelectPlans from "../selectPlans";
import PersonalInfo from "../../pages/PersonalInfo";
import AddOns from "../Add-Ons";
import Sumary from "../../pages/sumary";
import ThankYou from "../ThankYou";

import { GlobalContext } from "../../contexts/globalContext";
import { useContext } from "react";

function AppContent() {
  const { steps } = useContext(GlobalContext);

  return (
    <div className={styles.app}>
      <div className={styles.imgWrapper}>
        <div className={styles.steps}>
          <Steps
            namePlan="your info"
            stepNumber={1}
            isActive={steps === 0 || steps === 1}
          />
          <Steps namePlan="select plan" stepNumber={2} isActive={steps === 2} />
          <Steps namePlan="add-ons" stepNumber={3} isActive={steps === 3} />
          <Steps namePlan="summary" stepNumber={4} isActive={steps === 4} />
        </div>
      </div>

      <div className={styles.pages}>
        {(steps === 1 || steps === 0) && <PersonalInfo />}
        {steps === 2 && <SelectPlans />}
        {steps === 3 && <AddOns />}
        {steps === 4 && <Sumary />}
        {steps === 5 && <ThankYou />}
      </div>
    </div>
  );
}

export default AppContent;
