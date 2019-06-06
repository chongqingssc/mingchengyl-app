<template>
  <div class="pay play-item-model" style="position: relative">
    <mu-appbar style="width: 100%;" color="primary" class="header">
      <mu-button icon slot="left"  :to="{path: 'play', query: {source: source}}">
        <i class="iconfont">&#xe604;</i>
      </mu-button>


      <tab :line-width=2 active-color='#fff' v-model="tabindex" default-color="#d7dce2">
        <tab-item class="vux-center" :selected="tabName === item" v-for="(item, index) in bt" @click="tabName = item"
                  :key="index">{{item}}
        </tab-item>
      </tab>

    </mu-appbar>
    <div class="content playSlider" style="padding-bottom: 1em">

      <swiper v-model="tabindex" class="swiper-container" :show-dots="false" :min-moving-distance='150'>
        <swiper-item>
          <lottery-list></lottery-list>
        </swiper-item>
        <swiper-item>
          <trend-list></trend-list>
        </swiper-item>
        <swiper-item>
          <div class="demo-text">
            <div class="form-pay">
              <p class="form-title">第 {{openTime.issue}} 期还剩 {{openTime.hh}}：{{openTime.mm}}：{{openTime.ss}}
                <i class="iconfont" style="float: right;margin-right: 15px" @click="helpInfo">&#xe67f;</i>
              </p>
              <!-- <p class="form-title"> 838 期</p> -->

              <p style="text-align: center; border-bottom: 1px solid #e0ebf5;padding-bottom: 1em;">
                 <span>{{staticOpenCode.issue}}期</span>
               <span v-for="j in staticOpenCode.code?staticOpenCode.code.split(','):[]" class="code-span">{{j}}</span>
              </p>

              <!-- 已选玩法列表 -->
              <div class="play-game-nav clearfix">
                <mu-tabs :value.sync="currentMethod" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"
                         @change="changeMethod" class="play-game-tab play-move">
                  <mu-tab v-for="(m, idx) in methodSel" :value="m" :key="idx" style="margin-right:12px"
                          class="playgame">{{gameMethods[m].realname}}
                  </mu-tab>
                </mu-tabs>
                <i class="iconfont" @click="openFullscreenDialog(0)"
                   style="cursor: pointer;margin-top: 12px">&#xe601;</i>
              </div>

              <!-- 带复选框 -->
              <template v-if="gameMethods[currentMethod].checkbox">
                <mu-list v-for="(l, i) in gameMethods[currentMethod].checkbox.layout" :key="i"
                         style="text-align: center; padding-top: 15px">
                  <mu-checkbox v-model="checkSel[i]" v-for="b in l.value" :value="b" :label="b" @change="changeCheck"
                               :key="b" style="margin-right: 5px"></mu-checkbox>
                  <mu-divider shallow-inset style="margin-top:10px"></mu-divider>
                </mu-list>
              </template>
              <!-- 核心投注区域 -->
              <template v-if="gameMethods[currentMethod].select">
                <pSelect :lottery="lottery" v-model="currentMethod" :method="currentMethod" :numbers="numbers"
                         ref="selects" @changeNumber="changeNumber"></pSelect>
              </template>
              <!-- 文本框输入 -->
              <template v-if="gameMethods[currentMethod].textarea">
                <mu-text-field v-model="numberText" placeholder="每注号码之间请用一个空格或英文逗号或英文分号隔开（输入的号码会自动排序并去除不合格号码）。"
                               color="#ccc" style="padding:10px" multi-line full-width
                               :rows="5" :max-length="100" @click="test" @change="changeTextarea">

                </mu-text-field>
              </template>

              <!-- 投注操作结果相关 -->
              <div class="play-game-compute">
                <div class="f16 compute-li">
                  <inline-x-number v-model="multiple" @on-change="changeMulti" :min="minMulti" :fillable="fillable"
                                   button-style="square" style="vertical-align: bottom;">

                  </inline-x-number>
                  <span style="margin-right:30px">倍</span>
                  <!-- 金额刻度 -->
                  <span class="money-item" :class="{'currentModel': currentModel === i}" v-for="(item, i) in models"
                        :key="item[0]" @click="changeModel(i)">{{item[1]}}</span>
                </div>

                <!-- 奖金调节 -->
                <mu-row style="padding: 8px 5px;text-align: center;border-bottom: 1px solid #e1e2e4;"
                        class="other-money-model">
                  <mu-col span="2">
                    <mu-row>
                      <mu-col span="6">
                        <div class="word-break">奖金</div>
                        <div class="word-break">调节</div>
                      </mu-col>
                      <mu-col span="6">
                        <mu-button fab small color="" @click="clickPoint(-1)" class="point-button">
                          <mu-icon value="-"></mu-icon>
                        </mu-button>
                      </mu-col>
                    </mu-row>
                  </mu-col>
                  <mu-col span="6">
                    <div class="grid-cell">
                      <mu-slider class="demo-slider" :step="pointStep" :min="pointMin"
                                 :max="pointMax" v-model="pointSel" @change="changePoint"></mu-slider>
                    </div>
                  </mu-col>
                  <mu-col span="4">
                    <div class="grid-cell">
                      <mu-button fab small class="point-button" @click="clickPoint(1)" style="margin-left:10px">
                        <mu-icon value="+"></mu-icon>
                      </mu-button>
                      {{pointSel}}
                    </div>
                  </mu-col>
                </mu-row>

                <!-- 结果显示 -->
                <div class="f16 compute-li" style="padding-top: 0">
                  <p> 共&nbsp;<span class="cr4">{{nums}}</span>
                    <b class="cr4 dib">注</b>&nbsp;,&nbsp;<b class="cr4">{{total}}</b> 元 &nbsp;</p>

                  <p style="margin: 0">
                <span>
                余额:<b class="cr4 dib">{{ parseFloat(person.lotteryBalance).toFixed(2)}}</b> 元
                &nbsp;&nbsp;
                奖金:<b class="cr4 dib">{{bonus[0] + (bonus.length > 1 ? " ~ " + bonus[1] : "")}}</b> 元
              </span>
                  </p>

                </div>

                <div class="compute-li">
                  <!--<mu-button @click="openFullscreenDialog(1)" color="primary">购物车 {{order_list.length}}</mu-button>-->
                  <!--<mu-button @click="addToList(0)" color="primary">添加号码</mu-button>-->
                  <mu-button @click="quickBet" color="primary">立即投注</mu-button>
                </div>
              </div>

            </div>
          </div>
        </swiper-item>
        <swiper-item>
          <record-list :nowIndex="tabindex"></record-list>
        </swiper-item>

      </swiper>


    </div>


    <!-- 全部玩法选择 -->
    <mu-dialog transition="slide-bottom" fullscreen scrollable :open.sync="openFullscreen" class="play-game"
               :padding="ne">
      <mu-appbar color="primary" title="玩法选择" style="position: absolute;top: 0;width: 100%">
        <mu-button slot="left" icon @click="closeFullscreenDialog(0)">
          <i class="iconfont">&#xe604;</i>
        </mu-button>
      </mu-appbar>

      <div style="margin-top:70px ">
        <div v-for="(item, i) in gameLayouts" :key="i">
          <p class="play-title">{{item.title}}</p>
          <mu-list v-for="(line, j) in item.rows[0]" :key="j">
            <mu-list-item>
              <mu-list-item-action style="margin-right: 10px">
                {{line.title}}
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-checkbox :key="'Checkbox ' + index" v-for="(b, index) in line.columns" :value="b"
                             v-model="methodSel"
                             :label="gameMethods[b].showname" style="margin-right:5px"></mu-checkbox>
              </mu-list-item-content>
            </mu-list-item>
            <mu-divider shallow-inset></mu-divider>

          </mu-list>

        </div>
      </div>
    </mu-dialog>

    <!-- 购物车·已选择 -->
    <mu-dialog transition="slide-bottom" fullscreen scrollable :open.sync="openShopCar" class="play-game" :padding="ne">
      <mu-appbar color="primary" title="购物车" style="position: absolute;top: 0;width: 100%">
        <mu-button slot="left" icon @click="closeFullscreenDialog(1)">
          <i class="iconfont">&#xe604;</i>
        </mu-button>
      </mu-appbar>

      <div style="margin-top:70px ">
        <mu-list textline="three-line">
          <mu-list-item avatar button :ripple="false" v-for="d in order_list" :key="d.id">
            <mu-list-item-action>
              <mu-avatar>
                <mu-icon value="folder"></mu-icon>
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{methods[d.type - 1][d.method].name + "(" + d.model.name + ")"}}</mu-list-item-title>
              <mu-list-item-sub-title>
                <span style="color: rgba(0, 0, 0, .87)">
                  {{d.content.length < 16 ? d.content : (d.content.substring(0, 16) + '..')}}
                </span><br/>
                共{{d.nums}}注
              </mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-list-item-title>
              </mu-list-item-title>
              <mu-list-item-sub-title>
                删除
              </mu-list-item-sub-title>
              <mu-list-item-sub-title>
                {{d.total}}元
              </mu-list-item-sub-title>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
        <p style="text-align: right;padding: 0px 16px">
          <mu-button @click="clickSubmit" color="primary">确认投注</mu-button>
        </p>


      </div>
    </mu-dialog>

  </div>

