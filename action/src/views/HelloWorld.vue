<template>
<div style="position: relative">
  <mu-appbar class=" header"  color="primary">
    <div class="tc">
      <input placeholder="请输入搜索内容" class="search-input"/>
    </div>


  </mu-appbar>

<div class="content">
  <div>
    <div class="carousel-model">
      <mu-carousel hide-controls hide-indicators transition="fade" >
        <mu-carousel-item v-for="item in list">
          <img :src="item.img" style="width: 90%;"/>
        </mu-carousel-item>

      </mu-carousel>
    </div>
    <div class="home-notice">
      <div class="home-notice-img">
        <img src="../assets/images/home_notice_icon.png"  >

      </div>
      <div class="scroll-wrap" v-if="prizeList.length>0">
        <ul class="scroll-content" :style="{ top }">
          <router-link to="systemNotice">
            <li v-for="item in prizeList">{{item.title}}</li >
          </router-link>

        </ul>
      </div>


    </div>
    <ul class="home-item">
      <li><router-link to="game"><img src="../assets/images/home_intent_1.png"/></router-link> </li>
      <li><router-link to="game"><img src="../assets/images/home_intent_2.png"/></router-link> </li>
      <li><router-link to="game"><img src="../assets/images/home_intent_3.png"/></router-link> </li>
      <li><router-link to="game"><img src="../assets/images/home_intent_4.png"/></router-link> </li>
      <li><router-link to="game"><img src="../assets/images/home_intent_5.png"/></router-link> </li>
    </ul>


    <div class="add-lottery">
      <div class="clearfix add-lottery-title">
        <p style="float:left;margin: 0"><img src="../assets/images/lottery_last_icon.png" style="width: 19px;margin-right: 5px"/><span>我的游戏</span></p>
        <router-link to="oppenGame">  <img src="../assets/images/home_add_lottery.png"style="float: right;width: 23%"></router-link>

      </div>
      <mu-list>
      <mu-list-item avatar button :ripple="false" v-for="item in gameList" style="border-bottom: 1px solid #eee" v-if="item.checked">
        <mu-list-item-action>
          <mu-avatar>
            <img :src="selectMap[item.name].img">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-title>{{item.name}}</mu-list-item-title>
        <mu-list-item-action>
          <mu-button small color="red" :to="{path: 'playItem', query: {name:selectMap[item.name].lottery}}">进入</mu-button>
        </mu-list-item-action>
      </mu-list-item>

      </mu-list>
    </div>
  </div>

</div>
</div>




</template>

