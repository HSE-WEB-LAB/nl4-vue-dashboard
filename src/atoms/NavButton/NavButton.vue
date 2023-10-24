<template>
  <button
    :class="'navButton' + (isActive ? ' active' : '')"
    @click="$emit('click')"
    class="sideBarButton"
  >
    <div class="wrapper">
      <div v-if="imgSrc">
        <img :src="imgSrc" alt="icon">
      </div>

      <p class="buttonText">
        <slot/>
      </p>

    </div>
  </button>
</template>

<script setup>

const {imgSrc, isActive} = defineProps({
  imgSrc: String,
  isActive: Boolean,
})

const emit = defineEmits(['click']);

</script>

<style lang="css" scoped>

</style>