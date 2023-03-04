<template>
  <div class="container">
    <div class="l-card">
      <div class="l-row">
        <div class="card-title">
          查看学生信息
        </div>
      </div>
      <div class="l-row">
        <el-table :data="tableData" style="width: 100%;margin: 0 20px" :border="true" >
          <el-table-column label="學生姓名" width="100" align="center">
            <template #default="scope">
              <el-popover :effect="'light'" trigger="hover" placement="top" width="auto">
                <template #default>
                  <div>name: {{ scope.row.name }}</div>
                  <div>address: {{ scope.row.address }}</div>
                </template>
                <template #reference>
                  <el-tag>{{ scope.row.name }}</el-tag>
                </template>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="當前平均成績" width="120" align="center">
            <template #default="scope">

                <el-tag v-if="scope.row.score > 9" class="ml-2">{{ scope.row.score }}</el-tag>
                <el-tag v-if="(scope.row.score >= 8)&&(scope.row.score < 9)" class="ml-2" type="success">
                  {{ scope.row.score }}
                </el-tag>
                <el-tag v-if="(scope.row.score >= 7)&&(scope.row.score < 8)" class="ml-2" type="warning">
                  {{ scope.row.score }}
                </el-tag>
                <el-tag v-if="(scope.row.score >= 6)&&(scope.row.score < 7)" class="ml-2" type="danger">
                  {{ scope.row.score }}
                </el-tag>
                <el-tag v-if="scope.row.score <6" class="ml-2" type="success">{{ scope.row.score }}</el-tag>

            </template>
          </el-table-column>

          <el-table-column label="Operations">
            <template #default="scope">
              <el-button size="small"
              >Edit
              </el-button
              >
              <el-button
                  size="small"
                  type="danger"
              >Delete
              </el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import LetoyService from "@/utils/LetoyService";
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/popover/style/css'
import 'element-plus/es/components/table-column/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/tag/style/css'
import {
  ElMessage,
  ElTable,
  ElTableColumn,
  ElPopover,
  ElMessageBox,
  ElTag,
  ElButton,
  ElSelect,
  ElOption,
  ElLoading
} from 'element-plus'
import {Options, Vue} from "vue-class-component";

@Options({
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          score: 9.8
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          score: 2.3
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          score: 4.5
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          score: 6.7
        }]
    }
  },
  components: {
    ElLoading,
    ElTable,
    ElTableColumn,
    ElPopover,
    ElButton,
    ElTag
  },
  methods: {},
})
export default class ManageStudent extends Vue {
}

</script>
<style scoped src="./../assets/css/ManageStudent.css"></style>