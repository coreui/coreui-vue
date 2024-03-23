import { App } from 'vue'
import { CDropdown } from './CDropdown'
import { CDropdownItem } from './CDropdownItem'
import { CDropdownHeader } from './CDropdownHeader'
import { CDropdownDivider } from './CDropdownDivider'
import { CDropdownMenu } from './CDropdownMenu'
import { CDropdownToggle } from './CDropdownToggle'

const CDropdownPlugin = {
  install: (app: App): void => {
    app.component(CDropdown.name as string, CDropdown)
    app.component(CDropdownItem.name as string, CDropdownItem)
    app.component(CDropdownHeader.name as string, CDropdownHeader)
    app.component(CDropdownDivider.name as string, CDropdownDivider)
    app.component(CDropdownMenu.name as string, CDropdownMenu)
    app.component(CDropdownToggle.name as string, CDropdownToggle)
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
