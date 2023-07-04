---
title: Vue Form Validation
name: Validation
description: Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.
---

## Example

For custom CoreUI form validation messages, you'll need to add the `novalidate` boolean property to your `<CForm>`. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the `:invalid` and `:valid` styles applied to your form controls.

Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. 

::: demo
<CForm 
  class="row g-3 needs-validation" 
  novalidate 
  :validated="validatedCustom01" 
  @submit="handleSubmitCustom01"
>
  <CCol md="4">
    <CFormInput
      feedbackValid="Looks good!"
      id="validationCustom01"
      label="First name"
      required
      value="Mark"
    />
  </CCol>
  <CCol md="4">
    <CFormInput 
      feedbackValid="Looks good!"
      id="validationCustom02" 
      label="Email" value="Otto" 
      required
    />
  </CCol>
  <CCol md="4">
    <CFormLabel for="validationCustomUsername">Username</CFormLabel>
    <CInputGroup class="has-validation">
      <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
      <CFormInput 
        id="validationCustomUsername"
        aria-describedby="inputGroupPrepend" 
        feedbackInvalid="Please choose a username."
        required
      />
    </CInputGroup>
  </CCol>
  <CCol md="6">
    <CFormInput 
      feedbackInvalid="Please provide a valid city."
      id="validationCustom03"
      label="City"
      required
    />
  </CCol>
  <CCol md="3">
    <CFormSelect
      aria-describedby="validationCustom04Feedback"
      feedbackInvalid="Please select a valid state."
      id="validationCustom04"
      label="State"
      required
    >
      <option selected="" disabled="" value="">
        Choose...
      </option>
      <option>...</option>
    </CFormSelect>
  </CCol>
  <CCol md="3">
    <CFormInput 
      feedbackInvalid="Please provide a valid zip."
      id="validationCustom05"
      label="Zip"
      required
    />
  </CCol>
  <CCol xs="12">
    <CFormCheck
      feedbackInvalid="You must agree before submitting."
      id="invalidCheck"
      label="Agree to terms and conditions"
      required
      type="checkbox"
    />
  </CCol>
  <CCol xs="12">
    <CButton color="primary" type="submit">Submit form</CButton>
  </CCol>
</CForm>
:::
```vue
<template>
  <CForm 
    class="row g-3 needs-validation" 
    novalidate 
    :validated="validatedCustom01" 
    @submit="handleSubmitCustom01"
  >
    <CCol md="4">
      <CFormInput
        feedbackValid="Looks good!"
        id="validationCustom01"
        label="First name"
        required
        value="Mark"
      />
    </CCol>
    <CCol md="4">
      <CFormInput 
        feedbackValid="Looks good!"
        id="validationCustom02" 
        label="Email" value="Otto" 
        required
      />
    </CCol>
    <CCol md="4">
      <CFormLabel for="validationCustomUsername">Username</CFormLabel>
      <CInputGroup class="has-validation">
        <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
        <CFormInput 
          id="validationCustomUsername"
          aria-describedby="inputGroupPrepend" 
          feedbackInvalid="Please choose a username."
          required
        />
      </CInputGroup>
    </CCol>
    <CCol md="6">
      <CFormInput 
        feedbackInvalid="Please provide a valid city."
        id="validationCustom03"
        label="City"
        required
      />
    </CCol>
    <CCol md="3">
      <CFormSelect
        aria-describedby="validationCustom04Feedback"
        feedbackInvalid="Please select a valid state."
        id="validationCustom04"
        label="State"
        required
      >
        <option selected="" disabled="" value="">
          Choose...
        </option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3">
      <CFormInput 
        feedbackInvalid="Please provide a valid zip."
        id="validationCustom05"
        label="Zip"
        required
      />
    </CCol>
    <CCol xs="12">
      <CFormCheck
        feedbackInvalid="You must agree before submitting."
        id="invalidCheck"
        label="Agree to terms and conditions"
        required
        type="checkbox"
      />
    </CCol>
    <CCol xs="12">
      <CButton color="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>
<script>
  export default {
    data: () => {
      return {
        validatedCustom01: null,
      }
    },
    methods: {
      handleSubmitCustom01(event) {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        this.validatedCustom01 = true
      },
    }
  }
</script> 
```

## Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

::: demo
<CForm class="row g-3">
  <CCol md="4">
    <CFormInput
      feedbackValid="Looks good!"
      id="validationDefault01"
      label="First name"
      required
      value="Mark"
    />
  </CCol>
  <CCol md="4">
    <CFormInput 
      feedbackValid="Looks good!"
      id="validationDefault02" 
      label="Email" value="Otto" 
      required
    />
  </CCol>
  <CCol md="4">
    <CFormLabel for="validationDefaultUsername">Username</CFormLabel>
    <CInputGroup class="has-validation">
      <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
      <CFormInput 
        id="validationDefaultUsername"
        aria-describedby="inputGroupPrepend" 
        feedbackInvalid="Please choose a username."
        required
      />
    </CInputGroup>
  </CCol>
  <CCol md="6">
    <CFormInput 
      feedbackInvalid="Please provide a valid city."
      id="validationDefault03"
      label="City"
      required
    />
  </CCol>
  <CCol md="3">
    <CFormSelect
      aria-describedby="validationDefault04Feedback"
      feedbackInvalid="Please select a valid state."
      id="validationDefault04"
      label="State"
      required
    >
      <option selected="" disabled="" value="">
        Choose...
      </option>
      <option>...</option>
    </CFormSelect>
  </CCol>
  <CCol md="3">
    <CFormInput 
      feedbackInvalid="Please provide a valid zip."
      id="validationDefault05"
      label="Zip"
      required
    />
  </CCol>
  <CCol xs="12">
    <CFormCheck
      feedbackInvalid="You must agree before submitting."
      id="invalidCheck"
      label="Agree to terms and conditions"
      required
      type="checkbox"
    />
  </CCol>
  <CCol xs="12">
    <CButton color="primary" type="submit">Submit form</CButton>
  </CCol>
</CForm>
:::
```vue
<CForm class="row g-3">
  <CCol md="4">
    <CFormInput
      feedbackValid="Looks good!"
      id="validationDefault01"
      label="First name"
      required
      value="Mark"
    />
  </CCol>
  <CCol md="4">
    <CFormInput 
      feedbackValid="Looks good!"
      id="validationDefault02" 
      label="Email" value="Otto" 
      required
    />
  </CCol>
  <CCol md="4">
    <CFormLabel for="validationDefaultUsername">Username</CFormLabel>
    <CInputGroup class="has-validation">
      <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
      <CFormInput 
        id="validationDefaultUsername"
        aria-describedby="inputGroupPrepend" 
        feedbackInvalid="Please choose a username."
        required
      />
    </CInputGroup>
  </CCol>
  <CCol md="6">
    <CFormInput 
      feedbackInvalid="Please provide a valid city."
      id="validationDefault03"
      label="City"
      required
    />
  </CCol>
  <CCol md="3">
    <CFormSelect
      aria-describedby="validationDefault04Feedback"
      feedbackInvalid="Please select a valid state."
      id="validationDefault04"
      label="State"
      required
    >
      <option selected="" disabled="" value="">
        Choose...
      </option>
      <option>...</option>
    </CFormSelect>
  </CCol>
  <CCol md="3">
    <CFormInput 
      feedbackInvalid="Please provide a valid zip."
      id="validationDefault05"
      label="Zip"
      required
    />
  </CCol>
  <CCol xs="12">
    <CFormCheck
      feedbackInvalid="You must agree before submitting."
      id="invalidCheck"
      label="Agree to terms and conditions"
      required
      type="checkbox"
    />
  </CCol>
  <CCol xs="12">
    <CButton color="primary" type="submit">Submit form</CButton>
  </CCol>
</CForm>
```

## Custom validation

In case you require custom or server-side validation, you can indicate invalid and valid form fields with `invalid` and `valid` boolean properties.

For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using `aria-describedby` (noting that this attribute allows more than one `id` to be referenced, in case the field already points to additional form text).

