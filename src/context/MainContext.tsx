// MainContext.tsx
import React, { createContext, ReactNode, useState } from "react";

interface MainContextTypes {
  test: string;
  setTest: React.Dispatch<React.SetStateAction<string>>;
}

const initialValue: MainContextTypes = {
  test: "",
  setTest: () => {},
};

export const MainContext = createContext<MainContextTypes | undefined>(
  undefined
);

export const MainContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [test, setTest] = useState<string>(initialValue.test);

  const contextValue: MainContextTypes = {
    test,
    setTest,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
