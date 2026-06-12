### CSearchButton

```jsx
import { CSearchButton } from '@coreui/vue'
// or
import CSearchButton from '@coreui/vue/src/components/search-button/CSearchButton'
```

#### Props

| Prop name           | Description                                                                                                           | Type    | Values | Default         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- | ------- | ------ | --------------- |
| **disabled**        | Toggle the disabled state for the component.                                                                          | boolean | -      | -               |
| **placeholder**     | Placeholder content rendered inside `.search-button-placeholder`.                                                     | string  | -      | 'Search'        |
| **prevent-default** | Prevent the browser's default behavior when the configured shortcut matches.                                          | boolean | -      | true            |
| **shortcut**        | Comma-separated shortcut list. The component matches all configured shortcuts and renders the platform-preferred one. | string  | -      | 'meta+/,ctrl+/' |

#### Events

| Event name  | Description                                                                 | Properties |
| ----------- | --------------------------------------------------------------------------- | ---------- |
| **click**   | Event called when the user clicks on the component.                         |
| **trigger** | Event called when the component is activated by click or keyboard shortcut. |
