---
title: Vue Switch Component
name: Switch
description: Create consistent cross-browser and cross-device switch component.
---

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

## API

!!!include(./api/form/CFormSwitch.api.md)!!!