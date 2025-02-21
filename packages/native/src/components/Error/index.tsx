import { BaseText } from "../BaseText";

interface ErrorProps {
  message?: string;
}

export const Error = ({ message }: ErrorProps) => {
  if (!message) return null;
  return <BaseText color="errorPrimary">{message}</BaseText>;
};
