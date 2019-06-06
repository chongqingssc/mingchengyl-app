<template>
  <div class="pay">
    <mu-appbar class="tc header" title="百家乐游戏" color="primary">

    </mu-appbar>
    <div class="content swiper-Tab">
<div style="height: 100%;overflow-y: hidden">
  <tab :line-width=2 active-color='#2196f3' v-model="active">
    <tab-item class="vux-center" :selected="tabName === item" v-for="(item, index) in listTab" @click="tabName = item" :key="index">{{item}}</tab-item>
  </tab>
  <swiper v-model="active"  :show-dots="false"  >
    <swiper-item v-for="(item, index) in tab" :key="index" >
      <mu-grid-list class="gridlist-demo" :cols="1" style="margin: 0.5em">
        <mu-grid-tile v-for="tile, index in list" :key="index">
          <img  :src="item.value[tile.code]" style="width: 100%"/>
          <span slot="title">{{tile.name}}</span>
          <mu-button slot="action"  color="red" small style="margin-top: 5px">
            {{tile.status==-1?'开通游戏':'进入游戏'}}
          </mu-button>
        </mu-grid-tile>
      </mu-grid-list>
    </swiper-item>
  </swiper>



</div>

    </div>




  </div>
</template>
<script>
  import  {listAllGames} from  '@/api/login'
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'

  export default {
    name: 'pay',
    components: {
      Tab,TabItem,Swiper,SwiperItem
    },
    data(){
      return{
        active: 0,
        tabName: '全部',
        listTab:['全部','真人娱乐','电子游艺','体育竞技','棋牌游戏'],
        tab:[
          {name:'全部',value:{
              'AG':require('../assets/images/baccarat_img_ag.png'),
              'DG':require('../assets/images/baccarat_img_dg.png'),
              'DS':require('../assets/images/baccarat_img_ds.png'),
              'FT':require('../assets/images/baccarat_img_ft.png'),
              'GG':require('../assets/images/baccarat_img_gg.png'),
              'KY':require('../assets/images/baccarat_img_ky.png'),
              'PT':require('../assets/images/baccarat_img_pt.png'),
            }},
          {name:'真人娱乐',value:{
              'AG':require('../assets/images/baccarat_img_ag.png'),
              'DG':require('../assets/images/baccarat_img_dg.png'),
              'DS':require('../assets/images/baccarat_img_ds.png'),
              'FT':require('../assets/images/baccarat_img_ft.png'),
              'GG':require('../assets/images/baccarat_img_gg.png'),
              'KY':require('../assets/images/baccarat_img_ky.png'),
              'PT':require('../assets/images/baccarat_img_pt.png'),
            }},  {name:'电子游艺',value:{
              'AG':require('../assets/images/baccarat_img_ag.png'),
              'DG':require('../assets/images/baccarat_img_dg.png'),
              'DS':require('../assets/images/baccarat_img_ds.png'),
              'FT':require('../assets/images/baccarat_img_ft.png'),
              'GG':require('../assets/images/baccarat_img_gg.png'),
              'KY':require('../assets/images/baccarat_img_ky.png'),
              'PT':require('../assets/images/baccarat_img_pt.png'),
            }},  {name:'体育竞技',value:{
              'AG':require('../assets/images/baccarat_img_ag.png'),
              'DG':require('../assets/images/baccarat_img_dg.png'),
              'DS':require('../assets/images/baccarat_img_ds.png'),
              'FT':require('../assets/images/baccarat_img_ft.png'),
              'GG':require('../assets/images/baccarat_img_gg.png'),
              'KY':require('../assets/images/baccarat_img_ky.png'),
              'PT':require('../assets/images/baccarat_img_pt.png'),
            }},  {name:'棋牌游戏',value:{
              'AG':require('../assets/images/baccarat_img_ag.png'),
              'DG':require('../assets/images/baccarat_img_dg.png'),
              'DS':require('../assets/images/baccarat_img_ds.png'),
              'FT':require('../assets/images/baccarat_img_ft.png'),
              'GG':require('../assets/images/baccarat_img_gg.png'),
              'KY':require('../assets/images/baccarat_img_ky.png'),
              'PT':require('../assets/images/baccarat_img_pt.png'),
            }},
        ],




        list:[],



      }
    },
    created(){
    this.getList()

    },
    methods:{

      getList(){
        listAllGames().then((response)=>{

          this.list=response.data.gameList;
        }).catch((response)=>{
          console.log(response);
        })
      }
    },

  }
</script>
<style scoped>
.swiper-Tab .vux-slider{
    height: 100%;
    overflow-y: auto;

  }
  .swiper-Tab  /deep/ .vux-swiper{
  height: 90%!important;
  overflow-y: auto;

}

</style>
