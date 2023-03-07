<template>
  <div class="l-container">
    <div class="l-card" style="position: relative;background: #F7FAFC">
<!--      <img src="./../assets/pics/card-bg.png" class="card-bg" alt="">-->
      <div class="l-row" style="z-index: 2">

          <div class="home-card">
            <t-space align="center" direction="vertical" size="small" class="t-progress-demo-inner">
              <t-progress theme="circle" :label="'6/40'" :percentage="(6/40)*100"/>
            </t-space>
            <div class="l-col">
              <div class="progress-title" style="color: #c2c2c2;font-size: 20px;margin-top: 20px;">每日工作</div>
              <div class="progress-title">未完成量</div>
            </div>
          </div>

          <div class="home-card">
            <t-space align="center" direction="vertical" size="small" class="t-progress-demo-inner">
              <t-progress theme="circle" :label="'45%'" :status="'success'" :percentage="(45/100)*100"/>
            </t-space>
            <div class="l-col">
              <div class="progress-title" style="color: #c2c2c2;font-size: 20px;margin-top: 20px;">教學任務</div>
              <div class="progress-title">課程進度</div>
            </div>
          </div>

        <div class="home-card">
          <t-space align="center" direction="vertical" size="small" class="t-progress-demo-inner">
            <t-progress theme="circle" :label="'3 / 10'" :status="'warning'" :percentage="(30/100)*100"/>
          </t-space>
          <div class="l-col">
            <div class="progress-title" style="color: #c2c2c2;font-size: 20px;margin-top: 20px;">提示</div>
            <div class="progress-title">待處理事件</div>
          </div>
        </div>
      </div>
      <div class="l-row" style="margin: 0 20px 20px 20px">
        <div class="chart-card beauty-black">
          <div ref="scoreChart" style="width: 400px;height: 300px;margin: 10px;"></div>
        </div>
        <div class="chart-card">
          <div ref="jobChart" style="width: 400px;height: 350px;margin: 10px;"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import * as echarts from 'echarts';

@Options({
  data() {
    return {
      scoreChart: null,
      scoreChartOption: {
        textStyle:{
          fontSize: 12,
          color: "#ffffff",
        },
        title: {
          text: '上週平均每日工作量',
          textStyle:{
            fontSize: 18,
            fontWeight: "bold",
            color: "#ffffff",
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      },
      jobChart:null,
      jobChartOption:{
        title: {
          text: '上週課程情況',
          textStyle:{
            fontSize: 18,
            fontWeight: "bold",
            color: "#000000",
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '6%',
          left: 'center'
        },
        series: [
          {
            name: '上課情況',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '音樂課' },
              { value: 735, name: '活動課' },
              { value: 580, name: '國學課' },
              { value: 484, name: '體活課' },
              { value: 300, name: '英文課' }
            ]
          }
        ]
      },
      studentChart:null,
      studentChartOption:{

      }
    }
  },
  components: {},
  mounted() {
    this.drawChart();
    this.drawJobChart();
  },
  methods: {
    drawChart() {
      if (this.scoreChart !== null) {
        this.scoreChart.dispose();
      }
      let option = this.scoreChartOption;
      this.scoreChart = echarts.init(this.$refs.scoreChart);
      this.scoreChart.setOption(option);
    },
    drawJobChart() {
      if (this.jobChart !== null) {
        this.jobChart.dispose();
      }
      let option = this.jobChartOption;
      this.jobChart = echarts.init(this.$refs.jobChart);
      this.jobChart.setOption(option);
    },
  },
  computed: {}
})
export default class Home extends Vue {
}
</script>
<style scoped src="./../assets/css/Home.css"></style>