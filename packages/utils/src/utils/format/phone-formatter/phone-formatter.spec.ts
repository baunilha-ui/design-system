import { PhoneFormatter } from './phone-formatter'

describe('PhoneFormatter', () => {
  it('should format home phone number with DDD', () => {
    const phone = '1199999999'
    const formatted = PhoneFormatter.toPhone(phone)
    expect(formatted).toBe('(11) 9999-9999')
  })

  it('should format cell phone number with DDD', () => {
    const phone = '11999999999'
    const formatted = PhoneFormatter.toPhone(phone)
    expect(formatted).toBe('(11) 9 9999-9999')
  })

  it('should be able to format phone number with DDD without mask', () => {
    const phone = '(11) 9999-9999'
    const formatted = PhoneFormatter.toRaw(phone)
    expect(formatted).toBe('1199999999')
  })

  it('should be able to format partial phone number', () => {
    let phone = '11'
    let formatted = PhoneFormatter.toPhone(phone)
    expect(formatted).toBe('(11')

    phone = '119'
    formatted = PhoneFormatter.toPhone(phone)
    expect(formatted).toBe('(11) 9')

    phone = '1199999'
    formatted = PhoneFormatter.toPhone(phone)
    expect(formatted).toBe('(11) 9999-9')

    phone = '1199999999'
    formatted = PhoneFormatter.toPhone(phone)
    expect(formatted).toBe('(11) 9999-9999')

    phone = '11999999999'
    formatted = PhoneFormatter.toPhone(phone)
    expect(formatted).toBe('(11) 9 9999-9999')
  })

  it('should be able to format number if lenght is greater than 11', () => {
    const phone = '119999999999999999'
    const formatted = PhoneFormatter.toPhone(phone)
    expect(formatted).toBe('(11) 9 9999-9999')
  })
})
