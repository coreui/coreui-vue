import { defineComponent, h, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { CBackdrop } from '../backdrop'

const isOnMobile = (element: HTMLDivElement) =>
  Boolean(getComputedStyle(element).getPropertyValue('--cui-is-mobile'))

const isVisible = (element: HTMLDivElement) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

const CSidebar = defineComponent({
  name: 'CSidebar',
  props: {
    /**
     * Make sidebar narrow.
     */
    narrow: {
      type: Boolean,
      required: false,
    },
    /**
     * Set sidebar to overlaid variant.
     */
    overlaid: {
      type: Boolean,
      required: false,
    },
    /**
     * Place sidebar in non-static positions.
     */
    position: {
      type: String,
      default: undefined,
      validator: (value: string) => {
        return ['fixed'].includes(value)
      },
    },
    /**
     * Size the component small, large, or extra large.
     */
    size: {
      type: String,
      default: undefined,
      validator: (value: string) => {
        return ['sm', 'lg', 'xl'].includes(value)
      },
    },
    /**
     * Expand narrowed sidebar on hover.
     */
    unfoldable: Boolean,
    /**
     * Toggle the visibility of sidebar component.
     */
    visible: Boolean,
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
    /**
     * Event emitted after visibility of component changed.
     */
    'visible-change',
  ],
  setup(props, { attrs, slots, emit }) {
    const mobile = ref()
    const inViewport = ref()
    const sidebarRef = ref()
    const visible = ref(props.visible)

    watch(inViewport, () => {
      emit('visible-change', inViewport.value)
      inViewport.value ? emit('show') : emit('hide')
    })

    watch(
      () => props.visible,
      () => (visible.value = props.visible),
    )

    watch(mobile, () => {
      if (mobile.value && visible.value) visible.value = false
    })

    onMounted(() => {
      mobile.value = isOnMobile(sidebarRef.value)
      inViewport.value = isVisible(sidebarRef.value)

      window.addEventListener('resize', () => handleResize())
      window.addEventListener('mouseup', handleClickOutside)
      window.addEventListener('keyup', handleKeyup)

      sidebarRef.value.addEventListener('mouseup', handleOnClick)
      sidebarRef.value.addEventListener('transitionend', () => {
        inViewport.value = isVisible(sidebarRef.value)
      })
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', () => handleResize())
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keyup', handleKeyup)

      sidebarRef.value.removeEventListener('mouseup', handleOnClick)
      sidebarRef.value.removeEventListener('transitionend', () => {
        inViewport.value = isVisible(sidebarRef.value)
      })
    })

    const handleHide = () => {
      visible.value = false
      emit('visible-change', false)
    }

    const handleResize = () => {
      mobile.value = isOnMobile(sidebarRef.value)
      inViewport.value = isVisible(sidebarRef.value)
    }

    const handleKeyup = (event: Event) => {
      if (mobile.value && !sidebarRef.value.contains(event.target as HTMLElement)) {
        handleHide()
      }
    }
    const handleClickOutside = (event: Event) => {
      if (mobile.value && !sidebarRef.value.contains(event.target as HTMLElement)) {
        handleHide()
      }
    }

    const handleOnClick = (event: Event) => {
      const target = event.target as HTMLAnchorElement
      target &&
        target.classList.contains('nav-link') &&
        !target.classList.contains('nav-group-toggle') &&
        mobile.value &&
        handleHide()
    }

    return () => [
      h(
        'div',
        {
          class: [
            'sidebar',
            {
              'sidebar-narrow': props.narrow,
              'sidebar-overlaid': props.overlaid,
              [`sidebar-${props.position}`]: props.position,
              [`sidebar-${props.size}`]: props.size,
              'sidebar-narrow-unfoldable': props.unfoldable,
              show: visible.value === true && mobile.value,
              hide: visible.value === false && !mobile.value,
            },
            attrs.class,
          ],
          ref: sidebarRef,
        },
        slots.default && slots.default(),
      ),
      mobile.value &&
        h(CBackdrop, {
          class: 'sidebar-backdrop d-none',
          visible: props.visible,
          onClick: () => handleHide(),
        }),
    ]
  },
})

export { CSidebar }