::: demo
<CForm class="row g-3 needs-validation">
  <CCol md="4">
    <CFormInput
      feedback="Looks good!"
      id="validationServer01"
      label="Email"
      required
      valid
      value="name@surname.com"
      />
  </CCol>
  <CCol md="4">
    <CFormInput
      feedback="Looks good!"
      id="validationServer02"
      label="Repeat email"
      required
      valid
      value="name@surname.com"
    />
  </CCol>
  <CCol md="4">
    <CFormLabel for="validationServerUsername">Username</CFormLabel>
    <CInputGroup class="has-validation">
      <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
        <CFormInput
          aria-describedby="inputGroupPrepend03"
          feedback="Please choose a username."
          id="validationServerUsername"
          invalid
          required
        />
    </CInputGroup>
  </CCol>
  <CCol md="6">
    <CFormInput
      feedback="Please provide a valid city."
      id="validationServer03"
      invalid
      label="City"
      required
    />
  </CCol>
  <CCol md="3">
    <CFormSelect
      feedback="Please provide a valid city."
      id="validationServer04"
      invalid
      label="State"
    >
      <option disabled>Choose...</option>
      <option>...</option>
    </CFormSelect>
  </CCol>
  <CCol md="3">
    <CFormInput
      feedback="Please provide a valid zip."
      id="validationServer05"
      invalid
      label="zip"
      required
    />
  </CCol>
  <CCol xs="12">
    <CFormCheck
      feedbackInvalid="You must agree before submitting."
      id="invalidCheck"
      invalid
      label="Agree to terms and conditions"
      required
      type="checkbox"
    />
  </CCol>
  <CCol xs="12">
    <CButton color="primary" type="submit">Submit form</CButton>
  </CCol>
</CForm>
:::
```vue
<CForm class="row g-3 needs-validation">
  <CCol md="4">
    <CFormInput
      feedback="Looks good!"
      id="validationServer01"
      label="Email"
      required
      valid
      value="name@surname.com"
      />
  </CCol>
  <CCol md="4">
    <CFormInput
      feedback="Looks good!"
      id="validationServer02"
      label="Repeat email"
      required
      valid
      value="name@surname.com"
    />
  </CCol>
  <CCol md="4">
    <CFormLabel for="validationServerUsername">Username</CFormLabel>
    <CInputGroup class="has-validation">
      <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
        <CFormInput
          aria-describedby="inputGroupPrepend03"
          feedback="Please choose a username."
          id="validationServerUsername"
          invalid
          required
        />
    </CInputGroup>
  </CCol>
  <CCol md="6">
    <CFormInput
      feedback="Please provide a valid city."
      id="validationServer03"
      invalid
      label="City"
      required
    />
  </CCol>
  <CCol md="3">
    <CFormSelect
      feedback="Please provide a valid city."
      id="validationServer04"
      invalid
      label="State"
    >
      <option disabled>Choose...</option>
      <option>...</option>
    </CFormSelect>
  </CCol>
  <CCol md="3">
    <CFormInput
      feedback="Please provide a valid zip."
      id="validationServer05"
      invalid
      label="zip"
      required
    />
  </CCol>
  <CCol xs="12">
    <CFormCheck
      feedbackInvalid="You must agree before submitting."
      id="invalidCheck"
      invalid
      label="Agree to terms and conditions"
      required
      type="checkbox"
    />
  </CCol>
  <CCol xs="12">
    <CButton color="primary" type="submit">Submit form</CButton>
  </CCol>
</CForm>
```

## Supported elements

Validation styles are available for the following form controls and components:

- `<CFormCheck>`s
- `<CFormInput>`s
- `<CFormSelect>`s
- `<CFormTextarea>`s

