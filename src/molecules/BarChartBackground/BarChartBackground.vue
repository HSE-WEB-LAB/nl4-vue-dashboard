<template>
  <div class="barchartBackground">
    <div
        v-for="value in backgroundShards"
        :key="value"
    >
      {{ value }}
      <span></span>
    </div>
  </div>
</template>

<script setup>

defineProps({
  backgroundShards: Array
})

</script>

<style lang="css" scoped>

</style>