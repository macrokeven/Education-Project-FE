<template>
  <div class="container">
<<<<<<< HEAD
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
=======
    <!--    <button @click="playMusic">123</button>-->
    <div class="less-container">
      <div class="card" v-for="(item,index) in roomInfoList" :key="index">
        <div class="l-row mt-1" style="height: 50px;line-height: 50px;align-items: center">
          <div class="title">{{ item.name }}</div>
          <div class="title-attr">{{
              (parseInt(item.targetTime[0] + item.targetTime[1]) > 0 ? (item.targetTime[0] === '0' ? '' : item.targetTime[0]) + item.targetTime[1] + '小时' : '') +
              (parseInt(item.targetTime[3] + item.targetTime[4]) > 0 ? (item.targetTime[3] === '0' ? '' : item.targetTime[3]) + item.targetTime[4] + '分钟' : '')
            }}
          </div>
          <div @click="deleteRoom(item.name,item.id)" class="del-icon-box">
            <img src="./../assets/icons/x.svg" alt="">
          </div>
        </div>
        <div class="l-row mt-1" style="height: 50px;line-height: 50px;">
          <!--        <div class="describe c-blue">剩余</div>-->
          <div class="input-time" :class="{'c-red':item.timeUp,'c-blue':item.running}">{{ item.remainTime }}</div>
        </div>
        <div class="l-row ml-1" style="height: 70px;line-height: 70px">
          <div v-if="!item.timeUp&&!item.running" class="timer-button" @click="startRoom(item.id)">开始计时</div>
          <div v-if="!item.timeUp&&item.running" class="timer-button stop" @click="pauseRoom(item.id)">停止计时</div>
          <div class="timer-button restart" @click="restartRoom(item.id)">还原计时</div>
          <!--        <div v-if="item.running" class="timer-button stop" @click="stopCountingTime(item)">另续时间</div>-->
          <div v-if="!item.running" class="timer-button restart" @click="openResetBox(item)">重设时间</div>
        </div>
>>>>>>> 98ff2c5984f51d25483fcda57216f5cde5efb620
      </div>
    </div>

    <audio src="./../assets/time-tip.mp3" id="eventAudio"></audio>
  </div>
<<<<<<< HEAD

</template>

<script>
import LetoyService from "@/utils/LetoyService";

import {ElMessage, ElIcon, ElMessageBox, ElDialog, ElButton, ElSelect, ElOption} from 'element-plus'
import {Document, Trophy, Suitcase} from '@element-plus/icons-vue'

