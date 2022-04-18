---
title: Vue Radio Component
name: Radio
description: Create consistent cross-browser and cross-device radios with our Vue radio component.
---

## Approach

Browser default checkboxes and radios are replaced with the help of `<CFormCheck>`. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

## Checks

::: demo
<CFormCheck id="flexCheckDefault" label="Default checkbox"/>
<CFormCheck id="flexCheckChecked" label="Checked checkbox" checked />

:::
```vue
<CFormCheck id="flexCheckDefault" label="Default checkbox"/>
<CFormCheck id="flexCheckChecked" label="Checked checkbox" checked />
```

## Indeterminate

Checkboxes can utilize the `:indeterminate` pseudo-class when manually set via `indeterminate` property.

::: demo
<CFormCheck id="flexCheckIndeterminate" label="Indeterminate checkbox" indeterminate />

:::
```vue
<CFormCheck id="flexCheckIndeterminate" label="Indeterminate checkbox" indeterminate />
```

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

::: demo
<CFormCheck label="Disabled checkbox" disabled/>
<CFormCheck label="Disabled checked checkbox" checked disabled/>
:::
```vue
<CFormCheck label="Disabled checkbox" disabled/>
<CFormCheck label="Disabled checked checkbox" checked disabled/>
```

## Radios

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

::: demo
<CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Default radio"/>
<CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="Checked radio" checked/>
:::
```vue
<CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Default radio"/>
<CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="Checked radio" checked/>
```

### Disabled

::: demo
<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioDisabled" label="Disabled radio" disabled/>
<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" label="Disabled checked radio" checked disabled/>
:::
```vue
<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioDisabled" label="Disabled radio" disabled/>
<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" label="Disabled checked radio" checked disabled/>
```

## Switches

A switch has the markup of a custom checkbox but uses the `switch` boolean properly to render a toggle switch. Switches also support the `disabled` attribute.

::: demo
<CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>
<CFormSwitch label="Checked switch checkbox input" id="formSwitchCheckChecked" checked/>
<CFormSwitch label="Disabled switch checkbox input" id="formSwitchCheckDisabled" disabled/>
<CFormSwitch label="Disabled checked switch checkbox input" id="formSwitchCheckCheckedDisabled" checked disabled/>
:::
```vue
<CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>
<CFormSwitch label="Checked switch checkbox input" id="formSwitchCheckChecked" checked/>
<CFormSwitch label="Disabled switch checkbox input" id="formSwitchCheckDisabled" disabled/>
<CFormSwitch label="Disabled checked switch checkbox input" id="formSwitchCheckCheckedDisabled" checked disabled/>
```

### Sizes

::: demo
<CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>
<CFormSwitch size="lg" label="Large switch checkbox input" id="formSwitchCheckDefaultLg"/>
<CFormSwitch size="xl" label="Extra large switch checkbox input" id="formSwitchCheckDefaultXL"/>
:::
```vue
<CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>
<CFormSwitch size="lg" label="Large switch checkbox input" id="formSwitchCheckDefaultLg"/>
<CFormSwitch size="xl" label="Extra large switch checkbox input" id="formSwitchCheckDefaultXL"/>
```

## Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced.

::: demo
<CFormCheck id="defaultCheck1" label="Default checkbox"/>
<CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled/>
:::
```vue
<CFormCheck id="defaultCheck1" label="Default checkbox"/>
<CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled/>
```

::: demo
<CFormCheck type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="Default radio" checked/>
<CFormCheck type="radio" name="exampleRadios" id="exampleRadios2" value="option2" label="Second default radio"/>
<CFormCheck type="radio" name="exampleRadios" id="exampleRadios3" value="option3" label="Disabled radio" disabled/>
:::
```vue
<CFormCheck type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="Default radio" checked/>
<CFormCheck type="radio" name="exampleRadios" id="exampleRadios2" value="option2" label="Second default radio"/>
<CFormCheck type="radio" name="exampleRadios" id="exampleRadios3" value="option3" label="Disabled radio" disabled/>
```

## Inline

Group checkboxes or radios on the same horizontal row by adding `inline` boolean property to any `<CFormCheck>`.

