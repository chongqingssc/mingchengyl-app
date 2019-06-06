
export let account_data;
export let config_data;
export let lotterys;
export let methods;

function  init () {
  let store = JSON.parse(localStorage.getItem('initdata'))
  account_data = {
     lotteryCode: store?store.gameLotteryAccount.code:0,
     lotteryPoint:store?store.gameLotteryAccount.point:0
   }
    config_data = {
     lotteryCode: store?store.gameLotteryConfig.sysCode:0,
     lotteryPoint: store?store.gameLotteryConfig.sysPoint:0,
     unitMoney: store?store.gameLotteryConfig.sysUnitMoney:0,
   };
  let obj ={}
  store?store.gameLotteryInfoList.map(function (a) {
    obj[a.shortName] =a
  }):{};

  lotterys= obj

  let _methods = [{},{},{},{},{},{}]
  let objMethods ={}
  store?store.gameLotteryMethodList.map(function (a) {
    _methods[a.type-1][a.methodName] = a
    //objMethods[a.methodName] =a
  }):{};
  methods = _methods


}
 init()
export  function  updateCache () {
   init()
}

