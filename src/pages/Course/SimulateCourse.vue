<template>
  <div class="container">
    <div class="l-card">
      <div class="l-row">
        <div class="card-title">
          模擬上課
        </div>
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
          <div class="student-avatar-box" v-for="i in 40" :key="i" @click="visibleOverflow=true">
            <img src="./../../assets/pics/avatar/student-avatar.jpg" class="student-avatar" alt="">
            <div class="avatar-mask"></div>
            <div class="student-name">馬雨軒</div>
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
    <template #footer>

    </template>
    <div class="l-container">
      <div class="l-row" style="display: flex;justify-content: center">
        <img src="./../../assets/pics/avatar/student-avatar.jpg" alt="" class="student-confirm-photo">
      </div>
      <div class="l-row" style="display: flex;justify-content: center">
        <div class="avatar-name">馬雨軒</div>
      </div>
      <div class="l-row" style="justify-content: center;margin-top: 30px;align-items: center">
        <div class="confirm-btn c-btn-green" @click="visibleOverflow=false">
          <CheckIcon style="color: #ffffff" size="80px"  />
        </div>
        <div class="confirm-btn c-btn-red" @click="visibleOverflow=false">
          <CloseIcon style="color: #ffffff" size="80px"  />
        </div>
      </div>

    </div>

  </t-dialog>
</template>

<script lang="ts">
import LetoyService from "@/utils/LetoyService";
import {CheckIcon,CloseIcon} from 'tdesign-icons-vue-next';
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
import {Search} from "@element-plus/icons-vue";

@Options({
  computed: {
    Search() {
      return Search
    }
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
      tableData: [
        {
          date: '2016-05-03',
          name: 'Jack',
          address: 'No. 189, Grove St, Los Angeles',
          score: 9.8,
          studentId: 405325667,
          grade: 1,
          studentClass: 3
        },
        {
          date: '2016-05-02',
          name: 'Marry',
          address: 'No. 189, Grove St, Los Angeles',
          score: 2.3,
          studentId: 405325666,
          grade: 3,
          studentClass: 1
        },
        {
          date: '2016-05-04',
          name: 'Din',
          address: 'No. 189, Grove St, Los Angeles',
          score: 4.5,
          studentId: 405325453,
          grade: 2,
          studentClass: 2
        },
        {
          date: '2016-05-01',
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
  components: {
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
    CloseIcon
  },
  methods: {},
})
export default class ManageStudent extends Vue {
}

</script>
<style scoped src="../../assets/css/SimulateCourse.css"></style>
<style>
.t-dialog__ctx .t-dialog__wrap{}
</style>