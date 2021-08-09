---
title: Vue Widgets Components
name: Widgets
description: 
---

## Examples

### Widget Simple

::: demo
<CWidgetSimple header="title" text="1,123"/>
:::


```vue
<CWidgetSimple header="title" text="1,123"/>
```

<br>

### Widget Brand

::: demo
<CWidgetBrand 
    color="success"
    leftHeader="leftHeader"
    rightHeader="rightHeader"
    leftFooter="leftFooter"
    rightFooter="rightFooter"
/>
:::


```vue
<CWidgetBrand 
    color="success"
    leftHeader="leftHeader"
    rightHeader="rightHeader"
    leftFooter="leftFooter"
    rightFooter="rightFooter"
/>
```

<br>

### Widget Dropdown

::: demo
<CWidgetDropdown color="info" header="9.823" text="Members online">
        <template #default>
            <CDropdown>
            <CDropdownToggle color="info" class="text-white">Dropdown Button</CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
            </CDropdown>
        </template>
        <template #footer>
            footer footer footer
        </template>
</CWidgetDropdown>
:::


```vue
<CWidgetDropdown color="info" header="9.823" text="Members online">
        <template #default>
            <CDropdown>
            <CDropdownToggle color="info" class="text-white">Dropdown Button</CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
            </CDropdown>
        </template>
        <template #footer>
            footer footer footer
        </template>
</CWidgetDropdown>
```

<br>

### Widget Icon

<CWidgetIcon
    header="$1.999,50"
    text="Income"
    color="info">Icon</CWidgetIcon>


```vue
<CWidgetIcon
    header="$1.999,50"
    text="Income"
    color="info">Icon</CWidgetIcon>
```



<br>

### Widget Progress


<CWidgetProgress 
    header="Header"
    text="Some text"
    footer="Lorem ipsum dolor sit amet enim."
    color="warning"
    value="75"
>

</CWidgetProgress>


```vue
<CWidgetProgress 
    header="Header"
    text="Some text"
    footer="Lorem ipsum dolor sit amet enim."
    color="warning"
    value="75"
>
```

<CWidgetProgress 
    header="Header"
    text="Some text"
    footer="Lorem ipsum dolor sit amet enim."
    color="warning"
    value="75"
    inverse
>

</CWidgetProgress>


```vue
<CWidgetProgress 
    header="Header"
    text="Some text"
    footer="Lorem ipsum dolor sit amet enim."
    color="warning"
    value="75"
    inverse
>

</CWidgetProgress>
```
<br>

### Widget Progress Icon

<CWidgetProgressIcon
    header="87.500"
    text="Visitors"
    color="info">Icon</CWidgetProgressIcon>

```vue
<CWidgetProgressIcon
    header="87.500"
    text="Visitors"
    color="info">Icon</CWidgetProgressIcon>
```

<CWidgetProgressIcon
    header="87.500"
    text="Visitors"
    color="info"
    inverse>Icon</CWidgetProgressIcon>

```vue
<CWidgetProgressIcon
    header="87.500"
    text="Visitors"
    color="info"
    inverse>Icon</CWidgetProgressIcon>
```