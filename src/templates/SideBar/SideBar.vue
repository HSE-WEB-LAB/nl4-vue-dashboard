<template>
  <div class="sidebar">
    <nav-title
        title-text="Dabang"
        :svg-icon="asd"
    />
    <side-bar-buttons
        :nav-data="navData"
    />
  </div>
</template>

<script setup>
import SideBarButtons from "@/molecules/SideBarButtons/SideBarButtons.vue";
import NavTitle from "@/molecules/NavTitle/NavTitle.vue";
import asd from '@/atoms/Svg/dummy logo.svg'

const navData = [
  {
    text: 'Dashboard',
    url: '/'
  },
  {
    text: 'Leaderboard',
    url: '/leaderboard'
  },
  {
    text: 'Order',
    url: '/order'
  },
  {
    text: 'Products',
    url: '/products'
  },
  {
    text: 'Sales Report',
    url: '/sales-report'
  },
]

</script>

<style lang="css" scoped>

</style>