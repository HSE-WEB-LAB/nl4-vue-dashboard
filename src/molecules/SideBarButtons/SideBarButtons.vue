<template>
  <div class="sideBarButtons">
    <template v-for="(nav, index) in navData" :key="index">
      <nav-button
          :is-active="currentActive === index"
          @click="changeCurrent(index, nav.url)"
      >
        {{ nav.text }}
      </nav-button>
    </template>
  </div>
</template>

<script setup>
import NavButton from "@/atoms/NavButton/NavButton.vue";
import {ref} from "vue";
import router from "@/pages/router";

const currentActive = ref(0)

const {navData} = defineProps({
  navData: Array,
})

const changeCurrent = (i, url) => {
  currentActive.value = i;
  router.push(url)
}

</script>

<style lang="css" scoped>

.sideBarButtons{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

</style>