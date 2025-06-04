// CStepper.ts
import {
  defineComponent,
  h,
  ref,
  watch,
  computed,
  nextTick,
  onMounted,
  toRefs,
  shallowRef,
  watchEffect,
} from 'vue'
import { CCollapse } from '../collapse'
import type { StepperStepData, StepperStepValidationResult } from './types'

export const CStepper = defineComponent({
  name: 'CStepper',
  inheritAttrs: false,
  props: {
    modelValue: Number,
    defaultActiveStepIndex: {
      type: Number,
      default: 0,
    },
    layout: {
      type: String as () => 'horizontal' | 'vertical',
      default: 'horizontal',
    },
    linear: {
      type: Boolean,
      default: true,
    },
    steps: {
      type: Array as () => StepperStepData[],
      required: true,
    },
    stepButtonLayout: {
      type: String as () => 'horizontal' | 'vertical',
      default: 'horizontal',
    },
    validation: {
      type: Boolean,
      default: true,
    },
    id: String,
  },
  emits: ['update:modelValue', 'finish', 'reset', 'stepChange', 'stepValidationComplete'],
  setup(props, { emit, slots, attrs, expose }) {
    const { modelValue, defaultActiveStepIndex, validation, steps, layout, linear } = toRefs(props)

    const activeStepIndex = ref<number>(modelValue.value ?? defaultActiveStepIndex.value ?? 0)
    const isControlled = computed(() => modelValue.value !== undefined)
    const isFinished = ref(false)
    const stepsRef = ref<HTMLOListElement | null>(null)
    const stepButtonRefs = shallowRef<(HTMLButtonElement | null)[]>([])

    watch(modelValue, (val) => {
      if (val !== undefined) activeStepIndex.value = val
    })

    watch(activeStepIndex, (val) => {
      if (isControlled.value) emit('update:modelValue', val)
    })

    const isStepValid = (index: number): boolean => {
      if (!validation.value) return true

      const form = steps.value[index]?.formRef?.value
      if (!form) return true

      const valid = form.checkValidity()
      emit('stepValidationComplete', { stepNumber: index + 1, isValid: valid })
      if (!valid) form.reportValidity()
      return valid
    }

    const setActiveStep = (index: number, bypassValidation = false) => {
      if (index < 0 || index >= steps.value.length || index === activeStepIndex.value) return
      if (!bypassValidation && index > activeStepIndex.value && !isStepValid(activeStepIndex.value))
        return

      activeStepIndex.value = index
      emit('stepChange', index + 1)
    }

    const next = () => {
      if (activeStepIndex.value < steps.value.length - 1) {
        setActiveStep(activeStepIndex.value + 1)
      } else {
        finish()
      }
    }

    const prev = () => {
      if (activeStepIndex.value > 0) {
        setActiveStep(activeStepIndex.value - 1, true)
      }
    }

    const finish = () => {
      if (activeStepIndex.value === steps.value.length - 1 && isStepValid(activeStepIndex.value)) {
        isFinished.value = true
        emit('finish')
      }
    }

    const reset = () => {
      if (validation.value) {
        steps.value.forEach((s) => s.formRef?.value?.reset?.())
      }
      activeStepIndex.value = defaultActiveStepIndex.value
      isFinished.value = false
      emit('reset')
      emit('stepChange', defaultActiveStepIndex.value)
      nextTick(() => {
        stepButtonRefs.value[defaultActiveStepIndex.value]?.focus()
      })
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const buttons = stepButtonRefs.value
      const current = event.target as HTMLButtonElement
      const index = buttons.findIndex((b) => b === current)
      if (index === -1) return

      let nextIndex = index
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          nextIndex = (index + 1) % buttons.length
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          nextIndex = (index - 1 + buttons.length) % buttons.length
          break
        case 'Home':
          nextIndex = 0
          break
        case 'End':
          nextIndex = buttons.length - 1
          break
        default:
          return
      }

      event.preventDefault()
      buttons[nextIndex]?.focus()
    }

    expose({ next, prev, finish, reset })

    return () => {
      const isVertical = layout.value === 'vertical'
      stepButtonRefs.value = []

      return h(
        'div',
        {
          ...attrs,
          class: ['stepper', { 'stepper-vertical': isVertical }, attrs.class],
        },
        [
          h(
            'ol',
            {
              class: 'stepper-steps',
              role: 'tablist',
              'aria-orientation': isVertical ? 'vertical' : 'horizontal',
              onKeydown: handleKeyDown,
              ref: stepsRef,
            },
            steps.value.map((step, index) => {
              const isActive = !isFinished.value && index === activeStepIndex.value
              const isComplete = isFinished.value || index < activeStepIndex.value
              const isDisabled =
                isFinished.value || (linear.value && index > activeStepIndex.value + 1)
              const stepId = `step-${props.id || 'stepper'}-${index}`
              const panelId = `panel-${props.id || 'stepper'}-${index}`

              return h(
                'li',
                {
                  key: index,
                  class: ['stepper-step', props.stepButtonLayout],
                  role: 'presentation',
                },
                [
                  h(
                    'button',
                    {
                      type: 'button',
                      class: ['stepper-step-button', { active: isActive, complete: isComplete }],
                      disabled: isDisabled,
                      id: stepId,
                      role: 'tab',
                      'aria-selected': isActive,
                      tabindex: isActive ? 0 : -1,
                      'aria-controls': step.content ? panelId : undefined,
                      onClick: () =>
                        setActiveStep(index, !linear.value || index <= activeStepIndex.value),
                      ref: (el) => (stepButtonRefs.value[index] = el as HTMLButtonElement),
                    },
                    [
                      h('span', { class: 'stepper-step-indicator' }, [
                        isComplete
                          ? h('span', { class: 'stepper-step-indicator-icon' })
                          : h(
                              'span',
                              { class: 'stepper-step-indicator-text' },
                              step.indicator ?? index + 1
                            ),
                      ]),
                      h('span', { class: 'stepper-step-label' }, step.label),
                    ]
                  ),
                  index < steps.value.length - 1 && h('div', { class: 'stepper-step-connector' }),
                  step.content &&
                    isVertical &&
                    h(
                      CCollapse,
                      {
                        class: 'stepper-step-content',
                        id: panelId,
                        role: 'tabpanel',
                        visible: isActive,
                        'aria-hidden': !isActive,
                        'aria-labelledby': stepId,
                        'aria-live': 'polite',
                      },
                      () => step.content
                    ),
                ]
              )
            })
          ),
          !isVertical &&
            steps.value.some((s) => s.content != null) &&
            h(
              'div',
              { class: 'stepper-content' },
              steps.value.map((step, index) => {
                const isActive = !isFinished.value && index === activeStepIndex.value
                const stepId = `step-${props.id || 'stepper'}-${index}`
                const panelId = `panel-${props.id || 'stepper'}-${index}`

                return h(
                  'div',
                  {
                    key: index,
                    id: panelId,
                    role: 'tabpanel',
                    'aria-hidden': !isActive,
                    'aria-labelledby': stepId,
                    'aria-live': 'polite',
                    class: ['stepper-pane', { active: isActive, show: isActive }],
                  },
                  step.content
                )
              })
            ),
        ]
      )
    }
  },
})
