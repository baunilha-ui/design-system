import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
const ComponentPropsContext = createContext(undefined);
export const ComponentPropsProvider = ({ value, children, }) => {
    return (_jsx(ComponentPropsContext.Provider, { value: value, children: children }));
};
export const useComponentProps = () => {
    const context = useContext(ComponentPropsContext);
    if (context === undefined) {
        throw new Error("useComponentProps must be used within a ComponentPropsProvider");
    }
    return context;
};
