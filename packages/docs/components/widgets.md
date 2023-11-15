---
title: Vue Widgets Components
name: Widgets
description:
---

## WidgetStatsA

::: demo
<CRow>
<CCol :sm="6">
<CWidgetStatsA class="mb-3" color="primary">
<template #value >26K
<span class="fs-6 fw-normal">
(-12.4% <CIcon icon="cil-arrow-bottom" />)
</span>
</template>
<template #title>Users</template>
<template #action>
<CDropdown placement="bottom-end">
<CDropdownToggle
            color="transparent"
            class="p-0 text-white"
            :caret="false"
          >
<CIcon icon="cil-options" class="text-high-emphasis-inverse" />
</CDropdownToggle>
<CDropdownMenu>
<CDropdownItem href="#">Action</CDropdownItem>
<CDropdownItem href="#">Another action</CDropdownItem>
<CDropdownItem href="#">Something else here</CDropdownItem>
</CDropdownMenu>
</CDropdown>
</template>
<template #chart>
<CChart
          type="line"
          class="mt-3 mx-3"
          style="height: 70px"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#321fdb',
                data: [65, 59, 84, 84, 51, 55, 40],
              },
            ],
          }"
          :options="{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                border: {
                  display: false
                },
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: 30,
                max: 89,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
                tension: 0.4,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }"
        />
</template>
</CWidgetStatsA>
</CCol>
<CCol :sm="6">
<CWidgetStatsA class="mb-3" color="info">
<template #value >$6.200
<span class="fs-6 fw-normal">
(40.9% <CIcon icon="cil-arrow-top" />)
</span>
</template>
<template #title>Income</template>
<template #action>
<CDropdown placement="bottom-end">
<CDropdownToggle
            color="transparent"
            class="p-0 text-white"
            :caret="false"
          >
<CIcon icon="cil-options" class="text-high-emphasis-inverse" />
</CDropdownToggle>
<CDropdownMenu>
<CDropdownItem href="#">Action</CDropdownItem>
<CDropdownItem href="#">Another action</CDropdownItem>
<CDropdownItem href="#">Something else here</CDropdownItem>
</CDropdownMenu>
</CDropdown>
</template>
<template #chart>
<CChart
          type="line"
          class="mt-3 mx-3"
          style="height: 70px"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#39f',
                data: [1, 18, 9, 17, 34, 22, 11],
              },
            ],
          }"
          :options="{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: -9,
                max: 39,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }"
        />
</template>
</CWidgetStatsA>
</CCol>
<CCol :sm="6">
<CWidgetStatsA class="mb-3" color="warning">
<template #value >2.49%
<span class="fs-6 fw-normal">
(84.7% <CIcon icon="cil-arrow-top" />)
</span>
</template>
<template #title>Conversion Rate</template>
<template #action>
<CDropdown placement="bottom-end">
<CDropdownToggle
            color="transparent"
            class="p-0 text-white"
            :caret="false"
          >
<CIcon icon="cil-options" class="text-high-emphasis-inverse" />
</CDropdownToggle>
<CDropdownMenu>
<CDropdownItem href="#">Action</CDropdownItem>
<CDropdownItem href="#">Another action</CDropdownItem>
<CDropdownItem href="#">Something else here</CDropdownItem>
</CDropdownMenu>
</CDropdown>
</template>
<template #chart>
<CChart
          type="line"
          class="mt-3"
          style="height: 70px"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40],
                fill: true,
              },
            ],
          }"
          :options="{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
            elements: {
              line: {
                borderWidth: 2,
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }"
        />
</template>
</CWidgetStatsA>
</CCol>
<CCol :sm="6">
<CWidgetStatsA class="mb-3" color="danger">
<template #value >44K
<span class="fs-6 fw-normal">
(-23.6% <CIcon icon="cil-arrow-bottom" />)
</span>
</template>
<template #title>Sessions</template>
<template #action>
<CDropdown placement="bottom-end">
<CDropdownToggle
            color="transparent"
            class="p-0 text-white"
            :caret="false"
          >
<CIcon icon="cil-options" class="text-high-emphasis-inverse" />
</CDropdownToggle>
<CDropdownMenu>
<CDropdownItem href="#">Action</CDropdownItem>
<CDropdownItem href="#">Another action</CDropdownItem>
<CDropdownItem href="#">Something else here</CDropdownItem>
</CDropdownMenu>
</CDropdown>
</template>
<template #chart>
<CChart
          type="bar"
          class="mt-3 mx-3"
          style="height: 70px"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
              'January',
              'February',
              'March',
              'April',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [
                  78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67,
                  82,
                ],
                barPercentage: 0.6,
              },
            ],
          }"
          :options="{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                  drawBorder: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
          }"
        />
