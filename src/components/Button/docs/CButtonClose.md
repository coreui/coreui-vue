### Button close (CButtonClose) [Functional]

This component behaviour is the same as html button element so you can add standard html attributes freely. By default component will output:

```html
<button aria-label="Close"
        class="close"
        type="button"
>
  &times;
</button>
```

By passing class or style attribute you are adding styles to 'close' class. By adding html attributes you overwrite them.

Default slot content will overwrite "&times;" icon.
