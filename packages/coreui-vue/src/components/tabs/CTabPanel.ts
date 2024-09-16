import {
  defineComponent,
  h,
  inject,
  ref,
  Ref,
  RendererElement,
  Transition,
  vShow,
  watch,
  withDirectives,
} from 'vue'

import { executeAfterTransition } from '../../utils/transition'

const CTabPanel = defineComponent({
  name: 'CTabPanel',
  props: {
    /**
     * Item key.
     */
    itemKey: {
      type: [Number, String],
      required: true,
    },
    /**
     * Enable fade in and fade out transition.
     */
    transition: {
      type: Boolean,
      default: true,
    },
    /**
     * Toggle the visibility of component.
     */
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    /**
     * Callback fired when the component requests to be hidden.
     */
    'hide',
    /**
     * Callback fired when the component requests to be shown.
     */
    'show',
  ],
  setup(props, { slots, emit }) {
    const activeItemKey = inject('activeItemKey') as Ref<number | string>
    const id = inject('id')
    const tabPaneRef = ref()
    const firstRender = ref(true)
    const visible = ref()

    watch(
      () => props.visible,
      () => {
        visible.value = props.visible
      },
      {
        immediate: true,
      },
    )

    watch(
      activeItemKey,
      () => {
        visible.value = Boolean(activeItemKey.value === props.itemKey)
      },
      {
        immediate: true,
      },
    )

    const handleEnter = (el: RendererElement, done: () => void) => {
      firstRender.value = false
      emit('show')
      setTimeout(() => {
        executeAfterTransition(() => done(), el as HTMLElement)
        el.classList.add('show')
      }, 1)
    }

    const handleLeave = (el: RendererElement, done: () => void) => {
      firstRender.value = false
      emit('hide')
      el.classList.remove('show')
      executeAfterTransition(() => done(), el as HTMLElement)
    }

    return () =>
      h(
        Transition,
        {
          onEnter: (el, done) => handleEnter(el, done),
          onLeave: (el, done) => handleLeave(el, done),
        },
        () =>
          withDirectives(
            h(
              'div',
              {
                class: [
                  'tab-pane',
                  {
                    active: visible.value,
                    fade: props.transition,
                    show: firstRender.value && visible.value,
                  },
                ],
                id: `${props.itemKey}-tab-panel-${id}`,
                role: 'tabpanel',
                'aria-labelledby': `${props.itemKey}-tab-${id}`,
                tabindex: 0,
                ref: tabPaneRef,
              },
              slots.default && slots.default(),
            ),
            [[vShow, visible.value]],
          ),
      )
  },
})

export { CTabPanel }
