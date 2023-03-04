<template>
  <div class="container">
    <div class="card blue">
      <div class="l-row l-center" style="height: 100%;justify-content: flex-start">
        <div class="block-name l-center">
          <el-icon :size="35" :color="'#ffffff'">
            <Trophy/>
          </el-icon>
        </div>
        <div class="l-col" style="justify-content: center;align-items: flex-start;margin-left: 20px;">
          <div class="card-title">销售记录</div>
          <div class="card-des">上次更新时间 2023-02-18</div>
        </div>
      </div>
    </div>

    <div class="card green">
      <div class="l-row l-center" style="height: 100%;justify-content: flex-start">
        <div class="block-name l-center">
          <el-icon :size="35" :color="'#ffffff'">
            <Document/>
          </el-icon>
        </div>
        <div class="l-col" style="justify-content: center;align-items: flex-start;margin-left: 20px;">
          <div class="card-title">产品信息</div>
          <div class="card-des">上次更新时间 2023-02-18</div>
        </div>
      </div>
    </div>

    <div class="card red2">
      <div class="l-row l-center" style="height: 100%;justify-content: flex-start">
        <div class="block-name l-center">
          <el-icon :size="35" :color="'#ffffff'">
            <Suitcase/>
          </el-icon>
        </div>
        <div class="l-col" style="justify-content: center;align-items: flex-start;margin-left: 20px;">
          <div class="card-title">工作记录</div>
          <div class="card-des">上次更新时间 2023-02-18</div>
        </div>
      </div>
    </div>

    <audio src="./../assets/time-tip.mp3" id="eventAudio"></audio>
  </div>

</template>

<script>
import LetoyService from "@/utils/LetoyService";

import {ElMessage, ElIcon, ElMessageBox, ElDialog, ElButton, ElSelect, ElOption} from 'element-plus'
import {Document, Trophy, Suitcase} from '@element-plus/icons-vue'

export default {
  data() {
    return {}
  },
  components: {
    ElDialog,
    ElButton,
    ElSelect,
    ElOption,
    ElMessage,
    ElIcon,
    Document,
    Trophy,
    Suitcase
  },
  mounted() {

  },
  methods: {}
}

</script>
<style scoped src="./../assets/css/HomePage.css"></style>