</template>
<script>
  import $ from 'jquery'
  import {addOrder,loopGameLottery} from '@/api/login'
  //import {SscLayout, SscMethod} from '@/assets/json/layout'
  import {LotteryPlay} from '@/assets/js/game/play'
  import {LotteryOpenTime} from '@/assets/js/game/open'
  // import {SscUtils} from '../assets/json/utils'
  import {GameUtils} from '@/assets/js/game/utils'
  import {GAMES} from '@/assets/js/game/method'
  import {GameList} from '@/assets/js/game/game'

  import pSelect from './pSelect'

  import {account_data, config_data, lotterys, methods, updateCache} from "@/assets/js/game/global"
  import {InlineXNumber} from 'vux'
  import recordList from './record'
  import lotteryList from './lottery'
  import trendList from './trend'

  const SscUtils = GameUtils.SSC;
  const X511Utils = GameUtils.X511;
  const K3Utils = GameUtils.K3;
  const D3Utils = GameUtils.D3;
  const Kl8Utils = GameUtils.Kl8;
  const PK10Utils = GameUtils.PK10;
  import 'muse-ui-message/dist/muse-ui-message.css';
  import Message from 'muse-ui-message';
  import {mapGetters} from 'vuex'
  import {Tab, TabItem, Swiper, SwiperItem} from 'vux'
  import Cookies from 'js-cookie'

  export default {
    name: 'playItem',
    components: {
      InlineXNumber,
      pSelect,
      recordList,
      lotteryList,
      trendList,
      Tab, TabItem, Swiper, SwiperItem

    },
    data() {
      return {

        source:this.$route.query.source,
        name: this.$route.query.name,
        // method: this.$route.query.method,
        // method: 'rx3z3',
        lottery: GameList.cache[this.$route.query.name],
        type: 1,
        layout: [],
        methods: methods,
        // playActive: 0,
        tabindex: 2,
        tabName: '投注',
        bt: ['开奖', '走势', '投注', '记录'],
        show1: false,
        popupValue: '',
        ne: 0,
        items1: [{
          key: '1',
          value: 'A'
        }, {
          key: '2',
          value: 'B'
        }, {
          key: '3',
          value: 'C'
        }],
        currentList: ['wxzhixfs'],
        checkSel: [],
        numberText: "",
        methodSel: [],
        fillable: true,
        pointStep: 1,
        pointMin: 1800,
        pointMax: account_data.lotteryCode,
        pointSel: account_data.lotteryCode,
        gameLayouts: {},
        gameMethods: {},
        openFullscreen: false,
        openShopCar: false,
        // type: ['全','大','小','单','双','清'],
        currentIndexName: [],
        currentIndex: '',
        currentName: '',
        currentMethod: '',
        currentModel: 0,
        multiple: 1,
        minMulti: 1,
        total: 0,
        nums: 0,
        models: [['yuan', '元'], ['jiao', '角'], ['fen', '分'], ['li', '厘']],
        isShow: false,
        numbers: [],
        order_data: {},
        order_list: [],
        bonus: [0.0],
        openTime: {issue: '000', hh: '00', mm: '00', ss: '00'},
        initdata: '',
        userMethodsel: [] ,
        queryCode:{
          lottery:this.$route.query.name
        },
        staticOpenCode:''
      }
    },

    created() {
      updateCache()
      let $this = this
      this.initdata = JSON.parse(localStorage.getItem('initdata'))

      this.userMethodsel = localStorage.getItem('userMethodsel') ? JSON.parse(localStorage.getItem('userMethodsel')) : []

      this.userMethodsel ? this.userMethodsel.map((n) => {
        if (n.username == $this.initdata.account.username && n.name == $this.name) {
          $this.methodSel = n.method
        }
      }) : []

      let type = parseInt(GameList.cache[this.$route.query.name].type) - 1;
      let Layout = GAMES[type].layout;

      let Method = GAMES[type].method;
      let defaultMethod  = Layout[0].rows[0][0].columns[0];

      // let defaultMethod2 =''
      // if( this.type==1){
      //   defaultMethod= Layout[2].rows[0][1].columns[0];
      //
      // }else{
      //    defaultMethod = Layout[0].rows[0][0].columns[0];
      //
      // }

      this.gameLayouts = Layout;

      this.gameMethods = Method;
      // this.methodSel = [defaultMethod];
      this.type = type;
      if (this.methodSel.length == 0) {
        this.methodSel.push(defaultMethod)

      }
      this.changeMethod(this.methodSel[0]);
      LotteryPlay.refreshCode(this.name, this.model, this.order_data)
      this.loopGameLotteryTimer()


    },
    mounted() {
      this.$nextTick(function () {
        setInterval(this.loopGameLotteryTimer, 5000);
      })
      let type = parseInt(GameList.cache[this.$route.query.name].type) - 1;
      this.layout = GAMES[type].method[this.method || 'rx3z3'];
      this.type = type;

      LotteryOpenTime.init(this.lottery, this.openTime);
    },
    computed: {
      ...mapGetters([
        'person',
      ]),
      model: function () {
        return this.models[this.currentModel][0];
      },
      pointPer: function () {
        let p = LotteryPlay.getLotteryPoint(this.pointSel);
        return parseFloat(this.order_data.maxPoint - parseFloat(p)).toFixed(1);
      }
    },
    methods: {
      loopGameLotteryTimer(){

        loopGameLottery(this.queryCode).then(res=>{
          this.staticOpenCode= res.data.gameOpenCode
        })
      },
      test: function () {
        // let ttt = this.gameMethods[this.currentMethod].checkbox;
        // let ary = this.checkSel;
        this.getPlayAreaData();
      },
      changeMethod: function (m) {
        this.currentMethod = m;
        this.order_data['defCheck'] = [];
        let checkbox = this.gameMethods[this.currentMethod].checkbox;
        if (checkbox && checkbox.defCheck) {
          this.checkSel = checkbox.layout.map(d => checkbox.defCheck);
          this.order_data['defCheck'] = checkbox.defCheck;
        }
        this.order_data['method'] = m;
        this.order_data['compress'] = false;

        this.updateBonus();
      },
      // 玩法帮助信息
      // TODO: 优化样式
      helpInfo: function () {
        let m = this.gameMethods[this.currentMethod];
        Message.alert("玩法：" + m.help + '示例：' + m.example, '提示');
        /*  this.$toast.info({
            message:"玩法：" + this.gameMethods[this.currentMethod].help + '示例：' + this.gameMethods[this.currentMethod].example,
            position: 'top-end',               // 弹出的位置

          });*/
      },
      changeCheck: function () {
        this.update();
      },
      // 投注模式
      changeModel: function (i) {
        this.currentModel = i;
        LotteryPlay.refreshCode(this.name, this.model, this.order_data);
        this.updateBonus();
        this.update();
      },
      // 奖金调节
      changePoint: function () {
        this.updateBonus();
      },
      // 增加倍数
      changeMulti: function () {
        this.update();
      },
      // 调整奖金比例
      clickPoint: function (step) {
        let p = this.pointSel + step;
        if (p > this.pointMax || p < this.pointMin) return;
        this.pointSel = p;

        this.updateBonus();
      },
      updateBonus: function () {
        this.bonus = LotteryPlay.updateBonus(this.name, this.lottery.type, this.currentMethod, this.pointSel, this.model);
      },
      // ----------------------------------------Inputs ------------------------------------
      getCheckboxData: function () {
        let $this = this;
        let lines = [];
        let checkbox = this.gameMethods[this.currentMethod].checkbox;
        if (!checkbox || !checkbox.layout) return lines;
        checkbox.layout.forEach((item, i) => {
          lines.push(item.value.map(d => $this.checkSel[i].indexOf(d) === -1 ? '-' : '√'));
        });
        return lines;
      },
      getSelectData: function () {
        return this.numbers.map(line => {
          return Object.keys(line).filter(d => line[d] === 1);
        });
      },
      getTextareaData: function () {
        let datasel = [];
        let textarea = this.numberText;
        if (textarea && textarea.length > 0) {
          var separator = ' ';
          switch (this.lottery.type) {
            case 1:
            case 3:
            case 4:
            case 5:
              separator = ' ';
              break;
            case 2:
            case 6:
              separator = ';';
              break;
          }
          var as = textarea.split(separator);
          as.forEach((val, idx) => {
            datasel.push(val);
          });
        }
        return datasel;
      },
      // 文本框更改事件
      changeTextarea: function () {
        let val = this.numberText;
        switch (this.lottery.type) {
          case 1:
          case 3:
          case 4:
          case 5:
            val = val.replace(/,|;|\n|\t/g, ' ');
            break;
          case 2:
          case 6:
            val = val.replace(/,|\n/g, ';');
            break;
        }
        val = val.replace(/[\s]{2,}/, ' '); // 替换空格
        this.numberText = val;
        // 更新计算
        this.update();
      },
      getPlayAreaData: function () {
        var datasel = [];
        var places = this.getCheckboxData();
        var balls = this.getSelectData();
        var textarea = this.getTextareaData();
        return datasel.concat(places).concat(balls).concat(textarea);
      },
      // ---------------------------------End Inputs-------------------------------------
      // 核心·注数和金额计算
      update: function () {
        let type = this.lottery.type;
        let method = this.currentMethod;
        let datasel = this.getPlayAreaData(); // 获取投注内容
        let res = LotteryPlay.PlayOptions.update(method, datasel, type, this.model, this.multiple);
        this.nums = res.nums;
        this.total = res.total;
      },

      // 获取投注数据
      getData: function () {
        let datasel = this.getPlayAreaData(); // 获取投注内容
        return LotteryPlay.getData(this.name, this.pointSel, this.pointPer, this.order_data, datasel, this.model, this.multiple);
      },
      addToList: function (cb) {
        var data = this.getData();
        if (data.nums == 0) {
          // TODO: 弹框样式
          this.$toast.warning({
            message: '您还没有选择号码或所选号码不全！',
            position: 'top-end',               // 弹出的位置

          });
          return;
        }
        data['total'] = LotteryPlay.getMoney(data);

        this.order_list.push(data);
        // 清除
        this.$refs.selects.init();
        this.numbers = [];
        this.update();
        if (cb) cb();
        console.log(this.order_list);
      },
      // 监听子组件
      changeNumber: function (numbers) {
        if (numbers) this.numbers = numbers;
        this.update();
      },
      clickSubmit: function () {
        // TODO：弹框样式
        if (this.order_list.length == 0) {

          this.$toast.warning({
            message: '请先添加投注号码！',
            position: 'top',               // 弹出的位置

          });
          return;
        }
        let total = LotteryPlay.getTotal(this.order_list);
        Message.confirm("本次投注共需要花费" + total + "元，确认继续投注？", '提示', {
          type: 'warning'
        }).then(({result}) => {
          if (result) {
            this.submit();
            this.closeFullscreenDialog(1)
          }
        });


      },
      // 快速投注功能
      quickBet: function () {
        let $this = this;
        this.addToList(function () {
          $this.clickSubmit($this.order_list);
        });
      },
      // ++++++++++++++++++TODO: 接口对接+++++++++++++++++++++++
      // 提交投注
      submit: function () {
        var list = [];
        this.order_list.forEach(function (v, i) {
          list.push({
            lottery: v.lottery,
            issue: v.issue,
            method: v.method,
            content: v.content,
            model: v.model.val,
            multiple: v.multiple,
            code: v.code,
            compress: v.compress,
            nums: v.nums
          });
        });

        var data = {text: JSON.stringify(list)};
        // TODO: ajax提交逻辑
        this.order_list = []

        addOrder(data).then(res => {
          if (res.error == 0) {
            /*   clear();*/

            this.$toast.success({
              message: '您的订单已投注成功，请耐心等待开奖结果！',
              position: 'top-end',               // 弹出的位置

            });
          }
          if (res.error == 1) {
            if (res.code == '116-05') {
              setTimeout(function () {
                this.$toast.error({
                  message: '投注超时，请检查网路情况后重新重试',
                  position: 'top-end',               // 弹出的位置

                });
              }, 10000);
            } else if (res.code == '116-06') {
              window.location.href = '/';
            } else {
              this.$toast.info({
                message: res.message,
                position: 'top-end',               // 弹出的位置
              });

            }
          }
        })

      },
      openFullscreenDialog(style) {
        if (style == 0) {
          this.openFullscreen = true;
        } else {

          if (this.order_list.length > 0) {
            this.openShopCar = true;
          } else {
            this.$toast.warning({
              message: '购物车暂为空',
              position: 'top',               // 弹出的位置

            });
          }

        }
      },
      closeFullscreenDialog(style) {
        let obj = {username: this.initdata.account.username, name: this.$route.query.name, method: this.methodSel}
        this.userMethodsel.push(obj), JSON.stringify(this.userMethodsel)
        localStorage.setItem('userMethodsel', JSON.stringify(this.userMethodsel));
        if (style == 0) {
          this.openFullscreen = false;
        } else {
          this.openShopCar = false;
        }
      }
    },
    watch:{
      tabindex:function () {
        document.body.scrollTop = 0
      }
    }

  }
