---
title: Vue Floating labels
name: Floating labels
description: Vue floating label component. Create beautifully simple form labels that float over your input fields.
other_frameworks: floating-labels
---

## Example
Use `floatingLabel` property on `<CFormInput>`, `<CFormSelect>` or `<CFormTextarea>` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>`, `<CFormSelect>` and `<CFormTextarea>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element.

::: demo
<CFormInput
  class="mb-3"
  type="email"
  id="floatingInput"
  floatingLabel="Email address"
  placeholder="name@example.com"
/>
<CFormInput
  type="password"
  id="floatingPassword"
  floatingLabel="Password"
  placeholder="Password"
/>
:::
```vue
<CFormInput type="email" id="floatingInput" floatingLabel="Email address" placeholder="name@example.com" />
<CFormInput type="password" id="floatingPassword" floatingLabel="Password" placeholder="Password" />
```

You can create the same form control by wrapping a pair of `<CFormInput>` and `<CFormLabel>` elements in `<CFormFloating>` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. Also, note that the `<CFormInput>` must come first so we can utilize a sibling selector (e.g., `~`).

```vue
<CFormFloating class="mb-3">
  <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
  <CFormLabel for="floatingInput">Email address</CFormLabel>
</CFormFloating>
<CFormFloating>
  <CFormInput type="password" id="floatingPassword" placeholder="Password" />
  <CFormLabel for="exampleFormControlPassword">Password</CFormLabel>
</CFormFloating>
```

When there's a `value` already defined, `<CFormLabel>`s will automatically adjust to their floated position.

::: demo
<CFormFloating>
  <CFormInput
    type="email"
    id="floatingInputValue"
    floatingLabel="Input with value"
    placeholder="name@example.com"
    value="test@example.com"
  />
</CFormFloating>
:::
```vue
<CFormFloating>
  <CFormInput
    type="email"
    id="floatingInputValue"
    floatingLabel="Input with value"
    placeholder="name@example.com"
    value="test@example.com"
  />
</CFormFloating>
```

Form validation styles also work as expected.

::: demo
<CFormInput
  class="mb-3"
  type="email"
  id="floatingInputInvalid"
  floatingLabel="Email addresss"
  placeholder="name@example.com"
  valid
  value="test@example.com"
/>
<CFormInput
  type="email"
  id="floatingInputInvalid"
  invalid
  floatingLabel="Email addresss"
  placeholder="name@example.com"
  value="test@example.com"
/>
:::
```vue
<CFormInput
  class="mb-3"
  type="email"
  id="floatingInputInvalid"
  floatingLabel="Email addresss"
  placeholder="name@example.com"
  valid
  value="test@example.com"
/>
<CFormInput
  type="email"
  id="floatingInputInvalid"
  invalid
  floatingLabel="Email addresss"
  placeholder="name@example.com"
  value="test@example.com"
/>
```

## Textareas

By default, `<CFormTextarea>`s will be the same height as `<CFormInput>`s.

::: demo
<CFormFloating>
  <CFormTextarea
    id="floatingTextarea"
    floatingLabel="Comments"
    placeholder="Leave a comment here"
  ></CFormTextarea>
</CFormFloating>
:::
```vue
<CFormFloating>
  <CFormTextarea
    id="floatingTextarea"
    floatingLabel="Comments"
    placeholder="Leave a comment here"
  ></CFormTextarea>
</CFormFloating>
```

To set a custom height on your `<CFormTextarea>`, do not use the `rows` attribute. Instead, set an explicit `height` (either inline or via custom CSS).

::: demo
<CFormFloating>
  <CFormTextarea
    placeholder="Leave a comment here"
    id="floatingTextarea2"
    floatingLabel="Comments"
    style="height: 100px"
  ></CFormTextarea>
</CFormFloating>
:::
```vue
<CFormFloating>
  <CFormTextarea
    placeholder="Leave a comment here"
    id="floatingTextarea2"
    floatingLabel="Comments"
    style="height: 100px"
  ></CFormTextarea>
</CFormFloating>
```

## Selects

Other than `<CFormInput>`, floating labels are only available on `<CFormSelect>`s. They work in the same way, but unlike `<CFormInput>`s, they'll always show the `<CFormLabel>` in its floated state. **Selects with `size` and `multiple` are not supported.**

::: demo
<CFormFloating>
  <CFormSelect 
    id="floatingSelect"
    floatingLabel="Works with selects" 
    aria-label="Floating label select example"
  >
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
</CFormFloating>
:::
```vue
<CFormFloating>
  <CFormSelect 
    id="floatingSelect"
    floatingLabel="Works with selects" 
    aria-label="Floating label select example"
  >
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
</CFormFloating>
```

## Layout

When working with the CoreUI for Bootstrap grid system, be sure to place form elements within column classes.

::: demo
<CRow :xs="{gutter: 2}">
  <CCol md>
    <CFormFloating>
      <CFormInput 
        type="email"
        id="floatingInputGrid"
        floatingLabel="Email address"
        placeholder="name@example.com"
        value="email@example.com"
      />
    </CFormFloating>
  </CCol>
  <CCol md>
    <CFormFloating>
      <CFormSelect 
        id="floatingSelectGrid"
        floatingLabel="Works with selects"
        aria-label="Floating label select example"
      >
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </CFormFloating>
  </CCol>
</CRow>
:::
```vue
<CRow :xs="{gutter: 2}">
  <CCol md>
    <CFormFloating>
      <CFormInput 
        type="email"
        id="floatingInputGrid"
        floatingLabel="Email address"
        placeholder="name@example.com"
        value="email@example.com"
      />
    </CFormFloating>
  </CCol>
  <CCol md>
    <CFormFloating>
      <CFormSelect 
        id="floatingSelectGrid"
        floatingLabel="Works with selects"
        aria-label="Floating label select example"
      >
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </CFormFloating>
  </CCol>
</CRow>
```

## Customizing

### SASS variables

<ScssDocs file="_variables.scss" capture="form-floating-variables" />