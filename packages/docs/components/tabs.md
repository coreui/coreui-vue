---
title: Vue Tabs Components
name: Tabs
description: The CoreUI Vue Tabs component provides a flexible and accessible way to create tabbed navigation in your application. It supports various styles and configurations to meet different design requirements.
since: 5.1.0
---

## Example

The basic Vue tabs example uses the `variant="tabs"` props to generate a tabbed interface.

::: demo
<CTabs activeItemKey="profile">
  <CTabList variant="tabs">
    <CTab itemKey="home">Home</CTab>
    <CTab itemKey="profile">Profile</CTab>
    <CTab itemKey="contact">Contact</CTab>
    <CTab disabled itemKey="disabled">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="p-3" itemKey="home">
      Home tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="profile">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="contact">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="disabled">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
:::
```vue
<CTabs activeItemKey="profile">
  <CTabList variant="tabs">
    <CTab itemKey="home">Home</CTab>
    <CTab itemKey="profile">Profile</CTab>
    <CTab itemKey="contact">Contact</CTab>
    <CTab disabled itemKey="disabled">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="p-3" itemKey="home">
      Home tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="profile">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="contact">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="disabled">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```


## Available styles

Change the style of `<CTabs>`'s component with modifiers and utilities. Mix and match as needed, or build your own.

### Unstyled

If you don’t provide the `variant` prop, the component will default to a basic style.

::: demo
<CTabs activeItemKey="profile">
  <CTabList>
    <CTab itemKey="home">Home</CTab>
    <CTab itemKey="profile">Profile</CTab>
    <CTab itemKey="contact">Contact</CTab>
    <CTab disabled itemKey="disabled">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="p-3" itemKey="home">
      Home tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="profile">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="contact">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="disabled">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
:::
```vue
<CTabs activeItemKey="profile">
  <CTabList>
    <CTab itemKey="home">Home</CTab>
    <CTab itemKey="profile">Profile</CTab>
    <CTab itemKey="contact">Contact</CTab>
    <CTab disabled itemKey="disabled">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="p-3" itemKey="home">
      Home tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="profile">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="contact">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="p-3" itemKey="disabled">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```

### Pills

Take that same code, but use `variant="pills"` instead:

::: demo
<CTabs :activeItemKey=2>
  <CTabList variant="pills">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="p-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="p-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="p-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="p-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
:::
```vue
<CTabs :activeItemKey=2>
  <CTabList variant="pills">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="p-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="p-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="p-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="p-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```

### Underline

Take that same code, but use `variant="underline"` instead:

::: demo
<CTabs :activeItemKey="2">
  <CTabList variant="underline">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
:::
```vue
<CTabs :activeItemKey="2">
  <CTabList variant="underline">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```

### Underline border

Take that same code, but use `variant="underline-border"` instead:

::: demo
<CTabs :activeItemKey="2">
  <CTabList variant="underline-border">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
:::
```vue
<CTabs :activeItemKey="2">
  <CTabList variant="underline-border">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```

### Enclosed

Use the `variant="enclosed"` class to give your tab items a subtle border and rounded styling.

::: demo
<CTabs :activeItemKey="1">
  <CTabList variant="enclosed">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
:::
```vue
<CTabs :activeItemKey="1">
  <CTabList variant="enclosed-pills">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```

### Enclosed pills 

Use the `variant="enclosed-pills"` to achieve a pill-style appearance for each tab item, using pill-shaped borders and smoother outlines.

::: demo
<CTabs :activeItemKey="1">
  <CTabList variant="enclosed-pills">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
:::
```vue
<CTabs :activeItemKey="1">
  <CTabList variant="enclosed-pills">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```

### Fill and justify

Force your `<CTabs>`'s contents to extend the full available width one of two modifier classes. To proportionately fill all available space use `layout="fill"`. Notice that all horizontal space is occupied, but not every nav item has the same width.

::: demo
<CTabs :activeItemKey="2">
  <CTabList variant="tabs" layout="fill">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile tab with longer content</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
:::
```vue
<CTabs :activeItemKey="2">
  <CTabList variant="tabs" layout="fill">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile tab with longer content</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```

For equal-width elements, use `layout="justified"`. All horizontal space will be occupied by nav links, but unlike the `layout="fill"` above, every nav item will be the same width.

::: demo
<CTabs :activeItemKey="2">
  <CTabList variant="tabs" layout="justified">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
