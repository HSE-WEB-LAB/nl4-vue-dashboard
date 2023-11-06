<template>
  <div class="chartBars">
    <single-bar
      v-for="(value, index) in data"
      :key="index"
      :value="value.value"
      :max-value="maxValue"
    />
  </div>
</template>

<script setup>

import SingleBar from "@/atoms/SingleBar/SingleBar.vue";

defineProps({
  data: Array,
  maxValue: Number,
})

</script>