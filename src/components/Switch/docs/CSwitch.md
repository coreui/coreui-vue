### Switch (CSwitch)
Fully adjustable custom switch component.

#### Properties:
prop | default | type
--- | --- | ---
variant  | `secondary` | `string`
outline   | `null` | `valid values: false, true, '', 'alt' `
size   | `null` | `valid values: 'lg', 'sm', ''`
shape   | `null` | `valid values: '3d', 'pill'`
id   | `#generated-uuid` | `string`
name  | `null` | `string`
checked  | `false` | `boolean`
disabled  | `false` | `boolean`
required  |  `false` | `boolean`
type  | `checkbox`  | `string`
trueValue  | `null` | `string/ array/ object`
falseValue  | `null` | `string/array/object`
dataOn | `null` | `string`
dataOff  | `null`  | `string`

#### Usage description:

Variant, outline, size and shape properties determines styling of switch.

```html
<CSwitch variant="success" :outline="false" size="lg" shape="3d"/>
```

Id, name, checked, disabled, required and value properties are assigned to html input attributes:

```html
<input
  :id="id"
  :name="name"
  :checked="checked"
  :disabled="disabled"
  :required="required"
  :value="value"
  :type="type"
  [...]
>
```
dataOn and dataOff properties are used to set text labels on switch.

```html
<CSwitch dataOn="On" dataOff="Off"/>
```

To you can track switch state in parent component by one of this methods:
- assigning v-model property.
```html
<CSwitch v-model="myFlag1"/>
<CSwitch v-model="myFlag2"/>
```
...
```javascript
data: function (){
    return {
      myFlag1: true,
      myFlag2: false
    }
}
```
- assigning @change event listener. If you use this method you can operate on event value, or event itself.
```html
<CSwitch @change="eventHandler"/>
```
...
```javascript
methods: {
    eventHandler(value, event){
      console.log(value)
      console.log(event)
    }
}
```
If you want to receive custom values (instead of booleans) you can pass them in trueValue/falseValue properties. In case of using v-model, value passed in v-model have to be equal to trueValue or falseValue property to properly set initial switch state.

```html
<CSwitch v-model="initiallyChecked"
         trueValue="Yes"
         falseValue="No"/>
<CSwitch v-model="initiallyUnchecked"
         trueValue="Yes"
         falseValue="No"/>

```
...

```javascript
data: function (){
    return {
      initiallyChecked: 'Yes',
      initiallyUnchecked: 'No'
    }
}
```

#### Radio button mode
You can change default type of input from checkbox to radio in type property. In such case if you want to utilize @change or v-model methods you have to pass true value of radio input in trueValue property.

```html
<p>{{radio}}</p>
<CSwitch type="radio"
         name="radio"
         v-model="radio"
         trueValue="first"/>
<CSwitch type="radio"
         name="radio"
         v-model="radio"
         trueValue="second"/>
```

...

```javascript
data: function (){
    return {
      radio: 'someValue',
    }
}
```