::: demo
<CForm :validated="true">
  <div class="mb-3">
    <CFormTextarea
      feedbackInvalid="Please enter a message in the textarea."
      id="validationTextarea"
      label="Textarea"
      placeholder="Required example textarea"
      required
    ></CFormTextarea>
  </div>
  <CFormCheck
    class="mb-3"
    id="validationFormCheck1"
    label="Check this checkbox"
    feedbackInvalid="Example invalid feedback text"
    required
  />
  <CFormCheck
    type="radio"
    name="radio-stacked"
    id="validationFormCheck2"
    label="Check this checkbox"
    required
  />
  <CFormCheck
    class="mb-3"
    type="radio"
    name="radio-stacked"
    id="validationFormCheck3"
    label="Or toggle this other radio"
    feedbackInvalid="More example invalid feedback text"
    required
  />
  <div class="mb-3">
    <CFormSelect
      feedbackInvalid="Example invalid select feedback"
      aria-label="select example"
      required
    >
      <option selected="" value="">
        Open this select menu
      </option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </div>
  <div class="mb-3">
    <CFormInput
      type="file"
      id="validationTextarea"
      feedbackInvalid="Example invalid form file feedback"
      aria-label="file example"
      required
    />
  </div>
  <div class="mb-3">
    <CButton type="submit" color="primary" disabled>Submit form</CButton>
  </div>
</CForm>
:::
```vue
<CForm :validated="true">
  <div class="mb-3">
    <CFormTextarea
      feedbackInvalid="Please enter a message in the textarea."
      id="validationTextarea"
      label="Textarea"
      placeholder="Required example textarea"
      required
    ></CFormTextarea>
  </div>
  <CFormCheck
    class="mb-3"
    id="validationFormCheck1"
    label="Check this checkbox"
    feedbackInvalid="Example invalid feedback text"
    required
  />
  <CFormCheck
    type="radio"
    name="radio-stacked"
    id="validationFormCheck2"
    label="Check this checkbox"
    required
  />
  <CFormCheck
    class="mb-3"
    type="radio"
    name="radio-stacked"
    id="validationFormCheck3"
    label="Or toggle this other radio"
    feedbackInvalid="More example invalid feedback text"
    required
  />
  <div class="mb-3">
    <CFormSelect
      feedbackInvalid="Example invalid select feedback"
      aria-label="select example"
      required
    >
      <option selected="" value="">
        Open this select menu
      </option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </div>
  <div class="mb-3">
    <CFormInput
      type="file"
      id="validationTextarea"
      feedbackInvalid="Example invalid form file feedback"
      aria-label="file example"
      required
    />
  </div>
  <div class="mb-3">
    <CButton type="submit" color="primary" disabled>Submit form</CButton>
  </div>
</CForm>
```

## Tooltips

If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.

::: demo
<CForm class="row g-3 needs-validation" novalidate :validated="validatedTooltip01" @submit="handleSubmitTooltip01">
  <CCol md="4" class="position-relative">
    <CFormInput
      feedbackValid="Looks good!"
      id="validationTooltip01"
      label="First name"
      required
      tooltipFeedback
      value="Mark"
    />
  </CCol>
  <CCol md="4" class="position-relative">
    <CFormInput
      feedbackValid="Looks good!"
      id="validationTooltip02"
      label="Last name"
      required
      tooltipFeedback
      value="Otto"
    />
  </CCol>
  <CCol md="4" class="position-relative">
    <CFormLabel for="validationTooltipUsername">Username</CFormLabel>
    <CInputGroup class="has-validation">
      <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
      <CFormInput
        aria-describedby="inputGroupPrependFeedback"
        feedbackInvalid="Please choose a username."
        id="validationTooltipUsername"
        required
        tooltipFeedback
      />
    </CInputGroup>
  </CCol>
  <CCol md="6" class="position-relative">
    <CFormInput
      aria-describedby="validationTooltip03Feedback"
      feedbackInvalid="Please provide a valid city."
      id="validationTooltip03"
      label="City"
      required
      tooltipFeedback
    />
  </CCol>
  <CCol md="3" class="position-relative">
    <CFormSelect
      aria-describedby="validationTooltip04Feedback"
      feedbackInvalid="Please select a valid state."
      id="validationTooltip04"
      label="State"
      required
      tooltipFeedback
    >
      <option selected="" disabled="" value="">
        Choose...
      </option>
      <option>...</option>
    </CFormSelect>
  </CCol>
  <CCol md="3" class="position-relative">
    <CFormInput
      aria-describedby="validationTooltip05Feedback"
      feedbackInvalid="Please provide a valid zip."
      id="validationTooltip05"
      label="Zip"
      required
      tooltipFeedback
    />
  </CCol>
  <CCol xs="12" class="position-relative">
    <CButton color="primary" type="submit">Submit form</CButton>
  </CCol>
