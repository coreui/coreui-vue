---
title: Vue Checkbox & Radio Components
name: Checks & radios
description: Create consistent cross-browser and cross-device checkboxes and radios with our Vue checkbox, radio, and switch components.
other_frameworks: radio
---

## Approach

Browser default radios are replaced with the help of `<CFormCheck radio>`. Radios are for selecting one option from many.

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

### vModel

::: demo
<CFormCheck type="radio" id="flexRadioVModel1" inline label="One" value="One" v-model="picked"/>
<CFormCheck type="radio" id="flexRadioVModel2" inline label="Two" value="Two" v-model="picked"/>
<CFormCheck type="radio" id="flexRadioVModel2" inline label="Three" value="Three" v-model="picked"/>
<CFormCheck type="radio" id="flexRadioVModel2" inline label="Four" value="Four" v-model="picked"/>
<CFormCheck type="radio" id="flexRadioVModel2" inline label="Five" value="Five" v-model="picked"/>
<div>Picked: {{ picked }}</div>
:::
```vue
<template>
  <CFormCheck type="radio" id="flexRadioVModel1" inline label="One" value="One" v-model="picked"/>
  <CFormCheck type="radio" id="flexRadioVModel2" inline label="Two" value="Two" v-model="picked"/>
  <CFormCheck type="radio" id="flexRadioVModel2" inline label="Three" value="Three" v-model="picked"/>
  <CFormCheck type="radio" id="flexRadioVModel2" inline label="Four" value="Four" v-model="picked"/>
  <CFormCheck type="radio" id="flexRadioVModel2" inline label="Five" value="Five" v-model="picked"/>
  <div>Picked: {{ picked }}</div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const picked = ref('Four')
      return {
        picked
      }
    }
  }
</script>
```

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const picked = ref('Four')
      return {
        picked
      }
    }
  }
</script>

### Disabled

::: demo
<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioDisabled" label="Disabled radio" disabled/>
<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" label="Disabled checked radio" checked disabled/>
:::
```vue
<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioDisabled" label="Disabled radio" disabled/>
<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" label="Disabled checked radio" checked disabled/>
```

## Default (stacked)

By default, any number of radios that are immediate sibling will be vertically stacked and appropriately spaced.

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

Group radios on the same horizontal row by adding `inline` boolean property to any `<CFormCheck>`.

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

## Reverse 

Put your radios on the opposite side by adding `reverse` boolean property.

::: demo
<CFormCheck reverse type="radio" id="reverseOption1" value="option1" label="Reverse radio"/>
<CFormCheck reverse type="radio" id="reverseOption2" value="option2" label="Disabled reverse radio" disabled/>
:::
```vue
<CFormCheck reverse type="radio" id="reverseOption1" value="option1" label="Reverse radio"/>
<CFormCheck reverse type="radio" id="reverseOption2" value="option2" label="Disabled reverse radio" disabled/>
```

## Without labels

Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`).

::: demo
<CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..."/>
:::
```vue
<CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..."/>
```

## Toggle buttons

Create button-like radio buttons by using `button` boolean property on the `<CFormCheck>` component. These toggle buttons can further be grouped in a button group if needed.

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
<CFormCheck :button="{ color: 'success', variant: 'outline' }" type="radio" name="options-outlined" id="success-outlined" autocomplete="off" label="Radio" checked/>
<CFormCheck :button="{ color: 'danger', variant: 'outline' }" type="radio" name="options-outlined" id="danger-outlined" autocomplete="off" label="Radio"/>
:::
```vue
<CFormCheck :button="{ color: 'success', variant: 'outline' }" type="radio" name="options-outlined" id="success-outlined" autocomplete="off" label="Radio" checked/>
<CFormCheck :button="{ color: 'danger', variant: 'outline' }" type="radio" name="options-outlined" id="danger-outlined" autocomplete="off" label="Radio"/>
```

## Customizing

### SASS variables

<ScssDocs file="_variables.scss" capture="form-check-variables" />

## API

!!!include(./api/form/CFormCheck.api.md)!!!
