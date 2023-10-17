<template>
  <button
    :class="'navButton' + (isActive ? ' active' : '')"
    @click="$emit('clock')"
  >
    <div>
      <div>
        <img :src="imgSrc" alt="icon">
      </div>

      <slot/>
    </div>
  </button>
</template>

<script setup>

const {imgSrc, isActive} = defineProps({
  imgSrc: String,
  isActive: Boolean,
})

const emit = defineEmits(['clock'])

</script>

<style lang="scss" scoped>

</style>