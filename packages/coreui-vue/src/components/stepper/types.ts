import type { VNode, Ref } from 'vue'

export interface StepperRef {
  next: () => void
  prev: () => void
  finish: () => void
  reset: () => void
}

export interface StepperStepData {
  indicator?: VNode
  label: VNode
  content?: VNode
  formRef?: Ref<HTMLFormElement | null> // Opcjonalny ref do walidacji
}

export type StepperStepValidationResult = {
  stepNumber: number
  isValid: boolean
}
