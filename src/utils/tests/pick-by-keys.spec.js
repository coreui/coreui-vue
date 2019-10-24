import pickByKeys from '../pick-by-keys'

const object = {
  first: 1,
  second: 2,
  third: 3
}

describe('pickByKeys function', () => {
  it('get part of object by another object', () => {
    const finalObject = pickByKeys(object, ['third'])
    expect(Object.keys(finalObject).length).toBe(1)
    expect(finalObject.third).toBe(3)
  })
})
