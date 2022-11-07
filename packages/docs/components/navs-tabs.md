---
title: Vue Navs & Tabs Components
name: Navs & Tabs
description: Documentation and examples for how to use CoreUI's included Vue navigation components.
other_frameworks: navs-tabs
---

## Base nav

Navigation available in CoreUI for Vue share general markup and styles, from the base `.nav` class to the active and disabled states. Swap modifier classes to switch between each style.

The base `.nav` component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.

::: demo
<CNav>
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
:::
```vue
<CNav>
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
```

Classes are used throughout, so your markup can be super flexible. Use `<ul>`s like above, `<ol>` if the order of your items is important, or roll your own with a `<nav>` element. Because the .nav uses display: flex, the nav links behave the same as nav items would, but without the extra markup.

::: demo

  <CNav component="nav">
    <CNavLink href="#" active>
      Active
    </CNavLink>
    <CNavLink href="#">Link</CNavLink>
    <CNavLink href="#">Link</CNavLink>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNav>

:::
```vue

  <CNav component="nav">
    <CNavLink href="#" active>
      Active
    </CNavLink>
    <CNavLink href="#">Link</CNavLink>
    <CNavLink href="#">Link</CNavLink>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNav>

```

## Available styles

Change the style of `.nav`s component with modifiers and utilities. Mix and match as needed, or build your own.

### Horizontal alignment

Change the horizontal alignment of your nav with [flexbox utilities](https://coreui.io/docs/layout/grid/#horizontal-alignment). By default, navs are left-aligned, but you can easily change them to center or right aligned.

Centered with `.justify-content-center`:

::: demo
<CNav class="justify-content-center">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
:::
```vue
<CNav class="justify-content-center">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
```

Right-aligned with `.justify-content-end`:

::: demo
<CNav class="justify-content-end">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
:::
```vue
<CNav class="justify-content-end">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
```

### Vertical

Stack your navigation by changing the flex item direction with the `.flex-column` utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., `.flex-sm-column`).

::: demo
<CNav class="flex-column">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
:::
```vue
<CNav class="flex-column">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
```

### Tabs

Takes the basic nav from above and adds the `variant="tabs"` class to generate a tabbed interface

::: demo
<CNav variant="tabs">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
:::
```vue
<CNav variant="tabs">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
```

### Pills

Take that same HTML, but use `variant="pills"` instead:

::: demo
<CNav variant="pills">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
:::
```vue
<CNav variant="pills">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
```

### Fill and justify

Force your `.nav`'s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your `.nav-item`s, use `layout="fill"`. Notice that all horizontal space is occupied, but not every nav item has the same width.

::: demo
<CNav variant="pills" layout="fill">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
:::
```vue
<CNav variant="pills" layout="fill">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
```

For equal-width elements, use `layout="justified"`. All horizontal space will be occupied by nav links, but unlike the .nav-fill above, every nav item will be the same width.

::: demo
<CNav variant="pills" layout="justified">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
:::
```vue
<CNav variant="pills" layout="justified">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
```

## Working with flex utilities

If you need responsive nav variations, consider using a series of [flexbox utilities](https://coreui.io/docs/utilities/flex). While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.

::: demo
<CNav component="nav" variant="pills" class="flex-column flex-sm-row">
  <CNavLink href="#" active>
    Active
  </CNavLink>
  <CNavLink href="#">Link</CNavLink>
  <CNavLink href="#">Link</CNavLink>
  <CNavLink href="#" disabled>
    Disabled
  </CNavLink>
</CNav>
:::
```vue
<CNav component="nav" variant="pills" class="flex-column flex-sm-row">
  <CNavLink href="#" active>
    Active
  </CNavLink>
  <CNavLink href="#">Link</CNavLink>
  <CNavLink href="#">Link</CNavLink>
  <CNavLink href="#" disabled>
    Disabled
  </CNavLink>
</CNav>
```

## Regarding accessibility

If you're using navs to provide a navigation bar, be sure to add a `role="navigation"` to the most logical parent container of the `<ul>`, or wrap a `<nav>` element around the whole navigation. Do not add the role to the `<ul>` itself, as this would prevent it from being announced as an actual list by assistive technologies.

Note that navigation bars, even if visually styled as tabs with the `.nav-tabs` class, should **not** be given `role="tablist"`, `role="tab"` or `role="tabpanel"` attributes. These are only appropriate for dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel). See [JavaScript behavior](#javascript-behavior) for dynamic tabbed interfaces in this section for an example. The `aria-current` attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the selected state by adding `aria-selected="true"` on the active tab.

## Using dropdowns

Add dropdown menus with a little extra HTML.

### Tabs with dropdowns

::: demo
<CNav>
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CDropdown variant="nav-item">
    <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
:::
```vue
<CNav>
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CDropdown variant="nav-item">
    <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
```

### Pills with dropdowns

::: demo
<CNav variant="pills">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CDropdown variant="nav-item">
    <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
:::
```vue
<CNav variant="pills">
  <CNavItem>
    <CNavLink href="#" active>
      Active
    </CNavLink>
  </CNavItem>
  <CDropdown variant="nav-item">
    <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CNavItem>
    <CNavLink href="#">Link</CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink href="#" disabled>
      Disabled
    </CNavLink>
  </CNavItem>
</CNav>
```


## Tab panes

Dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers).

