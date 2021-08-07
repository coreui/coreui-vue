import { App } from 'vue'
import { CForm } from './CForm'
import { CFormCheck } from './CFormCheck'
// import { CFormControl } from './CFormControl'
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
    app.component(CForm.name, CForm)
    app.component(CFormCheck.name, CFormCheck)
    // app.component(CFormControl.name, CFormControl)
    app.component(CFormFeedback.name, CFormFeedback)
    app.component(CFormFloating.name, CFormFloating)
    app.component(CFormInput.name, CFormInput)
    app.component(CFormLabel.name, CFormLabel)
    app.component(CFormRange.name, CFormRange)
    app.component(CFormSelect.name, CFormSelect)
    app.component(CFormSwitch.name, CFormSwitch)
    app.component(CFormText.name, CFormText)
    app.component(CFormTextarea.name, CFormTextarea)
    app.component(CInputGroup.name, CInputGroup)
    app.component(CInputGroupText.name, CInputGroupText)
  },
}

export {
  CFormPlugin,
  CForm,
  CFormCheck,
  // CFormControl,
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
