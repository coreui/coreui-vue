import { computed, defineComponent, h, PropType } from 'vue'

import { chipsFromData, type CChipSetItem } from './buildChips'
import { useChipSet, type ChipSetConfig } from './useChipSet'

export type { CChipSetItem }

const CChipSet = defineComponent({
  name: 'CChipSet',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'div',
    },
    /**
     * Renders chips from data instead of the default slot. Each item is a string or an object with a `value`, an optional `label`, and any `CChip` props. The slot is used when this is omitted.
     */
    chips: {
      type: Array as PropType<(string | CChipSetItem)[]>,
      default: undefined,
    },
    /**
     * Disables every chip rendered by the component.
     */
    disabled: Boolean,
    /**
     * Turns the chips into filter chips, each showing a leading check icon while selected.
     */
    filter: Boolean,
    /**
     * The selected chip values passed using `v-model:selected`.
     */
    selected: {
      type: Array as PropType<string[]>,
      default: undefined,
    },
    /**
     * Displays a remove button on every chip rendered by the component.
     */
    removable: Boolean,
    /**
     * Replaces the default remove icon on every chip with a custom icon node.
     */
    removeIcon: {
      type: [String, Object],
      default: undefined,
    },
    /**
     * Enables selection behavior for the chips rendered by the component.
     */
    selectable: Boolean,
    /**
     * Replaces the default selected icon shown by filter chips with a custom icon node.
     */
    selectedIcon: {
      type: [String, Object],
      default: undefined,
    },
    /**
     * Sets how many chips can be selected at once.
     *
     * @values 'single', 'multiple'
     */
    selectionMode: {
      type: String as PropType<'single' | 'multiple'>,
      default: 'multiple',
    },
  },
  emits: [
    /**
     * Event occurs when a chip requests removal. The chips are controlled by the slot content, so drop the chip from your data in response.
     */
    'remove',
    /**
     * Event occurs when the selected chip values change.
     */
    'select',
    /**
     * Emit the new selected values whenever the selection changes (for `v-model:selected`).
     */
    'update:selected',
  ],
  setup(props, { attrs, emit, slots, expose }) {
    const config = computed<ChipSetConfig>(() => ({
      disabled: props.disabled,
      filter: props.filter,
      removable: props.removable,
      removeIcon: props.removeIcon,
      selectable: props.selectable,
      selectedIcon: props.selectedIcon,
    }))

    const { rootRef, handleKeydown } = useChipSet({
      config,
      selectionMode: () => props.selectionMode,
      selected: () => props.selected,
      onSelectionChange: (selected) => {
        emit('update:selected', selected)
        emit('select', selected)
      },
      onRemove: (value) => emit('remove', value),
    })

    expose({ rootRef })

    return () =>
      h(
        props.as,
        {
          ref: rootRef,
          class: ['chip-set', { disabled: props.disabled }, attrs.class],
          ...(props.disabled && { 'aria-disabled': true }),
          onKeydown: handleKeydown,
        },
        props.chips ? chipsFromData(props.chips) : slots.default && slots.default(),
      )
  },
})

export { CChipSet }
