<template>
  <div class="dashboardWidgets">
    <bar-chart
        :data="dashboardData.barChart.data"
        :name="dashboardData.barChart.name"
    />
    <SalesWidget :data="dashboardData.todaySalesWidget.data"/>
  </div>
</template>

<script setup>
import {dashboardData} from "@/data";
import BarChart from "@/organism/BarChart/BarChart.vue";
import SalesWidget from "@/organism/SalesWidget/SalesWidget.vue";
</script>