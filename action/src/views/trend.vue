<template>
<div class="trend-model">
  <div>
   <span>{{selectName}}</span>
    <span class="select-span" :class="{chan:cho==30}"  @click="chooseStage('30')">30期</span>
    <span class="select-span" :class="{chan:cho==50}"  @click="chooseStage('50')">50期</span>
    <span class="select-span"  :class="{chan:cho==100}" @click="chooseStage('100')">100期</span>

    <mu-button icon  slot="right"style="padding: 0;width: 30px" @click="openSimple = true"><i class="iconfont">&#xe78a;</i></mu-button>
  </div>
  <mu-data-table border :columns="columns" :height="height" :data="list">





    <template slot-scope="scope" >

      <td>{{scope.row.issue.split('-')[1]}}期</td>
      <td class="is-center" v-for="col in columns.slice(1,11)">
        <span :class="scope.row.item[col.title].high ? 'choose' : ''">
          {{scope.row.item[col.title].numb}}
          <i class="high-times" v-if="scope.row.item[col.title].high">
             {{scope.row.item[col.title].high ? scope.row.item[col.title].times : ''}}
          </i>

        </span>
      </td>


    </template>
  </mu-data-table>
  <mu-dialog  max-width='95%':open.sync="openSimple">
   <div v-for="(item,index) in selectData">
     <label>{{item.name}}：</label>
     <p>
       <span v-for="(a,i) in item.value" class="select-span" :class="{selected:selectName == a.name}" @click="selectFun(item.name,a)">{{a.name}}</span>
     </p>


   </div>
  </mu-dialog>

</div>

</template>
<script>
  import  {queryTrend} from '@/api/login'
  import Tab from "vux/src/components/tab/tab";

  let Numbers = [['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    ['1', '2', '3', '4', '5', '6'],
    [],
    ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  ];
  export default {
    name:'trend',
    components: {Tab},
    data(){
      return {
        openSimple:false,
        selectName:'单号走势_万位',
        selectData:[
          {name:'单号走势',value:[{name:'万位',value:[1,0,0,0,0]},{name:'千位',value:[0,1,0,0,0]},{name:'百位',value:[0,0,1,0,0]},{name:'十位',value:[0,0,0,1,0]},{name:'个位',value:[0,0,0,0,1]}]},
          {name:'多号走势',value:[{name:'五星',value:[1,1,1,1,1]},{name:'后四',value:[0,1,1,1,1]},{name:'前四',value:[1,1,1,1,0]},
              {name:'后三',value:[0,0,1,1,1]}, {name:'中三',value:[0,1,1,1,0]}, {name:'前三',value:[1,1,1,0,0]}, {name:'后二',value:[0,0,0,1,1]},
              {name:'前二',value:[1,1,0,0,0]}]},
        ],
        selectParams:'',
        selectBits: [1, 0, 0, 0, 0],
        height:window.screen.height,
        query:{
          name: 'cqssc',
          query: 'latest-30'
        },
        list:[],
        columns:
          [
          { title: '期数',width:window.screen.width/11,align: 'center',cellAlign:'center'}

        ],
        colNum:1,
        notAppear:'',
        cho:30

      }
    },

    created(){
      let $this = this;
      Numbers[0].forEach(d => {
        $this.columns.push({ title: d, width:window.screen.width/11,align: 'center',cellAlign:'center'});
      });
      this.getList()
    },
    methods:{
      chooseStage(num){
        this.cho = num
        this.query.query = 'latest-'+num
        this.getList()
      },
      selectFun(bname, row){
        this.selectName = bname+'_'+row.name;
        this.openSimple = false
        this.selectBits = row.value
        this.getList()

      },
      updateItems: function () {
        let $this = this;
        let notAppear = JSON.parse(JSON.stringify($this.notAppear));
        this.list.forEach(function (a,i) {
          let codes = a.code.split(',').filter((d, i) => $this.selectBits[i]);
          // 全局累加
          let cache = new Set(codes);
          console.log(Array(cache));
          Numbers[0].forEach(d => {
            // console.log(cache.has(d));
            notAppear[d] = cache.has(d) ? 0 : notAppear[d] + 1;
          });
          // 单行赋值
          let item = Numbers[0].reduce((a, b) => {
            a[b] = {'high': 0, 'numb': notAppear[b], 'times': 0};
            return a;
          }, {});
          codes.forEach(d => {
            item[d].high = 1;
            item[d].times++;
            item[d].numb = d;
          });
          a['item'] = item;
        });
      },
      //开奖
      getList(flag){
        let $this = this;
        if(flag){this.list = []}
        queryTrend(this.query).then(res=>{
          this.list= res.data.result.reverse();

          this.notAppear = res.data.notAppear;
          // 100期未出现该号码
          Numbers[0].forEach(d => { if (!(d in this.notAppear)) this.notAppear[d] = 100; });

          this.updateItems();

        })
      },
    }
  }
</script>
<style scoped>

  .trend-model /deep/ .mu-table th{
    padding: 0;
  }
  .trend-model /deep/ .mu-table td{
    padding: 0;
  }
  .choose{
    display: inline-block;
    background-color: #2196f3;
    color: #fff;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    position: relative;
  }
.select-span{
  display: inline-block;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  border: 1px solid #2196f3 ;
  border-radius: 3px;

}
  .selected{
    background-color: #1dacff;
    color: #fff;
  }
  .high-times{
    width: 15px;
    height: 15px;
    text-align: center;
    position: absolute;
    border-radius: 50%;
    font-style: normal;
    top: -8px;
    background: rgb(255, 87, 34);
    line-height: 15px;
    right: -5px;
    font-size: 12px;
  }
  .chan{
    background: #2196f3;
    color: #fff;
  }
</style>
