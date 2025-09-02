import styles from "./styled.module.scss";
import Steps from "../../components/steps";

import Plans from "../../pages/Plans/index";
import PersonalInfo from "../../pages/PersonalInfo";
import Addons from "../../pages/addons";
import Sumary from "../../pages/sumary";

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

        <img
          src="/images/bg-sidebar-desktop.svg"
          className={styles.img}
          alt="sidebar"
        />
      </div>

      <div className={styles.pages}>
        {(steps === 1 || steps === 0) && <PersonalInfo />}
        {steps === 2 && <Plans />}
        {steps === 3 && <Addons />}
        {steps === 4 && <Sumary />}
      </div>
    </div>
  );
}

export default AppContent;
