import { cleanObject } from './clean-object'

describe('cleanObject', () => {
  it('should return the object without empty strings', () => {
    const object = {
      a: 'a',
      b: '',
    }

    const cleanedObject = cleanObject(object)

    expect(cleanedObject).toEqual({ a: 'a' })
  })

  it('should return the object without null keys', () => {
    const object = {
      a: 'a',
      b: null,
    }

    const cleanedObject = cleanObject(object)

    expect(cleanedObject).toEqual({ a: 'a' })
  })

  it('should return the object without undefined keys', () => {
    const object = {
      a: 'a',
      b: undefined,
    }

    const cleanedObject = cleanObject(object)

    expect(cleanedObject).toEqual({ a: 'a' })
  })

  it('should return the object without empty keys deeply', () => {
    const object = {
      a: 'a',
      b: '',
      c: {
        d: '',
        e: 'e',
      },
    }

    const cleanedObject = cleanObject(object)

    expect(cleanedObject).toEqual({
      a: 'a',
      c: {
        e: 'e',
      },
    })
  })

  it('should return the object preserving empty keys deeply', () => {
    const object = {
      a: 'a',
      b: '',
      c: {
        d: '',
        e: 'e',
        f: null,
      },
      g: null,
    }

    const cleanedObject = cleanObject(object, { preserveEmptyStrings: true })

    expect(cleanedObject).toEqual({
      a: 'a',
      b: '',
      c: {
        d: '',
        e: 'e',
      },
    })
  })

  it('should return the object preserving null keys deeply', () => {
    const object = {
      a: 'a',
      b: '',
      c: {
        d: '',
        e: 'e',
        f: null,
      },
      g: null,
    }

    const cleanedObject = cleanObject(object, { preserveNulls: true })

    expect(cleanedObject).toEqual({
      a: 'a',
      c: {
        e: 'e',
        f: null,
      },
      g: null,
    })
  })

  it('should return the object preserving arrays', () => {
    const object = {
      a: 'a',
      b: 'b',
      c: {
        d: '',
        e: 'e',
        f: null,
      },
      g: null,
      h: ['a', 'b', 'c'],
    }

    const cleanedObject = cleanObject(object)

    expect(cleanedObject).toEqual({
      a: 'a',
      b: 'b',
      c: {
        e: 'e',
      },
      h: ['a', 'b', 'c'],
    })
  })
})