::: demo
<CFormCheck inline id="inlineCheckbox1" value="option1" label="1"/>
<CFormCheck inline id="inlineCheckbox2" value="option2" label="2"/>
<CFormCheck inline id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled/>
:::
```vue
<CFormCheck inline id="inlineCheckbox1" value="option1" label="1"/>
<CFormCheck inline id="inlineCheckbox2" value="option2" label="2"/>
<CFormCheck inline id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled/>
```

::: demo
<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="1"/>
<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="2"/>
<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled/>
:::
```vue
<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="1"/>
<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="2"/>
<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled/>
```

## Without labels

Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`).

::: demo
<div>
    <CFormCheck id="checkboxNoLabel" value="" aria-label="..."/>
</div>
<div>
  <CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..."/>
</div>
:::
```vue
<div>
    <CFormCheck id="checkboxNoLabel" value="" aria-label="..."/>
</div>
<div>
  <CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..."/>
</div>
```

## Toggle buttons

Create button-like checkboxes and radio buttons by using `button` boolean property on the `<CFormCheck>` component. These toggle buttons can further be grouped in a button group if needed.

### Checkbox toggle buttons

::: demo
<CFormCheck :button="{ color: 'primary' }" id="btn-check" autocomplete="off" label="Single toggle"/>
:::
```vue
<CFormCheck :button="{ color: 'primary' }" id="btn-check" autocomplete="off" label="Single toggle"/>
```

::: demo
<CFormCheck :button="{ color: 'primary' }" id="btn-check-2" autocomplete="off" label="Checked" checked/>
:::
```vue
<CFormCheck :button="{ color: 'primary' }" id="btn-check-2" autocomplete="off" label="Checked" checked/>
```

::: demo
<CFormCheck :button="{ color: 'primary' }" id="btn-check-3" autocomplete="off" label="Disabled" disabled/>
:::
```vue
<CFormCheck :button="{ color: 'primary' }" id="btn-check-3" autocomplete="off" label="Disabled" disabled/>
```

### Radio toggle buttons

::: demo
<CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option1" autocomplete="off" label="Checked" checked/>
<CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option2" autocomplete="off" label="Radio"/>
<CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option3" autocomplete="off" label="Radio" disabled/>
<CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option4" autocomplete="off" label="Radio"/>
:::
```vue
<CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option1" autocomplete="off" label="Checked" checked/>
<CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option2" autocomplete="off" label="Radio"/>
<CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option3" autocomplete="off" label="Radio" disabled/>
<CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option4" autocomplete="off" label="Radio"/>
```

### Outlined styles

Different variants of button, such at the various outlined styles, are supported.

::: demo
<div> 
  <CFormCheck :button="{ color: 'primary', variant: 'outline' }" id="btn-check-outlined" autocomplete="off" label="Single toggle"/>
</div>
<div>
  <CFormCheck :button="{ color: 'secondary', variant: 'outline' }" id="btn-check-2-outlined" autocomplete="off" label="Checked" checked/>
</div>
<div>
  <CFormCheck :button="{ color: 'success', variant: 'outline' }" type="radio" name="options-outlined" id="success-outlined" autocomplete="off" label="Radio" checked/>
  <CFormCheck :button="{ color: 'danger', variant: 'outline' }" type="radio" name="options-outlined" id="danger-outlined" autocomplete="off" label="Radio"/>
</div>
:::
```vue
<div> 
  <CFormCheck :button="{ color: 'primary', variant: 'outline' }" id="btn-check-outlined" autocomplete="off" label="Single toggle"/>
</div>
<div>
  <CFormCheck :button="{ color: 'secondary', variant: 'outline' }" id="btn-check-2-outlined" autocomplete="off" label="Checked" checked/>
</div>
<div>
  <CFormCheck :button="{ color: 'success', variant: 'outline' }" type="radio" name="options-outlined" id="success-outlined" autocomplete="off" label="Radio" checked/>
  <CFormCheck :button="{ color: 'danger', variant: 'outline' }" type="radio" name="options-outlined" id="danger-outlined" autocomplete="off" label="Radio"/>
</div>
```

## API

!!!include(./api/form/CFormCheck.api.md)!!!

!!!include(./api/form/CFormSwitch.api.md)!!!