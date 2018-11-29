### Breadcrumb component (CBreadcrumb)

This component is creating breadcrumb from  array of objects which are representing single breadcrumb item.

prop | default | type
--- | --- | ---
items  | `null` | `array`

Each row should contain object which base properties are:

prop | default | type
--- | --- | ---
text  | `null` | `String`
current  | `false (true on last item)`  | `Boolean`

You can also use any CLink properties. (Item will behave the same as CLink component). If you want normal link use href property, if you want it to be router-link use 'to' property.
```html
<CBreadcrumb :items="items"/>
```
```javascript
data () {
  return {
    items: [{
      text: 'This is router-link',
      to: '/dashboard'
    }, {
      text: 'This is normal link',
      href: 'https://coreui.io/'
    }, {
      text: 'This will be span'
    }]
  }
}
```

Text property will be displayed as breadcrumb item text. The default behavior is that last breadcrumb item is rendered as span and rest as links. If you want to change that behavior you can add the current property to items.

```html
<CBreadcrumb :items="items"/>
```
```javascript
data () {
  return {
    items: [{
      text: 'This is link',
      href: '#'
    }, {
      text: 'This is not a link',
      current: true
    }, {
      text: 'This is link'
      href: '#',
      current: false
    }]
  }
}
```
