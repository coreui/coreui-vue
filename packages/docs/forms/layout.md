---
title: Vue Form Layout
name: Layout
description: Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options.
---

## Forms

Every group of form fields should reside in a `<CForm>` element. CoreUI provides no default styling for the `<CForm>` element, but there are some powerful browser features that are provided by default.

- New to browser forms? Consider reviewing [the MDN form docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) for an overview and complete list of available attributes.
- `<CButton>`s within a `<CForm>` default to `type="submit"`, so strive to be specific and always include a `type`.
- You can disable every form element within a form with the `disabled` attribute on the `<CForm>`.

Since CoreUI applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

## Utilities

[Margin utilities](https://coreui.io/docs/utilities/spacing/) are the easiest way to add some structure to forms. They provide basic grouping of labels, controls, optional form text, and form validation messaging. We recommend sticking to `margin-bottom` utilities, and using a single direction throughout the form for consistency.

## Form grid

More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.

::: demo
<CRow>
  <CCol xs>
    <CFormInput placeholder="First name" aria-label="First name"/>
  </CCol>
  <CCol xs>
    <CFormInput placeholder="Last name" aria-label="Last name"/>
  </CCol>
</CRow>
:::
```vue
<CRow>
  <CCol xs>
    <CFormInput placeholder="First name" aria-label="First name"/>
  </CCol>
  <CCol xs>
    <CFormInput placeholder="Last name" aria-label="Last name"/>
  </CCol>
</CRow>
```

## Gutters

By adding [gutter modifier classes](https://coreui.io/docs/layout/gutters/), you can have control over the gutter width in as well the inline as block direction.

::: demo
<CRow class="g-3">
  <CCol xs>
    <CFormInput placeholder="First name" aria-label="First name"/>
  </CCol>
  <CCol xs>
    <CFormInput placeholder="Last name" aria-label="Last name"/>
  </CCol>
</CRow>
:::
```vue
<CRow class="g-3">
  <CCol xs>
    <CFormInput placeholder="First name" aria-label="First name"/>
  </CCol>
  <CCol xs>
    <CFormInput placeholder="Last name" aria-label="Last name"/>
  </CCol>
</CRow>
```

More complex layouts can also be created with the grid system.

::: demo
<CForm class="row g-3">
  <CCol md="6">
    <CFormLabel for="inputEmail4">Email</CFormLabel>
    <CFormInput type="email" id="inputEmail4"/>
  </CCol>
  <CCol md="6">
    <CFormLabel for="inputPassword4">Password</CFormLabel>
    <CFormInput type="password" id="inputPassword4"/>
  </CCol>
  <CCol xs="12">
    <CFormLabel for="inputAddress">Address</CFormLabel>
    <CFormInput id="inputAddress" placeholder="1234 Main St"/>
  </CCol>
  <CCol xs="12">
    <CFormLabel for="inputAddress2">Address 2</CFormLabel>
    <CFormInput id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </CCol>
  <CCol md="6">
    <CFormLabel for="inputCity">City</CFormLabel>
    <CFormInput id="inputCity"/>
  </CCol>
  <CCol md="4">
    <CFormLabel for="inputState">State</CFormLabel>
    <CFormSelect id="inputState">
      <option>Choose...</option>
      <option>...</option>
    </CFormSelect>
  </CCol>
  <CCol md="2">
    <CFormLabel for="inputZip">Zip</CFormLabel>
    <CFormInput id="inputZip"/>
  </CCol>
  <CCol xs="12">
    <CFormCheck type="checkbox" id="gridCheck" label="Check me out"/>
  </CCol>
  <CCol xs="12">
    <CButton type="submit">Sign in</CButton>
  </CCol>
</CForm>
:::
```vue
<CForm class="row g-3">
  <CCol md="6">
    <CFormLabel for="inputEmail4">Email</CFormLabel>
    <CFormInput type="email" id="inputEmail4"/>
  </CCol>
  <CCol md="6">
    <CFormLabel for="inputPassword4">Password</CFormLabel>
    <CFormInput type="password" id="inputPassword4"/>
  </CCol>
  <CCol xs="12">
    <CFormLabel for="inputAddress">Address</CFormLabel>
    <CFormInput id="inputAddress" placeholder="1234 Main St"/>
  </CCol>
  <CCol xs="12">
    <CFormLabel for="inputAddress2">Address 2</CFormLabel>
    <CFormInput id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </CCol>
  <CCol md="6">
    <CFormLabel for="inputCity">City</CFormLabel>
    <CFormInput id="inputCity"/>
  </CCol>
  <CCol md="4">
    <CFormLabel for="inputState">State</CFormLabel>
    <CFormSelect id="inputState">
      <option>Choose...</option>
      <option>...</option>
    </CFormSelect>
  </CCol>
  <CCol md="2">
    <CFormLabel for="inputZip">Zip</CFormLabel>
    <CFormInput id="inputZip"/>
  </CCol>
  <CCol xs="12">
    <CFormCheck type="checkbox" id="gridCheck" label="Check me out"/>
  </CCol>
  <CCol xs="12">
    <CButton type="submit">Sign in</CButton>
  </CCol>
</CForm>
```

## Horizontal form

Create horizontal forms with the grid by adding the `.row` class to form groups and using the `.col-*-*` classes to specify the width of your labels and controls. Be sure to add `.col-form-label` to your `<CFormLabel>`s as well so they're vertically centered with their associated form controls.

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the `padding-top` on our stacked radio inputs label to better align the text baseline.

::: demo
<CForm>
  <CRow class="mb-3">
    <CFormLabel for="inputEmail3" class="col-sm-2 col-form-label">Email</CFormLabel>
    <CCol sm="10">
      <CFormInput type="email" id="inputEmail3"/>
    </CCol>
  </CRow>
  <CRow class="mb-3">
    <CFormLabel for="inputPassword3" class="col-sm-2 col-form-label">Password</CFormLabel>
    <CCol sm="10">
      <CFormInput type="password" id="inputPassword3"/>
    </CCol>
  </CRow>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
    <CCol sm="10">
      <CFormCheck type="radio" name="gridRadios" id="gridRadios1" value="option1" label="First radio" checked/>
      <CFormCheck type="radio" name="gridRadios" id="gridRadios2" value="option2" label="Second radio"/>
      <CFormCheck type="radio" name="gridRadios" id="gridRadios3" value="option3" label="Third disabled radio" disabled/>
    </CCol>
  </fieldset>
  <CRow class="mb-3">
    <div class="col-sm-10 offset-sm-2">
      <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox"/>
    </div>
  </CRow>
  <CButton type="submit">Sign in</CButton>
</CForm>
:::
```vue
<CForm>
  <CRow class="mb-3">
    <CFormLabel for="inputEmail3" class="col-sm-2 col-form-label">Email</CFormLabel>
    <CCol sm="10">
      <CFormInput type="email" id="inputEmail3"/>
    </CCol>
  </CRow>
  <CRow class="mb-3">
    <CFormLabel for="inputPassword3" class="col-sm-2 col-form-label">Password</CFormLabel>
    <CCol sm="10">
      <CFormInput type="password" id="inputPassword3"/>
    </CCol>
  </CRow>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
    <CCol sm="10">
      <CFormCheck type="radio" name="gridRadios" id="gridRadios1" value="option1" label="First radio" checked/>
      <CFormCheck type="radio" name="gridRadios" id="gridRadios2" value="option2" label="Second radio"/>
      <CFormCheck type="radio" name="gridRadios" id="gridRadios3" value="option3" label="Third disabled radio" disabled/>
    </CCol>
  </fieldset>
  <CRow class="mb-3">
    <div class="col-sm-10 offset-sm-2">
      <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox"/>
    </div>
  </CRow>
  <CButton type="submit">Sign in</CButton>
</CForm>
```

### Horizontal form label sizing

Be sure to use `.col-form-label-sm` or `.col-form-label-lg` to your `<CFormLabel>`s or `<legend>`s to correctly follow the size of `.form-control-lg` and `.form-control-sm`.

::: demo
<CRow class="mb-3">
  <CFormLabel for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</CFormLabel>
  <CCol sm="10">
    <CFormInput type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
  </CCol>
</CRow>
<CRow class="mb-3">
  <CFormLabel for="colFormLabel" class="col-sm-2 col-form-label">Email</CFormLabel>
  <CCol sm="10">
    <CFormInput type="email" id="colFormLabel" placeholder="col-form-label"/>
  </CCol>
</CRow>
<CRow>
  <CFormLabel for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</CFormLabel>
  <CCol sm="10">
    <CFormInput type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"/>
  </CCol>
</CRow>
:::
```vue
<CRow class="mb-3">
  <CFormLabel for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</CFormLabel>
  <CCol sm="10">
    <CFormInput type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
  </CCol>
</CRow>
<CRow class="mb-3">
  <CFormLabel for="colFormLabel" class="col-sm-2 col-form-label">Email</CFormLabel>
  <CCol sm="10">
    <CFormInput type="email" id="colFormLabel" placeholder="col-form-label"/>
  </CCol>
</CRow>
<CRow>
  <CFormLabel for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</CFormLabel>
  <CCol sm="10">
    <CFormInput type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"/>
  </CCol>
</CRow>
```

## Column sizing

As shown in the previous examples, our grid system allows you to place any number of `<CCol>`s within a `<CRow>`. They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining `<CCol>`s equally split the rest, with specific column classes like `<CCol sm="7">`.

::: demo
<CRow class="g-3">
  <CCol sm="7">
    <CFormInput placeholder="City" aria-label="City"/>
  </CCol>
  <CCol sm>
    <CFormInput placeholder="State" aria-label="State"/>
  </CCol>
  <CCol sm>
    <CFormInput placeholder="Zip" aria-label="Zip"/>
  </CCol>
</CRow>
:::
```vue
<CRow class="g-3">
  <CCol sm="7">
    <CFormInput placeholder="City" aria-label="City"/>
  </CCol>
  <CCol sm>
    <CFormInput placeholder="State" aria-label="State"/>
  </CCol>
  <CCol sm>
    <CFormInput placeholder="Zip" aria-label="Zip"/>
  </CCol>
</CRow>
```

## Auto-sizing

The example below uses a flexbox utility to vertically center the contents and changes `<CCol>` to `<CCol xs="auto">` so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

::: demo
<CForm class="row gy-2 gx-3 align-items-center">
  <CCol xs="auto">
    <CFormLabel class="visually-hidden" for="autoSizingInput">Name</CFormLabel>
    <CFormInput id="autoSizingInput" placeholder="Jane Doe"/>
  </CCol>
  <CCol xs="auto">
    <CFormLabel class="visually-hidden" for="autoSizingInputGroup">Username</CFormLabel>
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput id="autoSizingInputGroup" placeholder="Username"/>
    </CInputGroup>
  </CCol>
  <CCol xs="auto">
    <CFormLabel class="visually-hidden" for="autoSizingSelect">Preference</CFormLabel>
    <CFormSelect id="autoSizingSelect">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CCol>
  <CCol xs="auto">
    <CFormCheck type="checkbox" id="autoSizingCheck" label="Remember me"/>
  </CCol>
  <CCol xs="auto">
    <CButton type="submit">Submit</CButton>
  </CCol>
</CForm>
:::
```vue
<CForm class="row gy-2 gx-3 align-items-center">
  <CCol xs="auto">
    <CFormLabel class="visually-hidden" for="autoSizingInput">Name</CFormLabel>
    <CFormInput id="autoSizingInput" placeholder="Jane Doe"/>
  </CCol>
  <CCol xs="auto">
    <CFormLabel class="visually-hidden" for="autoSizingInputGroup">Username</CFormLabel>
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput id="autoSizingInputGroup" placeholder="Username"/>
    </CInputGroup>
  </CCol>
  <CCol xs="auto">
    <CFormLabel class="visually-hidden" for="autoSizingSelect">Preference</CFormLabel>
    <CFormSelect id="autoSizingSelect">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CCol>
  <CCol xs="auto">
    <CFormCheck type="checkbox" id="autoSizingCheck" label="Remember me"/>
  </CCol>
  <CCol xs="auto">
    <CButton type="submit">Submit</CButton>
  </CCol>
</CForm>
```

You can then remix that once again with size-specific column classes.

::: demo
<CForm class="row gx-3 gy-2 align-items-center">
  <CCol sm="3">
    <CFormLabel class="visually-hidden" for="specificSizeInputName">Name</CFormLabel>
    <CFormInput id="specificSizeInputName" placeholder="Jane Doe"/>
  </CCol>
  <CCol sm="3">
    <CFormLabel class="visually-hidden" for="specificSizeInputGroupUsername">Username</CFormLabel>
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput id="specificSizeInputGroupUsername" placeholder="Username"/>
    </CInputGroup>
  </CCol>
  <CCol sm="3">
    <CFormLabel class="visually-hidden" for="specificSizeSelect">Preference</CFormLabel>
    <CFormSelect id="specificSizeSelect">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CCol>
  <CCol xs="auto">
    <CFormCheck type="checkbox" id="autoSizingCheck2" label="Remember me"/>
  </CCol>
  <CCol xs="auto">
    <CButton type="submit">Submit</CButton>
  </CCol>
</CForm>
:::
```vue
<CForm class="row gx-3 gy-2 align-items-center">
  <CCol sm="3">
    <CFormLabel class="visually-hidden" for="specificSizeInputName">Name</CFormLabel>
    <CFormInput id="specificSizeInputName" placeholder="Jane Doe"/>
  </CCol>
  <CCol sm="3">
    <CFormLabel class="visually-hidden" for="specificSizeInputGroupUsername">Username</CFormLabel>
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput id="specificSizeInputGroupUsername" placeholder="Username"/>
    </CInputGroup>
  </CCol>
  <CCol sm="3">
    <CFormLabel class="visually-hidden" for="specificSizeSelect">Preference</CFormLabel>
    <CFormSelect id="specificSizeSelect">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CCol>
  <CCol xs="auto">
    <CFormCheck type="checkbox" id="autoSizingCheck2" label="Remember me"/>
  </CCol>
  <CCol xs="auto">
    <CButton type="submit">Submit</CButton>
  </CCol>
</CForm>
```

## Inline forms

Use the `<CCol xs="auto">` class to create horizontal layouts. By adding [gutter modifier classes](https://coreui.io/docs/layout/gutters/), we will have gutters in horizontal and vertical directions. The `.align-items-center` aligns the form elements to the middle, making the `<CFormCheck>` align properly.

::: demo
<CForm class="row row-cols-lg-auto g-3 align-items-center">
  <CCol xs="12">
    <CFormLabel class="visually-hidden" for="inlineFormInputGroupUsername">Username</CFormLabel>
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput id="inlineFormInputGroupUsername" placeholder="Username"/>
    </CInputGroup>
  </CCol>
  <CCol xs="12">
    <CFormLabel class="visually-hidden" for="inlineFormSelectPref">Preference</CFormLabel>
    <CFormSelect id="inlineFormSelectPref">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CCol>
  <CCol xs="12">
    <CFormCheck type="checkbox" id="inlineFormCheck" label="Remember me"/>
  </CCol>
  <CCol xs="12">
    <CButton type="submit">Submit</CButton>
  </CCol>
</CForm>
:::
```vue
<CForm class="row row-cols-lg-auto g-3 align-items-center">
  <CCol xs="12">
    <CFormLabel class="visually-hidden" for="inlineFormInputGroupUsername">Username</CFormLabel>
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput id="inlineFormInputGroupUsername" placeholder="Username"/>
    </CInputGroup>
  </CCol>
  <CCol xs="12">
    <CFormLabel class="visually-hidden" for="inlineFormSelectPref">Preference</CFormLabel>
    <CFormSelect id="inlineFormSelectPref">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CCol>
  <CCol xs="12">
    <CFormCheck type="checkbox" id="inlineFormCheck" label="Remember me"/>
  </CCol>
  <CCol xs="12">
    <CButton type="submit">Submit</CButton>
  </CCol>
</CForm>
```
