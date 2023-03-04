<template>
  <div class="l-container">
    <header-bar></header-bar>
<<<<<<< HEAD
    <div class="h-container">
      <div class="l-menu">
        <side-bar></side-bar>
      </div>
      <div class="l-content">
        <router-view></router-view>
      </div>
    </div>

=======
    <div class="l-content">
      <router-view></router-view>
    </div>
<!--    <bottom-bar></bottom-bar>-->
>>>>>>> 98ff2c5984f51d25483fcda57216f5cde5efb620
  </div>
</template>

<script lang="ts">
import HeaderBar from "@/components/HeaderBar.vue";
import SideBar from "@/components/SideBar.vue";
import BottomBar from "@/components/BottomBar.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import 'element-plus/es/components/message-box/style/css'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/select/style/css'
import 'element-plus/es/components/option/style/css'

export default {
<<<<<<< HEAD
  components: {BottomBar, HeaderBar,SideBar}
=======
  components: {HeaderBar, BottomBar }
>>>>>>> 98ff2c5984f51d25483fcda57216f5cde5efb620
};
</script>

<style scoped src="./../assets/css/MainLayout.css"></style>