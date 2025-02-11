import { classNames } from '../../utils/classNames'

import sizes from './Size.module.scss'
import styles from './Icon.module.scss'

import BarChartSquare02 from './commons/BarChartSquare02'
import Bell01 from './commons/Bell01'
import Settings01 from './commons/Settings01'
import CheckCircle from './commons/CheckCircle'
import ChevronDown from './commons/ChevronDown'
import LogOut01 from './commons/LogOut01'
import SearchLg from './commons/SearchLg'
import User01 from './commons/User01'
import Users01 from './commons/Users01'
import XClose from './commons/XClose'
import Zap from './commons/Zap'
import Menu02 from './commons/Menu02'
import Plus from './commons/Plus'
import DotsVertical from './commons/DotsVertical'
import HelpCircle from './commons/HelpCircle'
import AlertCircle from './commons/AlertCircle'
import Check from './commons/Check'
import Repeat03 from './commons/Repeat03'

const icons = {
  ['bar-chart-square-02']: BarChartSquare02,
  ['user-01']: User01,
  ['users-01']: Users01,
  ['chevron-down']: ChevronDown,
  ['log-out-01']: LogOut01,
  ['search-lg']: SearchLg,
  ['check-circle']: CheckCircle,
  ['check']: Check,
  ['x-close']: XClose,
  ['bell-01']: Bell01,
  ['settings-01']: Settings01,
  ['zap']: Zap,
  ['menu-02']: Menu02,
  ['plus']: Plus,
  ['dots-vertical']: DotsVertical,
  ['help-circle']: HelpCircle,
  ['alert-circle']: AlertCircle,
  ['repeat-03']: Repeat03,
}

export type IconKeys = keyof typeof icons

export interface IconProps {
  name: IconKeys
  size?: 1 | 2 | 3 | 4 | 5
  className?: string
}

export const Icon = ({ name, size = 5, className: _className }: IconProps) => {
  const IconByName = icons[name]
  const className = classNames(styles.icon, sizes[`size-${size}`], _className)

  return (
    <figure className={className}>
      <IconByName strokeWidth={2} />
    </figure>
  )
}
