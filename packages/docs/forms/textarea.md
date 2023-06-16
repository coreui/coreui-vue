---
title: Vue Form Text Component
name: Form control
description: Vue textarea components. Give textual form `<textarea>`s an upgrade with custom styles, sizing, focus states, validation, and more.
other_frameworks: textarea
---

## Example

::: demo
<CFormTextarea
  id="exampleFormControlTextarea1"
  label="Example textarea"
  rows="3"
  text="Must be 8-20 words long."></CFormTextarea>
:::
```vue
<CForm>
  <CFormTextarea
    id="exampleFormControlTextarea1"
    label="Example textarea"
    rows="3"
    text="Must be 8-20 words long."
  ></CFormTextarea>
</CForm>
```

If you need to add custom classs to form's components, or need to add some custom elements you can add each form component separately. Please check the example below.

```vue
<CFormLabel for="exampleFormControlTextarea1">Example textarea</CFormLabel>
<CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
<CFormText component="span" id="passwordHelpInline">Must be 8-20 words long.</CFormText>
```

You can also use slots.

```vue
<CFormTextarea id="exampleFormControlTextarea1" rows="3">
  <template #label>Example textarea</template>
  <template #text>Must be 8-20 word long.</template>
</CFormTextarea>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

::: demo
<CFormTextarea
  class="mb-3"
  placeholder="Disabled textarea"
  aria-label="Disabled textarea example"
  disabled></CFormTextarea>
:::
```vue
<CFormTextarea
  class="mb-3"
  placeholder="Disabled textarea"
  aria-label="Disabled textarea example"
  disabled>
</CFormTextarea>
```

## Readonly

Add the `readonly` boolean attribute on an textarea to prevent modification of the textarea's value. Read-only textareas appear lighter (just like disabled textareas), but retain the standard cursor.

::: demo
<CFormTextarea
  placeholder="Readonly textarea"
  aria-label="Readonly textarea example"
  disabled
  readonly></CFormTextarea>
:::
```vue
<CFormTextarea
  placeholder="Readonly textarea"
  aria-label="Readonly textarea example"
  disabled
  readonly
></CFormTextarea>
```

## Customizing

### SASS variables

`$input-*` are shared across most of our form controls (and not buttons).

<ScssDocs file="_variables.scss" capture="form-input-variables" />

`$form-label-*` and `$form-text-*` are for our `<CFormLabel />`s and `<CFormText />` component.

<ScssDocs file="_variables.scss" capture="form-label-variables" />

<ScssDocs file="_variables.scss" capture="form-text-variables" />

## API

!!!include(./api/form/CFormTextarea.api.md)!!!

!!!include(./api/form/CFormFeedback.api.md)!!!

!!!include(./api/form/CFormLabel.api.md)!!!

!!!include(./api/form/CFormText.api.md)!!!