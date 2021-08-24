---
title: Vue Widgets Components
name: Widgets
description:
---

## Examples

### Widget Simple

::: demo
<CRow>
  <CCol :xs="4">
    <CWidgetSimple title="title" value="1,123">
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
    </CWidgetSimple>
  </CCol>
  <CCol :xs="4">
    <CWidgetSimple title="title" value="1,123">
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
    </CWidgetSimple>
  </CCol>
</CRow>
:::
```vue
<CWidgetSimple title="title" value="1,123">
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
</CWidgetSimple>
```

<br>

### Widget Brand

::: demo
<CRow>
  <CCol :xs="4">
    <CWidgetBrand :values="[['89k', 'friends'],['459', 'feeds']]" style="--cui-card-cap-bg: #321fdb">
      <CIcon name="cib-coreui-c" height="52" class="my-4 text-white" />
    </CWidgetBrand>   
  </CCol>
</CRow>
:::
```vue
<CWidgetBrand :values="[['89k', 'friends'],['459', 'feeds']]" style="--cui-card-cap-bg: #321fdb">
  <CIcon name="cib-coreui-c" height="52" class="my-4 text-white" />
</CWidgetBrand>   
```
### Widget Dropdown

::: demo
<CRow>
  <CCol :xs="4">
    <CWidgetDropdown class="mb-3" color="primary">
      <template #value>26K</template>
      <template #change>(-12.4% <CIcon name="cil-arrow-bottom" />)</template>
      <template #title>Users</template>
      <template #action>
        <CDropdown>
          <CDropdownToggle color="transparent" class="p-0 text-white" :caret="false">
            <CIcon name="cil-options" class="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </template>
      <CChart
        type="line"
        class="mt-3 mx-3"
        style="height: 70px"
        :data="{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
    </CWidgetDropdown>
  </CCol>
  <CCol :xs="4">
    <CWidgetDropdown class="mb-3" color="info">
      <template #value>$6.200</template>
      <template #change>(40.9% <CIcon name="cil-arrow-top" />)</template>
      <template #title>Income</template>
      <template #action>
        <CDropdown>
          <CDropdownToggle color="transparent" class="p-0 text-white" :caret="false">
            <CIcon name="cil-options" class="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </template>
      <CChart
        type="line"
        class="mt-3 mx-3"
        style="height: 70px"
        :data="{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
    </CWidgetDropdown>
  </CCol>  
  <CCol :xs="4">
    <CWidgetDropdown class="mb-3" color="warning">
      <template #value>2.49%</template>
      <template #change>(84.7% <CIcon name="cil-arrow-top" />)</template>
      <template #title>Conversion Rate</template>
      <template #action>
        <CDropdown>
          <CDropdownToggle color="transparent" class="p-0 text-white" :caret="false">
            <CIcon name="cil-options" class="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </template>
      <CChart
        type="line"
        class="mt-3"
        style="height: 70px"
        :data="{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
    </CWidgetDropdown>
  </CCol>
  <CCol :xs="4">
    <CWidgetDropdown class="mb-3" color="danger">
      <template #value>44K</template>
      <template #change>(-23.6% <CIcon name="cil-arrow-bottom" />)</template>
      <template #title>Sessions</template>
      <template #action>
        <CDropdown>
          <CDropdownToggle color="transparent" class="p-0 text-white" :caret="false">
            <CIcon name="cil-options" class="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </template>
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
              data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
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
    </CWidgetDropdown>
  </CCol>
</CRow>
:::
```vue
<CWidgetDropdown class="mb-3" color="info" header="9.823" text="Members online">
        <template #default>
            <CDropdown>
            <CDropdownToggle color="info" class="text-white">Dropdown Button</CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
            </CDropdown>
        </template>
        <template #footer>
            footer footer footer
        </template>
</CWidgetDropdown>
```

<br>

### Widget Icon

::: demo
<CRow>
  <CCol :xs="4">
    <CWidgetIcon color="primary" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="info" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="warning" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
</CRow>
:::
```vue
<CRow>
  <CCol :xs="4">
    <CWidgetIcon color="primary" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="info" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="warning" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
</CRow>
```

::: demo
<CRow>
  <CCol :xs="4">
    <CWidgetIcon color="primary" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
      <template #footer>
        <CLink
          class="font-weight-bold font-xs text-medium-emphasis"
          href="https://coreui.io/"
          rel="noopener norefferer"
          target="_blank"
        >
          View more
          <CIcon name="cil-arrow-right" class="ms-auto" width="16" />
        </CLink>
      </template>  
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="info" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
      <template #footer>
        <CLink
          class="font-weight-bold font-xs text-medium-emphasis"
          href="https://coreui.io/"
          rel="noopener norefferer"
          target="_blank"
        >
          View more
          <CIcon name="cil-arrow-right" class="ms-auto" width="16" />
        </CLink>
      </template>  
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="warning" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
      <template #footer>
        <CLink
          class="font-weight-bold font-xs text-medium-emphasis"
          href="https://coreui.io/"
          rel="noopener norefferer"
          target="_blank"
        >
          View more
          <CIcon name="cil-arrow-right" class="ms-auto" width="16" />
        </CLink>
      </template>  
    </CWidgetIcon>
  </CCol>
