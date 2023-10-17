<template>
  <div class="layout">
    <top-bar />
    <side-bar/>
    <router-view />
    layout
  </div>
</template>

<script setup>
import SideBar from "@/templates/SideBar/SideBar.vue";
import TopBar from "@/templates/TopBar/TopBar.vue";

</script>

<style lang="css">

</style>