---
title: Vue Button Group Component
name: Button group
description: Vue button group component allows to group a series of buttons and power them with JavaScript.
other_frameworks: button-group
---

## Basic example

Wrap a series of `<CButton>` components in `<CButtonGroup>`. 

::: demo
<CButtonGroup role="group" aria-label="Basic example">
  <CButton color="primary">Left</CButton>
  <CButton color="primary">Middle</CButton>
  <CButton color="primary">Right</CButton>
</CButtonGroup>
:::
```vue
<CButtonGroup role="group" aria-label="Basic example">
  <CButton color="primary">Left</CButton>
  <CButton color="primary">Middle</CButton>
  <CButton color="primary">Right</CButton>
</CButtonGroup>
```

##### Ensure the correct `role` and provide a label

For assistive technologies (ex. screen readers) to communicate that a series of buttons are grouped, a proper `role` attribute has to be provided. For button groups, this should be `role="group"`, while toolbars should have a `role="toolbar"`.

Besides, groups and toolbars should be provided an understandable label, as most assistive technologies will otherwise not declare them, despite the appearance of the specific role attribute. In the following examples provided here, we apply `aria-label`, but options such as `aria-labelledby` can also be used.

These classes can also be added to groups of links, as an alternative to the `<CNav>` components.

::: demo
<CButtonGroup>
  <CButton href="#" color="primary" active>Active link</CButton>
  <CButton href="#" color="primary">Link</CButton>
  <CButton href="#" color="primary">Link</CButton>
</CButtonGroup>
:::
```vue
<CButtonGroup>
  <CButton href="#" color="primary" active>Active link</CButton>
  <CButton href="#" color="primary">Link</CButton>
  <CButton href="#" color="primary">Link</CButton>
</CButtonGroup>
```

## Mixed styles

::: demo
<CButtonGroup role="group" aria-label="Basic mixed styles example">
  <CButton color="danger">Left</CButton>
  <CButton color="warning">Middle</CButton>
  <CButton color="success">Right</CButton>
</CButtonGroup>
:::
```vue
<CButtonGroup role="group" aria-label="Basic mixed styles example">
  <CButton color="danger">Left</CButton>
  <CButton color="warning">Middle</CButton>
  <CButton color="success">Right</CButton>
</CButtonGroup>
```

## Outlined styles

::: demo
<CButtonGroup role="group" aria-label="Basic outlined example">
  <CButton color="primary" variant="outline">Left</CButton>
  <CButton color="primary" variant="outline">Middle</CButton>
  <CButton color="primary" variant="outline">Right</CButton>
</CButtonGroup>
:::
```vue
<CButtonGroup role="group" aria-label="Basic outlined example">
  <CButton color="primary" variant="outline">Left</CButton>
  <CButton color="primary" variant="outline">Middle</CButton>
  <CButton color="primary" variant="outline">Right</CButton>
</CButtonGroup>
```

## Checkbox and radio button groups

Combine button-like checkbox and radio toggle buttons into a seamless looking button group.

::: demo
<CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
  <CFormCheck :button="{color: 'primary', variant: 'outline'}" id="btncheck1" autocomplete="off" label="Checkbox 1"/>
  <CFormCheck :button="{color: 'primary', variant: 'outline'}" id="btncheck2" autocomplete="off" label="Checkbox 2"/>
  <CFormCheck :button="{color: 'primary', variant: 'outline'}" id="btncheck3" autocomplete="off" label="Checkbox 3"/>
</CButtonGroup>
:::
```vue
<CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
  <CFormCheck :button="{color: 'primary', variant: 'outline'}" id="btncheck1" autocomplete="off" label="Checkbox 1"/>
  <CFormCheck :button="{color: 'primary', variant: 'outline'}" id="btncheck2" autocomplete="off" label="Checkbox 2"/>
  <CFormCheck :button="{color: 'primary', variant: 'outline'}" id="btncheck3" autocomplete="off" label="Checkbox 3"/>
</CButtonGroup>
```

::: demo
<CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
  <CFormCheck type="radio" :button="{color: 'primary', variant: 'outline'}" name="btnradio" id="btnradio1" autocomplete="off" label="Radio 1" checked/>
  <CFormCheck type="radio" :button="{color: 'primary', variant: 'outline'}" name="btnradio" id="btnradio2" autocomplete="off" label="Radio 2"/>
  <CFormCheck type="radio" :button="{color: 'primary', variant: 'outline'}" name="btnradio" id="btnradio3" autocomplete="off" label="Radio 3"/>