:::
```vue
<CTabs :activeItemKey="2">
  <CTabList variant="tabs" layout="justified">
    <CTab aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```

## Accessibility

Dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers).

### WAI-ARIA Roles

- The element that serves as the container for the set of tabs has the role `tablist`.
- Each element that serves as a tab has the role `tab` and is contained within the element with the role `tablist`.
- Each element that contains the content panel for a tab has the role `tabpanel`.
- If the tab list has a visible label, the element with the role `tablist` has `aria-labelledby` set to a value that refers to the labeling element. Otherwise, the `tablist` element has a label provided by `aria-label`.
- Each element with the role `tab` has the property `aria-controls` referring to its associated `tabpanel` element.
- The active tab element has the state `aria-selected` set to `true`, and all other tab elements have it set to `false`.
- Each element with the role `tabpanel` has the property `aria-labelledby` referring to its associated `tab` element.

Our Vue Tabs component automatically manages all `role="..."` and `aria-` attributes for accessibility. It also handles the selected state by adding `aria-selected="true"` to the active tab. Additionally, you have the flexibility to manually set these attributes, as shown in the example below:

```jsx
<CTabs :activeItemKey="2">
  <CTabList variant="tabs">
    <CTab id="home-tab" aria-controls="home-tab-pane" :itemKey="1">Home</CTab>
    <CTab id="profile-tab" aria-controls="profile-tab-pane" :itemKey="2">Profile</CTab>
    <CTab id="contact-tab" aria-controls="contact-tab-pane" :itemKey="3">Contact</CTab>
    <CTab id="disabled-tab" aria-controls="disabled-tab-pane" disabled :itemKey="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel id="home-tab-pane" class="p-3" aria-labelledby="home-tab-pane" aria-labelledby="home-tab" :itemKey="1">
      Home tab content
    </CTabPanel>
    <CTabPanel id="profile-tab-pane" class="p-3" aria-labelledby="profile-tab-pane" aria-labelledby="profile-tab" :itemKey="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel id="contact-tab-pane" class="p-3" aria-labelledby="contact-tab-pane" aria-labelledby="contact-tab" :itemKey="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel id="disabled-tab-pane" class="p-3" aria-labelledby="disabled-tab-pane" aria-labelledby="disabled-tab" :itemKey="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```

This example demonstrates how to manually set `aria-selected`, `aria-controls`, and `aria-labelledby` attributes on your `<CTab>`'s and `<CTabPanels>`'s.

### Keyboard Interaction

**When focus enters the tab list:**

<kbd>Tab</kbd>: It places focus on the active `tab` element.

**When focus is on a tab element:**

<kbd>Tab</kbd>: Moves focus to the next element in the tab sequence, typically the tabpanel unless the first focusable element inside the tabpanel is found earlier.

<kbd>Left Arrow</kbd>: Moves focus to the previous tab. If on the first tab, it wraps around to the last tab.

<kbd>Right Arrow</kbd>: Moves focus to the next tab. If on the last tab, it wraps around to the first tab.

<kbd>Home</kbd>: Moves focus to the first tab.

<kbd>End</kbd>: Moves focus to the last tab.

## Customizing

### CSS variables

Vue tabs use local CSS variables on `.nav`, `.nav-tabs`, `.nav-pills`, `.nav-underline` and `.nav-underline-border` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

On the `.nav` base class:

<ScssDocs file="_nav.scss" capture="nav-css-vars"/>

On the `.nav-tabs` modifier class:

<ScssDocs file="_nav.scss" capture="nav-tabs-css-vars"/>

On the `.nav-pills` modifier class:

<ScssDocs file="_nav.scss" capture="nav-pills-css-vars"/>

On the `.nav-underline` modifier class:

<ScssDocs file="_nav.scss" capture="nav-underline-css-vars"/>

On the `.nav-underline-border` modifier class:

<ScssDocs file="_nav.scss" capture="nav-underline-border-css-vars"/>

#### How to use CSS variables

```jsx
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CTabs :style="vars">...</CTabs>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="nav-variables"/>

## API

!!!include(./api/tabs/CTab.api.md)!!!
!!!include(./api/tabs/CTabContent.api.md)!!!
!!!include(./api/tabs/CTabList.api.md)!!!
!!!include(./api/tabs/CTabPanel.api.md)!!!
!!!include(./api/tabs/CTabs.api.md)!!!