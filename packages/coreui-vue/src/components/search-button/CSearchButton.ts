import { computed, defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue'

import {
  formatShortcutTokens,
  getPreferredShortcut,
  getPressedKeys,
  matchesShortcut,
  parseShortcut,
  shouldIgnoreShortcut,
} from './utils'

export const CSearchButton = defineComponent({
  name: 'CSearchButton',
  props: {
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * Placeholder content rendered inside `.search-button-placeholder`.
     */
    placeholder: {
      type: String,
      default: 'Search',
    },
    /**
     * Prevent the browser's default behavior when the configured shortcut matches.
     */
    preventDefault: {
      type: Boolean,
      default: true,
    },
    /**
     * Comma-separated shortcut list. The component matches all configured shortcuts and renders the platform-preferred one.
     */
    shortcut: {
      type: String,
      default: 'meta+/,ctrl+/',
    },
  },
  emits: [
    /**
     * Event called when the user clicks on the component.
     */
    'click',
    /**
     * Event called when the component is activated by click or keyboard shortcut.
     */
    'trigger',
  ],
  setup(props, { emit, slots }) {
    const activeKeys = ref<string[]>([])
    const shortcuts = computed(() => parseShortcut(props.shortcut))
    const preferredShortcut = computed(() => getPreferredShortcut(shortcuts.value))
    const shortcutTokens = computed(() =>
      formatShortcutTokens(preferredShortcut.value?.shortcut || '')
    )

    const handleShortcut = (event: KeyboardEvent) => {
      if (props.disabled || event.defaultPrevented || event.repeat || shouldIgnoreShortcut(event)) {
        return
      }

      const matchedShortcut = shortcuts.value.find((shortcut) => matchesShortcut(shortcut, event))

      if (!matchedShortcut) {
        return
      }

      if (props.preventDefault) {
        event.preventDefault()
      }

      emit('trigger')
    }

    const handleDocumentKeydown = (event: KeyboardEvent) => {
      activeKeys.value = Array.from(getPressedKeys(event))
      handleShortcut(event)
    }

    const handleDocumentKeyup = (event: KeyboardEvent) => {
      activeKeys.value = Array.from(getPressedKeys(event))
    }

    const handleWindowBlur = () => {
      activeKeys.value = []
    }

    const handleClick = (event: MouseEvent) => {
      emit('click', event)
      emit('trigger')
    }

    onMounted(() => {
      if (typeof document === 'undefined' || typeof window === 'undefined') {
        return
      }

      document.addEventListener('keydown', handleDocumentKeydown)
      document.addEventListener('keyup', handleDocumentKeyup)
      window.addEventListener('blur', handleWindowBlur)
    })

    onBeforeUnmount(() => {
      if (typeof document === 'undefined' || typeof window === 'undefined') {
        return
      }

      document.removeEventListener('keydown', handleDocumentKeydown)
      document.removeEventListener('keyup', handleDocumentKeyup)
      window.removeEventListener('blur', handleWindowBlur)
    })

    return () =>
      h(
        'button',
        {
          type: 'button',
          class: 'search-button',
          disabled: props.disabled,
          onClick: handleClick,
        },
        [
          slots.default
            ? slots.default()
            : [
                slots.icon
                  ? slots.icon()
                  : h(
                      'svg',
                      {
                        class: 'search-button-icon',
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 512 512',
                        'aria-hidden': 'true',
                      },
                      h('path', {
                        fill: 'currentColor',
                        d: 'm479.6 399.716-81.084-81.084-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2 81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572-23.894-57.835 57.837 23.894 76.573 76.572a24.03 24.03 0 0 1-.002 33.941',
                      })
                    ),
                h('span', { class: 'search-button-placeholder' }, props.placeholder),
              ],
          h(
            'span',
            { class: 'search-button-keys', 'aria-hidden': 'true' },
            shortcutTokens.value.map((key) =>
              h(
                'span',
                {
                  class: ['search-button-key', { active: activeKeys.value.includes(key) }],
                  'data-coreui-search-button-key': key,
                  key,
                },
                key
              )
            )
          ),
        ]
      )
  },
})
