import { createContext, ReactNode, useContext } from "react";

type ComponentPropsContextType<T> = T | undefined;

const ComponentPropsContext =
  createContext<ComponentPropsContextType<any>>(undefined);

export const ComponentPropsProvider = <T,>({
  value,
  children,
}: {
  value: T;
  children: ReactNode;
}) => {
  return (
    <ComponentPropsContext.Provider value={value}>
      {children}
    </ComponentPropsContext.Provider>
  );
};

export const useComponentProps = <T,>(): T => {
  const context = useContext<ComponentPropsContextType<T>>(
    ComponentPropsContext
  );

  if (context === undefined) {
    throw new Error(
      "useComponentProps must be used within a ComponentPropsProvider"
    );
  }

  return context;
};
