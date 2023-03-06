<template>
  <div class="container">
    <div class="l-card">
      <div class="l-row">
        <div class="card-title">
          音樂課 週三 09:00 - 10:00
        </div>

      </div>
      <div class="card-l-row">
        <t-space align="center" direction="vertical" size="small" class="t-progress-demo-inner">
          <div class="t-progress-demo-margin">當前入課人數</div>
          <t-progress theme="circle" :label="'8/40'" :percentage="(8/40)*100" :status="'success'"/>
        </t-space>
        <t-space align="center" direction="vertical" size="small" class="t-progress-demo-inner"
                 style="margin-left: 20px">
          <div class="t-progress-demo-margin">評分進展</div>
          <t-progress theme="circle" :label="'6/40'" :percentage="(6/40)*100"/>
        </t-space>

        <t-button theme="primary" style="margin-left: 20px" @click="$router.push('SimulateCourse')">
          <template #icon>
            <calendar-icon/>
          </template>
          開始簽到
        </t-button>
      </div>

      <div class="card-l-row">
        <div class="student-avatar-panel">
          <div class="student-avatar-box" v-for="(item,index) in studentData" :key="index"
               @click="tipDialogVisible=true">
            <img src="./../../assets/pics/avatar/student-avatar.jpg" class="student-avatar" alt="">
            <div class="avatar-mask"></div>
            <div class="in-course-mask" v-if="item.inCourse">已評分</div>
            <div class="student-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <t-dialog placement="center"
            header=""
            :attach="'body'"
            :visible="tipDialogVisible"
            mode="full-screen"
            :closeBtn="false"
            :cancel-btn="null"
            :confirm-btn="null">

    <template #header>
      <div class="confirm-title">請打分</div>
    </template>

    <template #footer></template>

    <div class="h-container">
      <div class="l-container" style="width: 30%">
        <div class="l-row" style="display: flex;justify-content: center" >
          <img src="./../../assets/pics/avatar/student-avatar.jpg" alt=""  class="student-confirm-photo">
        </div>
      </div>
      <div class="l-container">
        <div class="l-row" style="display: flex;justify-content: center;margin-bottom: 20px;">
          <div class="avatar-name" >馬雨軒</div>
        </div>
        <div class="l-row l-center" style="margin-bottom: 10px;">
          <div class="rate-label">動手能力</div>
          <t-radio-group  default-value="0" size="large" v-model="rateStudentForm.a">
            <t-radio-button :value="i" v-for="i in 10">{{i}}</t-radio-button>
          </t-radio-group>
        </div>

        <div class="l-row l-center" style="margin-bottom: 10px;">
          <div class="rate-label">語言能力</div>
          <t-radio-group  default-value="0" size="large" v-model="rateStudentForm.b">
            <t-radio-button :value="i" v-for="i in 10">{{i}}</t-radio-button>
          </t-radio-group>
          </div>

        <div class="l-row l-center" style="margin-bottom: 10px;">
          <div class="rate-label">表現能力</div>
          <t-radio-group  default-value="0" size="large" v-model="rateStudentForm.c">
            <t-radio-button :value="i" v-for="i in 10">{{i}}</t-radio-button>
          </t-radio-group>
        </div>

        <div class="l-row l-center" style="margin-bottom: 10px;">
          <div class="rate-label">互動能力</div>
          <t-radio-group  default-value="0" size="large" v-model="rateStudentForm.d">
            <t-radio-button :value="i" v-for="i in 10">{{i}}</t-radio-button>
          </t-radio-group>
        </div>

        <div class="l-row" style="justify-content: center;margin-top: 30px;align-items: center">
          <div class="confirm-btn-small c-btn-green" @click="checkIn()">
            確認
          </div>
          <div class="confirm-btn-small c-btn-red" @click="tipDialogVisible=false">
            取消
          </div>
        </div>
      </div>
    </div>

  </t-dialog>


</template>

<script lang="ts">
import LetoyService from "@/utils/LetoyService";
import {CheckIcon, CloseIcon, CalendarIcon} from 'tdesign-icons-vue-next';

import {Options, Vue} from "vue-class-component";
import {Calendar, Search} from "@element-plus/icons-vue";
import {MessagePlugin} from 'tdesign-vue-next';

@Options({
  components: {
    Calendar,
    CheckIcon,
    CloseIcon,
    CalendarIcon
  },
  computed: {},
  data() {
    return {
      a: 0,
      tipDialogVisible: false,
      queryForm: {
        day: 1,
        dayTime: 1,
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
          inCourse: false,
          name: 'Din',
          address: 'No. 189, Grove St, Los Angeles',
          score: 4.5,
          studentId: 405325453,
          grade: 2,
          studentClass: 2
        },
        {
          inCourse: false,
          name: 'Wng',
          address: 'No. 189, Grove St, Los Angeles',
          score: 6.7,
          studentId: 405325123,
          grade: 1,
          studentClass: 3
        }],
      rateStudentForm: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0
      }
    }
  },

  methods: {
    checkIn() {
      MessagePlugin.success('評分成功！');
      this.tipDialogVisible = false;
    },
    bindValue(value: number) {
      console.log(value)
      MessagePlugin.success((value).toString());

    },
    getScoreLevel(score: number) {
      if (score > 7) return "high";
      if (score > 5) return "mid";
      if (score > 0) return "low";
    }
  },
})
export default class CurrentCourseDetail extends Vue {
}

</script>
<style scoped src="../../assets/css/CurrentCourseDetail.css"></style>
<style scoped src="../../assets/css/SimulateCourse.css"></style>
<style>
.t-dialog__ctx .t-dialog__wrap {
}
</style>