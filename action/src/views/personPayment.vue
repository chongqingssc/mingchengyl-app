<template>
  <div  >
    <mu-appbar class=" header" color="primary">
      <mu-button slot="left" icon to="/person">
        <i class="iconfont">&#xe604;</i>
      </mu-button>
      <p class="tc">{{buttonName[buttonIndex]}}</p>
      <mu-button slot="right" icon >

      </mu-button>

    </mu-appbar>
    <div class="content content-model">

      <div class="date-select " v-if="buttonIndex == 1">
        <mu-form ref="form" :model="dataForm" label-position="left" class="mu-demo-form ">
          <mu-form-item label="充值方式:" >
            <mu-select  v-model="dataForm.pid" @change="changeSelect">
              <mu-option v-for="option,index in options" :key="option.name" :label="option.name" :value="option.id"></mu-option>
            </mu-select>
          </mu-form-item>
          <mu-form-item label="充值渠道:" >
            <mu-select  v-model="dataForm.method">
            <mu-option v-for="option,index in optionsMethod" :key="option.method" :label="map[option.method]" :value="option.method"></mu-option>
            </mu-select>
          </mu-form-item>
          <div>
            <p>便捷充值金额：</p>


            <mu-row gutter>
              <mu-col span="4"><div class="grid-cell" @click="getMoney(100)">100</div></mu-col>
              <mu-col span="4"><div class="grid-cell" @click="getMoney(200)">200</div></mu-col>
              <mu-col span="4"><div class="grid-cell" @click="getMoney(500)">500</div></mu-col>
            </mu-row>
            <mu-row gutter>
              <mu-col span="4"><div class="grid-cell" @click="getMoney(1000)">1000</div></mu-col>
              <mu-col span="4"><div class="grid-cell" @click="getMoney(3000)">3000</div></mu-col>
              <mu-col span="4"><div class="grid-cell" @click="getMoney(5000)">5000</div></mu-col>
            </mu-row>
          </div>

          <mu-form-item label="充值金额:"  help-text="单笔限额为100.0-5000.0元"  prop="amount" :rules="rules">
           <mu-text-field v-model.trim="dataForm.amount"></mu-text-field>
          </mu-form-item>



          <mu-form-item>

            <mu-button color="primary" @click="submit" style="width: 91%">确认充值</mu-button>
          </mu-form-item>
        </mu-form>
      </div>
      <div class="date-select " v-if="buttonIndex == 2">
        <div  v-if="cardList.length>0">
          <mu-form ref="form2" :model="dataForm1" label-position="left" class="mu-demo-form ">
            <mu-form-item label="提现银行卡:" >
              <mu-select  v-model="dataForm1.cardId">
                <mu-option v-for="option,index in cardList" :key="option.bankName" :label="option.bankName+option.bankCardId" :value="option.id"></mu-option>
              </mu-select>
            </mu-form-item>
            <mu-form-item label="提现金额:"   prop="amount" :rules="amountRules">
              <mu-text-field v-model.trim="dataForm1.amount"></mu-text-field>
            </mu-form-item>
            <mu-row>
              <mu-col span="6">可用余额：{{balance.toFixed(3)}}</mu-col>
              <mu-col span="6" style="text-align: right" class="cr5" @click="dataForm1.amount =balance.toFixed(3)">全部提现</mu-col>
            </mu-row>
            <p>提现最低100元，最高49999.0元，今天还可以提现10次</p>
            <mu-form-item label="资金密码:"   prop="withdrawPassword" :rules="passwordRules">
              <mu-text-field v-model.trim="dataForm1.withdrawPassword"  type="password"></mu-text-field>
            </mu-form-item>

            <mu-form-item>

              <mu-button color="primary" @click="submitWithdraw " style="width: 91%">确认提现</mu-button>
            </mu-form-item>
          </mu-form>

        </div>
        <div v-else>

          <p v-if="withdraw.isBindWithdrawPassword==false">您还没有设置提现密码，立即设置请<router-link to="/setting">点击此处</router-link></p>
          <div v-if="withdraw.isBindWithdrawPassword ==true">
            <p v-if="withdraw.isBindWithdrawName==false">您还没有设置提现姓名，立即设置请<router-link to="/setting">点击此处</router-link></p>
            <div v-if="withdraw.isBindWithdrawName==true">

              <p v-if="withdraw.isBindCard==false">您还没有绑定银行卡，立即设置请<router-link to="/setting">点击此处</router-link></p>
            </div>
          </div>


        </div>

      </div>
      <div class="date-select " v-if="buttonIndex == 3">

      </div>


    </div>
  </div>
</template>
<script>
  import  {requestAllMethod,requestThridPay,getBindStatus,prepareWithdraw,applyWithdraw} from '@/api/login'
  export default {
    name: 'setModel',
    data() {
      return {
        rules: [
          { validate: (val) => val >= 100, message: '最少充值100'}
        ],
        options:[],
        buttonIndex: this.$route.query.tabIndex,

        buttonName:{
          '1':'充值',
          '2':'提款',
          '3':'转账',
        },
        optionsMethod:[],
        dataForm:{
          pid:'',
          method:'',
          amount:''
        },
        map:{
          'WXPAY':'微信',
          'ALIPAY':'支付宝',
          'QQPAY':'QQ钱包',
          'JDPAY':'京东钱包',
          'UNIONPAY':'银联钱包',
        },
        cardList:[],
        dataForm1:{
          amount: '',
          cardId: '',
          withdrawPassword: ''
        },
        amountRules: [
          { validate: (val) => !!val, message: '必须填写提现金额'},
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写密码'},
        ],
        withdraw:'',
        balance:''

      }
    },
    created(){
      this.getData()
      this.balance =JSON.parse(localStorage.getItem('initdata')).account.balance
    },
    methods:{
      /*获取充值方式*/
      getData(){
        if(this.buttonIndex == 1){
          requestAllMethod().then((res)=>{
            this.options =res.data.thridList
            this.dataForm.pid = this.options[0].id
            this.dataForm.method = this.options[0].methodList[0].method
            this.optionsMethod = this.options[0].methodList

          })
        }else if(this.buttonIndex == 2){
          getBindStatus().then((res)=>{
            this.withdraw= res.data


          })
          prepareWithdraw().then((res)=>{
            this.cardList = res.data.accountCardList
            this.dataForm1.cardId = this.cardList.length>0? this.cardList[0].id:''


          })
        }

      },

      changeSelect(){
        let $this = this
        this.options.forEach(function (a) {
          if(a.id == $this.dataForm.pid){
            this.optionsMethod = a.methodList
            $this.dataForm.method = a.methodList[0].method
          }
        })

      },
      getMoney(money){
        this.dataForm.amount = money

      },
      submit(){


        this.$refs.form.validate().then((result) => {
          if (result) {

            requestThridPay(this.dataForm).then((res)=>{
              this.$router.push({ path: '/pay',query: {h: JSON.stringify(res.data.link)} })

            })
          }
        })

      },
      submitWithdraw(){

        this.$refs.form2.validate().then((result) => {
          if (result) {
            applyWithdraw(this.dataForm1).then((res)=>{
              this.$router.push({ path: '/person' })

            })
          }
        })
      },
    }
  }
</script>
<style scoped>
  .grid-cell {
    border-radius: 4px;
    height: 4em;
    border: 1px solid #2196f3;
    text-align: center;
    margin-bottom: 1em;
    background: rgba(255, 255, 255, 0.8);
    line-height: 4em;

  }
  .content{
    width: 94%;
    margin: 0 auto;

  }
</style>