Note that dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab's trigger element is not immediately visible (as it's inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.

::: demo
<CNav variant="tabs" role="tablist">
  <CNavItem>
    <CNavLink
      href="javascript:void(0);"
      :active="tabPaneActiveKey === 1"
      @click="() => {tabPaneActiveKey = 1}"
    >
      Home
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink
      href="javascript:void(0);"
      :active="tabPaneActiveKey === 2"
      @click="() => {tabPaneActiveKey = 2}"
    >
      Profile
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink
      href="javascript:void(0);"
      :active="tabPaneActiveKey === 3"
      @click="() => {tabPaneActiveKey = 3}"
    >
      Contact
    </CNavLink>
  </CNavItem>
</CNav>
<CTabContent>
  <CTabPane role="tabpanel" aria-labelledby="home-tab" :visible="tabPaneActiveKey === 1">
    Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown
    aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan
    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh
    mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan
    aliquip quis cardigan american apparel, butcher voluptate nisi qui.
  </CTabPane>
  <CTabPane role="tabpanel" aria-labelledby="profile-tab" :visible="tabPaneActiveKey === 2">
    Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
    Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan
    four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft
    beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
    assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero
    magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
    sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
    scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
  </CTabPane>
  <CTabPane role="tabpanel" aria-labelledby="contact-tab" :visible="tabPaneActiveKey === 3">
    Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic
    lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork
    tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie
    helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
    Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro
    mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog
    stumptown. Pitchfork sustainable tofu synth chambray yr.
  </CTabPane>
</CTabContent>
:::
```vue
<template>
  <CNav variant="tabs" role="tablist">
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPaneActiveKey === 1"
        @click="() => {tabPaneActiveKey = 1}"
      >
        Home
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPaneActiveKey === 2"
        @click="() => {tabPaneActiveKey = 2}"
      >
        Profile
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPaneActiveKey === 3"
        @click="() => {tabPaneActiveKey = 3}"
      >
        Contact
      </CNavLink>
    </CNavItem>
  </CNav>
  <CTabContent>
    <CTabPane role="tabpanel" aria-labelledby="home-tab" :visible="tabPaneActiveKey === 1">
      Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown
      aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan
      helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh
      mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan
      aliquip quis cardigan american apparel, butcher voluptate nisi qui.
    </CTabPane>
    <CTabPane role="tabpanel" aria-labelledby="profile-tab" :visible="tabPaneActiveKey === 2">
      Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
      Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan
      four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft
      beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
      assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero
      magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
      sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
      scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
    </CTabPane>
    <CTabPane role="tabpanel" aria-labelledby="contact-tab" :visible="tabPaneActiveKey === 3">
      Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic
      lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork
      tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie
      helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
      Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro
      mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog
      stumptown. Pitchfork sustainable tofu synth chambray yr.
    </CTabPane>
  </CTabContent>
</template>
<script>
  export default {
    data() {
      return { 
        tabPaneActiveKey: 1,
      }
    }
  }
</script>
```

The tabs also works with pills.

::: demo
<CNav variant="pills" role="tablist">
  <CNavItem>
    <CNavLink
      href="javascript:void(0);"
      :active="tabPanePillsActiveKey === 1"
      @click="() => {tabPanePillsActiveKey = 1}"
    >
      Home
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink
      href="javascript:void(0);"
      :active="tabPanePillsActiveKey === 2"
      @click="() => {tabPanePillsActiveKey = 2}"
    >
      Profile
    </CNavLink>
  </CNavItem>
  <CNavItem>
    <CNavLink
      href="javascript:void(0);"
      :active="tabPanePillsActiveKey === 3"
      @click="() => {tabPanePillsActiveKey = 3}"
    >
      Contact
    </CNavLink>
  </CNavItem>
</CNav>
<CTabContent>
  <CTabPane role="tabpanel" aria-labelledby="home-tab" :visible="tabPanePillsActiveKey === 1">
    Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown
    aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan
    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh
    mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan
    aliquip quis cardigan american apparel, butcher voluptate nisi qui.
  </CTabPane>
  <CTabPane role="tabpanel" aria-labelledby="profile-tab" :visible="tabPanePillsActiveKey === 2">
    Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
    Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan
    four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft
    beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
    assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero
    magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
    sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
    scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
  </CTabPane>
  <CTabPane role="tabpanel" aria-labelledby="contact-tab" :visible="tabPanePillsActiveKey === 3">
    Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic
    lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork
    tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie
    helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
    Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro
    mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog
    stumptown. Pitchfork sustainable tofu synth chambray yr.
  </CTabPane>