</template>
</CWidgetStatsA>
</CCol>
</CRow>
:::

```vue
<CRow>
  <CCol :sm="6">
    <CWidgetStatsA class="mb-3" color="primary">
      <template #value
        >26K
        <span class="fs-6 fw-normal">
          (-12.4% <CIcon icon="cil-arrow-bottom" />)
        </span>
      </template>
      <template #title>Users</template>
      <template #action>
        <CDropdown placement="bottom-end">
          <CDropdownToggle
            color="transparent"
            class="p-0 text-white"
            :caret="false"
          >
            <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </template>
      <template #chart>
        <CChart
          type="line"
          class="mt-3 mx-3"
          style="height: 70px"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#321fdb',
                data: [65, 59, 84, 84, 51, 55, 40],
              },
            ],
          }"
          :options="{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: 30,
                max: 89,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
                tension: 0.4,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }"
        />
      </template>
    </CWidgetStatsA>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsA class="mb-3" color="info">
      <template #value
        >$6.200
        <span class="fs-6 fw-normal">
          (40.9% <CIcon icon="cil-arrow-top" />)
        </span>
      </template>
      <template #title>Income</template>
      <template #action>
        <CDropdown placement="bottom-end">
          <CDropdownToggle
            color="transparent"
            class="p-0 text-white"
            :caret="false"
          >
            <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </template>
      <template #chart>
        <CChart
          type="line"
          class="mt-3 mx-3"
          style="height: 70px"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#39f',
                data: [1, 18, 9, 17, 34, 22, 11],
              },
            ],
          }"
          :options="{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: -9,
                max: 39,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }"
        />
      </template>
    </CWidgetStatsA>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsA class="mb-3" color="warning">
      <template #value
        >2.49%
        <span class="fs-6 fw-normal">
          (84.7% <CIcon icon="cil-arrow-top" />)
        </span>
      </template>
      <template #title>Conversion Rate</template>
      <template #action>
        <CDropdown placement="bottom-end">
          <CDropdownToggle
            color="transparent"
            class="p-0 text-white"
            :caret="false"
          >
            <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </template>
      <template #chart>
        <CChart
          type="line"
          class="mt-3"
          style="height: 70px"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40],
                fill: true,
              },
            ],
          }"
          :options="{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
            elements: {
              line: {
                borderWidth: 2,
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }"
        />
      </template>
    </CWidgetStatsA>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsA class="mb-3" color="danger">
      <template #value
        >44K
        <span class="fs-6 fw-normal">
          (-23.6% <CIcon icon="cil-arrow-bottom" />)
        </span>
      </template>
      <template #title>Sessions</template>
      <template #action>
        <CDropdown placement="bottom-end">
          <CDropdownToggle
            color="transparent"
            class="p-0 text-white"
            :caret="false"
          >
            <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </template>
      <template #chart>
        <CChart
          type="bar"
          class="mt-3 mx-3"
          style="height: 70px"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
              'January',
              'February',
              'March',
              'April',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [
                  78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67,
                  82,
                ],
                barPercentage: 0.6,
              },
            ],
          }"
          :options="{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                  drawBorder: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
          }"
        />
      </template>
    </CWidgetStatsA>
  </CCol>
</CRow>
```

## WidgetStatsB

::: demo
<CRow>
<CCol :sm="6">
<CWidgetStatsB
      class="mb-3"
      :progress="{ color: 'success', value: 75}"
    >
<template #text>Widget helper text</template>
<template #title>Widget title</template>
<template #value>89.9%</template>
</CWidgetStatsB>
</CCol>
<CCol :sm="6">
<CWidgetStatsB
      class="mb-3"
      color="primary"
      inverse
      :progress="{ value: 75}"
      text="Widget helper text"
      title="Widget title"
      value="12.124"/>
</CCol>
</CRow>
:::

```vue
<CRow>
  <CCol :sm="6">
    <CWidgetStatsB
      class="mb-3"
      :progress="{ color: 'success', value: 75}"
    >
      <template #text>Widget helper text</template>
      <template #title>Widget title</template>
      <template #value>89.9%</template>
    </CWidgetStatsB>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsB
      class="mb-3"
      color="primary"
      inverse
      :progress="{ value: 75}"
      text="Widget helper text"
      title="Widget title"
      value="12.124"/>
  </CCol>
</CRow>
```

