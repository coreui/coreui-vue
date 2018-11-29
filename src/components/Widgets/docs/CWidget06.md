### Widget 06 (CWidget06)

This widget can style is defined by cardClasses. Inside component there are  slots for dropdown and chart.

prop | default
--- | ---
header| `header:string`
text   | `text:string`

```html
<CWidget06 class="bg-primary"
           header="9.823"
           text="Members online">
  <b-dropdown slot="dropdown"
              class="float-right"
              variant="transparent p-0"
              right>
    <i slot="button-content"
       class="icon-settings"
    ></i>
    <b-dropdown-item>Action</b-dropdown-item>
  </b-dropdown>
  <CSimpleBarChart label="Members"/>

</CWidget06>
```
