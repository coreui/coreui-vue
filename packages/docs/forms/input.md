---
title: Vue Form Input
name: Form input
description: Vue input components. Give textual form `<input>`s an upgrade with custom styles, sizing, focus states, validation, and more.
other_frameworks: input
---

## Example

::: demo
<CForm>
  <CFormInput
    type="email"
    id="exampleFormControlInput1"
    label="Email address"
    placeholder="name@example.com"
    text="Must be 8-20 characters long."
    aria-describedby="exampleFormControlInputHelpInline"
  />
</CForm>
:::
```vue
<CForm>
  <CFormInput
    type="email"
    id="exampleFormControlInput1"
    label="Email address"
    placeholder="name@example.com"
    text="Must be 8-20 characters long."
    aria-describedby="exampleFormControlInputHelpInline"
  />
</CForm>
```

If you need to add custom classs to form's components, or need to add some custom elements you can add each form component separately. Please check the example below.

```vue
<CForm>
  <CFormLabel for="exampleFormControlInput1">Email address</CFormLabel>
  <CFormInput type="email" id="exampleFormControlInput1" placeholder="name@example.com" aria-describedby="exampleFormControlInputHelpInline" />
  <CFormText component="span" id="exampleFormControlInputHelpInline">
    Must be 8-20 characters long.
  </CFormText>
</CForm>
```

You can also use slots.

```vue
<CFormInput
  type="email"
  id="exampleFormControlInput1"
  placeholder="name@example.com"
  aria-describedby="exampleFormControlInputHelpInline"
>
  <template #label>Email address</template>
  <template #text>Must be 8-20 characters long.</template>
</CFormInput>
```

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

::: demo
<CFormInput
  type="text"
  class="mb-3"
  size="lg"
  placeholder="Large input"
  aria-label="lg input example"
/>
<CFormInput
  type="text"
  class="mb-3"
  placeholder="Default input"
  aria-label="default input example"
/>
<CFormInput
  type="text"
  class="mb-3"
  size="sm"
  placeholder="Small input"
  aria-label="sm input example"
/>
:::
```vue
<CFormInput type="text" size="lg" placeholder="Large input" aria-label="lg input example"/>
<CFormInput type="text" placeholder="Default input" aria-label="default input example"/>
<CFormInput type="text" size="sm" placeholder="Small input" aria-label="sm input example"/>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

::: demo
<CFormInput type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled/>
<br/>
<CFormInput type="text" placeholder="Disabled readonly input" aria-label="Disabled input example" disabled readonly/>
<br/>
:::
```vue
<CFormInput type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled/>
<br/>
<CFormInput type="text" placeholder="Disabled readonly input" aria-label="Disabled input example" disabled readonly/>
<br/>
```

## Readonly

Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

::: demo
<CFormInput type="text" placeholder="Readonly input here..." aria-label="readonly input example" readonly/>
:::
```vue
<CFormInput type="text" placeholder="Readonly input here..." aria-label="readonly input example" readonly/>
```

## Readonly plain text

If you want to have `<input readonly>` elements in your form styled as plain text, use the `plain-text` boolean property to remove the default form field styling and preserve the correct margin and padding.

::: demo
<CRow class="mb-3">
  <CFormLabel for="staticEmail" class="col-sm-2 col-form-label">Email</CFormLabel>
  <div class="col-sm-10">
    <CFormInput type="text" id="staticEmail" value="email@example.com" readonly plain-text/>
  </div>
</CRow>
<CRow class="mb-3">
  <CFormLabel for="inputPassword" class="col-sm-2 col-form-label">Password</CFormLabel>
  <div class="col-sm-10">
    <CFormInput type="password" id="inputPassword"/>
  </div>
</CRow>
:::
```vue
<CRow class="mb-3">
  <CFormLabel for="staticEmail" class="col-sm-2 col-form-label">Email</CFormLabel>
  <div class="col-sm-10">
    <CFormInput type="text" id="staticEmail" value="email@example.com" readonly plain-text/>
  </div>
</CRow>
<CRow class="mb-3">
  <CFormLabel for="inputPassword" class="col-sm-2 col-form-label">Password</CFormLabel>
  <div class="col-sm-10">
    <CFormInput type="password" id="inputPassword"/>
  </div>
</CRow>
```

::: demo
<CForm class="row g-3">
  <div class="col-auto">
    <CFormLabel for="staticEmail2" class="visually-hidden">Email</CFormLabel>
    <CFormInput type="text" id="staticEmail2" value="email@example.com" readonly plain-text/>
  </div>
  <div class="col-auto">
    <CFormLabel for="inputPassword2" class="visually-hidden">Password</CFormLabel>
    <CFormInput type="password" id="inputPassword2" placeholder="Password"/>
  </div>
  <div class="col-auto">
    <CButton type="submit" color="primary" class="mb-3">Confirm identity</CButton>
  </div>
</CForm>
:::
```vue
<CForm class="row g-3">
  <div class="col-auto">
    <CFormLabel for="staticEmail2" class="visually-hidden">Email</CFormLabel>
    <CFormInput type="text" id="staticEmail2" value="email@example.com" readonly plain-text/>
  </div>
  <div class="col-auto">
    <CFormLabel for="inputPassword2" class="visually-hidden">Password</CFormLabel>
    <CFormInput type="password" id="inputPassword2" placeholder="Password"/>
  </div>
  <div class="col-auto">
    <CButton type="submit" color="primary" class="mb-3">Confirm identity</CButton>
  </div>
</CForm>
```

## File input

::: demo
<div class="mb-3">
  <CFormInput type="file" id="formFile" label="Default file input example" />
</div>
<div class="mb-3">
  <CFormInput type="file" id="formFileMultiple" label="Multiple files input example" multiple />
</div>
<div class="mb-3">
  <CFormInput type="file" id="formFileDisabled" label="Disabled file input example" disabled />
</div>
<div class="mb-3">
  <CFormInput type="file" size="sm" id="formFileSm" label="Small file input example" />
</div>
<div>
  <CFormInput type="file" size="lg" id="formFileLg" label="Large file input example" />
</div>
:::
```vue
<CFormInput type="file" id="formFile" label="Default file input example" />
<CFormInput type="file" id="formFileMultiple" label="Multiple files input example" multiple />
<CFormInput type="file" id="formFileDisabled" label="Disabled file input example" disabled />
<CFormInput type="file" size="sm" id="formFileSm" label="Small file input example" />
<CFormInput type="file" size="lg" id="formFileLg" label="Large file input example" />
```

## Color

::: demo
  <CFormInput
    type="color"
    id="exampleColorInput"
    label="Color picker"
    title="Choose your color"
    value="#563d7c"
  />
:::
```vue
<CFormInput
  type="color"
  id="exampleColorInput"
  label="Color picker"
  title="Choose your color"
  value="#563d7c"
/>
```

## Customizing

### SASS variables

`$input-*` are shared across most of our form controls (and not buttons).

<ScssDocs file="_variables.scss" capture="form-input-variables" />

`$form-label-*` and `$form-text-*` are for our `<CFormLabel />`s and `<CFormText />` component.

<ScssDocs file="_variables.scss" capture="form-label-variables" />

<ScssDocs file="_variables.scss" capture="form-text-variables" />

`$form-file-*` are for file input.

<ScssDocs file="_variables.scss" capture="form-file-variables" />

## API

!!!include(./api/form/CFormInput.api.md)!!!

!!!include(./api/form/CFormFeedback.api.md)!!!

!!!include(./api/form/CFormLabel.api.md)!!!

!!!include(./api/form/CFormText.api.md)!!!