import { Dropdown } from 'src/client'
import { BaseInput } from '../BaseInput/BaseInput'
import styles from './Select.module.scss'
import { memo, useMemo, useRef, useState } from 'react'
import { Icon } from 'src/components/Icon/Icon'
import { useSelectOptionByKey } from '../../hooks/useSelectOptionByKey'
import { classNames } from 'src/utils/classNames'
import { DropdownRef } from 'src/components/Dropdown/components/Container/Container'
import { createFakeEvent } from '../../utils/create-fake-event'
import { SelectRef, useSelectInputRef } from './useSelectInputRef'

export type SelectProps<Option> = {
  ref?: React.Ref<SelectRef>

  type?: string
  placeholder?: string
  size?: 1 | 2
  hasError?: boolean

  options: Option[]
  getOptionLabel: (option: Option) => string
  getOptionValue: (option: Option) => string

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  name: string
  format?: (value: string) => string
}

const Select = <Option,>({
  ref,
  placeholder,
  size,
  hasError,
  options,
  getOptionLabel,
  getOptionValue,

  onChange,
  onBlur,
  name,
}: SelectProps<Option>) => {
  const dropdownRef = useRef<DropdownRef>(null)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [searchValue, setSearchValue] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  const filteredOptions = useMemo(() => {
    if (!searchValue) return options

    return options.filter((option) => {
      const label = getOptionLabel(option).toLocaleLowerCase()
      const search = searchValue.toLocaleLowerCase().trim()

      return label.startsWith(search)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const onInputBlur = () => {
    if (selectedOption) {
      onBlur?.(
        createFakeEvent({
          name,
          value: getOptionValue(selectedOption),
          type: 'blur',
        }),
      )
    }
  }

  const onInputFocus = () => {
    setSearchValue('')
    dropdownRef.current?.open()
  }

  const onCloseDropdown = () => {
    setSearchValue(null)
    setFocusedOptionIndex(null)
  }

  const onSelectOption = (option: Option) => {
    onChange?.(
      createFakeEvent({
        name,
        value: getOptionValue(option),
        type: 'change',
      }),
    )

    dropdownRef.current?.close()

    setSelectedOption(option)
    setFocusedOptionIndex(null)
  }

  const { onInputKeyDown, focusedOptionIndex, setFocusedOptionIndex } =
    useSelectOptionByKey({
      dropdownRef,
      options: filteredOptions,
      onSelectOption,
    })

  const value = useMemo(() => {
    if (searchValue !== null) return searchValue
    if (!!selectedOption) return getOptionLabel(selectedOption)

    return ''
  }, [selectedOption, searchValue, getOptionLabel])

  useSelectInputRef({
    ref,
    targetRef: inputRef,
    getOptionValue,
    options,
    selectedOption,
    setSelectedOption,
  })

  return (
    <Dropdown.Container ref={dropdownRef} onClose={onCloseDropdown}>
      <Dropdown.Trigger>
        <BaseInput size={size} hasError={hasError}>
          <input
            autoComplete="off"
            ref={inputRef}
            name={name}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            onChange={onSearch}
            onKeyDown={onInputKeyDown}
            placeholder={placeholder}
            className={styles.input}
            value={value}
          />
          <Icon name="chevron-down" size={3} />
        </BaseInput>
      </Dropdown.Trigger>
      <Dropdown.Content className={styles.content}>
        {filteredOptions.length === 0 && (
          <Dropdown.Item>Não encontrado</Dropdown.Item>
        )}
        {filteredOptions.map((option, index) => {
          const isSelected =
            !!selectedOption &&
            getOptionValue(option) === getOptionValue(selectedOption)

          const isFocused = focusedOptionIndex === index

          const itemClassName = classNames({
            [styles.item__focused]: !!isFocused,
          })

          return (
            <Dropdown.Item
              key={getOptionValue(option)}
              selected={isSelected}
              onClick={() => onSelectOption(option)}
              className={itemClassName}
            >
              {getOptionLabel(option)}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Content>
    </Dropdown.Container>
  )
}

Select.displayName = 'Select'

export const MemoizedSelect = memo(Select, (prev, next) => {
  return (
    prev.options === next.options &&
    prev.hasError === next.hasError &&
    prev.name === next.name &&
    prev.onBlur === next.onBlur &&
    prev.onChange === next.onChange &&
    prev.placeholder === next.placeholder &&
    prev.ref === next.ref
  )
}) as typeof Select
