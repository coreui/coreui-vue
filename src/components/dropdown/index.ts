import { App } from 'vue'
import { CDropdown } from './CDropdown'
import { CDropdownItem } from './CDropdownItem'
import { CDropdownHeader } from './CDropdownHeader'
import { CDropdownDivider } from './CDropdownDivider'
import { CDropdownMenu } from './CDropdownMenu'
import { CDropdownToggle } from './CDropdownToggle'

const CDropdownPlugin = {
  install: (app: App): void => {
    app.component(CDropdown.name, CDropdown)
    app.component(CDropdownItem.name, CDropdownItem)
    app.component(CDropdownHeader.name, CDropdownHeader)
    app.component(CDropdownDivider.name, CDropdownDivider)
    app.component(CDropdownMenu.name, CDropdownMenu)
    app.component(CDropdownToggle.name, CDropdownToggle)
  },
}

export {
  CDropdownPlugin,
  CDropdown,
  CDropdownItem,
  CDropdownHeader,
  CDropdownDivider,
  CDropdownMenu,
  CDropdownToggle,
}
