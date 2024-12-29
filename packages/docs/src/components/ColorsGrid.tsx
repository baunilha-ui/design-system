import { getContrast } from 'polished'

export const ColorsGrid = ({
  colors,
  prefix,
}: {
  colors: Record<string, string>
  prefix: string
}) => {
  return Object.entries(colors).map(([name, color]) => (
    <div key={name} style={{ backgroundColor: color, padding: 16 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: getContrast(color, 'white') > 3.5 ? 'white' : 'black',
          fontFamily: 'monospace',
        }}
      >
        <strong>
          {prefix}-{name}
        </strong>
        <strong>{color}</strong>
      </div>
    </div>
  ))
}
