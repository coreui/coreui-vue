// Chips become focusable (tabindex="0") when selectable/removable, so containers
// (CChipSet, CChipInput) read that instead of re-deriving focusability.
export const SELECTOR_CHIP_FOCUSABLE = '.chip[tabindex="0"]:not(.disabled)'
