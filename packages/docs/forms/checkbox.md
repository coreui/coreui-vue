---
title: Vue Checkbox Component
name: Checkbox
description: Create consistent cross-browser and cross-device checkboxes with our Vue checkbox components.
other_frameworks: checkbox
---

## Approach

Browser default checkboxes are replaced with the help of `<CFormCheck>`. Checkboxes are for selecting one or several options in a list.

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

## Default (stacked)

By default, any number of checkboxes that are immediate sibling will be vertically stacked and appropriately spaced.

::: demo
<CFormCheck id="defaultCheck1" label="Default checkbox"/>
<CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled/>
:::
```vue
<CFormCheck id="defaultCheck1" label="Default checkbox"/>
<CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled/>
```

## Inline

Group checkboxes on the same horizontal row by adding `inline` boolean property to any `<CFormCheck>`.

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

## Reverse 

Put your checkboxes on the opposite side by adding `reverse` boolean property.

::: demo
<CFormCheck reverse id="reverseCheckbox1" value="option1" label="Reverse checkbox"/>
<CFormCheck reverse id="reverseCheckbox2" value="option2" label="Disabled reverse checkbox" disabled/>
:::
```vue
<CFormCheck reverse id="reverseCheckbox1" value="option1" label="Reverse checkbox"/>
<CFormCheck reverse id="reverseCheckbox2" value="option2" label="Disabled reverse checkbox" disabled/>
```

## Without labels

Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`).

::: demo
<CFormCheck id="checkboxNoLabel" value="" aria-label="..."/>
:::
```vue
<CFormCheck id="checkboxNoLabel" value="" aria-label="..."/>
```

## Toggle buttons

Create button-like checkboxes buttons by using `button` boolean property on the `<CFormCheck>` component. These toggle buttons can further be grouped in a button group if needed.

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

### Outlined styles

Different variants of button, such at the various outlined styles, are supported.

::: demo
<CFormCheck :button="{ color: 'primary', variant: 'outline' }" id="btn-check-outlined" autocomplete="off" label="Single toggle"/>
<CFormCheck :button="{ color: 'secondary', variant: 'outline' }" id="btn-check-2-outlined" autocomplete="off" label="Checked" checked/>
:::
```vue
<CFormCheck :button="{ color: 'primary', variant: 'outline' }" id="btn-check-outlined" autocomplete="off" label="Single toggle"/>
<CFormCheck :button="{ color: 'secondary', variant: 'outline' }" id="btn-check-2-outlined" autocomplete="off" label="Checked" checked/>
```

## API

!!!include(./api/form/CFormCheck.api.md)!!!