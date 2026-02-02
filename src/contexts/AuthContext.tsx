import { createContext, ReactNode, useState } from "react";
import { PlannersDTO } from "../DTO/PlannersDTO";
import { AdditionalDTO } from "../DTO/AdditionalDTO";

type GlobalContextType = {
  steps: number;
  setSteps: (newStep: number) => void;

  name: string;
  setName: (name: string) => void;

  email: string;
  setEmail: (email: string) => void;

  phone: string;
  setPhone: (phone: string) => void;

  plan: PlannersDTO | null;
  setPlan: (plan: PlannersDTO) => void;

  planType: string;
  setPlanType: (type: string) => void;

  addOns?: AdditionalDTO[];
  setAddOns?: (addOns: AdditionalDTO[]) => void;
};

type GlobalProviderProps = {
  children: ReactNode;
};

const initialValue: GlobalContextType = {
  steps: 0,
  setSteps: () => {},

  name: "",
  setName: () => {},

  email: "",
  setEmail: () => {},

  phone: "",
  setPhone: () => {},

  plan: null,
  setPlan: () => {},

  planType: "",
  setPlanType: () => {},

  addOns: [],
  setAddOns: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(initialValue);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [steps, setSteps] = useState(initialValue.steps);
  const [name, setName] = useState(initialValue.name);
  const [email, setEmail] = useState(initialValue.email);
  const [phone, setPhone] = useState(initialValue.phone);
  const [planType, setPlanType] = useState(initialValue.planType);
  const [plan, setPlan] = useState(initialValue.plan);
  const [addOns, setAddOns] = useState<AdditionalDTO[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        steps,
        setSteps,

        name,
        setName,

        email,
        setEmail,

        phone,
        setPhone,

        planType,
        setPlanType,

        plan,
        setPlan,

        addOns,
        setAddOns,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