## WidgetStatsC

::: demo
<CRow>
  <CCol :sm="6">
    <CWidgetStatsC
      class="mb-3"
      value="87.500"
      :progress="{ color: 'info', value: 75 }"
      title="Visitors"
    >
      <template #icon><CIcon icon="cil-people" height="36" /></template>
      <template #title>Visitors</template>
    </CWidgetStatsC>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsC
      class="mb-3"
      inverse
      color="info"
      value="385"
      :progress="{ value: 75 }"
      title="New clients"
    >
      <template #icon><CIcon icon="cil-user-follow" height="36" /></template>
    </CWidgetStatsC>
  </CCol>
</CRow>
:::
```vue
<CRow>
  <CCol :sm="6">
    <CWidgetStatsC
      class="mb-3"
      value="87.500"
      :progress="{ color: 'info', value: 75 }"
      title="Visitors"
    >
      <template #icon><CIcon icon="cil-people" height="36" /></template>
      <template #title>Visitors</template>
    </CWidgetStatsC>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsC
      class="mb-3"
      inverse
      color="info"
      value="385"
      :progress="{ value: 75 }"
      title="New clients"
    >
      <template #icon><CIcon icon="cil-user-follow" height="36" /></template>
    </CWidgetStatsC>
  </CCol>
</CRow>
```

## WidgetStatsD

::: demo
<CRow>
  <CCol :sm="6">
    <CWidgetStatsD
      class="mb-4"
      style="--cui-card-cap-bg: #3b5998"
      :values="[
        { title: 'friends', value: '89K' },
        { title: 'feeds', value: '459' },
      ]"
    >
      <template #icon>
        <CIcon icon="cib-facebook" height="52" class="my-4 text-white"/>
      </template>
      <template #chart>
        <CChart
          class="position-absolute w-100 h-100"
          type="line"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [65, 59, 84, 84, 51, 55, 40],
                fill: true,
              },
            ],
          }"
          :options="{
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
              },
            },
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          }"
        />
      </template>
    </CWidgetStatsD>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsD
      class="mb-4"
      style="--cui-card-cap-bg: #00aced"
      :values="[
        { title: 'followers', value: '973k' },
        { title: 'tweets', value: '1.792' },
      ]"
    >
      <template #icon>
        <CIcon icon="cib-twitter" height="52" class="my-4 text-white" />
      </template>
      <template #chart>
        <CChart
          class="position-absolute w-100 h-100"
          type="line"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [1, 13, 9, 17, 34, 41, 38],
                fill: true,
              },
            ],
          }"
          :options="{
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
              },
            },
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          }"
        />
      </template>
    </CWidgetStatsD>
  </CCol>
</CRow>
:::
```vue
<CRow>
  <CCol :sm="6">
    <CWidgetStatsD
      class="mb-4"
      style="--cui-card-cap-bg: #3b5998"
      :values="[
        { title: 'friends', value: '89K' },
        { title: 'feeds', value: '459' },
      ]"
    >
      <template #icon>
        <CIcon icon="cib-facebook" height="52" class="my-4 text-white"/>
      </template>
      <template #chart>
        <CChart
          class="position-absolute w-100 h-100"
          type="line"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [65, 59, 84, 84, 51, 55, 40],
                fill: true,
              },
            ],
          }"
          :options="{
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
              },
            },
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          }"
        />
      </template>
    </CWidgetStatsD>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsD
      class="mb-4"
      style="--cui-card-cap-bg: #00aced"
      :values="[
        { title: 'followers', value: '973k' },
        { title: 'tweets', value: '1.792' },
      ]"
    >
      <template #icon>
        <CIcon icon="cib-twitter" height="52" class="my-4 text-white" />
      </template>
      <template #chart>
        <CChart
          class="position-absolute w-100 h-100"
          type="line"
          :data="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [1, 13, 9, 17, 34, 41, 38],
                fill: true,
              },
            ],
          }"
          :options="{
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
              },
            },
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          }"
        />
      </template>
    </CWidgetStatsD>
  </CCol>
</CRow>
```

## WidgetStatsE

