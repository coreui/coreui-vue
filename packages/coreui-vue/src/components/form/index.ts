import { App } from 'vue'
import { CForm } from './CForm'
import { CFormCheck } from './CFormCheck'
import { CFormFeedback } from './CFormFeedback'
import { CFormFloating } from './CFormFloating'
import { CFormInput } from './CFormInput'
import { CFormLabel } from './CFormLabel'
import { CFormRange } from './CFormRange'
import { CFormSelect } from './CFormSelect'
import { CFormSwitch } from './CFormSwitch'
import { CFormText } from './CFormText'
import { CFormTextarea } from './CFormTextarea'
import { CInputGroup } from './CInputGroup'
import { CInputGroupText } from './CInputGroupText'

const CFormPlugin = {
  install: (app: App): void => {
    app.component(CForm.name as string, CForm)
    app.component(CFormCheck.name as string, CFormCheck)
    app.component(CFormFeedback.name as string, CFormFeedback)
    app.component(CFormFloating.name as string, CFormFloating)
    app.component(CFormInput.name as string, CFormInput)
    app.component(CFormLabel.name as string, CFormLabel)
    app.component(CFormRange.name as string, CFormRange)
    app.component(CFormSelect.name as string, CFormSelect)
    app.component(CFormSwitch.name as string, CFormSwitch)
    app.component(CFormText.name as string, CFormText)
    app.component(CFormTextarea.name as string, CFormTextarea)
    app.component(CInputGroup.name as string, CInputGroup)
    app.component(CInputGroupText.name as string, CInputGroupText)
  },
}

export {
  CFormPlugin,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormRange,
  CFormSelect,
  CFormSwitch,
  CFormText,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
}
