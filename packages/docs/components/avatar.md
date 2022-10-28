---
title: Vue Avatar Component
name: Avatar
description: Vue avatar component can be used to display circular user profile pictures. Avatar can be used to portray people or objects. It supports images, icons, or letters.
other_frameworks: avatar
---

## Image avatars

::: demo
<CAvatar :src="$withBase('/images/avatars/1.jpg')"/>
<CAvatar :src="$withBase('/images/avatars/2.jpg')"/>
<CAvatar :src="$withBase('/images/avatars/3.jpg')"/>
:::
```vue
<CAvatar src="/images/avatars/1.jpg"/>
<CAvatar src="/images/avatars/2.jpg"/>
<CAvatar src="/images/avatars/3.jpg"/>
```
## Letter avatars

::: demo
<CAvatar color="primary" text-color="white">CUI</CAvatar>
<CAvatar color="secondary">CUI</CAvatar>
<CAvatar color="warning" text-color="white">CUI</CAvatar>
:::
```vue
<CAvatar color="primary" text-color="white">CUI</CAvatar>
<CAvatar color="secondary">CUI</CAvatar>
<CAvatar color="warning" text-color="white">CUI</CAvatar>
```

## Rounded avatars

Use the `shape="rounded"` prop to make avatars squared with rounded corners.

::: demo
<CAvatar color="primary" text-color="white" shape="rounded">CUI</CAvatar>
<CAvatar color="secondary" shape="rounded">CUI</CAvatar>
<CAvatar color="warning" text-color="white" shape="rounded">CUI</CAvatar>
:::
```vue
<CAvatar color="primary" text-color="white" shape="rounded">CUI</CAvatar>
<CAvatar color="secondary" shape="rounded">CUI</CAvatar>
<CAvatar color="warning" text-color="white" shape="rounded">CUI</CAvatar>
```
## Square avatars

Use the `shape="rounded-0"` prop to make avatars squared.

::: demo
<CAvatar color="primary" text-color="white" shape="rounded-0">CUI</CAvatar>
<CAvatar color="secondary" shape="rounded-0">CUI</CAvatar>
<CAvatar color="warning" text-color="white" shape="rounded-0">CUI</CAvatar>
:::
```vue
<CAvatar color="primary" text-color="white" shape="rounded-0">CUI</CAvatar>
<CAvatar color="secondary" shape="rounded-0">CUI</CAvatar>
<CAvatar color="warning" text-color="white" shape="rounded-0">CUI</CAvatar>
```

## Sizes

Fancy larger or smaller avatar? Add `size="xl"`, `size="lg"` or `size="sm"` for additional sizes.

::: demo
<CAvatar color="secondary" size="xl">CUI</CAvatar>
<CAvatar color="secondary" size="lg">CUI</CAvatar>
<CAvatar color="secondary">CUI</CAvatar>
<CAvatar color="secondary" size="sm">CUI</CAvatar>
:::
```vue
<CAvatar color="secondary" size="xl">CUI</CAvatar>
<CAvatar color="secondary" size="lg">CUI</CAvatar>
<CAvatar color="secondary">CUI</CAvatar>
<CAvatar color="secondary" size="sm">CUI</CAvatar>
```

## Avatars with status

::: demo

<CAvatar :src="$withBase('/images/avatars/1.jpg')" status="success"/>
<CAvatar color="secondary" status="danger">CUI</CAvatar>
:::
```vue
<CAvatar src="/images/avatars/1.jpg" status="success"/>
<CAvatar color="secondary" status="danger">CUI</CAvatar>
```

## API

!!!include(./api/avatar/CAvatar.api.md)!!!