<template>
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
          <CIcon :icon="cibFacebook" height="52" class="my-4 text-white" />
        </template>
        <template #chart>
          <CChart
            class="position-absolute w-100 h-100"
            type="line"
            :data="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
          <CIcon :icon="cibTwitter" height="52" class="my-4 text-white" />
        </template>
        <template #chart>
          <CChart
            class="position-absolute w-100 h-100"
            type="line"
            :data="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
</template>

<script setup>
import { CRow, CCol, CWidgetStatsD } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cibFacebook, cibTwitter } from '@coreui/icons'
import { CChart } from '@coreui/vue-chartjs'
</script>
