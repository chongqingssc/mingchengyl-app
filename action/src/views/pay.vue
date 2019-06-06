<template>
  <div  >
    <mu-appbar class=" header" color="primary">
      <mu-button slot="left" icon to="/personPayment?tabIndex=1">
        <i class="iconfont">&#xe604;</i>
      </mu-button>
      <p class="tc">充值</p>
      <mu-button slot="right" icon >

      </mu-button>

    </mu-appbar>
    <div class="content content-model">

      <iframe   frameborder=0 name="showHere" scrolling=auto :src="data" width="100%" height="100%"></iframe>

    </div>
  </div>
</template>
<script>
  import  {requestThridPay} from '@/api/login'

  export default {
    name:'pay',
    data(){
      return{
        data:JSON.parse(this.$route.query.h),
        link:''
      }
    },
    created(){

    }

  }
</script>

<style scoped>

</style>
