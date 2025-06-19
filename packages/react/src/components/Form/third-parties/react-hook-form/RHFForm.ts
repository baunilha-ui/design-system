import { RHFContainer } from './RHFContainer/RHFContainer'
import { RHFError } from './RHFError/RHFError'
import { RHFFile } from './RHFFile/RHFFile'
import { RHFHint } from './RHFHint/RHFHint'
import { RHFInput } from './RHFInput/RHFInput'
import { RHFSelect } from './RHFSelect/RHFSelect'

export const RHFForm = {
  // Core
  Container: RHFContainer,
  Error: RHFError,
  Hint: RHFHint,

  // Controls
  Input: RHFInput,
  Select: RHFSelect,
  File: RHFFile
}
