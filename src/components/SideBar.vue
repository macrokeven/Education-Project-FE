<template>

  <t-menu
      v-model:expanded="expanded"
      theme="light"
      width="100%"
      :defaultValue="currentPath"
      :value="selectPath"
      @onChange="changePath"
  >
    <t-menu-item value="Home" @click="changePath('Home')">
      <template #icon>
        <AppIcon />
      </template>
      首页
    </t-menu-item>
    <t-submenu>
      <template #icon>
        <UserCircleIcon />
      </template>
      <template #title>
        <span>学生中心</span>
      </template>
      <t-menu-item value="ManageStudent" @click="changePath('ManageStudent')"> 管理学生</t-menu-item>
      <t-menu-item value="3-3"> 成绩追踪</t-menu-item>
    </t-submenu>
    <t-submenu value="4">
      <template #icon>
        <ViewModuleIcon />
      </template>
      <template #title>
        <span>课程中心</span>
      </template>
      <t-menu-item value="ManageCourse" @click="changePath('ManageCourse')">課程管理</t-menu-item>
    </t-submenu>
    <t-submenu value="5">
      <template #icon>
        <ViewModuleIcon />
      </template>
      <template #title>
        <span>模擬上課</span>
      </template>
      <t-menu-item value="SimulateCourse" @click="changePath('SimulateCourse')">學生進課</t-menu-item>
      <t-menu-item value="CurrentCourseManage" @click="changePath('CurrentCourseManage')">實時課程管理</t-menu-item>
      <t-menu-item value="CurrentCourseDetail" @click="changePath('CurrentCourseDetail')">實時課程詳情</t-menu-item>
    </t-submenu>
    <t-menu-item value="edit1">
      <template #icon>
        <SettingIcon />
      </template>
      系统设置
    </t-menu-item>
  </t-menu>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Icon as tIcon,AppIcon,UserCircleIcon,ViewModuleIcon,SettingIcon} from 'tdesign-icons-vue-next';
import {MenuValue} from 'tdesign-vue-next';

@Options({
  components: {
    tIcon,
    AppIcon,
    UserCircleIcon,
    ViewModuleIcon,
    SettingIcon
  },
  computed: {
    currentPath() {
      return this.$route.path.replace("/", "");
    }
  },
  props: {},
  methods: {
    changePath(path: string) {
      this.selectPath = path;
      this.$router.push(path)
    }
  },
  data() {
    return {
      expanded: [],
      selectPath: ""
    }
  }
})
export default class BottomBar extends Vue {
}
</script>
<style scoped src="./../assets/css/BottomBar.css"></style>