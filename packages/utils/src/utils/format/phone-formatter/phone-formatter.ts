export class PhoneFormatter {
  static toPhone = (phone?: string) => {
    if (!phone) return ''

    const raw = this.toRaw(phone)
    const length = raw.length

    if (length <= 2) return raw.replace(/^(\d{2})/, '($1')
    if (length <= 6) return raw.replace(/^(\d{2})(\d{0,4})/, '($1) $2')
    if (length <= 10)
      return raw.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    if (length <= 11)
      return raw.replace(/^(\d{2})(\d{1})(\d{4})(\d{0,4})/, '($1) $2 $3-$4')

    return raw
  }

  static toRaw = (phone?: string) => {
    if (!phone) return ''

    return phone.replace(/\D/g, '').slice(0, 11)
  }
}
