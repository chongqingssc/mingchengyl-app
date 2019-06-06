
<template>
  <div id="app">

      <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',

  }
</script>

<style>
  html {
    font-size: 14px;
  }
  html , body ,#app{
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
/*  //非选中态图标
    a:nth-child(1) .mu-bottom-item-icon {
      background-image: url(../../static/img/index.png) ;
      background-repeat:no-repeat;
      width:24px;
      height:24px;
      background-size:auto 24px;
    }
  a:nth-child(2) .mu-bottom-item-icon {
    background-image: url(../../static/img/order.png) ;
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }
  a:nth-child(3) .mu-bottom-item-icon{
    background-image: url(../../static/img/mine.png) ;
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }
  //选中态图标
    a:nth-child(1).mu-bottom-item-active .mu-bottom-item-icon {
      background-image: url(../../static/img/indexa.png) ;
      background-repeat:no-repeat;
      width:24px;
      height:24px;
      background-size:auto 24px;
    }
  a:nth-child(2).mu-bottom-item-active .mu-bottom-item-icon {
    background-image: url(../../static/img/ordera.png) ;
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }
  a:nth-child(3).mu-bottom-item-active .mu-bottom-item-icon{
    background-image: url(../../static/img/minea.png) ;
    background-repeat:no-repeat;
    width:24px;
    height:24px;
    background-size:auto 24px;
  }

    .mu-bottom-item-text{
      color:#999999
    }
  .mu-bottom-item-active .mu-bottom-item-text{
    color:#2b2b2b;
  }*/
</style>
