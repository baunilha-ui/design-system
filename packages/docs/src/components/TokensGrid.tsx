import '../styles/tokens-grid.css'

export const TokensGrid = ({
  tokens,
  prefix,
}: {
  tokens: Record<string, string>
  prefix: string
}) => {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens)
          .sort((current, next) => {
            if (Number(current[0]) < Number(next[0])) return -1
            if (Number(current[0]) > Number(next[0])) return 1

            return 0
          })
          .map(([name, value]) => (
            <tr key={name}>
              <td>
                {prefix}-{name.replace(/\./g, '_')}
              </td>
              <td>{value}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
