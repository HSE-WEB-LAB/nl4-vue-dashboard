<template>
  <div class="barChart">
    <p class="chartTitle">
      {{ name }}
    </p>
    <div class="graphContainer">
      <bar-chart-background :background-shards="backgroundShards"/>
      <chart-bars
        :data="data"
        :max-value="maxValueBar"
      />
    </div>

  </div>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";
import BarChartBackground from "@/molecules/BarChartBackground/BarChartBackground.vue";
import ChartBars from "@/molecules/ChartBars/ChartBars.vue";

const backgroundShards = ref([]);
const maxValueBar = ref(0)

const props = defineProps({
  data: Array,
  name: String
})

onBeforeMount(() => { //поиск наибольшего значения для отображения
  let maxValue = props.data[0].value;
  props.data.forEach(({value}) => {
    if(value > maxValue) maxValue = value;
  })
  if(maxValue < 10){ //опционально
    maxValue = 10;
  }
  else{
    while(maxValue % 10 !== 0){
      maxValue -= 1;
    }
  }
  maxValueBar.value = maxValue;
  shardsGenerator(maxValue)
})

const shardsGenerator = (maxValue) => {
  let startValue = maxValue / 4;
  for (let i = 4; i>=0; i--)
    backgroundShards.value.push(startValue * i);
};

</script>