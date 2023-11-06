<template>
  <div class="singleBarContainer">
    <div
        class="singleBar"
        :ref="bar"
        :style="{height: `${currentHeight}px`}"
    >

    </div>
    <div class="tooltip">
      {{ value }}
    </div>
  </div>

</template>

<script setup>
import {onBeforeMount, onMounted, ref} from "vue";
const bar = ref()
const targetHeight = ref(0);
const currentHeight = ref(0);
const maxHeight = 210;

const props = defineProps({
  value: Number,
  maxValue: Number,
})

onBeforeMount(() => {
  targetHeight.value = props.value / props.maxValue * maxHeight;
});

onMounted(() => {
  const interval = setInterval(() => {
    currentHeight.value += 2;
    if(currentHeight.value >= targetHeight.value) {
      clearInterval(interval);
      currentHeight.value = targetHeight.value;
    }
  }, 4);
});

</script>