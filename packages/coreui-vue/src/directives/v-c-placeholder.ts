import { DirectiveBinding } from 'vue'

const BREAKPOINTS = [
  'xxl' as const,
  'xl' as const,
  'lg' as const,
  'md' as const,
  'sm' as const,
  'xs' as const,
]

export default {
  name: 'c-placeholder',
  mounted(el: HTMLElement, binding: DirectiveBinding): void {
    const value = binding.value
    el.classList.add(value.animation ? `placeholder-${value.animation}` : 'placeholder')

    BREAKPOINTS.forEach((bp) => {
      const breakpoint = value[bp]

      const infix = bp === 'xs' ? '' : `-${bp}`

      if (typeof breakpoint === 'number') {
        el.classList.add(`col${infix}-${breakpoint}`)
      }

      if (typeof breakpoint === 'boolean') {
        el.classList.add(`col${infix}`)
      }
    })
  },
}
