import { createContext, ReactNode, useState } from "react";

type Addon = {
  nameAddOn: string;
  descrition: string;
  price: number;
};

type GlobalContextType = {
  steps: number;
  setSteps: (newStep: number) => void;

  name: string;
  setName: (name: string) => void;

  email: string;
  setEmail: (email: string) => void;

  phone: string;
  setPhone: (phone: string) => void;

  plan: number;
  setPlan: (plan: number) => void;

  planType: string;
  setPlanType: (planType: string) => void;
  AddOns?: Addon[];
  setAddOns?: (addOns: Addon[]) => void;
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

  plan: 0,
  setPlan: () => {},

  planType: "",
  setPlanType: () => {},

  AddOns: [],
  setAddOns: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(initialValue);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [steps, setSteps] = useState(initialValue.steps);
  const [name, setName] = useState(initialValue.name);
  const [email, setEmail] = useState(initialValue.email);
  const [phone, setPhone] = useState(initialValue.phone);
  const [plan, setPlan] = useState(initialValue.plan);
  const [planType, setPlanType] = useState(initialValue.planType);
  const [addOns, setAddOns] = useState<Addon[]>([]);

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

        plan,
        setPlan,

        planType,
        setPlanType,

        AddOns: addOns,
        setAddOns,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
