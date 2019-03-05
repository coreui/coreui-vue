### Widget 06 (CWidget06)

This widget style is defined by variant. Inside component there are  slots for dropdown and chart.

prop | default
--- | ---
variant  |  `'primary'`
header| `'header:string'`
text   | `'text:string'`

```html
<CWidget06 variant="info"
           header="9.823"
           text="Members online">
  <template #dropdown>
    <CDropdown
      class="float-right"
      variant="transparent p-0"
      right
    >
      <template #buttonContent>
        <i class="icon-settings"></i>
      </template>
      <CDropdownItem>Action</CDropdownItem>
    </CDropdown>
  </template>
  <CSimpleBarChart label="Members"/>
</CWidget06>
```
