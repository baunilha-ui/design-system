import { useFormContext } from "react-hook-form";
import { Error } from "../../../Error";
export interface ErrorProps {
  name: string;
}

export const FormError = ({ name }: ErrorProps) => {
  const { formState, getFieldState } = useFormContext();
  const { error, isDirty } = getFieldState(name, formState);
  if (!error || (!isDirty && !formState.isSubmitted)) return null;

  return <Error message={error.message} />;
};