</CTabContent>
:::
```vue
<template>
  <CNav variant="tabs" role="tablist">
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPanePillsActiveKey === 1"
        @click="() => {tabPanePillsActiveKey = 1}"
      >
        Home
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPanePillsActiveKey === 2"
        @click="() => {tabPanePillsActiveKey = 2}"
      >
        Profile
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        :active="tabPanePillsActiveKey === 3"
        @click="() => {tabPanePillsActiveKey = 3}"
      >
        Contact
      </CNavLink>
    </CNavItem>
  </CNav>
  <CTabContent>
    <CTabPane role="tabpanel" aria-labelledby="home-tab" :visible="tabPanePillsActiveKey === 1">
      Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown
      aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan
      helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh
      mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan
      aliquip quis cardigan american apparel, butcher voluptate nisi qui.
    </CTabPane>
    <CTabPane role="tabpanel" aria-labelledby="profile-tab" :visible="tabPanePillsActiveKey === 2">
      Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
      Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan
      four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft
      beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
      assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero
      magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
      sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
      scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
    </CTabPane>
    <CTabPane role="tabpanel" aria-labelledby="contact-tab" :visible="tabPanePillsActiveKey === 3">
      Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic
      lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork
      tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie
      helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
      Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro
      mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog
      stumptown. Pitchfork sustainable tofu synth chambray yr.
    </CTabPane>
  </CTabContent>
</template>
<script>
  export default {
    data() {
      return { 
        tabPanePillsActiveKey: 1,
      }
    }
  }
</script>
```

<script>
  export default {
    data() {
      return { 
        tabPaneActiveKey: 1,
        tabPanePillsActiveKey: 1,
      }
    }
  }
</script>

## Customizing

### CSS variables

Vue cards use local CSS variables on `.nav`, `.nav-tabs`, and `.nav-pills` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

On the `.nav` base class:

```sass
--cui-nav-link-padding-x: #{$nav-link-padding-x};
--cui-nav-link-padding-y: #{$nav-link-padding-y};
--cui-nav-link-font-size: #{$nav-link-font-size};
--cui-nav-link-font-weight: #{$nav-link-font-weight};
--cui-nav-link-color: #{$nav-link-color};
--cui-nav-link-hover-color: #{$nav-link-hover-color};
--cui-nav-link-disabled-color: #{$nav-link-disabled-color};
```

On the `.nav-tabs` modifier class:

```sass
--cui-nav-tabs-border-width: #{$nav-tabs-border-width};
--cui-nav-tabs-border-color: #{$nav-tabs-border-color};
--cui-nav-tabs-border-radius: #{$nav-tabs-border-radius};
--cui-nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};
--cui-nav-tabs-link-active-color: #{$nav-tabs-link-active-color};
--cui-nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};
--cui-nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};
```

On the `.nav-pills` modifier class:

```sass
--cui-nav-pills-border-radius: #{$nav-pills-border-radius};
--cui-nav-pills-link-active-color: #{$nav-pills-link-active-color};
--cui-nav-pills-link-active-bg: #{$nav-pills-link-active-bg};
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CNav :style="vars">...</CNav>
```

### SASS variables

```sass
$nav-link-padding-y:                .5rem;
$nav-link-padding-x:                1rem;
$nav-link-font-size:                null;
$nav-link-font-weight:              null;
$nav-link-color:                    var(--cui-link-color);
$nav-link-hover-color:              var(--cui-link-hover-color);
$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
$nav-link-disabled-color:           $gray-600;

$nav-tabs-border-color:             $gray-300;
$nav-tabs-border-width:             $border-width;
$nav-tabs-border-radius:            $border-radius;
$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color;
$nav-tabs-link-active-color:        $gray-700;
$nav-tabs-link-active-bg:           $body-bg;
$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg;

$nav-pills-border-radius:           $border-radius;
$nav-pills-link-active-color:       $component-active-color;
$nav-pills-link-active-bg:          $component-active-bg;

$nav-underline-border-color:              $gray-300;
$nav-underline-border-width:              $border-width * 2;
$nav-underline-link-color:                $gray-700;
$nav-underline-link-active-color:         $primary;
$nav-underline-link-active-border-color:  $primary;
```

## API

!!!include(./api/nav/CNav.api.md)!!!

!!!include(./api/nav/CNavGroup.api.md)!!!

!!!include(./api/nav/CNavItem.api.md)!!!

`CNavItem` and `CNavLink` have the same properties. If you set the `href` property on `CNavItem` then, `CNavLink` will be generated inside `CNavItem`.

!!!include(./api/nav/CNavLink.api.md)!!!