</CRow>
:::
```vue
<CRow>
  <CCol :xs="4">
    <CWidgetIcon color="primary" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
      <template #footer>
        <CLink
          class="font-weight-bold font-xs text-medium-emphasis"
          href="https://coreui.io/"
          rel="noopener norefferer"
          target="_blank"
        >
          View more
          <CIcon name="cil-arrow-right" class="ms-auto" width="16" />
        </CLink>
      </template>  
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="info" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
      <template #footer>
        <CLink
          class="font-weight-bold font-xs text-medium-emphasis"
          href="https://coreui.io/"
          rel="noopener norefferer"
          target="_blank"
        >
          View more
          <CIcon name="cil-arrow-right" class="ms-auto" width="16" />
        </CLink>
      </template>  
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="warning" iconPadding title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
      <template #footer>
        <CLink
          class="font-weight-bold font-xs text-medium-emphasis"
          href="https://coreui.io/"
          rel="noopener norefferer"
          target="_blank"
        >
          View more
          <CIcon name="cil-arrow-right" class="ms-auto" width="16" />
        </CLink>
      </template>  
    </CWidgetIcon>
  </CCol>
</CRow>
```

::: demo
<CRow>
  <CCol :xs="4">
    <CWidgetIcon color="primary" :padding="0" title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="info" :padding="0" title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="warning" :padding="0" title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
</CRow>
:::
```vue
<CRow>
  <CCol :xs="4">
    <CWidgetIcon color="primary" :padding="0" title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="info" :padding="0" title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetIcon color="warning" :padding="0" title="Title" value="$1.999,50">
      <CIcon name="cil-settings" size="xl"/>
    </CWidgetIcon>
  </CCol>
</CRow>
```

### Widget Progress

::: demo
<CRow>
  <CCol :xs="4">
    <CWidgetProgress
      class="mb-3"
      progressColor="success"
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="89.9%"/>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgress
      class="mb-3"
      progressColor="info"
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="12.124"/>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgress
      class="mb-3"
      progressColor="warning"
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="$98.111,00"/>
  </CCol>
</CRow>
:::
```vue
<CRow>
  <CCol :xs="4">
    <CWidgetProgress
      class="mb-3"
      progressColor="success"
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="89.9%"/>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgress
      class="mb-3"
      progressColor="info"
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="12.124"/>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgress
      class="mb-3"
      progressColor="warning"
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="$98.111,00"/>
  </CCol>
</CRow>
```

::: demo
<CRow>
  <CCol :xs="4">
    <CWidgetProgress
      class="mb-3"
      color="primary"
      inverse
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="89.9%"/>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgress
      class="mb-3"
      color="warning"
      inverse
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="12.124"/>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgress
      color="danger"
      inverse
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="$98.111,00"/>
  </CCol>
</CRow>
:::
```vue
<CRow>
  <CCol :xs="4">
    <CWidgetProgress
      class="mb-3"
      color="primary"
      inverse
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="89.9%"/>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgress
      class="mb-3"
      color="warning"
      inverse
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="12.124"/>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgress
      color="danger"
      inverse
      :progressValue="75"
      text="Widget helper text"
      title="Widget title"
      value="$98.111,00"/>
  </CCol>
</CRow>
```

### Widget Progress Icon

::: demo
<CRow>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="87.500" progressColor="info" :progressValue="75" title="Visitors">
      <template #icon><CIcon name="cil-people" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="385" progressColor="success" :progressValue="75" title="New clients">
      <template #icon><CIcon name="cil-user-follow" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="1238" progressColor="info" :progressValue="75" title="Product sold">
      <template #icon><CIcon name="cil-basket" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
</CRow> 
:::
```vue
<CRow>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="87.500" progressColor="info" :progressValue="75" title="Visitors">
      <template #icon><CIcon name="cil-people" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="385" progressColor="success" :progressValue="75" title="New clients">
      <template #icon><CIcon name="cil-user-follow" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="1238" progressColor="info" :progressValue="75" title="Product sold">
      <template #icon><CIcon name="cil-basket" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
</CRow> 
```

::: demo
<CRow>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="87.500" inverse color="info" :progressValue="75" title="Visitors">
      <template #icon><CIcon name="cil-people" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="385" inverse color="success" :progressValue="75" title="New clients">
      <template #icon><CIcon name="cil-user-follow" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="1238" inverse color="info" :progressValue="75" title="Product sold">
      <template #icon><CIcon name="cil-basket" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
</CRow> 
:::
```vue
<CRow>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="87.500" inverse color="info" :progressValue="75" title="Visitors">
      <template #icon><CIcon name="cil-people" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="385" inverse color="success" :progressValue="75" title="New clients">
      <template #icon><CIcon name="cil-user-follow" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
  <CCol :xs="4">
    <CWidgetProgressIcon class="mb-3" value="1238" inverse color="info" :progressValue="75" title="Product sold">
      <template #icon><CIcon name="cil-basket" height="36"/></template>
    </CWidgetProgressIcon>
  </CCol>
</CRow> 
```