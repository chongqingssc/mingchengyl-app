<template>
  <div  >
    <mu-appbar class=" header" color="primary">

      <mu-button icon  slot="left" to="/message" style="padding: 0;width: 30px"><i class="iconfont " >&#xe62d;</i> </mu-button>
      <mu-button icon  slot="left" to="/message" style="padding: 0;width: 30px"><i class="iconfont " >&#xe643;</i> </mu-button>

      <p class="tc">个人中心</p>

      <mu-button icon  slot="right" to="/systemNotice" style="padding: 0;width: 30px"><i class="iconfont mr1" >&#xe621;</i> </mu-button>
      <mu-button icon  slot="right" to="/setting" style="padding: 0;width: 30px"><i class="iconfont">&#xe78a;</i></mu-button>


    </mu-appbar>
    <div class="content content-model" style="padding-bottom: 70px">
      <mu-container  style="padding: 0;">
        <div style="background-color: royalblue;    padding: 1em;">
          <div class="person-info">
            <!-- 个人信息 -->
            <mu-row gutter>
              <mu-col span="3"><img src="../assets/images/me_avatar.png" alt="user" style="width: 100%"></mu-col>
              <mu-col span="9"><p style="margin: 8px 0px 0px"><span class="mr1 more-text">账号：{{person.username}}</span><span class="more-text">昵称：{{person.nickname}}</span></p>
                <p style="margin: 0px 0px">    <i class="iconfont">&#xe65c;&nbsp;</i><b class="cr4">￥{{ parseFloat(person.balance).toFixed(2)}}</b> <span>返点：<b class="cr5">{{person.point}}%</b></span></p></mu-col>
            </mu-row>
            <mu-row  >
              <mu-col span="4">  <mu-button color="red" @click="buttonDialog(1)" >
                <i class="iconfont" style="font-size: 16px;margin-right: 0">&#xe65c;&nbsp;</i>
                充值
              </mu-button></mu-col>
              <mu-col span="4">
              <mu-button color="primary" @click="buttonDialog(2)">
                <i class="iconfont" style="font-size: 16px;margin-right: 0">&#xe616;&nbsp;</i>
                提款
              </mu-button>
              </mu-col>
                <mu-col span="4">
                <mu-button color="warning" to="/personSearch?tabIndex=8">
                <i class="iconfont" style="font-size: 16px;margin-right: 0">&#xef05;&nbsp;</i>
                转账
              </mu-button>
                </mu-col>
            </mu-row >

            <mu-row  style="border-top: 1px solid #d8dce8;margin-top: 1em;padding-top: 1em">
              <mu-col span="4"><div class="tc cr2">今日充值</div><div class="tc cr5">{{today.moneyIn?today.moneyIn.toFixed(2):0}}</div></mu-col>
              <mu-col span="4"><div class="tc cr2">今日消费</div><div class="tc cr5">{{today.consume?today.consume.toFixed(2):0}}</div></mu-col>
              <mu-col span="4"><div class="tc cr2">今日盈利</div><div class="tc cr5">{{today.profit?today.profit.toFixed(2):0}}</div></mu-col>
            </mu-row>



          </div>
        </div>

        <mu-list style="background-color: #fff"  textline="two-line" dense @change="orderList" >
          <mu-list-item button  value="1">


              <mu-list-item-title><i class="iconfont cr5">&#xe6a8;</i>个人报表</mu-list-item-title>

            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>

          <mu-list-item button value="2" >

              <mu-list-item-title><i class="iconfont cr5">&#xe6bc;</i>投注记录</mu-list-item-title>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>

       <!--   <mu-divider></mu-divider>

          <mu-list-item button value="3" >

            <mu-list-item-content>
              <mu-list-item-title><i class="iconfont cr5">&#xe646;</i>追号记录</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>-->

          <mu-divider></mu-divider>

          <mu-list-item button value="4" >

            <mu-list-item-content>
              <mu-list-item-title><i class="iconfont cr5">&#xe6a5;</i>资金明细</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>

          <mu-list-item button value="5" >

            <mu-list-item-content>
              <mu-list-item-title><i class="iconfont cr5">&#xef05;</i>存取款记录</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>

          <mu-divider></mu-divider>

        <!--  <mu-list-item button value="6" >

            <mu-list-item-content>
              <mu-list-item-title><i class="iconfont cr5">&#xe62e;</i>百家乐</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>

          <mu-divider></mu-divider>-->

          <mu-list-item button value="7"  v-if="person.type == 1">

            <mu-list-item-content>
              <mu-list-item-title><i class="iconfont cr5">&#xe617;</i>开户</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>

          <mu-divider></mu-divider>

          <mu-list-item button value="8" v-if="person.type == 1">

            <mu-list-item-content>
              <mu-list-item-title><i class="iconfont cr5">&#xe627;</i>团队管理</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>

          <mu-list-item button value="9" v-if="person.type == 1">

            <mu-list-item-content>
              <mu-list-item-title><i class="iconfont cr5">&#xe60d;</i>团队报表</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>

          <mu-list-item button value="10" v-if="person.type == 1">

            <mu-list-item-content>
              <mu-list-item-title><i class="iconfont cr5">&#xe66b;</i>团队投注记录</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
<!--
          <mu-list-item button value="11" >

            <mu-list-item-content>
              <mu-list-item-title><i class="iconfont cr5">&#xe694;</i>团队彩票报表</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>-->

          <mu-list-item button value="12" v-if="dividendContract!=null" >

            <mu-list-item-content>
              <mu-list-item-title><i class="iconfont cr5">&#xe66b;</i>契约中心</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <i class="iconfont ">&#xef06;</i>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item>

          </mu-list-item>
        </mu-list>
      </mu-container>




    </div>

  </div>
</template>
<script>
  import  {searchOrder,accountToday,teamloadContractStatus} from '@/api/login'

  import { mapGetters } from 'vuex'
  export default {
    name: 'person',
    components: {},
    data() {
      return {
        today:'',
        startTime:'2019-02-01',
        endTime:'2019-02-02',
        options:[],

        person:'',
        usernameRules: [
          { validate: (val) => !!val, message: '必须填写用户名'},
          { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写密码'},
          { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        validateForm: {
          username: '',
          password: '',
        },
        dividendContract:''

      }
    },
    computed: {

    },
    created(){
      teamloadContractStatus().then(res=> {
        this.dividendContract =res.data.dividendContract?res.data.dividendContract.status:null

      })
      this.person =JSON.parse(localStorage.getItem('initdata')).account;
      accountToday().then( (res)=>{
        this.today = res.data
      })
    },
    methods:{

      buttonDialog(index){

        this.$router.push({ path: '/personPayment',query: {tabIndex: index} })
      },
      submit () {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
      orderList(value){
        this.$router.push({ path: '/personSearch',query: {tabIndex: value} })

      },


    }
  }
</script>
<style scoped>
  .person-info{
    background-color: #fff;
    border-radius: 5px;
    padding: 1em;

  }
  .date-input{
    width: 35%;
    text-align: center;
  }
  .mu-demo-form{
    padding: 2em;
  }
  .demo-loadmore-wrap {
    width: 100%;
    max-width: 360px;
    height: 420px;
    display: flex;
    flex-direction: column;

  }
  .mu-appbar {
    width: 100%;
  }
  .demo-loadmore-content {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .content-model .iconfont {
    margin-right: 5px;
    font-size: 18px;
  }
  .more-text{
    display: inline-block;
    width: 45%;
    color: #6699ff;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
</style>
