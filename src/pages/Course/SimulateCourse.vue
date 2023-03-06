<template>
  <div class="container">
    <div class="l-card">
      <div class="l-row" style="align-items: center">
        <div class="card-title">
          音樂課簽到 進行中
        </div>
        <t-button theme="primary" style="margin-left: 20px" @click="$router.push('CurrentCourseDetail')">
          返回
        </t-button>
        <div class="course-info">
          週三 10:00 am - 11:45 am
        </div>
      </div>
      <div class="card-l-row">
        <div class="course-name">三年級 B班 手工課</div>
        <div class="teacher-name">徐子珊</div>
        <div class="teacher-name" style="margin: 0;color: #000000">老師</div>
      </div>
      <div class="card-l-row">
        <div class="student-avatar-panel">
          <div class="student-avatar-box" v-for="(item,index) in studentData" :key="index"
               @click="visibleOverflow=true">
            <img src="./../../assets/pics/avatar/student-avatar.jpg" class="student-avatar" alt="">
            <div class="avatar-mask"></div>
            <div class="in-course-mask" v-if="item.inCourse">已經上課</div>
            <div class="student-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <t-dialog placement="center" header="" :visible="visibleOverflow"
            mode="full-screen"
            :closeBtn="false"
            :cancel-btn="null"
            :confirm-btn="null">

    <template #header>
      <div class="confirm-title">請問這是你嗎？</div>
    </template>

    <template #footer></template>

    <div class="l-container">
      <div class="l-row" style="display: flex;justify-content: center">
        <img src="./../../assets/pics/avatar/student-avatar.jpg" alt="" class="student-confirm-photo">
      </div>
      <div class="l-row" style="display: flex;justify-content: center">
        <div class="avatar-name">馬雨軒</div>
      </div>
      <div class="l-row" style="justify-content: center;margin-top: 30px;align-items: center">
        <div class="confirm-btn c-btn-green" @click="checkIn()">
          <CheckIcon style="color: #ffffff" size="80px"/>
        </div>
        <div class="confirm-btn c-btn-red" @click="visibleOverflow=false">
          <CloseIcon style="color: #ffffff" size="80px"/>
        </div>
      </div>
    </div>
  </t-dialog>

</template>

<script lang="ts">
import LetoyService from "@/utils/LetoyService";
import {CheckIcon, CloseIcon,ArrowLeftIcon} from 'tdesign-icons-vue-next';
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/popover/style/css'
import 'element-plus/es/components/table-column/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/tag/style/css'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/select/style/css'
import 'element-plus/es/components/option/style/css'
import {
  ElMessage,
  ElTable,
  ElTableColumn,
  ElPopover,
  ElInput,
  ElTag,
  ElButton,
  ElSelect,
  ElOption,
  ElLoading,
} from 'element-plus'
import {Options, Vue} from "vue-class-component";
import {Search,} from "@element-plus/icons-vue";
import {MessagePlugin} from 'tdesign-vue-next';
@Options({
  computed: {
    Search() {
      return Search
    }
  },
  components: {
    ArrowLeftIcon,
    ElLoading,
    ElTable,
    ElTableColumn,
    ElPopover,
    ElButton,
    ElTag,
    ElInput,
    ElSelect,
    ElOption,
    CheckIcon,
    CloseIcon,
  },
  data() {
    return {
      visibleOverflow: false,
      queryForm: {
        grade: 0,
        studentClass: 0,
        gender: 0
      },
      studentClassList: {
        1: "A班",
        2: "B班",
        3: "C班"
      },
      gradeList: {
        1: "一年級",
        2: "二年級",
        3: "三年級"
      },
      studentData: [
        {
          inCourse: false,
          name: 'Jack',
          address: 'No. 189, Grove St, Los Angeles',
          score: 9.8,
          studentId: 405325667,
          grade: 1,
          studentClass: 3
        },
        {
          inCourse: false,
          name: 'Marry',
          address: 'No. 189, Grove St, Los Angeles',
          score: 2.3,
          studentId: 405325666,
          grade: 3,
          studentClass: 1
        },
        {
          inCourse: true,
          name: 'Din',
          address: 'No. 189, Grove St, Los Angeles',
          score: 4.5,
          studentId: 405325453,
          grade: 2,
          studentClass: 2
        },
        {
          inCourse: true,
          name: 'Wng',
          address: 'No. 189, Grove St, Los Angeles',
          score: 6.7,
          studentId: 405325123,
          grade: 1,
          studentClass: 3
        },
        {
          inCourse: true,
          name: 'Jack',
          address: 'No. 189, Grove St, Los Angeles',
          score: 9.8,
          studentId: 405325667,
          grade: 1,
          studentClass: 3
        },
        {
          inCourse: false,
          name: 'Marry',
          address: 'No. 189, Grove St, Los Angeles',
          score: 2.3,
          studentId: 405325666,
          grade: 3,
          studentClass: 1
        },
        {
          inCourse: true,
          name: 'Din',
          address: 'No. 189, Grove St, Los Angeles',
          score: 4.5,
          studentId: 405325453,
          grade: 2,
          studentClass: 2
        },
        {
          inCourse: true,
          name: 'Wng',
          address: 'No. 189, Grove St, Los Angeles',
          score: 6.7,
          studentId: 405325123,
          grade: 1,
          studentClass: 3
        },
        {
          inCourse:false,
          name: 'Jack',
          address: 'No. 189, Grove St, Los Angeles',
          score: 9.8,
          studentId: 405325667,
          grade: 1,
          studentClass: 3
        },
        {
          inCourse:false,
          name: 'Marry',
          address: 'No. 189, Grove St, Los Angeles',
          score: 2.3,
          studentId: 405325666,
          grade: 3,
          studentClass: 1
        },
        {
          inCourse:false,
          name: 'Din',
          address: 'No. 189, Grove St, Los Angeles',
          score: 4.5,
          studentId: 405325453,
          grade: 2,
          studentClass: 2
        },
        {
          inCourse:false,
          name: 'Wng',
          address: 'No. 189, Grove St, Los Angeles',
          score: 6.7,
          studentId: 405325123,
          grade: 1,
          studentClass: 3
        }],
      studentName: ""
    }
  },

  methods: {
    checkIn() {
      MessagePlugin.success('簽到成功！');
      this.visibleOverflow = false;
    }
  },
})
export default class SimulateCourse extends Vue {
}

</script>
<style scoped src="../../assets/css/SimulateCourse.css"></style>
<style>
.t-dialog__ctx .t-dialog__wrap {
}
</style>