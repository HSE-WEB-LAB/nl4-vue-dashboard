<template>
  <div>
    <input
        type="search"
        @input="updateValue"
        :value="modelValue"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>

</style>