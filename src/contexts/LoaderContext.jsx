import { createContext, useContext, useState } from "react";

const LoadContext = createContext();

const Loader = ({ children }) => {
  const [isLoad, setIsLoad] = useState(false);

  const startLoad = () => {
    setIsLoad(true);
  };
  const stopLoad = () => {
    setIsLoad(false);
  };

  const values = { startLoad, stopLoad, isLoad };

  return <LoadContext.Provider value={values}>{children}</LoadContext.Provider>;
};

const useLoader = () => {
  return useContext(LoadContext);
};

export { Loader, useLoader };
