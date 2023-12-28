import React, { createContext, ReactNode, useState } from "react";

type types = {
  test: string,
  setTest: React.Dispatch<React.SetStateAction<string>>;
};

const initialValue: types = {
  test: "salam",
  setTest: () => {},
};

export const MainContext = createContext<types | undefined>(undefined);

export const MainContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [test, setTest] = useState<string>(initialValue.test);

  const contextValue: types = {
    test,
    setTest,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