::: demo
<CRow>
  <CCol :sm="6">
    <CWidgetStatsE>
      <template #chart>
        <CChart
          class="mx-auto"
          type="bar"
          style="height: 40px; width: 80px;"
          :data="{
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
            datasets: [
              {
                backgroundColor: '#321fdb',
                borderColor: 'transparent',
                borderWidth: 1,
                data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
              },
            ],
          }"
          :options="{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          }"
        />
      </template>
      <template #title>title</template>
      <template #value>1,123</template>
    </CWidgetStatsE>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsE title="title" value="1,123">
      <template #chart>
        <CChart
          class="mx-auto"
          type="line"
          style="height: 40px; width: 80px;"
          :data="{
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
            datasets: [
              {
                backgroundColor: 'transparent',
                borderColor: '#321fdb',
                borderWidth: 2,
                data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
              },
            ],
          }"
          :options="{
            maintainAspectRatio: false,
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          }"
        />
      </template>
    </CWidgetStatsE>
  </CCol>
</CRow>
:::
```vue
<CWidgetStatsE title="title" value="1,123">
  <CChart
    type="bar"
    style="height: 40px"
    :data="{
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
      datasets: [
        {
          backgroundColor: '#321fdb',
          borderColor: 'transparent',
          borderWidth: 1,
          data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
        },
      ],
    }"
    :options="{
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    }"
  />
</CWidgetStatsE>
```

## WidgetStatsF

::: demo
<CRow>
 <CCol :sm="6">
  <CWidgetStatsF color="primary" title="Title" value="$1.999,50">
    <template #icon>
      <CIcon icon="cil-settings" size="xl"/>
    </template>
  </CWidgetStatsF>
 </CCol>
 <CCol :sm="6">
  <CWidgetStatsF color="info" title="Title" value="$1.999,50">
    <template #icon>
      <CIcon icon="cil-settings" size="xl"/>
    </template>
  </CWidgetStatsF>
 </CCol>
</CRow>
:::

```vue
<CRow>
  <CCol :sm="6">
    <CWidgetStatsF color="primary" title="Title" value="$1.999,50">
      <template #icon>
        <CIcon icon="cil-settings" size="xl"/>
      </template>
    </CWidgetStatsF>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsF color="info" title="Title" value="$1.999,50">
      <template #icon>
        <CIcon icon="cil-settings" size="xl"/>
      </template>
    </CWidgetStatsF>
  </CCol>
</CRow>
```

::: demo
<CRow>
  <CCol :sm="6">
    <CWidgetStatsF color="primary" title="Title" value="$1.999,50">
      <template #icon>
        <CIcon icon="cil-settings" size="xl"/>
      </template>
      <template #footer>
        <CLink
          class="font-weight-bold font-xs text-body-secondary"
          href="https://coreui.io/"
          rel="noopener norefferer"
          target="_blank"
        >
          View more
          <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
        </CLink>
      </template>  
    </CWidgetStatsF>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsF color="info" title="Title" value="$1.999,50">
      <template #icon>
        <CIcon icon="cil-settings" size="xl"/>
      </template>
      <template #footer>
        <CLink
          class="font-weight-bold font-xs text-body-secondary"
          href="https://coreui.io/"
          rel="noopener norefferer"
          target="_blank"
        >
          View more
          <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
        </CLink>
      </template>  
    </CWidgetStatsF>
  </CCol>
</CRow>
:::
```vue
<CRow>
  <CCol :sm="6">
    <CWidgetStatsF color="primary" title="Title" value="$1.999,50">
      <template #icon>
        <CIcon icon="cil-settings" size="xl"/>
      </template>
      <template #footer>
        <CLink
          class="font-weight-bold font-xs text-body-secondary"
          href="https://coreui.io/"
          rel="noopener norefferer"
          target="_blank"
        >
          View more
          <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
        </CLink>
      </template>  
    </CWidgetStatsF>
  </CCol>
  <CCol :sm="6">
    <CWidgetStatsF color="info" title="Title" value="$1.999,50">
      <template #icon>
        <CIcon icon="cil-settings" size="xl"/>
      </template>
      <template #footer>
        <CLink
          class="font-weight-bold font-xs text-body-secondary"
          href="https://coreui.io/"
          rel="noopener norefferer"
          target="_blank"
        >
          View more
          <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
        </CLink>
      </template>  
    </CWidgetStatsF>
  </CCol>
</CRow>
```

## API

!!!include(./api/widgets/CWidgetStatsA.api.md)!!!

!!!include(./api/widgets/CWidgetStatsB.api.md)!!!

!!!include(./api/widgets/CWidgetStatsC.api.md)!!!

!!!include(./api/widgets/CWidgetStatsD.api.md)!!!

!!!include(./api/widgets/CWidgetStatsE.api.md)!!!

!!!include(./api/widgets/CWidgetStatsF.api.md)!!!