</CButtonGroup>
:::
```vue
<CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
  <CFormCheck type="radio" :button="{color: 'primary', variant: 'outline'}" name="btnradio" id="btnradio1" autocomplete="off" label="Radio 1" checked/>
  <CFormCheck type="radio" :button="{color: 'primary', variant: 'outline'}" name="btnradio" id="btnradio2" autocomplete="off" label="Radio 2"/>
  <CFormCheck type="radio" :button="{color: 'primary', variant: 'outline'}" name="btnradio" id="btnradio3" autocomplete="off" label="Radio 3"/>
</CButtonGroup>
```

## Button toolbar

Join sets of button groups into button toolbars for more complicated components. Use utility classes as needed to space out groups, buttons, and more.

::: demo
<CButtonToolbar role="group" aria-label="Toolbar with button groups">
  <CButtonGroup class="me-2" role="group" aria-label="First group">
    <CButton color="primary">1</CButton>
    <CButton color="primary">2</CButton>
    <CButton color="primary">3</CButton>
    <CButton color="primary">4</CButton>
  </CButtonGroup>
  <CButtonGroup class="me-2" role="group" aria-label="Second group">
    <CButton color="secondary">5</CButton>
    <CButton color="secondary">6</CButton>
    <CButton color="secondary">7</CButton>
  </CButtonGroup>
  <CButtonGroup class="me-2" role="group" aria-label="Third group">
    <CButton color="info">8</CButton>
  </CButtonGroup>
</CButtonToolbar>
:::
```vue
<CButtonToolbar role="group" aria-label="Toolbar with button groups">
  <CButtonGroup class="me-2" role="group" aria-label="First group">
    <CButton color="primary">1</CButton>
    <CButton color="primary">2</CButton>
    <CButton color="primary">3</CButton>
    <CButton color="primary">4</CButton>
  </CButtonGroup>
  <CButtonGroup class="me-2" role="group" aria-label="Second group">
    <CButton color="secondary">5</CButton>
    <CButton color="secondary">6</CButton>
    <CButton color="secondary">7</CButton>
  </CButtonGroup>
  <CButtonGroup class="me-2" role="group" aria-label="Third group">
    <CButton color="info">8</CButton>
  </CButtonGroup>
</CButtonToolbar>
```

Feel free to combine input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities through to space items correctly.

::: demo
<CButtonToolbar class="mb-3" role="group" aria-label="Toolbar with button groups">
  <CButtonGroup class="me-2" role="group" aria-label="First group">
    <CButton color="secondary" variant="outline">1</CButton>
    <CButton color="secondary" variant="outline">2</CButton>
    <CButton color="secondary" variant="outline">3</CButton>
    <CButton color="secondary" variant="outline">4</CButton>
  </CButtonGroup>
  <CInputGroup>
    <CInputGroupText>@</CInputGroupText>
    <CFormInput placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
  </CInputGroup>
</CButtonToolbar>
<CButtonToolbar class="justify-content-between" role="group" aria-label="Toolbar with button groups">
  <CButtonGroup class="me-2" role="group" aria-label="First group">
    <CButton color="secondary" variant="outline">1</CButton>
    <CButton color="secondary" variant="outline">2</CButton>
    <CButton color="secondary" variant="outline">3</CButton>
    <CButton color="secondary" variant="outline">4</CButton>
  </CButtonGroup>
  <CInputGroup>
    <CInputGroupText>@</CInputGroupText>
    <CFormInput placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
  </CInputGroup>
</CButtonToolbar>
:::
```vue
<CButtonToolbar class="mb-3" role="group" aria-label="Toolbar with button groups">
  <CButtonGroup class="me-2" role="group" aria-label="First group">
    <CButton color="secondary" variant="outline">1</CButton>
    <CButton color="secondary" variant="outline">2</CButton>
    <CButton color="secondary" variant="outline">3</CButton>
    <CButton color="secondary" variant="outline">4</CButton>
  </CButtonGroup>
  <CInputGroup>
    <CInputGroupText>@</CInputGroupText>
    <CFormInput placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
  </CInputGroup>
</CButtonToolbar>
<CButtonToolbar class="justify-content-between" role="group" aria-label="Toolbar with button groups">
  <CButtonGroup class="me-2" role="group" aria-label="First group">
    <CButton color="secondary" variant="outline">1</CButton>
    <CButton color="secondary" variant="outline">2</CButton>
    <CButton color="secondary" variant="outline">3</CButton>
    <CButton color="secondary" variant="outline">4</CButton>
  </CButtonGroup>
  <CInputGroup>
    <CInputGroupText>@</CInputGroupText>
    <CFormInput placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
  </CInputGroup>
</CButtonToolbar>
```

## Sizing

Alternatively, of implementing button sizing classes to each button in a group, set `size` property to all `<CButtonGroup>`'s, including each one when nesting multiple groups.

