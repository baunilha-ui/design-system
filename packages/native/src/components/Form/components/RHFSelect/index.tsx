import { Select, SelectProps } from "../../controls/Select ";
import { useFormContext } from "react-hook-form";

export interface RHFSelectProps
  extends Omit<SelectProps, "onSelect" | "selectedOption" | "hasError"> {
  name: string;
}
export const RHFSelect = <T,>({ name, ...props }: RHFSelectProps) => {
  const { getValue } = props;
  const { setValue, watch, getFieldState, formState } = useFormContext();

  const { error, isDirty } = getFieldState(name, formState);
  const hasError = (error && isDirty) || (error && formState.isSubmitted);

  const selectedOption = watch(name);
  const handleSelect = (option: any) => {
    const optionValue = getValue(option);
    setValue(name, optionValue, {
      shouldValidate: true,
    });
  };

  return (
    <Select
      onSelect={handleSelect}
      selectedOption={selectedOption}
      hasError={hasError}
      {...props}
    />
  );
};
