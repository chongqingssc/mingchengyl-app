<template>
  <div class="pay"  style="position: relative">
    <mu-appbar class="tc header" title="购彩大厅" color="primary">

    </mu-appbar>
    <div class="content playSlider">
      <div  style="height: 100%;overflow-y: hidden">
          <tab :line-width=2 active-color='#fc378c' v-model="active">
            <tab-item class="vux-center" :selected="tabName === item" v-for="(item, index) in listTab" @click="tabName = item" :key="index">{{item}}</tab-item>
          </tab>
          <swiper v-model="active"  :show-dots="false">
            <swiper-item v-for="(item, index) in tab" :key="index" >
              <mu-row gutter >
                <mu-col span="4" v-for="g in item.value" :key="g.lottery" style="text-align: center">
                  <router-link :to="{path: 'playItem', query: {name: g.lottery,source:active}}">
                    <div class="grid-cell">
                      <img :src="g.img"  class="grid-img"/>
                      <p class="cr2 f12">{{g.name}}</p>
                    </div>
                  </router-link>

                </mu-col>

              </mu-row>
            </swiper-item>
          </swiper>
        </div>




    </div>






  </div>
</template>

<script>
  import {GameList} from '@/assets/js/game/game'
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'

  export default {
    name: 'play',
    components: {
      Tab,TabItem,Swiper,SwiperItem
    },
    data(){
      return{
        active:parseInt(this.$route.query.source),
        tabName: '时时彩',
        listTab:['时时彩','全天彩','11选5','快3','快乐8','其它'],
        tab:[
          {name:'时时彩',value:[
              {img:require('../assets/images/t1s600.png'), lottery: 't1s600', type: 1, name:'幸运十分彩'},
              {img:require('../assets/images/t1s300.png'), lottery: 't1s300', type: 1, name: '河内5分彩'},
              {img:require('../assets/images/t1s300a.png'), lottery: 't1s300a', type: 1, name: '幸运5分彩'},
              {img:require('../assets/images/t1s120.png'), lottery: 't1s120', type: 1, name: '快乐2分彩'},

              {img:require('../assets/images/t1s60a.png'), lottery: 't1s60a', type: 1, name: '幸运分分彩'},
              {img:require('../assets/images/home_ssc_cq.png'), lottery: 'cqssc', type: 1, name:'重庆时时彩'},
              {img:require('../assets/images/home_ssc_tj.png'), lottery: 'tjssc', type: 1, name: '天津时时彩'},
              {img:require('../assets/images/home_ssc_xj.png'), lottery: 'xjssc', type: 1, name:'新疆时时彩'},
              {img:require('../assets/images/home_ssc_bj.png'), lottery: 'bjssc', type: 1, name: '北京时时彩'},

              {img:require('../assets/images/home_ssc_tw.png'), lottery: 'twssc', type: 1, name:'台湾时时彩'},

              {img:require('../assets/images/qqmin.png'), lottery: 'qqmin', type: 1, name: '腾讯分分彩'},
              {img:require('../assets/images/qq5fen.png'), lottery: 'qq5fen', type: 1, name: '腾讯5分彩'},
              {img:require('../assets/images/qq10fen.png'), lottery: 'qq10fen', type: 1, name: '腾讯十分彩'},
      ]}
      , {name:'全天彩',value:[
              {img:require('../assets/images/home_qtc_singapore_30s.png'), lottery: 't1s30', type: 2, name: '新加坡30秒彩'},
              {img:require('../assets/images/home_qtc_america.png'), lottery: 't1s60', type: 2, name: '美国一分彩'},
              {img:require('../assets/images/home_qtc_korea1_5m.png'), lottery: 't1s90', type: 2, name: '韩国1.5分彩'},
              {img:require('../assets/images/home_qtc_newdelhi.png'), lottery: 't1s90a', type: 2, name: '新德里1.5分彩'},

              {img:require('../assets/images/home_qtc_russia.png'), lottery: 't1s90b', type: 2, name: '俄罗斯1.5分彩'},
              {img:require('../assets/images/home_qtc_india.png'), lottery: 't1s90c', type: 2, name: '印度1.5分彩'},
              {img:require('../assets/images/home_qtc_tokyo.png'), lottery: 't1s90d', type: 2, name: '东京1.5分彩'},
              {img:require('../assets/images/home_qtc_myanmar.png'), lottery: 't1s180', type: 2, name: '缅甸3分彩'},
              {img:require('../assets/images/home_qtc_singapore_2m.png'), lottery: 'sgssc', type: 2, name: '新加坡2分彩'},
            ]} , {name:'11选5',value:[
              {img:require('../assets/images/home_11x5_newyork.png'), lottery: 't2s30', type: 3, name: '纽约11选5'},
              {img:require('../assets/images/home_11x5_canada.png'), lottery: 't2s90', type: 3, name: '加拿大11选5'},
              {img:require('../assets/images/home_11x5_gd.png'), lottery: 'gd11x5', type: 3, name: '广东11选5'},
              {img:require('../assets/images/home_11x5_jx.png'), lottery: 'jx11x5', type: 3, name: '江西11选5'},
              {img:require('../assets/images/home_11x5_ah.png'), lottery: 'ah11x5', type: 3, name: '安徽11选5'},
              {img:require('../assets/images/home_11x5_sh.png'), lottery: 'sh11x5', type: 3, name: '上海11选5'},
              {img:require('../assets/images/home_11x5_sd.png'), lottery: 'sd11x5', type: 3, name: '山东11选5'},
              {img:require('../assets/images/home_11x5_ln.png'), lottery: 'ln11x5', type: 3, name: '辽宁11选5'},
            ]} , {name:'快3',value:[
              {img:require('../assets/images/home_k3_jlp.png'), lottery: 't3s90', type: 4, name: '吉隆坡快3'},
              {img:require('../assets/images/home_k3_xxl.png'), lottery: 't3s120', type: 4, name: '新西兰快3'},
              {img:require('../assets/images/home_k3_js.png'), lottery: 'jsk3', type: 4, name: '江苏快3'},
              {img:require('../assets/images/home_k3_ah.png'), lottery: 'ahk3', type: 4, name: '安徽快3'},
              {img:require('../assets/images/home_k3_hb.png'), lottery: 'hbk3', type: 4, name: '湖北快3'},
              {img:require('../assets/images/home_k3_jl.png'), lottery: 'jlk3', type: 4, name: '吉林快3'},
            ]}, {name:'快乐8',value:[
              {img:require('../assets/images/home_kl8_bj.png'), lottery: 'bjkl8', type: 5, name: '北京快乐8'},
              {img:require('../assets/images/home_kl8_korea.png'), lottery: 'hgkl8', type: 5, name: '韩国快乐8'},
              {img:require('../assets/images/home_kl8_tw.png'), lottery: 'twkl8', type: 5, name: '台湾快乐8'},
              {img:require('../assets/images/home_kl8_tokyo.png'), lottery: 'jpkl8', type: 5, name: '东京快乐8'},
              {img:require('../assets/images/home_kl8_singapore.png'), lottery: 'sgkl8', type: 5, name: '新加坡快乐8'}
            ]}, {name:'其它',value:[
              {img:require('../assets/images/home_other_fc3d.png'), lottery: 'fc3d', type: 6, name: '福彩3D'},
              {img:require('../assets/images/home_other_pl3.png'), lottery: 'pl3', type: 6, name: '排列三'},
              {img:require('../assets/images/home_other_sc120s.png'), lottery: 't6s120', type: 6, name: '英国120秒赛车'},
              {img:require('../assets/images/home_other_sc180s.png'), lottery: 't6s180', type: 6, name: '英国180秒赛车'},
              {img:require('../assets/images/t6s300.png'), lottery: 't6s300', type: 6, name: '幸运飞艇'},
              {img:require('../assets/images/home_other_pk10.png'), lottery: 'bjpk10', type: 6, name: '北京PK拾'}
            ]}
        ],




      }
    },
    mounted: function () {
      this.$vux.loading.hide()

      GameList.cache = GameList.list.reduce((a, b) => {
        a[b.shortName] = b; return a;
      }, {});
    },
    created(){
      this.$vux.loading.show()

    }


  }
</script>
<style scoped>
  .grid-img{
    width: 65%;
  }

 .playSlider .vux-slider{
    height: 100%;
    margin-top: 1em;
   overflow-y: auto;

  }
.playSlider /deep/ .vux-swiper{
  height: 92%!important;
  overflow-y: auto;

}
  /*.weui-grid{
    text-align:center;
    cursor: pointer;
  }
  .weui-grid:before{
    border: 0;
  }
  .weui-grid:after{
    border: 0;
  }
  a{text-decoration: none}*/
</style>
