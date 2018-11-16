### Widget 05 (CWidget05)

This widget style can be configured by changing variant property. If you want to change the color of widget instead of changing progress bar color set the inverse property to true.

You can change the progress bar width by changing value property.

prop | default
--- | ---
variant  | `'success'`
inverse  | `false`
value | `30`
iconClasses  |  `'icon-people'`
header| `'header:string'`
text   | `'text:string'`

slot | recommended usage
--- | ---
default  | for placing custom CProgress component

```html
<CWidget05 iconClasses="icon-basket-loaded"
           header="1238"
           text="Products sold"
           variant="background-warning"/>
```

if you want to adjust other progress bar properties you can place CProgress component in default slot. In that case, value and variant properties would be ignored by slot content. You can also place in slot whatever you want.

```html
<CWidget05 iconClasses="icon-basket-loaded"
           header="1238"
           text="Products sold"
           variant="background-warning">
<CProgress striped
           variant="success"
           :value="25"
           class="progress-xs my-3 mb-0"/>
</CWidget05>
```