<script>
  import  {listNotice,teamloadContractStatus} from  '@/api/login'
  import Cookies from 'js-cookie'
  import 'muse-ui-message/dist/muse-ui-message.css';
  import Message from 'muse-ui-message';
  export default {
  name: 'HelloWorld',
    components: {

    },
  data () {
    return {
      selectMap: {
        '重庆时时彩': {
          img: require('../assets/images/home_ssc_cq.png'),
          lottery: 'cqssc',
          content: '开奖时间：7点10分至凌晨3点10分，开奖频率：20分钟一期，每日期数：59期。',
        },
        '天津时时彩': {
          lottery: 'tjssc',
          img: require('../assets/images/home_ssc_tj.png'),
          content: '开奖时间：9点至23点，开奖频率：10分钟一期，每日期数：84期。',
        },
        '新疆时时彩': {
          lottery: 'xjssc',
          img: require('../assets/images/home_ssc_xj.png'),
          content: '开奖时间：10点至凌晨2点，开奖频率：10分钟一期，每日期数：96期。',
        },
        '北京时时彩': {
          lottery: 'bjssc',
          img: require('../assets/images/home_ssc_bj.png'),
          content: '开奖时间：9点至24点，开奖频率：5分钟一期，每日期数：179期。',
        },
        '台湾时时彩': {
          lottery: 'twssc',
          img: require('../assets/images/home_ssc_tw.png'),
          content: '开奖时间：7点至24点，开奖频率：5分钟一期，每日期数：203期。',
        },
        '腾讯5分彩': {
          lottery: 'qq5fen',
          img: require('../assets/images/qq5fen.png'),
          content: '开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期',
        },
        '腾讯分分彩': {
          lottery: 'qqmin',
          img: require('../assets/images/qqmin.png'),
          content: '开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。',
        },
        '幸运十分彩': {
          lottery: 't1s600',
          img: require('../assets/images/t1s600.png'),
          content: '开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。',
        },
        '河内5分彩': {
          lottery: 't1s300',
          img: require('../assets/images/t1s300.png'),
          content: '开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。',
        },
        '新加坡30秒彩': {
          lottery: 't1s30',
          img: require('../assets/images/home_qtc_singapore_30s.png'),
          content: '开奖时间：0点至24点，开奖频率：30秒一期，每日期数：2880期。',
        },
        '美国一分彩': {
          lottery: 't1s60',
          img: require('../assets/images/home_qtc_america.png'),
          content: '开奖时间：0点至24点，开奖频率：60秒一期，每日期数：1440期。',
        },
        '韩国1.5分彩': {
          lottery: 't1s90',
          img: require('../assets/images/home_qtc_korea1_5m.png'),
          content: '开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。',
        },
        '新德里1.5分彩': {
          lottery: 't1s90a',
          img: require('../assets/images/home_qtc_newdelhi.png'),
          content: '开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期.',
        },
        '俄罗斯1.5分彩': {
          lottery: 't1s90b',
          img: require('../assets/images/home_qtc_russia.png'),
          content: '开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。',
        },
        '印度1.5分彩': {
          lottery: 't1s90c',
          img: require('../assets/images/home_qtc_india.png'),
          content: '开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。',
        },
        '东京1.5分彩': {
          lottery: 't1s90d',
          img: require('../assets/images/home_qtc_tokyo.png'),
          content: '开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。',
        },
        '缅甸3分彩': {
          lottery: 't1s180',
          img: require('../assets/images/home_qtc_myanmar.png'),
          content: '开奖时间：0点至24点，开奖频率：180秒一期，每日期数：480期。',
        },
        '新加坡2分彩': {
          lottery: 'sgssc',
          img: require('../assets/images/home_qtc_singapore_2m.png'),
          content: '开奖时间：0点至24点，开奖频率：1分钟一期，每日期数：1440期。',
        },
        '纽约11选5': {
          img: require('../assets/images/home_11x5_newyork.png'),
          content: '开奖时间：0点至24点，开奖频率：30秒一期，每日期数：2880期。',
          lottery: 't2s30'
        },
        '加拿大11选5': {
          img: require('../assets/images/home_11x5_canada.png'),
          content: '开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。',
          lottery: 't2s90'
        },
        '广东11选5': {
          img: require('../assets/images/home_11x5_gd.png'),
          content: '开奖时间：9点至23点，开奖频率：10分钟一期，每日期数：84期。',
          lottery: 'gd11x5'
        },
        '江西11选5': {
          img: require('../assets/images/home_11x5_jx.png'),
          content: '开奖时间：9点至23点，开奖频率：10分钟一期，每日期数：84期。',
          lottery: 'jx11x5'
        },
        '安徽11选5': {
          img: require('../assets/images/home_11x5_ah.png'),
          content: '开奖时间：8点30分至22点，开奖频率：10分钟一期，每日期数：81期。',
          lottery: 'ah11x5'
        },
        '上海11选5': {
          img: require('../assets/images/home_11x5_sh.png'),
          content: '开奖时间：9点至23点，开奖频率：10分钟一期，每日期数：84期。',
          lottery: 'sh11x5'
        },
        '山东11选5': {
          img: require('../assets/images/home_11x5_sd.png'),
          content: '开奖时间：9点至22点，开奖频率：五分钟一期，每日期数：78期。',
          lottery: 'sd11x5'
        },
        '辽宁11选5': {
          img: require('../assets/images/home_11x5_ln.png'),
          content: '开奖时间：8点至22点，开奖频率：十分钟一期，每日期数：83期。',
          lottery: 'ln11x5'
        },

        '吉隆坡快3': {
          img: require('../assets/images/home_k3_jlp.png'),
          content: '开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。',
          lottery: 't3s90'
        },
        '新西兰快3': {
          img: require('../assets/images/home_k3_xxl.png'),
          content: '开奖时间：0点至24点，开奖频率：120秒一期，每日期数：720期。',
          lottery: 't3s120'
        },
        '江苏快3': {
          img: require('../assets/images/home_k3_js.png'),
          content: '开奖时间：8点40分至22点，开奖频率：10分钟一期，每日期数：82期。',
          lottery: 'jsk3'
        },
        '安徽快3': {
          img: require('../assets/images/home_k3_ah.png'),
          content: '开奖时间：8点50分至22点，开奖频率：10分钟一期，每日期数：80期。',
          lottery: 'ahk3'
        },
        '湖北快3': {
          img: require('../assets/images/home_k3_hb.png'),
          content: '开奖时间：9点10分至22点，开奖频率：10分钟一期，每日期数：78期。',
          lottery: 'hbk3'
        },
        '吉林快3': {
          img: require('../assets/images/home_k3_jl.png'),
          content: '开奖时间：8点30分至21点，开奖频率：10分钟一期，每日期数：79期。',
          lottery: 'jlk3'
        },

        '北京快乐8': {
          img: require('../assets/images/home_kl8_bj.png'),
          content: '开奖时间：9点至24点，开奖频率：5分钟一期，每日期数：179期。',
          lottery: 'bjkl8'
        },
        '韩国快乐8': {
          img: require('../assets/images/home_kl8_korea.png'),
          content: '开奖时间：凌晨0点至5点，7点至24点，开奖频率：90秒一期，凌晨200期，7点后680期，每日期数：880期。',
          lottery: 'hgkl8'
        },
        '台湾快乐8': {
          img: require('../assets/images/home_kl8_tw.png'),
          content: '开奖时间：7点至24点，开奖频率：5分钟一期，每日期数：203期。',
          lottery: 'twkl8'
        },
        '东京快乐8': {
          img: require('../assets/images/home_kl8_tokyo.png'),
          content: '开奖时间：凌晨0点到7点，8点至24点，开奖频率：90秒一期，凌晨320期，8点后600期，每日期数：920期。',
          lottery: 'jpkl8'
        },
        '新加坡快乐8': {
          img: require('../assets/images/home_kl8_singapore.png'),
          content: '开奖时间：凌晨0点到6点，8点至24点，开奖频率：2分钟一期，凌晨180期，8点后480期，每日期数：660期。',
          lottery: 'sgkl8'
        },

        '福彩3D': {
          img: require('../assets/images/home_other_fc3d.png'),
          content: '开奖时间：20点30分，开奖频率：一天一期，每日期数：1期。',
          lottery: 'fc3d'
        },
        '排列三': {
          img: require('../assets/images/home_other_pl3.png'),
          content: '开奖时间：20点30分，开奖频率：一天一期，每日期数：1期。',
          lottery: 'pl3'
        },
        '英国120秒赛车': {
          img: require('../assets/images/home_other_sc120s.png'),
          content: '开奖时间：0点至24点，开奖频率：120秒一期，每日期数：720期。',
          lottery: 't6s120'
        },
        '英国180秒赛车': {
          img: require('../assets/images/home_other_sc180s.png'),
          content: '开奖时间：0点至24点，开奖频率：180秒一期，每日期数：480期。',
          lottery: 't6s180'
        },
        '北京PK拾': {
          img: require('../assets/images/home_other_pk10.png'),
          content: '开奖时间：9点至24点，开奖频率：5分钟一期，每日期数：179期',
          lottery: 'bjpk10'
        },
        '幸运飞艇': {
          img: require('../assets/images/t6s300.png'),
          content: '开奖时间：0点至24点，开奖频率：180秒一期，每日期数：480期。',
          lottery: 't6s300'
        }


      },
      gameList: [],
      prizeList: [
        {name: 1},
        {name: 2},
      ],
      activeIndex: 0,
      list: [{
        img: require('../assets/images/home_banner_1.png'),
      }, {
        img: require('../assets/images/home_banner_2.png'),
      }, {
        img: require('../assets/images/home_banner_3.png'),
      }
      ]
    }
  },

    computed: {
      top() {
        return - this.activeIndex * 40 + 'px';
      }
    },

    mounted() {
      this.$vux.loading.hide()

      setInterval(_ => {
        if(this.activeIndex < this.prizeList.length-1) {
          this.activeIndex += 1;
        } else {
          this.activeIndex = 0;
        }
      }, 3000);
      listNotice({content:true}).then((response)=>{

        this.prizeList=response;
      }).catch((response)=>{
        console.log(response);
      })


    },
    created(){
      this.$vux.loading.show()

      teamloadContractStatus().then((res)=>{
        if(res.data.dividendContract.status == 0){
          Message.confirm('您有新的契约需要同意，是否立即处理？', '提示', {
            type: 'warning'
          }).then(({ result }) => {
            if (result) {

              this.$router.push({ path: '/personSearch?tabIndex=12' })

            }
          });

        }
      }).catch((response)=>{
        console.log(response);
      })
      let arr = Cookies.get('appMyGame')?JSON.parse(Cookies.get('appMyGame')):[];
      var me  = this
      arr.forEach(function (a) {
        a.tab.forEach(function (b) {
          me.gameList.push(b)
        })

      })
   /*  this.gameList =  JSON.parse(Cookies.get('appMyGame'));*/


    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-model{
  padding: 10px;
  border-radius: 3px;
}
  .home-item{
    overflow-x: auto;
    white-space: nowrap;
    width: auto;
    padding: 0;
  }


  .home-item li {
    margin-left: 10px;
  display: inline-block;
    width: 50%;
  }
  .home-item li img{
    display: inline-block;
    width: 100%;
  }
  .home-notice{
    height: 50px;
    background: #fff;
    padding: 10px 20px;
    box-sizing: border-box;
  }
  .home-notice-img{
    float: left;
    width: 20%;
    border-right: 1px solid #b2b2b2

  }
.home-notice-img img{
  width: 67%;}
  .scroll-wrap{
    width: 79%;
  height: 40px;

    overflow: hidden;
  }

  .scroll-content {
    position: relative;
    transition: top 0.5s;
    margin: 0;
  }

.scroll-content li{
  line-height: 40px;
  list-style: none;
}
.add-lottery{

  background: #fff;
}
  .add-lottery-title{
    padding: 15px 10px;
    border-bottom: 1px solid #b2b2b2;
  }


  .search-input{
    width: 70%;
    margin: 0 auto;
    border-radius: 15px;
    height: 30px;
    border: 0;
    line-height: 28px;
    text-indent: 1em;
    outline: none;
    font-size: 14px;
  }
</style>
