### Widget 01 (CWidget01)

This widget style can be configured by changing variant property. If you want to change the color of widget instead of changing progress bar color set the inverse property to true.

You can change the progress bar width by changing value property.

prop | default
--- | ---
variant  | `'success'`
inverse  | false
value | `25`
header| `'header:string'`
text   | `'text:string'`
footer    | `'footer:string'`

slot | recommended usage
--- | ---
default  | for placing custom CProgress component

#### Example:
```html
 <CWidget01 header="12.124"
            text="Lorem ipsum..."
            footer="Lorem ipsum dolor"
            variant="info"
            :value="30"
            :inverse="true"/>
```
if you want to utilize another progress bar component properties you can place CProgress component in default slot. In that case, value and variant properties would be ignored by slot content. You can also place in slot whatever you want.

#### Example:
```html
<CWidget01 header="12.124"
           text="Lorem ipsum..."
           footer="Lorem ipsum dolor sit amet enim."/>
  <CProgress striped
             variant="success"
             :value="25"
             class="progress-xs my-3 mb-0"/>
</CWidget01>
```
