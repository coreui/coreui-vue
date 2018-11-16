### Widget 02 (CWidget02)
This widget can be displayed with or without a link. If you want to display link area just set the link property with your address as value or put any content in the default slot.

prop | default
--- | ---
iconClasses  | `'fa fa-cogs bg-primary'`
header| `'header:string'`
text   | `'text:string'`
link    | `null`
linkText    | `'View more'`

slot | recommended usage
--- | ---
default  | for placing custom CLink component

#### Example:
```html
<CWidget02 header="$1.999,50"
           iconClasses="fa fa-cogs bg-primary"
           text="Income"
           link="https://coreui.io/vue/"
           linkText="Click here!"/>
```
