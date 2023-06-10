---
title: Vue Switch Component
name: Switch
description: Create consistent cross-browser and cross-device switch component.
other_frameworks: switch
---

## About

Vue Switch Components are a type of UI component that allows users to toggle between two states, usually represented as "on" or "off", "enabled" or "disabled", or "checked" or "unchecked".

When a user interacts with the component by clicking or tapping on it, the switch toggles its state, triggering an action or changing the appearance of the component. This type of component is often used in forms, settings panels, and other places where users need to turn something on or off or choose between two options.

## Example

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

## Sizing

Larger or smaller react switches? Add `size="lg"` or `size="xl"` for additional sizes.

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

## Reverse 

Put your switches on the opposite side by adding `reverse` boolean property.

::: demo
<CFormSwitch reverse type="radio" id="reverseFormSwitch1" label="Reverse switch"/>
<CFormSwitch reverse type="radio" id="reverseFormSwitch2" label="Disabled reverse switch" disabled/>
:::
```vue
<CFormSwitch reverse type="radio" id="reverseFormSwitch1" label="Reverse switch"/>
<CFormSwitch reverse type="radio" id="reverseFormSwitch2" label="Disabled reverse switch" disabled/>
```

## Customizing

### SASS variables

<ScssDocs file="_variables.scss" capture="form-switch-variables" />

## API

!!!include(./api/form/CFormSwitch.api.md)!!!