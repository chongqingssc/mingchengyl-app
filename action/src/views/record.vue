<template>
  <div>
  <mu-tabs :value.sync="activeType" inverse color="#2196f3" text-color="#fff" indicator-color="#2196f3"
           @change="getTab"  center style="background-color: #fff">
    <mu-tab v-for="(item,index) in  tabType" :key="index"  @touchmove.stop.prevent='touchStart'>{{item.label}}</mu-tab>

  </mu-tabs>
    <div v-if="activeType == 0">
      <div class="clearfix">
        <div style="float: left;width: 78%;text-align: center">
          <mu-date-input v-model="query0.sTime" :value-format="format"  class="date-input" @change="getList0(1)"></mu-date-input>
          至
          <mu-date-input v-model="query0.eTime" :value-format="format"  class="date-input" @change="getList0(1)"></mu-date-input>
        </div>
        <mu-select style="width: 22%;float: right;font-size: 14px" v-model="selectAllOption0" @change="getList0(1)">
          <mu-option v-for="option,index in options" :key="option.value" :label="option.label" :value="option.value"></mu-option>
        </mu-select>
      </div>
      <div>
      <div  class="demo-loadmore-wrap">

          <mu-container ref="container" class="demo-loadmore-content">
            <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
              <mu-list>
                <mu-data-table :columns="columns0"  :data.sync="list0">
                  <template slot-scope="scope">

                    <td>{{scope.row.lottery}}</td>
                    <td >{{scope.row.issue}}</td>
                    <td >{{scope.row.money?scope.row.money.toFixed(2):0}}</td>
                    <td >{{scope.row.winMoney?scope.row.winMoney.toFixed(2):0}}</td>
                    <td >{{scope.row.orderTime}}</td>
                    <td >{{scope.row.method}}</td>
                  </template>

                </mu-data-table>
              </mu-list>
            </mu-load-more>
          </mu-container>
        </div>

      </div>
    </div>
    <div v-if="activeType == 1">
      <div class="clearfix">
        <div style="float: left;width: 78%;text-align: center">
          <mu-date-input v-model="query1.sTime" :value-format="format"  class="date-input" @change="getList1(1)" ></mu-date-input>
          至
          <mu-date-input v-model="query1.eTime" :value-format="format"  class="date-input" @change="getList1(1)"></mu-date-input>

        </div>
        <mu-select style="width: 22%;float: right;font-size: 14px" v-model="selectAllOption2"  @change="getList1(1)">
          <mu-option v-for="option,index in options2" :key="option.value" :label="option.label" :value="option.value"></mu-option>
        </mu-select>
      </div>
      <div>
      <div  class="demo-loadmore-wrap">
        <div>
          <mu-container ref="container" class="demo-loadmore-content">
            <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">


                <mu-data-table :columns="columns1"  :data.sync="list1">

                  <template slot-scope="scope">
                    <td>{{computedTxt(scope.row.time)}} </td>
                    <td >{{typeMap[scope.row.type]}}</td>
                    <td >{{scope.row.amount?scope.row.amount.toFixed(2):0}}</td>
                    <td >{{scope.row.balanceAfter?scope.row.balanceAfter.toFixed(2):0}}</td>
                  </template>
                </mu-data-table>

            </mu-load-more>
          </mu-container>
        </div>


        </div>

      </div>
    </div>


  </div>
