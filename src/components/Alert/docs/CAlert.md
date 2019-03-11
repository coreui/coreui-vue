### Alert (CAlert)

Alert component. Set show attribute to number to dismiss alert after this value in seconds

prop | default | valid values
--- | --- | ---
variant  | `'info'` | String
dismissible | `false` | Boolean, String
show | `true` | Boolean, Number
fade  | `false` | Boolean
iconHtml  | `''` | String

If you need to track current timeout value set .sync modifier on show property

### Example usages:

```html
<CAlert
  variant="primary"
  :show.sync="currentAlertCounter"
  dismissible
>
  This is dismissible alert.
</CAlert>

```