</script>
<style scoped>
  .form-title {
    margin: 0;
    text-align: center;
    border-top: 1px solid #b2b2b2;
    padding: 10px 0px;
    background: #fff;
  }

  .play-title {
    background: #9cc1de;
    color: #fff;
    padding: 10px;
  }

  .vux-x-icon {
    fill: #fff;
  }

  .mu-dialog {
    font-size: 14px;
  }

  .play-game-tab {
    overflow-x: auto;
    width: 80%;
    float: left;
  }

  .play-game-nav .iconfont {
    float: right;
  }

  .type-nav {
    border: 1px solid #2196f3;
    display: inline-block;
    padding: 0px 8px;
    border-radius: 3px;
    margin-right: 5px;
    margin-bottom: 5px;
    font-size: 14px;
  }

  .type-nav-number {
    border: 1px solid #8c9dab;
    display: inline-block;
    border-radius: 50%;
    margin-right: 5px;
    margin-bottom: 10px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 29px;
  }

  .currentType {
    background-color: #2196f3;
    color: #fff;
  }

  .currentModel {
    background-color: #2196f3;
    color: #fff;

  }

  .money-item {
    margin: 1px;
    padding: 3px 5px;
    border: 1px solid #ccc;
    /* background-color: #cfcfcf; */
  }

  .other-money-model .point-button {
    width: 20px;
    height: 20px;
    margin: 2px 6px;
    /* float: right */
  }

  .word-break {
    line-height: 15px;
    height: 15px
    /* width: 20px; */
  }

  .play-game-nav {
    padding: 0px 10px;
    border-bottom: 1px solid #e1e2e4;
    background-color: #fafafa;
  }

  .compute-li {
    text-align: center;
    border-bottom: 1px solid #e1e2e4;
    padding: 15px 0px;
  }

  .mu-demo-form {
    width: 100%;
    max-width: 460px;
  }

  /*.play-game-nav .mu-tab{
    min-width: auto;
  }*/
  .playSlider .vux-slider {
    height: 100%;
    margin-top: 1em;
    overflow-y: auto;

  }

  .playSlider /deep/ .vux-swiper {
    height: 100% !important;
    overflow-y: auto;

  }

  .play-item-model /deep/ .vux-tab {
    background-color: transparent;
  }

  .play-item-model /deep/ .vux-center {
    background-size: 100% 0;
  }

  .playgame /deep/.mu-tab {
    white-space: nowrap;
    min-width: auto;
  }
  .code-span {

    display: inline-block;
    width: 22px;
    height: 22px;
    background-color: red;
    text-align: center;
    color: #fff;
    line-height: 22px;
    border-radius: 50%;
    margin-right:5px;



  }
  </style>
