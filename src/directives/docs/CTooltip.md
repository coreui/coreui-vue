### CTooltip directive

CTooltip is directive, which display tooltip over element, built on top of tooltip.js (popper.js) library.

All directive props are passed by object or string in directive value. (you can pass trigger prop as modifier also).

prop | default | valid values
--- | --- | ---
content  | `'content'` | HtmlString
trigger | `'hover'` | String / separated by space e.g. 'hover click'
html | `true` | Boolean
placement   | `'top'` | String
delay    | `0` | Number
offset  | `0` | Number
boundariesElement  | `'scrollParent'` | 'scrollParent', 'window', 'viewport' / HTMLELement
appendToBody  | `false`  | Boolean
closeOnClickOutside  | `false`  | Boolean
popperOptions | `null`  | Object

Example usage
```html
<CButton
  v-c-tooltip="I am a tooltip!"
  text="Hover me"
/>
```

Example setting trigger prop by modifiers
```html
<CButton
  v-c-hover.click="{
    content: 'I start <strong>open</strong>'
    active: true
  }"
  text="Hover me"
/>
```
