### Widget 07 (CWidget07)

This widget can style is defined by cardClasses. Inside component there is default slot for additional data (i.e. charts).

prop | default
--- | ---
cardClasses | `'bg-primary'`
rightHeader | `'rightHeader:string'`
rightFooter | `'rightFooter:string'`
leftHeader  | `'leftHeader:string'`
leftFooter  | `'leftFooter:string'`

slot | recommended usage
--- | ---
default  | for placing chart components

```html
<CWidget07 rightHeader="SALE"
           rightFooter="Today 6:43 AM"
           leftHeader="$1.890,65"
           leftFooter="+432,50 (15,78%)">
  <CSimpleLineChart label="Sales" />
  <CSimpleBarChart label="Sales" />
</CWidget07>
```
