import { useUniqueId } from '../useUniqueId'

describe('useUniqueId', () => {
  it('does not snowball the prefix across calls', () => {
    const { getUID } = useUniqueId('prefix-')

    const first = getUID()
    const second = getUID()
    const third = getUID()

    for (const id of [first, second, third]) {
      expect(id).toMatch(/^prefix-\d+$/)
    }

    // Each id is independent — later ids must not embed the earlier ones
    // (the old implementation mutated the shared prefix, so ids grew).
    expect(second).not.toBe(first)
    expect(second).not.toContain(first)
    expect(third).not.toContain(second)
  })
})
