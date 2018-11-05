### Widget07

This widget can style is defined by cardClasses. Inside component there is default slot for additional data (i.e. chart).

prop | default
--- | ---
cardClasses | `'bg-primary'`
rightHeader | `'rightHeader:string'`
rightFooter | `'rightFooter:string'`
leftHeader  | `'leftHeader:string'`
leftFooter  | `'leftFooter:string'`

>       <cui-widget07 rightHeader='SALE' rightFooter='Today 6:43 AM'
                leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
        <cui-simple-line-chart style="height:40px" chartId="cui-widget07_line1" label='Sales'
                    :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' />
        <cui-simple-bar-chart style="height:40px" chartId="cui-widget07_bar1" label='Sales'
                    :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'/>
      </cui-widget07>
