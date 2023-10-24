<template>
  <div class="topBar">
    <custom-title>
      DASHBOARD
    </custom-title>
    <search-line v-model="searchString"/>
    {{ searchString }}
  </div>
</template>

<script setup>
import CustomTitle from "@/atoms/CustomTitle/CustomTitle.vue";
import SearchLine from "@/molecules/SearchLine/SearchLine.vue";
import {ref} from "vue";

const searchString = ref('')

</script>

<style lang="css" scoped>

</style>