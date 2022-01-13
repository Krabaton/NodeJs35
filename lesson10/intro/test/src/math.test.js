import { pow, mul } from '../../src/math'
import { jest } from '@jest/globals'

// test.each(table)(name, fn, timeout)
// test.only(name, fn, timeout)
// test.only.each(table)(name, fn, timeout)
// test.skip(name, fn, timeout)
// test.skip.each(table)(name, fn, timeout)
// test.todo(name)

describe.skip('Testing pow function', () => {
  test('pow 2 in 3 should be equal 8', () => {
    expect(pow(2, 3)).toBe(8)
  })

  test.each([
    [1, 1, 1],
    [5, 2, 25],
    [2, 1, 2],
  ])(`pow %i in %i should be equal %i`, (base, exponent, result) => {
    expect(pow(base, exponent)).toBe(result)
  })
})

describe.skip('Testing mul function', () => {
  test.skip('mul 2 by 3 should be equal 6', () => {
    expect(mul(2, 3)).toBe(6)
  })
  let mockData = []
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  for (let i = 0; i < 5; i++) {
    const a = randomInt(1, 10)
    const b = randomInt(1, 10)
    mockData[i] = [a, b, a * b]
  }
  test.each(mockData)(`mul %i by %i should be equal %i`, (a, b, result) => {
    expect(mul(a, b)).toBe(result)
  })
})

describe('Another case', () => {
  test('null', () => {
    const variable = null
    expect(variable).toBeNull()
    expect(variable).toBeDefined()
    expect(variable).not.toBeUndefined()
    expect(variable).not.toBeTruthy()
    expect(variable).toBeFalsy()
  })
  test('let a', () => {
    let a
    expect(a).toBeUndefined()
  })

  test('2 + 2', () => {
    const variable = 2 + 2
    expect(variable).toBeGreaterThan(3) // >
    expect(variable).toBeGreaterThanOrEqual(4) // >=
    expect(variable).toBeLessThan(5) // <
    expect(variable).toBeLessThanOrEqual(5) // <=
    expect(variable).toBe(4) // ==
    expect(variable).toEqual(4) // ==
  })
  test('float numbers', () => {
    const variable = 0.1 + 0.2
    // expect(variable).toBe(0.3) // ==
    expect(variable).toBeCloseTo(0.3)
  })

  test('Regex', () => {
    const variable = 'Zhenya Bayda'
    expect(variable).toMatch(/ya/)
  })
  test('Array', () => {
    const variable = ['Zhenya Bayda', 'Lsv', 'Oleksandr']
    expect(variable).toContain('Lsv')
  })

  const getData = (err) => {
    if (err) {
      throw new Error('No data!')
    }
    return 'Hello!'
  }

  test('test with error', () => {
    expect(() => getData({ message: 'Ups' })).toThrow()
  })

  test('test function', () => {
    const result = getData()
    expect(result).toBe('Hello!')
  })

  // const bar = () => {
  //   foo()  // mock
  //   baz() // mock
  // }

  test('test mock function', () => {
    const getData = jest.fn()
    const mockData = 'Mock'
    getData(mockData)
    const result = getData(mockData)
    expect(result).toBeUndefined()
    expect(getData).toHaveBeenCalled()
    expect(getData).toHaveBeenCalledTimes(2)
    expect(getData).toHaveBeenCalledWith(mockData)
  })

  test('Первый способ вернуть значение', () => {
    const getData = jest.fn()
    getData.mockReturnValue('my data')
    expect(getData()).toBe('my data')
  })

  test('Второй способ вернуть значение', () => {
    const getData = jest.fn().mockImplementation((a) => a + 1)
    expect(getData(2)).toBe(3)
  })

  test('Третий способ вернуть значение', () => {
    const getData = jest.fn((a) => a + 1)
    expect(getData(2)).toBe(3)
  })

  const getDataCallback = (cb) => {
    cb(['Zhenya Bayda', 'Lsv', 'Oleksandr'])
  }

  test('test callback function', (done) => {
    const callback = (result) => {
      expect(result).toContain('Lsv')
      done()
    }
    getDataCallback(callback)
  })

  const getDataAsync = async (cb) => {
    return ['Zhenya Bayda', 'Lsv', 'Oleksandr']
  }

  test('test async function', async () => {
    await expect(getDataAsync()).resolves.toContain('Lsv')
  })
})
