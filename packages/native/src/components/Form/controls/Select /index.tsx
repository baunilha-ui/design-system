import { useEffect, useState } from "react";
import { Container, Item, Label, Menu, Trigger } from "./styles";
import { useToggle } from "@/hooks/useToggle";
import { useAnimatedStyles } from "./hooks/useAnimatedStyles";
import { Input } from "../Input";
import { BaseIcon } from "@/components/BaseIcon";

export interface SelectProps<T = any> {
  options: T[];
  getValue: (option: T) => any;
  getLabel: (option: T) => string;
  nestedScrollEnabled?: boolean;
  placeholder?: string;
  onSelect?: (option: any) => void;
  selectedOption: T;
  hasError?: boolean;
}

export const Select = <T,>({
  getValue,
  getLabel,
  onSelect,
  options = [],
  selectedOption,
  hasError,
  placeholder = "Selecione",
  nestedScrollEnabled = false,
}: SelectProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const { value: showMenu, handleToggle: handleToggleMenu } = useToggle();
  const {
    handleTriggerLayout,
    theme,
    menuAnimatedStyle,
    selectRef,
    menuMaxHeight,
  } = useAnimatedStyles(showMenu);

  useEffect(() => {
    if (selectedOption) {
      const newOption = options.find(
        (option) => getValue(option) === selectedValue
      );

      if (newOption && newOption !== selectedValue) {
        setSelectedValue(getValue(newOption) || "");
      }
    }
  }, [selectedOption, options, getValue]);

  const handleSelectOption = (option: T) => {
    const optionValue = getValue(option);
    const isSelected = selectedOption === optionValue;

    onSelect?.(isSelected ? "" : option);
    setSelectedValue(isSelected ? "" : optionValue);
    handleToggleMenu();
  };

  return (
    <Container onLayout={handleTriggerLayout} ref={selectRef}>
      <Trigger onPress={handleToggleMenu}>
        <Input
          hasError={hasError}
          readOnly
          value={selectedValue}
          placeholder={placeholder}
          suffix="chevron-down"
        />
      </Trigger>
      {showMenu && (
        <Menu
          nestedScrollEnabled={nestedScrollEnabled}
          maxHeight={menuMaxHeight}
          style={[menuAnimatedStyle]}
        >
          {options.map((option) => {
            const optionValue = getValue(option);
            const isSelected = optionValue === selectedOption;
            return (
              <Item
                isSelected={isSelected}
                key={getValue(option)}
                onPress={() => handleSelectOption(option)}
              >
                <Label color="primary">{getLabel(option)}</Label>
                {isSelected && (
                  <BaseIcon
                    name="check"
                    color={theme.colors.foreground.brandPrimary}
                  />
                )}
              </Item>
            );
          })}
        </Menu>
      )}
    </Container>
  );
};
