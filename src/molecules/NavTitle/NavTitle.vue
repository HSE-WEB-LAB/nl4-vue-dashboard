<template>
  <div class="navTitle">
    <svg-view
        :svg-url="svgIcon"
        class-name="navSvg"
    />
    <h1>
      {{ titleText }}
    </h1>
  </div>
</template>

<script setup>

import SvgView from "@/atoms/SvgView/SvgView.vue";

const {titleText, svgIcon} = defineProps({
  titleText: String,
  svgIcon: String
})

</script>

<style lang="css" scoped>


</style>