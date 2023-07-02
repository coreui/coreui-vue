import { ref } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Instance, Options } from '@popperjs/core'

export const usePopper = () => {
  const _popper = ref<Instance>()

  const initPopper = (reference: HTMLElement, popper: HTMLElement, options: Partial<Options>) => {
    _popper.value = createPopper(reference, popper, options)
  }

  const destroyPopper = () => {
    if (_popper.value) {
      _popper.value.destroy()
    }

    _popper.value = undefined
  }

  return {
    popper: _popper.value,
    initPopper,
    destroyPopper,
  }
}
