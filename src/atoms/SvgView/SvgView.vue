<template>
  <div
      ref="svgContainer"
      :class="className"
  >
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const svgContainer = ref()

const {svgUrl, className} = defineProps({
  svgUrl: String,
  className: String
})

onMounted(() => {
  fetch(svgUrl).then(async (data) => {
    const svg = await data.text();
    const svgDom = (new DOMParser()).parseFromString(svg, 'text/html')
    svgDom.body.children[0].classList.add(className)
    svgContainer.value.appendChild(svgDom.body.children[0])
  })
})
</script>

<style lang="css" scoped>

</style>