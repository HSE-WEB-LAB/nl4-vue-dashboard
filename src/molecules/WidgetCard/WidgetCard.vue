<template>
  <div
      class="widgetCard"
      :style="{backgroundColor: `#${data.color}`, opacity: widgetOpacity}"
  >
    <svg-view
        :svg-url="data.icon"
        class-name="widgetCardIcon"
    />
    <div class="textContainer">
      <p class="widgetCardValue">
        {{ data.value + data.metrics }}
      </p>
      <p class="valueName">
        {{ data.name }}
      </p>
      <p class="additionalInfo">
        {{ data.additionalInfo }}
      </p>
    </div>

  </div>
</template>

<script setup>
import SvgView from "@/atoms/SvgView/SvgView.vue";
import {onMounted, ref} from "vue";

const widgetOpacity = ref(0)

defineProps({
  data: Object,
})

onMounted(() => {
  const interval = setInterval(() => {
    widgetOpacity.value += 0.01
    if(widgetOpacity.value >= 1) clearInterval(interval)
  }, 5)
});
</script>