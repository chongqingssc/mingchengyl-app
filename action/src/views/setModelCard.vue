<template>
  <div>
    <mu-appbar class=" header" color="primary">
      <mu-button slot="left" icon to="/setModel?name=银行卡管理">
        <i class="iconfont">&#xe604;</i>
      </mu-button>
      <p class="tc">添加银行卡</p>
      <mu-button slot="right" icon >

      </mu-button>

    </mu-appbar>
    <div class="content">
 <div>
   <mu-form  :model="bankForm"   label-position="top" class="mu-demo-form " style="padding: 20px">


     <mu-form-item prop="bankName" label="选择开户行">
       <mu-select v-model="bankForm.bankName">
         <mu-option v-for="option,index in bindCardList.bankList" :key="option.name" :label="option.name" :value="option.name"></mu-option>
       </mu-select>
     </mu-form-item>
     <mu-form-item prop="bankBranch" label="支行名称">
       <mu-text-field v-model="bankForm.bankBranch" ></mu-text-field>
     </mu-form-item>
     <mu-form-item prop="answer1" label="持卡人姓名">
       {{bindCardList.withdrawName}}
     </mu-form-item>
     <mu-form-item prop="bankId" label="银行卡号">
       <mu-text-field v-model="bankForm.bankId" ></mu-text-field>
     </mu-form-item>
     <mu-form-item prop="bankCardId" label="重复银行卡号">
       <mu-text-field v-model="bankForm.bankCardId" ></mu-text-field>
     </mu-form-item>
     <mu-form-item prop="withdrawPassword" label="输入资金密码">
       <mu-text-field v-model="bankForm.withdrawPassword" type="password"></mu-text-field>
     </mu-form-item>
   </mu-form>

   <mu-button slot="actions"  color="primary" to="/setModel?name=银行卡管理" style="float: left;margin-right: 10px">取消</mu-button>
   <mu-button slot="actions"  color="primary" @click="addBind">确认</mu-button>
 </div>

    </div>


  </div>
</template>
<script>
  import  {prepareBindCard,bindCard} from  '@/api/login'
  import  {isPassword} from  '@/utils/validate'

  export default {
    name: 'setModel',
    data() {
      return {
        bindCardList:'',
        bankForm:{
          bankName:'',
          bankId: '',
          bankBranch: '',
          bankCardId: '',
          withdrawPassword: ''
        },

      }
    },
    created(){
      this.getCardList()
    },
    methods:{


      /*添加银行卡*/
      addBind(){
        bindCard(this.bankForm).then((response)=>{
          this.$toast.success({
            message:'设置成功！',
            position: 'top-end ',    // 弹出的位置
          });
          this.$router.push({ path: '/setModel'})
        })
      },


      getCardList(){

        /*开户行列表*/
        prepareBindCard().then((response)=>{
          this.bindCardList = response.data
        })
      },


    }
  }
</script>
<style scoped>
  /*银行代码*/
  .bank-model{
    border: 1px solid #d7ddeb;
    border-radius: 3px;
    text-align: center;
    padding: 10px 0px;

  }
  .main-panel .bank-code {
    width: 154px;
    height: 40px;
    margin: 0 auto;
    background: url("../assets/images/bank_list.png");
  }

  .main-panel .bank-code.b1 {
    background-position: 0 0;
  }

  .main-panel .bank-code.b2 {
    background-position: 0 -48px;
  }

  .main-panel .bank-code.b3 {
    background-position: 0 -96px;
  }

  .main-panel .bank-code.b4 {
    background-position: 0 -144px;
  }

  .main-panel .bank-code.b5 {
    background-position: 0 -192px;
  }

  .main-panel .bank-code.b6 {
    background-position: 0 -240px;
  }

  .main-panel .bank-code.b7 {
    background-position: 0 -288px;
  }

  .main-panel .bank-code.b8 {
    background-position: 0 -336px;
  }

  .main-panel .bank-code.b9 {
    background-position: 0 -384px;
  }

  .main-panel .bank-code.b10 {
    background-position: 0 -432px;
  }

  .main-panel .bank-code.b11 {
    background-position: 0 -480px;
  }

  .main-panel .bank-code.b12 {
    background-position: 0 -528px;
  }

  .main-panel .bank-code.b13 {
    background-position: 0 -576px;
  }

  .main-panel .bank-code.b14 {
    background-position: 0 -624px;
  }

  .main-panel .bank-code.b15 {
    background-position: 0 -672px;
  }

  .main-panel .bank-code.b16 {
    background-position: 0 -720px;
  }

  .main-panel .bank-code.b17 {
    background-position: 0 -768px;
  }

  .main-panel .bank-code.b18 {
    background-position: 0 -816px;
  }

  .main-panel .bank-code.b19 {
    background-position: 0 -864px;
  }

  .main-panel .bank-code.b20 {
    background-position: 0 -912px;
  }

  .main-panel .bank-code.b21 {
    background-position: 0 -960px;
  }

  .main-panel .bank-code.b22 {
    background-position: 0 -1008px;
  }

  .main-panel .bank-code.b23 {
    background-position: 0 -1056px;
  }

  .main-panel .bank-code.b24 {
    background-position: 0 -1104px;
  }

  .main-panel .bank-code.wxpay {
    background-position: 0 -1152px;
  }

  .main-panel .bank-code.alipay {
    background-position: 0 -1200px;
  }

  .main-panel .bank-code.nocard {
    background-position: 0 -1248px;
  }

  .main-panel .bank-code.qqpay {
    background-position: 0 -1296px;
  }

  .main-panel .bank-code.jdpay {
    background-position: 0 -1344px;
  }
  .main-panel .bank-code.unionpay {
    background-position: 0 -1392px;
  }
  .main-panel .bank-code.dcbuy {
    background-position: 0 -1488px;
  }
</style>

