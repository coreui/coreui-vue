import { h, type VNode } from 'vue'

import { CChip } from '../chip/CChip'

export interface CChipSetItem {
  /**
   * The value that identifies the chip and tracks its selection.
   */
  value: string
  /**
   * The chip content. Falls back to `value` when omitted.
   */
  label?: string | object
  [key: string]: unknown
}

// Build CChip vnodes from data items (string or descriptor). Coordination is
// handled by the chip-set context the chips inject, so this only creates them —
// shared by CChipSet's `chips` prop and CChipInput's value list. It lives apart
// from useChipSet to avoid a CChip ↔ useChipSet import cycle.
export const chipsFromData = (items: (string | CChipSetItem)[] = []): VNode[] =>
  items.map((item) => {
    if (typeof item === 'string') {
      return h(CChip, { value: item, key: item }, { default: () => item })
    }

    const { value, label, ...rest } = item
    return h(CChip, { value, key: value, ...rest }, { default: () => label ?? value })
  })
