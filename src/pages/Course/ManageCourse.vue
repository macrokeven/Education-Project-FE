<template>
  <div class="container">
    <div class="l-card">
      <div class="l-row">
        <div class="card-title">
          管理課程
        </div>
      </div>
      <div class="card-l-row">
        <el-input
            v-model="studentName"
            style="width: 350px"
            placeholder="輸入課程名..."
            :prefix-icon="Search"
        />
        <t-button theme="primary" style="margin-left: 20px" >
          <template #icon>
            <search-icon/>
          </template>
          搜索課程
        </t-button>
      </div>
      <div class="l-row">
        <t-button theme="primary" style="margin-left: 20px" @click="$router.push('SimulateCourse')">
          <template #icon>
            <add-icon/>
          </template>
          新增課程
        </t-button>
      </div>
      <div class="card-l-row">
        <el-select v-model="queryForm.day" class="m-2" placeholder="Select">
          <el-option label="週一" :value="1"/>
          <el-option label="週二" :value="2"/>
          <el-option label="週三" :value="3"/>
          <el-option label="週四" :value="4"/>
          <el-option label="週五" :value="5"/>
        </el-select>
        <el-select v-model="queryForm.dayTime" style="margin-left: 5px" placeholder="Select">
          <el-option label="上午" :value="1"/>
          <el-option label="下午" :value="2"/>
        </el-select>
      </div>

      <div class="l-row">
        <el-table :data="tableData" style="width: calc( 100% - 40px );margin: 10px 20px" :border="true">
          <el-table-column label="課程名稱" width="100" align="center" prop="name"></el-table-column>
          <el-table-column label="講師" prop="teacherName" width="100" align="center" ></el-table-column>
          <el-table-column label="年級" prop="grade" width="100" align="center" :sortable="true">
            <template #default="scope">
              {{ gradeList[scope.row.grade] }}
            </template>
          </el-table-column>
          <el-table-column label="班級" prop="studentClass" width="100" align="center" :sortable="true">
            <template #default="scope">
              {{ studentClassList[scope.row.studentClass] }}
            </template>
          </el-table-column>

          <el-table-column label="時間段" prop="studentClass" width="150" align="center" >
            <template #default="scope">
              08:00 - 09:00
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button size="small" type="primary" @click="openCurrentCourse">編輯</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import LetoyService from "@/utils/LetoyService";
import {CheckIcon,CloseIcon,AddIcon,SearchIcon} from 'tdesign-icons-vue-next';
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
import { MessagePlugin } from 'tdesign-vue-next';

@Options({
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
    CloseIcon,
    AddIcon,
    SearchIcon
  },
  computed: {
    Search() {
      return Search
    }
  },
  data() {
    return {
      visibleOverflow: false,
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
      tableData: [
        {
          inCourse:false,
          name: '音樂課',
          address: 'No. 189, Grove St, Los Angeles',
          score: 9.8,
          teacherName: "T Jack",
          grade: 1,
          studentClass: 3
        },
        {
          inCourse:false,
          name: '表演課',
          address: 'No. 189, Grove St, Los Angeles',
          score: 2.3,
          teacherName: "T Jack",
          grade: 3,
          studentClass: 1
        },
        {
          inCourse:true,
          name: '手工課',
          address: 'No. 189, Grove St, Los Angeles',
          score: 4.5,
          teacherName: "T Jack",
          grade: 2,
          studentClass: 2
        },
        {
          inCourse:true,
          name: '語言課',
          address: 'No. 189, Grove St, Los Angeles',
          score: 6.7,
          teacherName: "T Jack",
          grade: 1,
          studentClass: 3
        }],
      studentName: ""
    }
  },

  methods: {
    openCurrentCourse(){
      this.$router.push("CurrentCourseDetail")
    }
  },
})
export default class ManageCourse extends Vue {
}

</script>
<style scoped src="../../assets/css/CurrentCourseManage.css"></style>

<style>
.t-dialog__ctx .t-dialog__wrap{}
</style>