// MainContext.tsx
import React, { createContext, ReactNode, useState } from "react";

interface MainContextTypes {
  test: string;
  setTest: React.Dispatch<React.SetStateAction<string>>;
  sideStatus: boolean;
  setSideStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue: MainContextTypes = {
  test: "",
  setTest: () => {},
  sideStatus: false,
  setSideStatus: () => {},
};

export const MainContext = createContext<MainContextTypes | undefined>(
  undefined
);

export const MainContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [test, setTest] = useState<string>(initialValue.test);
  const [sideStatus, setSideStatus] = useState<boolean>(
    initialValue.sideStatus
  );

  const contextValue: MainContextTypes = {
    test,
    setTest,
    sideStatus,
    setSideStatus,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
