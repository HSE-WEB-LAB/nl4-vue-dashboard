<template>
  <div class="salesWidget">
    <p class="chartTitle">
      Today’s Sales
    </p>
    <div class="widgetsContainer">
      <widget-card
        v-for="(widget, index) in data"
        :key="index"
        :data="widget"
      />
    </div>
  </div>
</template>

<script setup>

import WidgetCard from "@/molecules/WidgetCard/WidgetCard.vue";

defineProps({
  data: Array,
})

</script>