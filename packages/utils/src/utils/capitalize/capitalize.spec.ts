import { capitalize } from './capitalize'

describe('Capitalize', () => {
  it('should capitalize the first letter of each word', () => {
    expect(capitalize('hello world')).toBe('Hello World')
  })
})