</CForm>
:::
```vue
<template>
  <CForm class="row g-3 needs-validation" novalidate :validated="validatedTooltip01" @submit="handleSubmitTooltip01">
    <CCol md="4" class="position-relative">
      <CFormLabel for="validationTooltip01">Email</CFormLabel>
      <CFormInput id="validationTooltip01" value="Mark" required/>
      <CFormFeedback tooltip valid>
        Looks good!
      </CFormFeedback>
    </CCol>
    <CCol md="4" class="position-relative">
      <CFormLabel for="validationTooltip02">Email</CFormLabel>
      <CFormInput id="validationTooltip02" value="Otto" required/>
      <CFormFeedback tooltip valid>
        Looks good!
      </CFormFeedback>
    </CCol>
    <CCol md="4" class="position-relative">
      <CFormLabel for="validationTooltipUsername">Username</CFormLabel>
      <CInputGroup class="has-validation">
        <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
        <CFormInput id="validationTooltipUsername" value="" aria-describedby="inputGroupPrepend" required/>
        <CFormFeedback tooltip invalid>
        Please choose a username.
        </CFormFeedback>
      </CInputGroup>
    </CCol>
    <CCol md="6" class="position-relative">
      <CFormLabel for="validationTooltip03">City</CFormLabel>
      <CFormInput id="validationTooltip03" required/>
      <CFormFeedback tooltip invalid>
        Please provide a valid city.
      </CFormFeedback>
    </CCol>
    <CCol md="3" class="position-relative">
      <CFormLabel for="validationTooltip04">City</CFormLabel>
      <CFormSelect id="validationTooltip04" required>
        <option disabled value="">Choose...</option>
        <option>...</option>
      </CFormSelect>
      <CFormFeedback tooltip invalid>
        Please provide a valid city.
      </CFormFeedback>
    </CCol>
    <CCol md="3" class="position-relative">
      <CFormLabel for="validationTooltip05">City</CFormLabel>
      <CFormInput id="validationTooltip05" required/>
      <CFormFeedback tooltip invalid>
        Please provide a valid zip.
      </CFormFeedback>
    </CCol>
    <CCol xs="12" class="position-relative">
      <CButton color="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>
<script>
  export default {
    data: () => {
      return {
        validatedTooltip01: null,
      }
    },
    methods: {
      handleSubmitTooltip01(event) {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        this.validatedTooltip01 = true
      }
    }
  }
</script>
```

## Customizing

### CSS variables

These variables are also color mode adaptive, meaning they change color while in dark mode.

### SASS variables

<ScssDocs file="_variables.scss" capture="form-feedback-variables" />

### SASS mixins

Two mixins are combined, through our loop, to generate our form validation feedback styles.

<ScssDocs file="mixins/_forms.scss" capture="form-validation-mixins" />

### SASS maps

This is the validation Sass map from `_variables.scss`. Override or extend this to generate different or additional states.

<ScssDocs file="_variables.scss" capture="form-validation-states" />

Maps of `$form-validation-states` can contain three optional parameters to override tooltips and focus styles.

### SASS loops

Used to iterate over `$form-validation-states` map values to generate our validation styles. Any modifications to the above Sass map will be reflected in your compiled CSS via this loop.

<ScssDocs file="forms/_validation.scss" capture="form-validation-states-loop" />

<script>
  export default {
    data: () => {
      return {
        validatedCustom01: null,
        validatedTooltip01: null,
      }
    },
    methods: {
      handleSubmitCustom01(event) {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        this.validatedCustom01 = true
      },
      handleSubmitTooltip01(event) {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        this.validatedTooltip01 = true
      }
    }
  }
</script>