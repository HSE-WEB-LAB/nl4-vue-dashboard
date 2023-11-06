<template>
  <div class="dashboard">
    <dashboard-widgets/>
  </div>
</template>

<script setup>
import DashboardWidgets from "@/templates/DashboardWidgets/DashboardWidgets.vue";

</script>

<style lang="css" scoped>

.dashboard{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 30px;
}

</style>