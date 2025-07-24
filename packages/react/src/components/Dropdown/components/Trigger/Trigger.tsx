import React from "react";
import { Clone } from "src/components/Clone/Clone";
import { useDropdown } from "../../providers/useDropdown";

export interface TriggerProps {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const Trigger = ({ children, className, ref }: TriggerProps) => {
  const { isOpen, onOpen, onClose } = useDropdown();

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }

  return (
    <Clone
      ref={ref}
      isOpen={isOpen}
      onClick={handleOnClick}
      className={className}
    >
      {children}
    </Clone>
  );
};

Trigger.displayName = "Trigger";
