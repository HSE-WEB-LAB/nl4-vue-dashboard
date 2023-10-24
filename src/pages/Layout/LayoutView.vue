<template>
  <div class="layout">
    <top-bar />
    <side-bar/>
    <div class="layoutWrapper">
      <router-view />
    </div>

  </div>
</template>

<script setup>
import SideBar from "@/templates/SideBar/SideBar.vue";
import TopBar from "@/templates/TopBar/TopBar.vue";

</script>

<style lang="css">

</style>