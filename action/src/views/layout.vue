<template>
  <div>

    <router-view ></router-view>
    <mu-bottom-nav  class="bottom_nav" :value="bottomNav" >
      <mu-bottom-nav-item value="helloWorld" to="/helloWorld"  title="首页" icon=":iconfont icon-shouye"/>
      <mu-bottom-nav-item value="play" to="/play"  title="购彩大厅" icon=":iconfont icon-caipiao" />
      <mu-bottom-nav-item value="game" to="/game"  title="百家乐游戏" icon=":iconfont icon-youxi1" />
      <mu-bottom-nav-item value="person" to="/person"  title="个人中心" icon=":iconfont icon-geren" />
    </mu-bottom-nav>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        bottomNav: 'helloWorld'
      }
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        if (this.$route.path === "/helloWorld") {
          this.bottomNav = "helloWorld"
        }
        if (this.$route.path === "/play" || this.$route.path === "/playItem") {
          this.bottomNav = "play"
        }
        if (this.$route.path === "/game") {
          this.bottomNav = "game"
        }
        if (this.$route.path === "/person" || this.$route.path == '/personSearch') {
          this.bottomNav = "person"
        }
      }
    }
  }
</script>
