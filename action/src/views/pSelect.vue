<template>
  <div>
    <mu-list v-for="(item, idx) in layout" :key="idx" style="padding: 15px 0px">
      <mu-list-item>
        <mu-list-item-action style="margin-right: 10px">{{item.title}}</mu-list-item-action>
        <mu-list-item-content>
          <!-- 便捷操作按钮 -->
          <mu-list-item-title style="height: auto;    white-space: normal;margin-bottom: 10px">
            <span
              class="type-nav"
              :class="{'currentType': toolSels[idx] === o}"
              v-for="(o, j) in tools[idx]"
              :key="j"
              @click="toolSel(idx, item.title, o, item.balls)"
            >{{o}}</span>
          </mu-list-item-title>
          <!-- 投注数字 -->
          <mu-list-item-sub-title style="height: auto; white-space: normal; margin-bottom: 10px">
            <template v-for="(n, j) in item.balls">
              <span
                class="type-nav-number"
                :key="j"
                :class="{'currentType': numbers[idx][n] === 1 }"
                @click="clickNumber(idx, item.title, item.values ? item.values[j] : n)"
              >{{n}}</span>
            </template>
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider shallow-inset></mu-divider>
    </mu-list>
  </div>
</template>
<script>
import { GAMES } from "@/assets/js/game/method";

function toDict(ary, v) {
  return ary.reduce((a, b) => {
    a[b] = v || 1;
    return a;
  }, {});
}

import { InlineXNumber } from "vux";
export default {
  name: "pSelect",
  props: ["lottery", "method"],
  model:{
    prop: 'method'
  },
  components: {
    InlineXNumber
  },
  data() {
    return {
      layout: {},
      // 已选号码
      numbers: [],
      tools: [],
      toolSels: [],
      game: this.lottery.shortName,
    };
  },
  mounted() {
    this.update();
  },
  watch: {
    method: function (v) {
      this.update();
    }
  },
  methods: {
    init: function() {
      this.numbers = this.layout.map(d => {
        return {};
      });
      this.toolSels = this.layout.map(d => "");
    },
    update: function () {
      let type = parseInt(this.lottery.type) - 1;
      this.layout = GAMES[type].method[this.method].select.layout;

      this.tools = this.layout.map(d => {
        let t = ["全"];
        if (d.tools == "full") t = t.concat(["大", "小"]);
        if (d.tools != "min") t = t.concat(["单", "双"]);
        t.push("清");
        return t;
      });
      this.init();
    },
    // 工具
    toolSel(index, title, n, balls) {
      this.toolSels[index] = n;
      let se = [];
      if (n == "全") {
        se = balls;
      } else if (n == "大") {
        se = balls.filter(function(a) {
          return parseInt(a) >= balls[Math.ceil(balls.length / 2)];
        });
      } else if (n == "小") {
        se = balls.filter(function(a) {
          return parseInt(a) < balls[Math.ceil(balls.length / 2)];
        });
      } else if (n == "单") {
        se = balls.filter(function(a) {
          return parseInt(a) % 2 !== 0;
        });
      } else if (n == "双") {
        se = balls.filter(function(a) {
          return parseInt(a) % 2 == 0;
        });
      } else if (n == "清") {
        se = [];
      } else if (n === "") {
        se.push(balls);
      }
      this.$set(this.numbers, index, toDict(se));
      this.$emit("changeNumber", this.numbers);
    },
    clickNumber(index, title, ball) {
      // 已存在，则取消
      this.$set(this.toolSels, index, "");
      this.numbers[index][ball] = this.numbers[index][ball] ? 0 : 1;
      this.$emit("changeNumber", this.numbers);
    }
  }
};
</script>
<style scoped>
.form-title {
  margin: 0;
  text-align: center;
  border-top: 1px solid #b2b2b2;
  padding: 10px 0px;
  background: #fff;
}

.play-title {
  background: #9cc1de;
  color: #fff;
  padding: 10px;
}
.vux-x-icon {
  fill: #fff;
}
.mu-dialog {
  font-size: 14px;
}
.play-game-tab {
  overflow-x: auto;
  width: 80%;
  float: left;
}
.play-game-nav .iconfont {
  float: right;
}
.type-nav {
  border: 1px solid #2196f3;
  display: inline-block;
  padding: 0px 8px;
  border-radius: 3px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 14px;
}
.type-nav-number {
  border: 1px solid #8c9dab;
  display: inline-block;
  border-radius: 50%;
  margin-right: 5px;
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 29px;
}
.currentType {
  background-color: #2196f3;
  color: #fff;
}
.play-game-nav {
  padding: 0px 10px;
  border-bottom: 1px solid #e1e2e4;
  background-color: #fafafa;
}
.compute-li {
  text-align: center;
  border-bottom: 1px solid #e1e2e4;
  padding: 15px 0px;
}
/*.play-game-nav .mu-tab{
  min-width: auto;
}*/
</style>
