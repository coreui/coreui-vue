---
title: Vue Range Component
name: Range
description: Vue range component. Use our custom range inputs for consistent cross-browser styling and built-in customization.
---

## Overview

Create custom `<input type="range">` controls with `<CFormRange>`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Edge Legacy and Firefox supports "filling" their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.

::: demo
<CFormLabel for="customRange1">Example range</CFormLabel>
<CFormRange id="customRange1"/>
:::
```vue
<CFormLabel for="customRange1">Example range</CFormLabel>
<CFormRange id="customRange1"/>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

::: demo
<CFormLabel for="disabledRange">Disabled range</CFormLabel>
<CFormRange id="disabledRange" disabled/>
:::
```vue
<CFormLabel for="disabledRange">Disabled range</CFormLabel>
<CFormRange id="disabledRange" disabled/>
```

## Min and max

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

::: demo
<CFormLabel for="customRange2">Example range</CFormLabel>
<CFormRange :min="0" :max="5" defaultValue="3" id="customRange2"/>
:::
```vue
<CFormLabel for="customRange2">Example range</CFormLabel>
<CFormRange :min="0" :max="5" defaultValue="3" id="customRange2"/> 
```

## Steps

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `:step="0.5"`.

::: demo
<CFormLabel for="customRange3">Example range</CFormLabel>
<CFormRange :min="0" :max="5" :step="0.5" defaultValue="3" id="customRange3"/> 
:::
```vue
<CFormLabel for="customRange3">Example range</CFormLabel>
<CFormRange :min="0" :max="5" :step="0.5" defaultValue="3" id="customRange3"/> 
```

## API

!!!include(./docs/api/form/CFormRange.api.md)!!!