### CPopover directive

CPopover is directive which display Popover on element built on top of tooltip.js (popper.js) library.

All directive props are passed by object in directive value. (you can pass trigger prop as modifier also).

prop | default | valid values
--- | --- | ---
header  | `'header'` | HtmlString
content  | `'content'` | HtmlString
trigger | `'hover'` | String / separated by space e.g. 'hover click'
html | `true` | Boolean
placement   | `'right'` | String
delay    | `0` | Number
offset  | `0` | Number
boundariesElement  | `'scrollParent'` | 'scrollParent', 'window', 'viewport' / HTMLELement
appendToBody  | `false`  | Boolean
closeOnClickOutside  | `false`  | Boolean
popperOptions | `null`  | Object

Example usage
```html
<CButton
  v-c-popover="{
    header: 'Popover!',
    trigger: 'click hover',
    content: 'I start <strong>open</strong>'
  }"
  text="Hover me"
/>
```

Example setting trigger prop by modifiers
```html
<CButton
  v-c-popover.click.hover="{
    header: 'Popover!',
    content: 'I start <strong>open</strong>'
  }"
  text="Hover me"
/>
```
