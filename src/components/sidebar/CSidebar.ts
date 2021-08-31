import { defineComponent, h, onBeforeUnmount, onMounted, onUpdated, ref, watch } from 'vue'
import { CBackdrop } from '../backdrop'

const CSidebar = defineComponent({
  name: 'CSidebar',
  props: {
    /**
     * Hide sidebar.
     */
    hide: Boolean,
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
     * Make any sidebar self hiding across all viewports or pick a maximum breakpoint with which to have a self hiding up to.
     *
     * @values 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    selfHiding: {
      type: [Boolean, String],
      default: undefined,
      validator: (value: boolean | string) => {
        if (typeof value === 'string') {
          return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(value)
        } else if (typeof value === 'boolean') {
          return true
        } else {
          return false
        }
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
  emits: ['visible-change'],
  setup(props, { attrs, slots, emit }) {
    const mobile = ref()
    const inViewport = ref()
    const sidebarRef = ref()
    const visible = ref()

    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement
      target.closest('a.nav-link:not(.nav-group-toggle)')
        ? (visible.value = false)
        : (visible.value = true)
    }

    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    }

    let observer: IntersectionObserver

    onMounted(() => {
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          inViewport.value = entry.isIntersecting
          emit('visible-change', entry.isIntersecting)
        })
      }

      observer = new IntersectionObserver(callback, options)
      observer.observe(sidebarRef.value)

      mobile.value = Boolean(getComputedStyle(sidebarRef.value).getPropertyValue('--cui-is-mobile'))
    })

    onUpdated(() => {
      mobile.value = Boolean(getComputedStyle(sidebarRef.value).getPropertyValue('--cui-is-mobile'))

      if (mobile.value) {
        window.addEventListener('click', handleClick)
      } else {
        window.removeEventListener('click', handleClick)
      }
    })

    onBeforeUnmount(() => {
      observer.disconnect()
    })

    watch(
      () => props.visible,
      () => {
        if (props.visible === true && inViewport.value === false) {
          visible.value = true
        }
        if (props.visible === false && inViewport.value === true) {
          visible.value = false
        }
      },
    )

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
              [`sidebar-self-hiding${
                typeof props.selfHiding !== 'boolean' && '-' + props.selfHiding
              }`]: props.selfHiding,
              [`sidebar-${props.size}`]: props.size,
              'sidebar-narrow-unfoldable': props.unfoldable,
              show: visible.value === true,
              hide: visible.value === false,
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
          onClick: () => {
            visible.value = false
          },
        }),
    ]
  },
})

export { CSidebar }
