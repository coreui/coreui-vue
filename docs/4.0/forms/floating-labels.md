---
title: Vue Floating labels
name: Floating labels
description: Vue floating label component. Create beautifully simple form labels that float over your input fields.
---

## Example

Wrap a pair of `<CFormInput>` and `<CFormLabel>` elements in `CFormFloating` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. Also note that the `<CFormInput>` must come first so we can utilize a sibling selector (e.g., `~`).

::: demo
<CFormFloating class="mb-3">
  <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
  <CFormLabel for="floatingInput">Email address</CFormLabel>
</CFormFloating>
<CFormFloating>
  <CFormInput type="password" id="floatingPassword" placeholder="Password" />
  <CFormLabel for="exampleFormControlPassword">Password</CFormLabel>
</CFormFloating>
:::
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
    placeholder="name@example.com"
    value="test@example.com"
  />
  <CFormLabel for="floatingInputValue">Input with value</CFormLabel>
</CFormFloating>
:::
```vue
<CFormFloating>
  <CFormInput
    type="email"
    id="floatingInputValue"
    placeholder="name@example.com"
    value="test@example.com"
  />
  <CFormLabel for="floatingInputValue">Input with value</CFormLabel>
</CFormFloating>
```

## Textareas

By default, `<CFormTextarea>`s will be the same height as `<CFormInput>`s.

::: demo
<CFormFloating>
  <CFormTextarea
    id="floatingTextarea"
    placeholder="Leave a comment here"
  ></CFormTextarea>
  <CFormLabel for="floatingTextarea">Comments</CFormLabel>
</CFormFloating>
:::
```vue
<CFormFloating>
  <CFormTextarea
    id="floatingTextarea"
    placeholder="Leave a comment here"
  ></CFormTextarea>
  <CFormLabel for="floatingTextarea">Comments</CFormLabel>
</CFormFloating>
```

To set a custom height on your `<CFormTextarea>`, do not use the `rows` attribute. Instead, set an explicit `height` (either inline or via custom CSS).

::: demo
<CFormFloating>
  <CFormTextarea
    placeholder="Leave a comment here"
    id="floatingTextarea2"
    style="height: 100px"
  ></CFormTextarea>
  <CFormLabel for="floatingTextarea2">Comments</CFormLabel>
</CFormFloating>
:::
```vue
<CFormFloating>
  <CFormTextarea
    placeholder="Leave a comment here"
    id="floatingTextarea2"
    style="height: 100px"
  ></CFormTextarea>
  <CFormLabel for="floatingTextarea2">Comments</CFormLabel>
</CFormFloating>
```

## Selects

Other than `<CFormInput>`, floating labels are only available on `<CFormSelect>`s. They work in the same way, but unlike `<CFormInput>`s, they'll always show the `<CFormLabel>` in its floated state. **Selects with `size` and `multiple` are not supported.**

::: demo
<CFormFloating>
  <CFormSelect id="floatingSelect" aria-label="Floating label select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
  <CFormLabel for="floatingSelect">Works with selects</CFormLabel>
</CFormFloating>
:::
```vue
<CFormFloating>
  <CFormSelect id="floatingSelect" aria-label="Floating label select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
  <CFormLabel for="floatingSelect">Works with selects</CFormLabel>
</CFormFloating>
```

## Layout

When working with the CoreUI for Bootstrap grid system, be sure to place form elements within column classes.

::: demo
<CRow xs="{gutter: 2}">
  <CCol md>
    <CFormFloating>
      <CFormInput type="email" id="floatingInputGrid" placeholder="name@example.com" value="email@example.com" />
      <CFormLabel for="floatingInputGrid">Email address</CFormLabel>
    </CFormFloating>
  </CCol>
  <CCol md>
    <CFormFloating>
      <CFormSelect id="floatingSelectGrid" aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
      <CFormLabel for="floatingSelectGrid">Works with selects</CFormLabel>
    </CFormFloating>
  </CCol>
</CRow>
:::
```vue
<CRow xs="{gutter: 2}">
  <CCol md>
    <CFormFloating>
      <CFormInput type="email" id="floatingInputGrid" placeholder="name@example.com" value="email@example.com" />
      <CFormLabel for="floatingInputGrid">Email address</CFormLabel>
    </CFormFloating>
  </CCol>
  <CCol md>
    <CFormFloating>
      <CFormSelect id="floatingSelectGrid" aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
      <CFormLabel for="floatingSelectGrid">Works with selects</CFormLabel>
    </CFormFloating>
  </CCol>
</CRow>
```