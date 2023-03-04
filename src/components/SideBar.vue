<template>

  <t-menu
      v-model:expanded="expanded"
      theme="light"
      width="100%"
  >
    <t-menu-item value="dashboard">
      <template #icon>
        <t-icon name="app"/>
      </template>
      首页
    </t-menu-item>
    <t-submenu value="3">
      <template #icon>
        <t-icon name="user-circle"/>
      </template>
      <template #title>
        <span>学生中心</span>
      </template>
      <t-menu-item value="3-2"> 管理学生</t-menu-item>
      <t-menu-item value="3-3"> 成绩追踪</t-menu-item>
      <t-menu-item value="3-4"> 二级菜单内容</t-menu-item>
    </t-submenu>
    <t-submenu value="4">
      <template #icon>
        <t-icon name="view-module"/>
      </template>
      <template #title>
        <span>课程中心</span>
      </template>
      <t-menu-item value="4-1"> 课程管理</t-menu-item>
      <t-menu-item value="4-2"> 二级菜单内容</t-menu-item>
      <t-menu-item value="4-3"> 二级菜单内容</t-menu-item>
    </t-submenu>
    <t-menu-item value="edit1">
      <template #icon>
        <t-icon name="setting"/>
      </template>
      系统设置
    </t-menu-item>
  </t-menu>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Icon as tIcon} from 'tdesign-icons-vue-next';

@Options({
  components: {
    tIcon
  },
  computed: {},
  props: {},
  methods: {

  },
  data() {
    return {
      createRoomBoxVisible: false,
      expanded: [],
      form: {
        name: "",
        hours: '00',
        minutes: '00',
        seconds: '00'
      }
    }
  }
})
export default class BottomBar extends Vue {
}
</script>
<style scoped src="./../assets/css/BottomBar.css"></style>