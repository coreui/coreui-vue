### Badge (CBadge) [Functional]

Simple functional Badge component

prop | default | valid values
--- | --- | ---
tag  | `'span'` | String
variant  | `'secondary'` | String
pill | `false` | Boolean
textHtml | `''` | String

If 'to' or 'href' prop is passed Badge gain behaviour of link (is rendered as badgy CLink) and gains all props and options of CLink component.

### Example usages:

```html
<CBadge variant="success">Success badge</CBadge>
<CBadge pill>Pill badge</CBadge>
<CBadge
  variant="primary"
  tag="div"
  pill
>
  Primary pill badge in div
</CBadge>

```

Self-closing example
```html
<CBadge variant="success" textHtml="Self-closed CBadge"/>
```

Example usage as link
```html
<CBadge
  variant="success"
  to="/posts"
>
  Watch posts
</CBadge>
```