::: demo
<CButtonGroup size="lg" role="group" aria-label="Large button group">
  <CButton color="primary" variant="outline">Left</CButton>
  <CButton color="primary" variant="outline">Middle</CButton>
  <CButton color="primary" variant="outline">Right</CButton>
</CButtonGroup>
<br/>
<CButtonGroup role="group" aria-label="Default button group">
  <CButton color="primary" variant="outline">Left</CButton>
  <CButton color="primary" variant="outline">Middle</CButton>
  <CButton color="primary" variant="outline">Right</CButton>
</CButtonGroup>
<br/>
<CButtonGroup size="sm" role="group" aria-label="Small button group">
  <CButton color="primary" variant="outline">Left</CButton>
  <CButton color="primary" variant="outline">Middle</CButton>
  <CButton color="primary" variant="outline">Right</CButton>
</CButtonGroup>
:::
```vue
<CButtonGroup size="lg" role="group" aria-label="Large button group">
  <CButton color="primary" variant="outline">Left</CButton>
  <CButton color="primary" variant="outline">Middle</CButton>
  <CButton color="primary" variant="outline">Right</CButton>
</CButtonGroup>
<br/>
<CButtonGroup role="group" aria-label="Default button group">
  <CButton color="primary" variant="outline">Left</CButton>
  <CButton color="primary" variant="outline">Middle</CButton>
  <CButton color="primary" variant="outline">Right</CButton>
</CButtonGroup>
<br/>
<CButtonGroup size="sm" role="group" aria-label="Small button group">
  <CButton color="primary" variant="outline">Left</CButton>
  <CButton color="primary" variant="outline">Middle</CButton>
  <CButton color="primary" variant="outline">Right</CButton>
</CButtonGroup>
```

## Nesting

Put a `<CDropdown>` inside `<CButtonGroup>` when you need dropdown menus combined with a series of buttons.

::: demo
<CButtonGroup role="group" aria-label="Button group with nested dropdown">
  <CButton color="primary">1</CButton>
  <CButton color="primary">2</CButton>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</CButtonGroup>
:::
```vue
<CButtonGroup role="group" aria-label="Button group with nested dropdown">
  <CButton color="primary">1</CButton>
  <CButton color="primary">2</CButton>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</CButtonGroup>
```

## Vertical variation

Create a set of buttons that appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

::: demo
<CButtonGroup vertical role="group" aria-label="Vertical button group">
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
</CButtonGroup>
:::
```vue
<CButtonGroup vertical role="group" aria-label="Vertical button group">
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
  <CButton color="dark">Button</CButton>
</CButtonGroup>
```

::: demo
<CButtonGroup vertical role="group" aria-label="Vertical button group">
  <CButton color="primary">Button</CButton>
  <CButton color="primary">Button</CButton>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CButton color="primary">Button</CButton>
  <CButton color="primary">Button</CButton>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</CButtonGroup>
:::
```vue
<CButtonGroup vertical role="group" aria-label="Vertical button group">
  <CButton color="primary">Button</CButton>
  <CButton color="primary">Button</CButton>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CButton color="primary">Button</CButton>
  <CButton color="primary">Button</CButton>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</CButtonGroup>
```

::: demo
<CButtonGroup vertical role="group" aria-label="Vertical button group">
  <CFormCheck type="radio" :button="{ color: 'danger', variant: 'outline' }" name="vbtnradio" id="vbtnradio1" autocomplete="off" label="Radio 1" checked/>
  <CFormCheck type="radio" :button="{ color: 'danger', variant: 'outline' }" name="vbtnradio" id="vbtnradio2" autocomplete="off" label="Radio 2"/>
  <CFormCheck type="radio" :button="{ color: 'danger', variant: 'outline' }" name="vbtnradio" id="vbtnradio3" autocomplete="off" label="Radio 3"/>
</CButtonGroup> 
:::
```vue
<CButtonGroup vertical role="group" aria-label="Vertical button group">
  <CFormCheck type="radio" :button="{ color: 'danger', variant: 'outline' }" name="vbtnradio" id="vbtnradio1" autocomplete="off" label="Radio 1" checked/>
  <CFormCheck type="radio" :button="{ color: 'danger', variant: 'outline' }" name="vbtnradio" id="vbtnradio2" autocomplete="off" label="Radio 2"/>
  <CFormCheck type="radio" :button="{ color: 'danger', variant: 'outline' }" name="vbtnradio" id="vbtnradio3" autocomplete="off" label="Radio 3"/>
</CButtonGroup>
```

## API

!!!include(./api/button-group/CButtonGroup.api.md)!!!