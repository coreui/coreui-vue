import { App } from 'vue'
import { CMultiSelect } from './CMultiSelect'
import { CMultiSelectGroup } from './CMultiSelectGroup'
import { CMultiSelectGroupLabel } from './CMultiSelectGroupLabel'
import { CMultiSelectGroupOption } from './CMultiSelectGroupOption'

const CMultiSelectPlugin = {
  // TODO: find solution
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install: (app: App): void => {
    app.component(CMultiSelect.name, CMultiSelect)
    app.component(CMultiSelectGroup.name, CMultiSelectGroup)
    app.component(CMultiSelectGroupLabel.name, CMultiSelectGroupLabel)
    app.component(CMultiSelectGroupOption.name, CMultiSelectGroupOption)
  },
}

export {
  CMultiSelectPlugin,
  CMultiSelect,
  CMultiSelectGroup,
  CMultiSelectGroupLabel,
  CMultiSelectGroupOption,
}
