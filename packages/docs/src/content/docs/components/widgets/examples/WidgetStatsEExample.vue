<template>
  <CRow>
    <CCol :sm="6">
      <CWidgetStatsE>
        <template #chart>
          <CChart
            class="mx-auto"
            type="bar"
            style="height: 40px; width: 80px"
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
            style="height: 40px; width: 80px"
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
</template>

<script setup>
import { CRow, CCol, CWidgetStatsE } from '@coreui/vue'
import { CChart } from '@coreui/vue-chartjs'
</script>
