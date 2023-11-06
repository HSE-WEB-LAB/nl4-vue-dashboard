<template>
  <div class="searchLineContainer">
    <svg-view
        :svg-url="magnifying"
        class-name="magnifying"
        class="magnifyingContainer"
        v-if="inputPadding"
    />
    <input
        type="text"
        @input="updateValue"
        :value="modelValue"
        @focus="() => inputPadding = false"
        @blur="(e) => {
          if(e.target.value){
            inputPadding = false;
            return;
          }
          inputPadding = true;
        }"
        placeholder="Search here..."
        :style="{paddingLeft: `${inputPadding ? 55 : 10}px`}"
    />
  </div>
</template>

<script setup>
import magnifying from '@/atoms/Svg/magnifying-glass-solid.svg'
import SvgView from "@/atoms/SvgView/SvgView.vue";
import {ref} from "vue";

const inputPadding = ref(true)

defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>