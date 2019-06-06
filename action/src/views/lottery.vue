<template>
  <div>

      <mu-container ref="container" class="demo-loadmore-content">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list v-for="(item,index) in  list" class="code-list" :class="{'firstList':index==0}">

              <label style="float: left;width: 40%">{{item.issue}}期</label>
              <div style="float: right;width: 60%"><span v-for="j in item.code.split(',')" class="code-span">{{j}}</span></div>


          </mu-list>
        </mu-load-more>
      </mu-container>



  </div>

</template>
<script>
  import  {staticOpenCode} from '@/api/login'
  export  default {
    name:'lottery',
    data(){
      return {

        refreshing: false,
        loading: false,
        query:{
          name:this.$route.query.name,
          history:true
        },
        list:[]
      }
    },
    created(){
      this.getList()
    },
    methods:{


      //开奖
      getList(flag){
        if(flag){this.list = []}
        staticOpenCode(this.query).then(res=>{
          this.list= this.list.concat(res)
        })
      },

      refresh () {

        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
        setTimeout(() => {
          this.refreshing = false;
          this.query.page = 0
          this.list = []
          this.getList()
        }, 2000)
      },
      load () {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.query.page+=1
          this.getList()
        }, 2000)
      },
    },
  }
</script>
<style scoped>


  .code-list{
    padding: 10px 0px;
    border-bottom: 1px solid #e3eaef;

  }
  .code-span{
    display: inline-block;
    width: 22px;
    height: 22px;
    background-color: #1dacff;
    color: #fff;
    text-align: center;
    line-height: 20px;
    margin-left: 10px;
    border-radius: 50%;
  }
  .firstList{
   color: #ff4b2b;
  }
  .firstList .code-span{
    background-color: #ff4b2b;
  }
</style>