export default {
  data() {
    return {}
=======
  <el-dialog
      v-model="resetBoxVisible"
      title="重设时间"
      width="80%"
  >
    <div class="l-row" style="height: 50px;line-height: 50px">
      <input type="number" class="input-time" v-model="resetForm.hours"
             style="border: 2px solid #dcdcdc;width: 25%;font-size: 20px"
             maxlength="2"/>
      <div class="input-time-text">:</div>
      <input type="number" class="input-time" v-model="resetForm.minutes"
             style="border: 2px solid #dcdcdc;width: 25%;font-size: 20px"
             maxlength="2"/>
      <div class="input-time-text">:</div>
      <input type="number" class="input-time" v-model="resetForm.seconds"
             style="border: 2px solid #dcdcdc;width: 25%;font-size: 20px"
             maxlength="2"/>

    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="resetBoxVisible = false">取消</el-button>
        <el-button type="primary" @click="resetRoom"
        >修改</el-button
        >
      </span>
    </template>
  </el-dialog>
  <el-dialog
      v-model="musicTips"
      title="提示"
      width="350px"
  >
    <span>请允许播放音乐</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="musicTips = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {Stomp} from "@stomp/stompjs"
import LetoyService from "@/utils/LetoyService";
import {ElMessage, ElMessageBox, ElDialog, ElButton, ElSelect, ElOption} from 'element-plus'
import {Options, Vue} from "vue-class-component";
@Options({
  data() {
    return {
      dataList: [
        {
          name: "一号房间",
          targetTime: "01:00:03",
          id: "12312qwe3",
          startTime: "2022-09-11 09:08:33",
          running: true,
          timeUp: false
        }, {
          name: "二号房间",
          targetTime: "00:10:05",
          id: "12312qwe3",
          startTime: "2022-09-11 09:08:33",
          running: false, timeUp: false

        }, {
          name: "三号房间",
          targetTime: "00:02:00",
          id: "12312qwe3",
          startTime: "2022-09-11 09:08:33",
          running: false, timeUp: false

        },
      ],
      roomList: [],
      roomInfoList: [],
      resetBoxVisible: false,
      musicTips: false,
      resetForm: {
        id: "",
        hours: "",
        minutes: "",
        seconds: ""
      },
      heartCheck: undefined
    }
>>>>>>> 98ff2c5984f51d25483fcda57216f5cde5efb620
  },
  components: {
    ElDialog,
    ElButton,
    ElSelect,
    ElOption,
<<<<<<< HEAD
    ElMessage,
    ElIcon,
    Document,
    Trophy,
    Suitcase
  },
  mounted() {

  },
  methods: {}
=======
  },
  mounted() {
    if(!sessionStorage.getItem("systemToken")){
      this.$router.push("/");
      this.$ElTip({
        title: '错误',
        message: '请登录',
        type: 'error',
      })
    }
    let tipMusic = require("./../assets/time-tip.mp3");
    this.initWS();
    let audio = document.getElementById('eventAudio');
    if (audio) {
      audio.setAttribute("src", tipMusic);
    }
  },
  methods: {
    countTime(room: any) {
      let time = room.time
      let h1 = parseInt(time[0])
      let h2 = parseInt(time[1])
      let m1 = parseInt(time[3])
      let m2 = parseInt(time[4])
      let s1 = parseInt(time[6])
      let s2 = parseInt(time[7])
      room.timer = setInterval(() => {
        if (s1 === 0 && s2 === 1 && h1 === 0 && h2 === 0 && m1 === 0 && m2 === 0) {
          s2 = 0
          room.timeUp = true
          clearInterval(room.timer)
        } else {
          if (s2 > 0) {
            s2 = s2 - 1
          } else {
            if (s1 > 0) {
              s1 = s1 - 1
              s2 = 9
            } else {
              if (m2 > 0) {
                m2 = m2 - 1
                s2 = 9
                s1 = 5
              } else {
                if (m1 > 0) {
                  m1 = m1 - 1
                  m2 = 9
                  s2 = 9
                  s1 = 5
                } else {
                  if (h2 > 0) {
                    h2 = h2 - 1
                    m1 = 5
                    m2 = 9
                    s2 = 9
                    s1 = 5
                  } else {
                    if (h1 > 1) {
                      h1 = h1 - 1
                      h2 = 9
                      m1 = 5
                      m2 = 9
                      s2 = 9
                      s1 = 5
                    }
                  }
                }
              }
            }
          }
        }
        room.time = h1.toString() + h2.toString() + ":" + m1.toString() + m2.toString() + ":" + s1.toString() + s2.toString()
      }, 1000)
    },
    startCountingTime(timeObj: any) {
      if (!timeObj.running) {
        timeObj.running = true;
        this.countTime(timeObj);
      }
    },
    pauseRoom(id: string) {
      LetoyService.authRequest("/Room/PauseRoom", {id: id}, {})
          .then((res: any) => {
            if (res.status === 0) {
              this.resetBoxVisible = false
              if (res.status === 0) {
                this.$ElTip({
                  title: '成功',
                  message: '计时已暂停',
                  type: 'success',
                })
              }
            }
          })
    },
    startRoom(id: string) {
      LetoyService.authRequest("/Room/StartRoom", {id: id}, {})
          .then((res: any) => {
            if (res.status === 0) {
              this.resetBoxVisible = false
              if (res.status === 0) {
                this.$ElTip({
                  title: '成功',
                  message: '开始计时',
                  type: 'success',
                })
              }
            }
          })
    },
    deleteRoom(name: any, id: any) {
      ElMessageBox.confirm(
          '您确定要删除 ' + name + ' 吗？',
          '提示',
          {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          },
      ).then(() => {
        LetoyService.authRequest("/Room/DeleteRoom", {id: id}, {})
            .then((res: any) => {
              if (res.status === 0) {
                this.resetBoxVisible = false
                if (res.status === 0) {
                  this.$ElTip({
                    title: '成功',
                    message: '删除成功',
                    type: 'success',
                  })
                }
              }
            })
      })
    },
    restartRoom(id: string) {
      LetoyService.authRequest("/Room/RestartRoom", {id: id}, {})
          .then((res: any) => {
            if (res.status === 0) {
              this.$ElTip({
                title: '成功',
                message: '还原成功',
                type: 'success',
              })
            }
          })
    },
    resetRoom() {
      let targetTime = (Number(this.resetForm.hours) < 10 ? ("0" + Number(this.resetForm.hours)) : this.resetForm.hours) + ":" +
          (Number(this.resetForm.minutes) < 10 ? ("0" + Number(this.resetForm.minutes)) : this.resetForm.minutes) + ":" +
          (Number(this.resetForm.seconds) < 10 ? ("0" + Number(this.resetForm.seconds)) : this.resetForm.seconds)
      LetoyService.authRequest("/Room/ResetRoom", {id: this.resetForm.id, targetTime}, {})
          .then((res: any) => {
            if (res.status === 0) {
              this.resetBoxVisible = false
              if (res.status === 0) {
                this.$ElTip({
                  title: '成功',
                  message: '重设成功',
                  type: 'success',
                })
              }
            }
          })
    },
    openResetBox(item: any) {
      this.resetForm.id = item.id
      let times = item.targetTime.split(":")
      this.resetForm.hours = times[0]
      this.resetForm.minutes = times[1]
      this.resetForm.seconds = times[2]
      this.resetBoxVisible = true;
    },
    convertDataToRoom(dataList: any) {
      this.roomList = []
      dataList.map((item: any) => {
        let roomObj = {
          id: item.id,
          time: item.targetTime,
          name: item.name,
          targetTime: item.targetTime,
          running: item.running,
          timeUp: item.timeUp,
          timer: setInterval(() => {
          }),
        };
        this.roomList.push(roomObj)
      })
      this.roomList.map((room: any) => {
        if (room.running) {
          this.countTime(room)
        }
      })
    },
    calTime(room: any) {
      let now = new Date();
      let a2 = Date.parse(room.targetTime);
      const start = new Date(a2).getTime();
      const end = new Date(now).getTime();
      const milliseconds = Math.abs(end - start).toString()
      const seconds = parseInt(milliseconds) / 1000;
      const minutes = seconds / 60;
      const hours = minutes / 60;
      const days = hours / 24;
      const time = Math.floor(days) + "天:" + Math.floor(hours % 24) + "小时:" + Math.floor(minutes % 60) + "分钟:" + Math.floor(seconds % 60) + "秒";
      room.targetTime = Math.floor(hours % 24) + ":" + Math.floor(minutes % 60) + ":" + Math.floor(seconds % 60);
      console.log(time)
      return room;
    },
    initWS: function () {
      // let socket = new SockJS("/api/ws")
      const stompClient = Stomp.over(function () {
        return new WebSocket("ws://101.42.31.172:8111/ws?wsToken="+sessionStorage.getItem("systemToken"))
      });
      stompClient.connect({}, this.onConnected)
      this.stompClient = stompClient;
      this.stompClient.debug = function (msg: string) {
      };
      let that = this;
      this.heartCheck = {
        timeout: 15000,
        timeoutObj: null,
        serverTimeoutObj: null,
        reset: function () {
          clearTimeout(this.timeoutObj);
          clearInterval(this.serverTimeoutObj);
          return this;
        },
        start: function () {
          let self = this;
          this.timeoutObj = setTimeout(function () {
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
            that.stompClient.send("/app/chat.sendUToUMessage", {}, JSON.stringify({
              content: 'client send keepalive message!',
              type: 9
            }))
            self.serverTimeoutObj = setInterval(function () {
              that.stompClient.send("/app/chat.sendUToUMessage", {}, JSON.stringify({
                content: 'client send keepalive message!',
                type: 9
              }))
            }, self.timeout);
          }, this.timeout);
        }
      };

    },
    onConnected() {
      this.stompClient.subscribe("/topic/public", this.onMessage);
      this.heartCheck.reset().start();
      // this.stompClient.send("/app/chat.sendMessage",{},JSON.stringify({wsId:'hello'}))
    },
    sendMessage() {
      this.stompClient.send("/app/chat.sendUToUMessage", {}, JSON.stringify({
        fromId: "12",
        toId: "123",
        content: "asdas"
      }))
    },
    onMessage(msg: any) {
      this.roomInfoList = JSON.parse(msg.body).content;
      for (let i in this.roomInfoList) {
        if (this.roomInfoList[i].timeUp) {
          this.playMusic(true);
        }
      }
    },
    playMusic(flag: boolean) {
      if (flag) {
        let audio: any = document.getElementById('eventAudio');
        audio.play().then((_: any) => {
          // Autoplay started!
        }).catch((error: any) => {
          this.musicTips = true;
        });
      }

    }
  }
})

export default class HomePage extends Vue {
>>>>>>> 98ff2c5984f51d25483fcda57216f5cde5efb620
}

</script>
<style scoped src="./../assets/css/HomePage.css"></style>