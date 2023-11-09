import { defineComponent, h, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { CBackdrop } from '../backdrop'

import { isInViewport } from '../../utils'

const isOnMobile = (element: HTMLDivElement) => {
  if (!element) {
    return
  }

  return Boolean(getComputedStyle(element).getPropertyValue('--cui-is-mobile'))
}

const CSidebar = defineComponent({
  name: 'CSidebar',
  props: {
    /**
     * Sets if the color of text should be colored for a light or dark dark background.
     *
     * @values 'dark', light'
     */
    colorScheme: {
      type: String,
      default: undefined,
      validator: (value: string) => {
        return ['dark', 'light'].includes(value)
      },
    },
    /**
     * Make sidebar narrow.
     */
    narrow: Boolean,
    /**
     * Set sidebar to overlaid variant.
     */
    overlaid: Boolean,
    /**
     * Components placement, there’s no default placement.
     * @values 'start', 'end'
     */
    placement: {
      type: String,
      default: undefined,
      validator: (value: string) => {
        return ['start', 'end'].includes(value)
      },
    },
    /**
     * Place sidebar in non-static positions.
     */
    position: {
      type: String,
      validator: (value: string) => {
        return ['fixed'].includes(value)
      },
    },
    /**
     * Size the component small, large, or extra large.
     */
    size: {
      type: String,
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
    visible: {
      type: Boolean,
      default: undefined,
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
    /**
     * Event emitted after visibility of component changed.
     */
    'visible-change',
  ],
  setup(props, { attrs, slots, emit }) {
    const sidebarRef = ref()

    const inViewport = ref()
    const mobile = ref()
    const visibleMobile = ref(false)
    const visibleDesktop = ref(
      props.visible === undefined ? (props.overlaid ? false : true) : props.visible,
    )

    watch(inViewport, () => {
      emit('visible-change', inViewport.value)
      inViewport.value ? emit('show') : emit('hide')
    })

    watch(
      () => props.visible,
      () => props.visible !== undefined && handleVisibleChange(props.visible),
    )

    watch(mobile, () => {
      if (mobile.value) {
        console.log('mobile')
        visibleMobile.value = false
      }
    })

    onMounted(() => {
      mobile.value = isOnMobile(sidebarRef.value)
      inViewport.value = isInViewport(sidebarRef.value)

      window.addEventListener('resize', handleResize)
      window.addEventListener('mouseup', handleClickOutside)
      window.addEventListener('keyup', handleKeyup)

      sidebarRef.value.addEventListener('mouseup', handleOnClick)
      sidebarRef.value.addEventListener('transitionend', () => {
        inViewport.value = isInViewport(sidebarRef.value)
      })
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keyup', handleKeyup)

      sidebarRef.value.removeEventListener('mouseup', handleOnClick)
      // eslint-disable-next-line unicorn/no-invalid-remove-event-listener
      sidebarRef.value.removeEventListener('transitionend', () => {
        inViewport.value = isInViewport(sidebarRef.value)
      })
    })

    const handleVisibleChange = (visible: boolean) => {
      if (mobile.value) {
        visibleMobile.value = visible
        return
      }

      visibleDesktop.value = visible
    }

    const handleHide = () => {
      handleVisibleChange(false)
      emit('visible-change', false)
    }

    const handleResize = () => {
      mobile.value = isOnMobile(sidebarRef.value)
      inViewport.value = isInViewport(sidebarRef.value)
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
              [`sidebar-${props.colorScheme}`]: props.colorScheme,
              'sidebar-narrow': props.narrow,
              'sidebar-overlaid': props.overlaid,
              [`sidebar-${props.placement}`]: props.placement,
              [`sidebar-${props.position}`]: props.position,
              [`sidebar-${props.size}`]: props.size,
              'sidebar-narrow-unfoldable': props.unfoldable,
              show:
                (mobile.value && visibleMobile.value) || (props.overlaid && visibleDesktop.value),
              hide: visibleDesktop.value === false && !mobile.value && !props.overlaid,
            },
            attrs.class,
          ],
          ref: sidebarRef,
        },
        slots.default && slots.default(),
      ),
      mobile.value &&
        h(CBackdrop, {
          class: 'sidebar-backdrop',
          visible: visibleMobile.value,
          onClick: () => handleHide(),
        }),
    ]
  },
})

export { CSidebar }
