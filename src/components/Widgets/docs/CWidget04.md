### Widget 04 (CWidget04)
This widget style depends on variant property which defines which background color and font awesome icon will be used (i.e facebook, twitter, linkedin, google-plus).

prop | default
--- | ---
variant  | `facebook`
rightHeader   | `'rightHeader:string'`
rightFooter   | `'rightFooter:string'`
leftHeader   | `'leftHeader:string'`
leftFooter   | `'leftFooter:string'`

slot | recommended usage
--- | ---
default  | for placing data chart
'icon'  |  change default icon element

#### Example:
```html
<CWidget04 type="facebook"
           rightHeader="89k"
           rightFooter="friends"
           leftHeader="459"
           leftFooter="feeds">
  <CSimpleLineChart label="myLabel"/>
</CWidget04>
```
You can also customize icon by utilizing slot named "icon"

#### Example:
```html
<CWidget04 variant="warning"
           rightHeader="0:57"
           rightFooter="time"
           leftHeader="17"
           leftFooter="percentage">
  <template #icon>
    <i class="fa fa-battery-1"></i>
  </template>
</CWidget04>
```
