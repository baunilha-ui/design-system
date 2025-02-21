import { useState } from "react";

export const useToggle = (defaultValue?: boolean) => {
  const [value, setValue] = useState(!!defaultValue);

  const handleToggle = () => {
    setValue((prev) => !prev);
  };

  return {
    value,
    handleToggle,
    setValue,
  };
};
