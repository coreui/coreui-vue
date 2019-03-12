### Button close (CButtonClose) [Functional]

Simple closing button component.

prop | default | valid values
--- | --- | ---
iconHtml  | `'&times;'` | String
buttonClasses  | `'close'` | String

You can add standard html attributes freely, as you would do in normal button element,
they will overwrite default behaviour. By default component will output:

```html
<button
  aria-label="Close"
  class="close"
  type="button"
>
  &times;
</button>
```

If component have default slot, it will overwrite iconHtml prop.
