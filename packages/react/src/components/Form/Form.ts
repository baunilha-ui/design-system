// Core
import { Container } from './components/Container/Container'
import { Section } from './components/Section/Section'
import { Field } from './components/Field/Field'
import { Label } from './components/Label/Label'
import { Error } from './components/Error/Error'
import { Hint } from './components/Hint/Hint'

// Controls
import { MemoizedInput } from './components/Input/Input'
import { MemoizedSelect } from './components/Select/Select'
import { MemoizedFile } from './components/File/File'

export const Form = {
  // Core
  Container,
  Section,
  Field,
  Label,
  Error,
  Hint,

  // Controls
  Input: MemoizedInput,
  Select: MemoizedSelect,
  File: MemoizedFile
}