</template>
<script>
  import  {searchOrder,searchBill} from '@/api/login'
  export  default {
    name:'record',
    data(){
      return {
        format:'YYYY-MM-DD',
        activeType:0,
        tabType:[
          {
            label:'投注记录',
            value:0

        },
   /*       {
            label:'追号记录',
            value:1

        }, */
          {
            label:'资金明细',
            value:2

        },
        ],
        selectAllOption0:'',
        options: [
          {label:'全部',value:''},
          {label:'未开奖',value:0},
          {label:'未中奖',value:1},
          {label:'已中奖',value:2},
          {label:'已撤单',value:-1},

        ],
        columns0: [
          { title: '彩种'},
          { title: '期数', },
          { title: '投注金额' },
          { title: '中奖金额'},
          { title: '下单时间',width:'140' },
          { title: '玩法'},
        ],
        query0:{
          page: 0,
          size: 10,
          lottery:'',
          status:'',
          issue:'',
          sTime: this.timeNowStart(0),
          eTime:this.timeNowStart(1)
        },
        list0:[],
        query1:{
          page: 0,
          size: 10,
          accountType:'',
          type:'',
          sTime: this.timeNowStart(0),
          eTime: this.timeNowStart(1),
        },
        typeMap:{
        "1000":"存款",
        "1001":"取款",
        "1002":"取款退回",
        "1100":"转入",
        "1101":"转出",
        "1102":"上下级转账",
        "1200":"优惠活动",
        "1300":"消费",
        "1301":"派奖",
        "1302":"消费返点",
        "1400":"代理返点",
        "1303":"取消订单",
        "1900":"会员返水",
        "1600":"管理员增",
        "1601":"管理员减",
        "1700":"积分兑换",

      },
        selectAllOption2:'',
        options2: [
          {label:'全部',value:''},
          {label:'存款',value:1000},
          {label:'取款',value:1001},
          {label:'取款退回',value:1002},
          {label:'转入',value:1100},
          {label:'转出',value:1101},
          {label:'上下级转账',value:1102},
          {label:'优惠活动',value:1200},
          {label:'消费',value:1300},
          {label:'派奖',value:1301},
          {label:'消费返点',value:1302},
          {label:'代理返点',value:1400},
          {label:'取消订单',value:1303},
          {label:'会员返水',value:1900},
          {label:'管理员增',value:1600},
          {label:'管理员减',value:1601},
          {label:'积分兑换',value:1700},
          {label:'支付佣金',value:0},
          {label:'获得佣金',value:1},
          {label:'退还佣金',value:2},
          {label:'红包',value:3},


        ],
        columns1: [
          { title: '操作时间'},
          { title: '账单类型', },
          { title: '操作金额' },
          { title: '剩余金额'},
        ],
        list1:[],
        refreshing: false,
        loading: false,
      }
    },
    props : ['nowIndex'],
    computed:{
      computedTxt() {
        return function(value) {
          var date = new Date(value);
          var Y = date.getFullYear() + '-';
          var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          var D = date.getDate() + ' ';
          return Y+M+D
        }
      }
    },
    created(){
      this.getList0()
      this.getList1()
    },
    mounted(){

    },
    methods:{
      touchStart:function(ev) {
        ev = ev || event;
        alert(ev)
        ev.preventDefault();
//                      console.log(ev.targetTouches);
//                      console.log(ev.changedTouches);
        if (ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
          this.startX = ev.touches[0].clientX; // 记录开始位置
        }
      },

        getTab(){
        if(this.activeType == 0 ){
          this.getList0(1)
        }else if(this.activeType == 1){
          this.getList1(1)
        }
      },
      timeNowStart (str) {
        var date1 = new Date()
        var date2 = new Date(date1);
        date2.setDate(date1.getDate()+str);
        var seperator1 = "-";
        var year = date2.getFullYear();
        var month = date2.getMonth() + 1;

        var strDate =date2.getDate()
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
      },

      //投注记录
      getList0(flag){
        this.query0.lottery = this.selectAllOption0
        if(flag){this.query0.page = 0;this.list0 = []}
        searchOrder(this.query0).then(res=>{

          this.list0= this.list0.concat(res.data.list)
        })
      },
      //资金明细
      getList1(flag){
        if(flag){this.query1.page = 0;this.list1 = []}
        this.query1.type = this.selectAllOption2
        searchBill(this.query1).then(res=>{


           this.list1= this.list1.concat(res.data.list)
        })
      },
      refresh () {

        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
        setTimeout(() => {
          this.refreshing = false;
          debugger
          this['query'+this.activeType].page = 0
          this['list'+this.activeType] = []

          this['getList'+this.activeType]()
        }, 2000)
      },
      load () {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this['query'+this.activeType].page+=1
          this['getList'+this.activeType]()
        }, 2000)
      },
    },
    watch:{
      nowIndex : function(n){
        if(n==3){
          this.getList0(1)
          this.getList1(1)
        }
      }
    }
  }
</script>
<style scoped>
  .date-input{
    width: 35%;
    text-align: center;
  }
  .date-input /deep/ input{
    text-align: center;
  }
</style>
