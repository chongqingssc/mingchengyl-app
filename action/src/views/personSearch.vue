<template>
    <div class="pay" style="background-color: #fff">
      <mu-appbar class="tc header"  color="primary">
        <mu-button slot="left" icon @click="closeFullscreenDialog">
          <i class="iconfont">&#xe604;</i>
        </mu-button>
        {{titleName[tabIndex]}}
        <mu-button slot="right" icon >
          <i class="iconfont" style="display: none">&#xe604;</i>
        </mu-button>
      </mu-appbar>
      <div class="content" style="padding-bottom: 0">

        <div class="date-select "v-if="tabIndex == 1">
          <div class="tc" ref="contentDom">
            <mu-date-input v-model="query1.sDate" :value-format="format"  class="date-input" @change="getList1"></mu-date-input>
            至
            <mu-date-input v-model="query1.eDate" :value-format="format"  class="date-input" @change="getList1"></mu-date-input>
          </div>
          <div>
            <mu-paper :z-depth="1"   >
              <mu-data-table :columns="columns1" :min-col-width="80"  :data="list1"  >
                <template slot-scope="scope">

                  <td>{{scope.row.field}}</td>
                  <td >{{scope.row.profit.toFixed(2)}}</td>
                  <td >{{scope.row.consume}}</td>
                  <td >{{scope.row.bonus.toFixed(2)}}</td>
                  <td >{{scope.row.recharge}}</td>
                  <td >{{scope.row.withdraw}}</td>
                  <td >{{scope.row.rebateConsume.toFixed(2)}}</td>
                  <td >{{scope.row.activity}}</td>
                  <td >{{scope.row.rebateAgent.toFixed(2)}}</td>
                </template>
              </mu-data-table>
            </mu-paper>
          </div>


        </div>
        <div class="date-select " v-if="tabIndex == 2">
          <div class="clearfix mt1" ref="contentDom">
            <div style="float: left;width: 78%;text-align: center">
              <mu-date-input v-model="query2.sTime" :value-format="format"  class="date-input" @change="getList2(1)"></mu-date-input>
              至
              <mu-date-input v-model="query2.eTime" :value-format="format"  class="date-input" @change="getList2(1)"></mu-date-input>
            </div>
            <mu-select style="width: 22%;float: right;font-size: 14px;margin-bottom: 0" v-model="selectAllOption" @change="getList2(1)">
              <mu-option v-for="option,index in options" :key="option.value" :label="option.label" :value="option.value"></mu-option>
            </mu-select>
          </div>
          <div>
            <div  class="demo-loadmore-wrap ">

              <mu-container ref="container" class="demo-loadmore-content" >
                <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                    <mu-data-table :columns="columns2"  :data="list2"  :min-col-width="80"  @row-click="clickDetail" >
                      <template slot-scope="scope">

                        <td>{{scope.row.lottery}}</td>
                        <td >{{scope.row.issue}}</td>
                        <td >{{scope.row.money?scope.row.money.toFixed(2):0}}</td>
                        <td >{{scope.row.winMoney?scope.row.winMoney.toFixed(2):0}}</td>
                        <td >{{scope.row.orderTime}}</td>
                        <td >{{scope.row.method}}</td>
                      </template>

                    </mu-data-table>

                </mu-load-more>
              </mu-container>

            </div>
          </div>



        </div>
        <div class="date-select " v-if="tabIndex == 3">
          <div class="clearfix" >
            <div style="float: left;width: 78%;text-align: center">
              <mu-date-input v-model="startTime" class="date-input"></mu-date-input>
              至
              <mu-date-input v-model="endTime" class="date-input"></mu-date-input>
            </div>
            <mu-select style="width: 22%;float: right;font-size: 14px" v-model="selectAllOption1">
              <mu-option v-for="option,index in options1" :key="option" :label="option" :value="option"></mu-option>
            </mu-select>
          </div>


          <mu-paper :z-depth="1">
            <mu-data-table :columns="columns3"   :data="list3">
              <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td >{{scope.row.calories}}</td>
                <td >{{scope.row.fat}}</td>
                <td >{{scope.row.carbs}}</td>
                <td >{{scope.row.protein}}</td>
                <td >{{scope.row.iron}}%</td>
              </template>
            </mu-data-table>
          </mu-paper>
        </div>
        <div class="date-select " v-if="tabIndex == 4">
          <div class="clearfix"  ref="contentDom">
            <div style="float: left;width: 78%;text-align: center">
              <mu-date-input v-model="query4.sTime" :value-format="format"  class="date-input" @change="getList4(1)"></mu-date-input>
              至
              <mu-date-input v-model="query4.eTime" :value-format="format"  class="date-input" @change="getList4(1)"></mu-date-input>

            </div>
            <mu-select style="width: 22%;float: right;font-size: 14px;margin-bottom: 0" v-model="selectAllOption2" @change="getList4(1)">
              <mu-option v-for="option,index in options2" :key="option.value" :label="option.label" :value="option.value"></mu-option>
            </mu-select>
          </div>
          <div>
            <div  class="demo-loadmore-wrap">
              <mu-container ref="container" class="demo-loadmore-content">
                <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">

                    <mu-data-table :columns="columns4"  :data="list4" :min-col-width="80" >
                      <template slot-scope="scope">
                        <td>{{computedTxt(scope.row.time)}} </td>
                        <td >{{typeMap[scope.row.type]}}</td>
                        <td >{{scope.row.amount?scope.row.amount.toFixed(2):0}}</td>
                        <td >{{scope.row.balanceAfter?scope.row.balanceAfter.toFixed(2):0}}</td>
                      </template>

                    </mu-data-table>

                </mu-load-more>
              </mu-container>
            </div>
          </div>



        </div>
        <div class="date-select " v-if="tabIndex == 5">
          <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
            <mu-tab>充值记录</mu-tab>
            <mu-tab>提现记录</mu-tab>
          </mu-tabs>
          <div v-if="active1 == 0">
            <div class="clearfix" ref="contentDom">
              <div style="float: left;width: 78%;text-align: center">
                <mu-date-input v-model="query5.sTime" :value-format="format"  class="date-input" @change="getList5(1)"></mu-date-input>
                至
                <mu-date-input v-model="query5.eTime" :value-format="format"  class="date-input" @change="getList5(1)"></mu-date-input>

              </div>
              <mu-select style="width: 22%;float: right;font-size: 14px;margin-bottom: 0" v-model="selectAllOption5" @change="getList5(1)">
                <mu-option v-for="option,index in options5" :key="option" :label="option" :value="option"></mu-option>
              </mu-select>
            </div>
            <div>
              <div  class="demo-loadmore-wrap">

                  <mu-container ref="container" class="demo-loadmore-content">
                    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">

                      <mu-data-table :columns="columns5"  :data="list5" :min-col-width="80" >
                        <template slot-scope="scope">
                          <td>{{scope.row.payTime}}</td>
                          <td >网银充值</td>
                          <td >{{scope.row.amount}}</td>
                          <td >{{scope.row.payTime}}</td>
                          <td >{{scope.row.balanceAfter}}</td>
                          <td >{{scope.row.orderStatus}}</td>
                        </template>

                      </mu-data-table>
                    </mu-load-more>
                  </mu-container>


              </div>
            </div>


          </div>
          <div v-if="active1 == 1">
            <div class="clearfix" ref="contentDom">
              <div class="tc">
                <mu-date-input v-model="query52.sTime" :value-format="format"  class="date-input" @change="getList5(1)"></mu-date-input>
                至
                <mu-date-input v-model="query52.eTime" :value-format="format"  class="date-input" @change="getList5(1)"></mu-date-input>

              </div>
            </div>
            <div>
              <div  class="demo-loadmore-wrap">
                <mu-container ref="container" class="demo-loadmore-content">
                  <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                    <mu-list>
                      <mu-data-table :columns="columns52"  :data="list52"  :min-col-width="80" >
                        <template slot-scope="scope">
                          <td>{{scope.row.createTime}}</td>
                          <td >{{scope.row.amount}}</td>
                          <td >{{scope.row.actualAmount}}</td>
                          <td >{{scope.row.balanceAfter}}</td>
                          <td >{{scope.row.bankCardId}}</td>
                          <td >{{scope.row.orderStatus}}</td>

                        </template>

                      </mu-data-table>
                    </mu-list>
                  </mu-load-more>
                </mu-container>
              </div>
            </div>

          </div>

        </div>
        <div class="date-select " v-if="tabIndex == 6">
          <mu-tabs :value.sync="active2" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
            <mu-tab>转账操作</mu-tab>
            <mu-tab>转账记录</mu-tab>
            <mu-tab>游戏记录</mu-tab>
            <mu-tab>游戏报表</mu-tab>
          </mu-tabs>
          <div v-if="active2 == 0">
            <div class="clearfix">
              <div style="float: left;width: 78%;text-align: center">
                <mu-date-input v-model="startTime" class="date-input"></mu-date-input>
                至
                <mu-date-input v-model="endTime" class="date-input"></mu-date-input>
              </div>
              <mu-select style="width: 22%;float: right;font-size: 14px" v-model="selectAllOption5">
                <mu-option v-for="option,index in options5" :key="option" :label="option" :value="option"></mu-option>
              </mu-select>
            </div>

            <mu-paper :z-depth="1">
              <mu-data-table :columns="columns5"   :data="list">
                <template slot-scope="scope">
                  <td>{{scope.row.name}}</td>
                  <td >{{scope.row.calories}}</td>
                  <td >{{scope.row.fat}}</td>
                  <td >{{scope.row.carbs}}</td>
                  <td >{{scope.row.protein}}</td>
                  <td >{{scope.row.iron}}%</td>
                </template>
              </mu-data-table>
            </mu-paper>
          </div>
          <div v-if="active2 == 1">
            <div class="clearfix">
              <div style="float: left;width: 78%;text-align: center">
                <mu-date-input v-model="startTime" class="date-input"></mu-date-input>
                至
                <mu-date-input v-model="endTime" class="date-input"></mu-date-input>
              </div>
              <mu-select style="width: 22%;float: right;font-size: 14px" v-model="selectAllOption6">
                <mu-option v-for="option,index in options6" :key="option" :label="option" :value="option"></mu-option>
              </mu-select>
            </div>

            <mu-paper :z-depth="1">
              <mu-data-table :columns="columns61"   :data="list">
                <template slot-scope="scope">
                  <td>{{scope.row.name}}</td>
                  <td >{{scope.row.calories}}</td>
                  <td >{{scope.row.fat}}</td>
                  <td >{{scope.row.carbs}}</td>
                  <td >{{scope.row.protein}}</td>
                  <td >{{scope.row.iron}}%</td>
                </template>
              </mu-data-table>
            </mu-paper>
          </div>
          <div v-if="active2 == 2">
            <div class="clearfix">
              <div style="float: left;width: 78%;text-align: center">
                <mu-date-input v-model="startTime" class="date-input"></mu-date-input>
                至
                <mu-date-input v-model="endTime" class="date-input"></mu-date-input>
              </div>
              <mu-select style="width: 22%;float: right;font-size: 14px" v-model="selectAllOption6">
                <mu-option v-for="option,index in options6" :key="option" :label="option" :value="option"></mu-option>
              </mu-select>
            </div>

            <mu-paper :z-depth="1">

              <mu-data-table :columns="columns62"   :data="list">
                <template slot-scope="scope">
                  <td>{{scope.row.name}}</td>
                  <td >{{scope.row.calories}}</td>
                  <td >{{scope.row.fat}}</td>
                  <td >{{scope.row.carbs}}</td>
                  <td >{{scope.row.protein}}</td>
                  <td >{{scope.row.iron}}%</td>
                </template>
              </mu-data-table>
            </mu-paper>
          </div>
          <div v-if="active2 == 3">
            <div class="clearfix">
              <div style="float: left;width: 78%;text-align: center">
                <mu-date-input v-model="startTime" class="date-input"></mu-date-input>
                至
                <mu-date-input v-model="endTime" class="date-input"></mu-date-input>
              </div>
              <mu-select style="width: 22%;float: right;font-size: 14px" v-model="selectAllOption6">
                <mu-option v-for="option,index in options6" :key="option" :label="option" :value="option"></mu-option>
              </mu-select>
            </div>

            <mu-paper :z-depth="1">
              <mu-data-table :columns="columns63"   :data="list">
                <template slot-scope="scope">
                  <td>{{scope.row.name}}</td>
                  <td >{{scope.row.calories}}</td>
                  <td >{{scope.row.fat}}</td>
                  <td >{{scope.row.carbs}}</td>
                  <td >{{scope.row.protein}}</td>
                  <td >{{scope.row.iron}}%</td>
                </template>
              </mu-data-table>
            </mu-paper>
          </div>

        </div>
        <div class="date-select " v-if="tabIndex == 7">
          <mu-tabs :value.sync="active3" center color="teal">
            <mu-tab>
              <i class="iconfont ">&#xe60e;</i>
              玩家账号
            </mu-tab>
            <mu-tab>
              <i class="iconfont ">&#xe614;</i>
              代理账号
            </mu-tab>


          </mu-tabs>
          <div v-if="active3 == 0">
            <mu-form ref="formBean" :model="formBean" label-position="left" class="mu-demo-form ">
              <mu-form-item label="用户名"  prop="username" :rules="usernameRules">
                <mu-text-field v-model="formBean.username" placeholder="请输入用户名" prop="username"></mu-text-field>
              </mu-form-item>
              <mu-form-item label="彩票返点" prop="lotteryPoint" :rules="lotteryPointRules" >
                <mu-text-field  v-model="formBean.lotteryPoint"  style="text-align: left" placeholder="0.0-9.7" prop="lotteryPoint"></mu-text-field>
              </mu-form-item>

              <mu-form-item>
                <p>会员初始密码a123456</p>
                <mu-button color="primary" @click="addAccount(0)" style="width: 91%">立即开户</mu-button>
              </mu-form-item>
            </mu-form>
          </div>
          <div v-if="active3 == 1">
            <mu-form ref="formBean" :model="formBean" label-position="right" class="mu-demo-form ">
              <mu-form-item label="用户名"  prop="username" :rules="usernameRules">
                <mu-text-field v-model="formBean.username" placeholder="请输入用户名" prop="username"></mu-text-field>
              </mu-form-item>
              <mu-form-item label="彩票返点" prop="lotteryPoint" :rules="lotteryPointRules" >
                <mu-text-field  v-model="formBean.lotteryPoint"   placeholder="0.1-9.8" prop="lotteryPoint"></mu-text-field>
              </mu-form-item>

              <mu-form-item>
                <p>会员初始密码a123456</p>
                <mu-button color="primary" @click="addAccount(1)" style="width: 91%">立即开户</mu-button>
              </mu-form-item>
            </mu-form>
          </div>



        </div>
        <div class="date-select " v-if="tabIndex == 8">


          <div class="tc" ref="contentDom" style="margin: 0">
            <mu-text-field placeholder="搜索用户名" v-model="query8.username" @change="getList8(1)" ></mu-text-field>
          </div>
          <div>
            <div  class="demo-loadmore-wrap">
              <mu-container ref="container" class="demo-loadmore-content">
                <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                  <mu-list>
                    <mu-data-table :columns="columns8"  :data="list8" :min-col-width="80" >
                      <template slot-scope="scope">
                        <td>{{scope.row.username}}</td>
                        <td >{{scope.row.type == 0?'玩家':'代理'}}</td>
                        <td >{{scope.row.lotteryBalance.toFixed(2)}}</td>
                        <td >{{scope.row.lotteryPoint.toFixed(1)}}</td>
                        <td ><a v-if="scope.row.allowTransfer == 1" class="cr5" style="margin-right: 5px" @click="allowTransferFun(scope.row)">转账</a>
                          <a v-if="scope.row.isMyDirect" class="cr5" style="margin-right: 5px" @click="prepareEditPointByQuota(scope.row.username)">升点</a>
                          <!--   <a class="cr5" v-if="scope.row.isNeedQuota">配额</a>-->
                        </td>
                        <td v-if="scope.row.loginTime">{{scope.row.loginTime | formatDate('yyyy-MM-dd hh:mm:ss')}}</td>
                        <td v-if="!scope.row.loginTime">从未登录过</td>



                      </template>

                    </mu-data-table>
                  </mu-list>
                </mu-load-more>
              </mu-container>
            </div>
          </div>





        </div>
        <div class="date-select " v-if="tabIndex == 9">


          <div class="clearfix" style="margin-top: 10px" ref="contentDom">
            <div style="float: left;width: 78%;text-align: center">
              <mu-date-input v-model="query9.sDate" :value-format="format"  class="date-input" @change="getList9(1)"></mu-date-input>
              至
              <mu-date-input v-model="query9.eDate" :value-format="format"  class="date-input" @change="getList9(1)"></mu-date-input>
            </div>
            <div style="width: 22%;float: right;font-size: 14px;" >
              <mu-text-field placeholder="搜索内容" v-model="query9.username" @change="getList9(1)" style="margin-bottom: 0;" class="search-input" ></mu-text-field>
            </div>


          </div>
          <div>
            <div  class="demo-loadmore-wrap">
              <mu-container ref="container" class="demo-loadmore-content">
                <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                  <mu-list>
                    <mu-data-table :columns="columns9"  :data="list9" :min-col-width="80" >
                      <template slot-scope="scope">
                        <td>{{scope.row.field}}</td>
                        <td >{{scope.row.profit?scope.row.profit.toFixed(2):0}}</td>
                        <td >{{scope.row.consume?scope.row.consume.toFixed(2):0}}</td>
                        <td >{{scope.row.bonus?scope.row.bonus.toFixed(2):0}}</td>
                        <td >{{scope.row.recharge?scope.row.recharge.toFixed(2):0}}</td>
                        <td >{{scope.row.withdraw?scope.row.withdraw.toFixed(2):0}}</td>
                        <td >{{scope.row.rebateConsume?scope.row.rebateConsume.toFixed(2):0}}</td>
                        <td >{{scope.row.activity?scope.row.activity.toFixed(2):0}}</td>
                        <td >{{scope.row.rebateAgent?scope.row.rebateAgent.toFixed(2):0}}</td>

                      </template>

                    </mu-data-table>
                  </mu-list>
                </mu-load-more>
              </mu-container>
            </div>
          </div>





        </div>
        <div class="date-select " v-if="tabIndex == 10">


          <div class="clearfix" ref="contentDom" style="    margin-top: 10px;">
            <mu-select style="width: 21%;float: left;font-size: 14px;margin: 0" v-model="query10.status" @change="getList10(1)">
              <mu-option v-for="option,index in options10" :key="option.value" :label="option.name" :value="option.value"></mu-option>
            </mu-select>
            <div style="float: left;width: 60%;text-align: center">
              <mu-date-input v-model="query10.sTime" :value-format="format"  class="date-input" @change="getList10(1)" style="width: 40%"></mu-date-input>
              至
              <mu-date-input v-model="query10.eTime" :value-format="format"  class="date-input" @change="getList10(1)" style="width: 40%"></mu-date-input>
            </div>
            <div style="width: 19%;float: right;font-size: 14px" >
              <mu-text-field placeholder="搜索内容" v-model="query10.username" @change="getList10(1)"  style="margin: 0" class="search-input"></mu-text-field>
            </div>


          </div>
          <div>
            <div  class="demo-loadmore-wrap">
              <mu-container ref="container" class="demo-loadmore-content">
                <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                  <mu-list>
                    <mu-data-table :columns="columns10"  :data="list10" :min-col-width="80" >
                      <template slot-scope="scope">
                        <td>{{scope.row.account}}</td>
                        <td >{{gl.cache[scope.row.lottery].showName}}</td>
                        <td >{{scope.row.issue}}</td>
                        <td >{{scope.row.money?scope.row.money.toFixed(2):0}}</td>
                        <td >{{scope.row.winMoney?scope.row.winMoney.toFixed(2):0}}</td>
                        <td >{{scope.row.orderTime | formatDate('yyyy-MM-dd hh:mm:ss')}}</td>
                        <td >{{scope.row.method}}</td>
                      </template>

                    </mu-data-table>
                  </mu-list>
                </mu-load-more>
              </mu-container>
            </div>
          </div>




        </div>
        <div class="date-select " v-if="tabIndex == 11">


          <div class="clearfix">

            <div style="float: left;width: 78%;text-align: center">
              <mu-date-input v-model="endTime" class="date-input"></mu-date-input>
              至
              <mu-date-input v-model="endTime" class="date-input"></mu-date-input>
            </div>
            <div style="width: 15%;float: right;font-size: 14px">
              <mu-text-field placeholder="搜索内容"></mu-text-field>
            </div>


          </div>
          <div  class="demo-loadmore-wrap">
            <mu-container ref="container" class="demo-loadmore-content">
              <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                <mu-list>
                  <mu-data-table :columns="columns11"  :data="list11">
                    <template slot-scope="scope">
                      <td>{{scope.row.field}}</td>
                      <td >{{scope.row.profit.toFixed(2)}}</td>
                      <td >{{scope.row.consume.toFixed(2)}}</td>
                      <td >{{scope.row.bonus.toFixed(2)}}</td>
                      <td >{{scope.row.recharge.toFixed(2)}}</td>
                      <td >{{scope.row.withdraw.toFixed(2)}}</td>
                      <td >{{scope.row.rebateConsume.toFixed(2)}}</td>
                      <td >{{scope.row.activity.toFixed(2)}}</td>
                      <td >{{scope.row.rebateAgent.toFixed(2)}}</td>

                    </template>

                  </mu-data-table>
                </mu-list>
              </mu-load-more>
            </mu-container>
          </div>



        </div>
        <div class="date-select " v-if="tabIndex == 12">
          <mu-tabs :value.sync="active12" @change="changeqiyue" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
            <mu-tab v-for="(item,index) in qyList" :key="index">{{item.name}}</mu-tab>


          </mu-tabs>
          <div v-if="active12 == 0">
            <div>
              <div  class="demo-loadmore-wrap">
                <mu-container ref="container" class="demo-loadmore-content">
                  <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                    <mu-list>
                      <mu-data-table :columns="columns121"  :data="list12"  :min-col-width="80"  >
                        <template slot-scope="scope1">
                          <td>{{scope1.row.username}}</td>
                          <td >{{scope1.row.teamBalance?scope1.row.teamBalance.toFixed(2):0}}</td>
                          <td >{{scope1.row.teamCount}}</td>
                          <td >{{scope1.row.lotteryPoint}}</td>
                          <td >{{scope1.row.type == 0?'玩家':'代理'}}</td>
                          <td >{{scope1.row.loginTime}}</td>
                          <td >{{scope1.row.onlineStatus==1?'在线':'离线'}}</td>
                          <td >

                            <span v-if="person.username== scope1.row.username" @click="hrefTeam()">团队报表</span>


                            <span v-else>
                              <span @click="hrefTeam()">报表</span>
                             <a v-if="scope1.row.uDividendStatus==-1" @click="prepareEditDividendContractFun(scope1.row.username)">已拒绝</a>
                             <a v-if="scope1.row.uDividendStatus==0" @click="prepareEditDividendContractFun(scope1.row.username)">待确认分红</a>
                          <a v-if="scope1.row.uDividendStatus==1" class="cr5" @click="prepareEditDividendContractFun(scope1.row.username)">已签订分红</a>
                          <a v-if="scope1.row.uDividendStatus==null" @click="prepareEditDividendContractFun(scope1.row.username)" style="color: #fdd835">签订分红</a>
                          </span>



                          </td>
                        </template>

                      </mu-data-table>
                    </mu-list>
                  </mu-load-more>
                </mu-container>
              </div>
            </div>

          </div>
          <div v-if="active12 == 1">
            <div>
              <div  class="demo-loadmore-wrap">
                <mu-container ref="container" class="demo-loadmore-content">
                  <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                    <!--<mu-list>-->
                    <!--<mu-data-table :columns="columns122" :data="list122" >-->
                    <!--<template slot-scope="scope">-->
                    <!--<td>{{scope.row.username}}</td>-->
                    <!--<td >{{scope.row.teamBalance}}</td>-->
                    <!--<td >{{scope.row.teamCount}}</td>-->
                    <!--<td >{{scope.row.lotteryPoint}}</td>-->
                    <!--<td >{{scope.row.type==1?'代理':''}}</td>-->
                    <!--<td >{{scope.row.loginTime}}</td>-->
                    <!--</template>-->

                    <!--</mu-data-table>-->
                    <!--</mu-list>-->
                  </mu-load-more>
                </mu-container>
              </div>
            </div>

          </div>
          <div v-if="active12 == 2">
            <div>
              <div  class="demo-loadmore-wrap">
                <mu-container ref="container" class="demo-loadmore-content">
                  <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                    <mu-list>
                      <mu-data-table :columns="columns123"  :data="list123"  :min-col-width="80"  >
                        <template slot-scope="scope3">
                          <td>{{scope3.row.username}}</td>
                          <td >{{scope3.row.totalConsume}}</td>
                          <td >{{scope3.row.totalLoss}}</td>
                          <td >{{scope3.row.activeUser}}</td>
                          <td >{{scope3.row.scalePoint}}%</td>
                          <td >{{scope3.row.amount}}</td>
                          <td >{{scope3.row.endDate}}</td>
                          <td ><span @click="sendContract(scope3.row.id)" v-if="scope3.row.status==0" class="cr5" style="cursor: pointer;">发放分红</span></td>
                        </template>

                      </mu-data-table>
                    </mu-list>
                  </mu-load-more>
                </mu-container>
              </div>

            </div>
          </div>
          <div v-if="active12 == 3">
            <div  class="demo-loadmore-wrap">
              <label style="margin-top: 20px;margin-left: 10px">基础分红比例</label>
               <div style="border: 1px solid #e0e9f0;padding: 10px;border-radius: 3px;margin-top: 10px">
                 <p>分红比例：<span>{{list124.scalePoint}}%</span></p>
                 <p>活跃用户：<span>{{list124.activeUser}}</span></p>
                 <p>契约状态：<span>{{list124.status==1?'已签订分红':'未签订'}}</span></p>
               </div>

              <label  style="margin-top: 20px;margin-bottom: 10px;margin-left: 10px">附加分红比例</label>
              <mu-data-table :columns="columns124"   :data="list124.extraRules?JSON.parse(list124.extraRules):[]"  :min-col-width="80"  >
                <template slot-scope="scope">
                  <td>{{scope.row.totalConsume}}</td>
                  <td class="is-center">{{scope.row.totalLoss}}</td>
                  <td class="is-center">{{scope.row.activeUser}}</td>
                  <td class="is-center">{{scope.row.scalePoint}}%</td>

                </template>
              </mu-data-table>
              <div v-if="dividendContract == 0" style="text-align: center;margin-top: 1em">
                <mu-button color="primary" @click="returnqyFun(0)">同意签约</mu-button>
                <mu-button color="error" @click="returnqyFun(1)">拒绝签约</mu-button>
              </div>
              <div v-if="dividendContract == -1" style="text-align: center;margin-top: 1em">
               已拒绝
              </div>


            </div>
          </div>

        </div>
      </div>


      <mu-dialog  transition="slide-bottom" fullscreen :open.sync="openprepareTransfer">
        <mu-appbar color="primary" >
          <mu-button slot="left" icon @click="openprepareTransfer = false">
            <i class="iconfont">&#xe604;</i>
          </mu-button>
          上下级转账
        </mu-appbar>

        <div class="date-select " >
          <mu-form ref="refRules" :model="validateForm"  label-position="left" class="mu-demo-form ">
            <mu-form-item label="收款用户">
              <p>{{validateForm.username}}</p>
            </mu-form-item>
            <mu-form-item prop="transType" label="转账类型"  :rules="rules.transType">
              <mu-radio v-model="transType" value="0" label="普通转账"></mu-radio>
              <mu-radio v-model="transType" value="1" label="工资转账"></mu-radio>
            </mu-form-item>
            <mu-form-item prop="amount" label="转账金额" :rules="rules.amount">
              <mu-text-field v-model="validateForm.amount"></mu-text-field>
            </mu-form-item>

            <mu-form-item  label="密保问题">
              <p>{{validateForm.question}}</p>
            </mu-form-item>

            <mu-form-item prop="answer" label="密保答案" :rules="rules.answer">
              <mu-text-field v-model="validateForm.answer"></mu-text-field>
            </mu-form-item>

            <mu-form-item prop="withdrawPwd" label="资金密码" :rules="rules.withdrawPwd">
              <mu-text-field type="password" v-model="validateForm.withdrawPwd"></mu-text-field>
            </mu-form-item>

            <mu-form-item>

              <mu-button color="primary" @click="sureApplyTransfer"  style="width: 91%">确认</mu-button>
            </mu-form-item>
          </mu-form>
        </div>

      </mu-dialog>
      <mu-dialog max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openEditPoint">


        <div class="date-select " >
          <div style="border-bottom: 1px solid #d3e3ef;">
            <p>用户名:{{editPiontData.username}}</p>
            <p>返点:{{editPiontData.point}}</p>
            <p v-if="editPiontData.balance">余额:{{editPiontData.balance.toFixed(3)}}</p>
          </div>

          <mu-form ref="editPointForm" :model="editPointForm"  label-position="left" >

            <mu-form-item prop="point" label="调整返点" :rules="pointRules">
              <mu-text-field v-model="editPointForm.point"></mu-text-field>
            </mu-form-item>
            <mu-form-item>

              <mu-button color="primary" @click="surEditPointByQuota" >确认修改</mu-button>
              <mu-button    @click="openEditPoint = false">取消</mu-button>
            </mu-form-item>
          </mu-form>
        </div>

      </mu-dialog>
      <mu-dialog :max-width="dWidth" title="签订契约分红" scrollable  :open.sync="openprepar" class="noPaddingDialog">

        <div  class="openprepar" >
          <div class="date-select "  style="overflow-y: visible">
            <div style="border-bottom: 1px solid #d3e3ef;">
              <p><span>{{preparData.dividendStatus==null?'正在':'已经'}}</span>与下级代理{{preparData.username}}签订契约分红</p>
            </div>

            <div  class="demo-loadmore-wrap">
              <label  >基础分红比例</label>
              <div style="border: 1px solid #e0e9f0;padding: 10px;border-radius: 3px;margin-top: 10px" v-if="isFlagprepar==0 || isFlagprepar==1">
                <p>分红比例：<span>{{preparData.uGameLotteryDividendContract.scalePoint}}%</span></p>
                <p>活跃用户：<span>{{preparData.uGameLotteryDividendContract.activeUser}}</span></p>
                <p>契约状态：<span>{{preparData.uGameLotteryDividendContract.status==1?'已签订分红':preparData.uGameLotteryDividendContract.status==0?'待确定分红':'未签订分红'}}</span></p>
                <p>设置范围：<span>{{preparData.rangeConfig.baseMinPoint}}%-{{preparData.rangeConfig.extraDownPoint}}%</span></p>
              </div>
              <div style="border: 1px solid #e0e9f0;padding: 10px;border-radius: 3px;margin-top: 10px"  v-if="isFlagprepar==null || isFlagprepar==-1">
                <mu-form :model="beanprepar" class="mu-demo-form" label-position="left" label-width="100">
                  <mu-form-item prop="input" label="分红比例">
                    <mu-text-field v-model="beanprepar.scalePoint"></mu-text-field>
                  </mu-form-item>
                  <mu-form-item prop="input" label="活跃用户">
                    <mu-text-field v-model="beanprepar.activeUser"></mu-text-field>
                  </mu-form-item>

                  <mu-form-item prop="input" label="契约状态">
                    未签订分红
                  </mu-form-item>
                  <mu-form-item prop="input" label="契约状态">
                    {{preparData.rangeConfig.baseMinPoint}}%-{{preparData.rangeConfig.extraDownPoint}}%
                  </mu-form-item>
                </mu-form>

              </div>

              <label style="margin-bottom: 10px">附加分红比例</label>
              <mu-data-table :columns="columns124"    :data="preparData.extraRules"  v-if="isFlagprepar==0 || isFlagprepar==1">
                <template slot-scope="scope">
                  <td>{{scope.row.totalConsume}}</td>
                  <td class="is-center">{{scope.row.totalLoss}}</td>
                  <td class="is-center">{{scope.row.activeUser}}</td>
                  <td class="is-center">{{scope.row.scalePoint}}%</td>

                </template>

              </mu-data-table>

              <div v-if="isFlagprepar==null|| isFlagprepar==-1">
                <mu-data-table :columns="columns1241"   :data="beanprepar.extraRules"  >

                  <template slot-scope="scope">

                    <td> <mu-text-field v-model="scope.row.totalConsume" style="width: 100%"></mu-text-field></td>
                    <td ><mu-text-field v-model="scope.row.totalLoss" style="width: 100%"></mu-text-field></td>
                    <td> <mu-text-field v-model="scope.row.activeUser" style="width: 100%"></mu-text-field></td>
                    <td ><mu-text-field v-model="scope.row.scalePoint" style="width: 100%"></mu-text-field></td>
                    <td ><mu-button color="red" small @click="deleteaddprepar(scope.$index)">删除</mu-button></td>


                  </template>
                </mu-data-table>
                <p> <mu-button @click="addprepar" color="primary" small="">增加规则</mu-button></p>
              </div>


            </div>


          </div>

        </div>
          <mu-button  slot="actions" @click="applyEditDividendContractFun(1)" color="primary">确定</mu-button>
          <mu-button   slot="actions"   @click="openprepar = false">取消</mu-button>

      </mu-dialog>
      <mu-dialog  scrollable  fullscreen :open.sync="detailsDialog">

        <mu-appbar color="primary" >
          <mu-button slot="left" icon @click="detailsDialog = false">
            <i class="iconfont">&#xe604;</i>
          </mu-button>
          注单详情
        </mu-appbar>
        <p style="text-align: center"><span style="margin-right: 1em">{{detail.lottery}}</span><span>{{detail.method}}</span></p>
        <ul   class="details-ul" style="padding-left: 1em">
          <li>注单编号：{{detail.billno}}</li>
          <li>下单时间：{{detail.orderTime}}</li>
          <li>截止时间：{{detail.stopTime}}</li>
          <li>投注期次：{{detail.issue}}</li>
          <li>投注号码：{{detail.content}}</li>
          <li>开奖号码：{{detail.opencode}}</li>
          <li>投注金额：1{{models[detail.model]}}*{{detail.nums}}注*{{detail.multiple}}倍 ={{detail.money}} </li>
          <li>奖金模式：{{detail.code}}/{{detail.point}}%</li>
          <li>彩票奖金：{{detail.winMoney}}</li>
          <li>注单状态：{{winType[detail.type]}}</li>
        </ul>
      </mu-dialog>

    </div>
</template>
<script>
  import  {reportGameLottery,searchOrder,loadContractStatus,searchBill,searchRecharge,
    searchWithdraw,listTeamAccount,reportGameLotteryTeam,searchGameLotteryOrder,teamloadContractStatus,addAccount,
    listContractAccount,statDividendRecord,listDividendRecord,loadDividendContract,drawDividendRecord,prepareTransfer,applyTransfer,prepareEditPointByQuota,
    editPointByQuota,prepareEditDividendContract,applyEditDividendContract,confirmDividendContract} from '@/api/login'
  import {validatAlphabets} from '@/utils/validate'
  import { mapGetters } from 'vuex'
  import 'muse-ui-message/dist/muse-ui-message.css';
  import Message from 'muse-ui-message';
  import {GameList} from '@/assets/js/game/game'


  export default {
    name: 'person',
    components: {},
    data() {
      return {
        models: {'yuan':'元',
          'jiao':'角',
          'fen': '分','li':'厘'},

        detail:'',
        detailsDialog:false,
        gl:GameList,
        dividendContract:1,
        qyList:[],
        dWidth:'',

        isFlagprepar:0,
        openprepar:false,
        beanprepar:{
          username: '',
          scalePoint:'',
          activeUser:'',
          extraRules:[]

    },
        preparData:{
          dividendStatus:'',
          username:'',
          uGameLotteryDividendContract:'',
          extraRules:[{"totalConsume": '', "totalLoss": '', "activeUser": '', "scalePoint":''}],
          rangeConfig:''
        },
        openEditPoint:false,
        editPointForm:{
          point: '',
        },
        editPiontData:{
          username:'',
          point:'',
          balance:'',

        },
        pointRules:[ { validate: (val) => !!val, message: '必须填写返点'},],
        openprepareTransfer:false,
        transType:'0',
        rules:{

          transType: [
            { validate: (val) => !!val, message: '必须填写转账类型'},
          ],
          amount: [
            { validate: (val) => !!val, message: '必须填写转账金额'},
          ],

          answer: [
            { validate: (val) => !!val, message: '必须填写密保答案'},
          ],
          withdrawPwd: [
            { validate: (val) => !!val, message: '必须填写资金密码'},
          ],
        },
        refRules:{
          transType:'0',
          amount: '',
          answer: '',
          withdrawPwd: '',
        },
        validateForm: {
          username: '',
          transType:'0',
          amount: '',
          question: '',
          securityId:'',
          answer: '',
          withdrawPwd: '',
        },
        active12:0,
        format:'YYYY-MM-DD',
        num: 10,
        refreshing: false,
        loading: false,
        text: 'List',
        startTime:'2019-02-01',
        endTime:'2019-02-02',
        openFullscreen: false,
        oppenbuttonDialog: false,
        selectAllOption:'',
        winType:{
          '0':'未开奖',
          '1':'未中奖',
          '2':'已中奖',
          '1':'已撤单',
        },
        options: [
          {label:'全部',value:''},
          {label:'未开奖',value:0},
          {label:'未中奖',value:1},
          {label:'已中奖',value:2},
          {label:'已撤单',value:-1},
        ],
        selectAllOption1:'全部',
        options1: [
          '全部', '未开始', '进行中', '已完成',
          '已撤单'
        ],
        typeMap:{
          "1000":"存款",
          "1001":"取款",
          "1002":"取款退回",
          "1100":"转入",
          "1101":"转出",
          "1102":"上下级转账",
          "1200":"优惠活动",
          "1300":"消费",
          "1301":"派奖",
          "1302":"消费返点",
          "1400":"代理返点",
          "1303":"取消订单",
          "1900":"会员返水",
          "1600":"管理员增",
          "1601":"管理员减",
          "1700":"积分兑换",

        },
        selectAllOption2:'',
        options2: [
          {label:'全部',value:''},
          {label:'存款',value:1000},
          {label:'取款',value:1001},
          {label:'取款退回',value:1002},
          {label:'转入',value:1100},
          {label:'转出',value:1101},
          {label:'上下级转账',value:1102},
          {label:'优惠活动',value:1200},
          {label:'消费',value:1300},
          {label:'派奖',value:1301},
          {label:'消费返点',value:1302},
          {label:'代理返点',value:1400},
          {label:'取消订单',value:1303},
          {label:'会员返水',value:1900},
          {label:'管理员增',value:1600},
          {label:'管理员减',value:1601},
          {label:'积分兑换',value:1700},
          {label:'支付佣金',value:0},
          {label:'获得佣金',value:1},
          {label:'退还佣金',value:2},
          {label:'红包',value:3},      ],
        columns1: [
          { title: '时间'},
          { title: '盈利' },
          { title: '消费' },
          { title: '派奖'},
          { title: '充值'},
          { title: '提现'},
          { title: '返点'},
          { title: '活动'},
          { title: '手续费'},
        ],
        columns2: [
          { title: '彩种'},
          { title: '期数',width:'130' },
          { title: '投注金额' },
          { title: '中奖金额'},
          { title: '下单时间' ,width:'140' },
          { title: '玩法'},
        ],
        columns3: [
          { title: '彩种'},
          { title: '期数', },
          { title: '总金额' },
          { title: '总奖金'},
          { title: '状态' },
          { title: '下单时间'},
          { title: '彩种'},
          { title: '玩法'},
        ],
        columns4: [
          { title: '操作时间',width:'130'},
          { title: '账单类型', },
          { title: '操作金额' },
          { title: '剩余金额'},
        ],
        active1:0,
        selectAllOption5:'全部',
        options5: [
          '全部', '第三方支付', '转账汇款', '系统充值',
        ],
        columns5: [
          { title: '充值时间',width:'130'},
          { title: '充值方式', },
          { title: '充值金额' },
          { title: '到账时间',width:'130'},
          { title: '账户金额'},
          { title: '状态'},
        ],
        columns52: [
          { title: '申请时间',width:'130'},
          { title: '申请金额', },
          { title: '到账金额' },
          { title: '账户余额'},
          { title: '银行卡号',width:'130'},
          { title: '状态'},
        ],
        active2:0,
        selectAllOption6:'全部',
        options6: [
          '全部', 'AG视讯', 'PT视讯', 'KY开元棋牌', 'CMD368体育','GG捕鱼','DG视讯','DS德胜棋牌',
        ],
        columns61: [
          { title: '转账日期',width:'130'},
          { title: '账单类型', },
          { title: '转账金额' },
          { title: '账后余额'},
          { title: '状态'},
          { title: '资金去向'},
        ],
        columns62: [
          { title: '游戏名称'},
          { title: '消费金额', },
          { title: '派奖金额' },
          { title: '开始时间'},
          { title: '结束时间'},
        ],
        columns63: [
          { title: '时间'},
          { title: '游戏名称'},
          { title: '消费金额', },
          { title: '派奖金额' },
          { title: '转入金额' },
          { title: '转出金额'},
        ],
        active3:0,
        columns8:[
          { title: '用户名',width:'130'},
          { title: '类型',width:'100'},
          { title: '余额', },
          { title: '返点' ,width:'70'},
          { title: '操作' ,width:'150'},
          { title: '最近登录时间',width:'150'},
        ],
        columns9:[
          { title: '用户',width:'130'},
          { title: '盈利'},
          { title: '消费' },
          { title: '派奖' },
          { title: '充值' },
          { title: '提现'},
          { title: '返点'},
          { title: '活动'},
          { title: '手续费'},
        ],


        selectAllOption10:'0',
        options10: [
          {value:0,name:'未开奖'},
          {value:1,name:'已结算'},
        ],
        columns10:[
          { title: '用户名',width:'100'},
          { title: '彩种',width:'100'},
          { title: '期数' ,width:'130'},
          { title: '投注金额' },
          { title: '中奖金额' },
          { title: '下单时间',width:'150'},
          { title: '玩法',width:'130'},
        ],
        columns11:[
          { title: '彩种'},
          { title: '盈利'},
          { title: '消费', },
          { title: '派奖' },
          { title: '返点' },

        ],
        columns121:[
          { title: '用户'},
          { title: '团队余额'},
          { title: '团队人数', },
          { title: '返点' },
          { title: '类型' },
          { title: '登录时间' ,width:'140'},
          { title: '登录状态' ,width:'80'},
          { title: '操作',width:'150' },

        ],
        columns122:[
          { title: '会员'},
          { title: '消费量'},
          { title: '亏损量', },
          { title: '活跃用户' },
          { title: '分红比例' },

        ],
        columns123:[
          { title: '会员'},
          { title: '消费量'},
          { title: '亏损量', },
          { title: '活跃用户' },
          { title: '工资比例' },
          { title: '分红金额' },
          { title: '分红日期' },
          { title: '操作' },

        ],
        columns124:[
          { title: '周期消费(万)'},
          { title: '周期亏损(万)'},
          { title: '活跃用户', },
          { title: '分红比例(%)', },

        ],
        columns1241:[
          { title: '周期消费（万）'},
          { title: '周期亏损（万）'},
          { title: '活跃用户', },
          { title: '分红比例（%）', },
          { title: '操作', },

        ],
        list: [],
        titleName:{
          '1':'个人报表',
          '2':'投注记录',
          '3':'追号记录',
          '4':'资金明细',
          '5':'存取款记录',
          '6':'百家乐',
          '7':'开户中心',
          '8':'团队管理',
          '9':'团队报表',
          '10':'团队投注记录',
          '11':'团队彩票报表',
          '12':'契约中心',
        },
        tabIndex:this.$route.query.tabIndex,
        buttonName:{
          '1':'充值',
          '2':'提款',
          '3':'转账',
        },
        buttonIndex:'',
        query1:{
          sDate: this.timeNowStart(0),
          eDate: this.timeNowStart(1),
        },
        query2:{

          page: 0,
          size: 10,
          lottery:'',
          status:'',
          issue:'',
          sTime: this.timeNowStart(0),
          eTime:this.timeNowStart(1)
        },
        query3:{
          page: 0,
          size: 10,
          lottery:'',
          status: -1,
         sTime: this.timeNowStart(0),
         eTime: this.timeNowStart(1),
        },
        query4:{
          page: 0,
          size: 10,
          accountType:'',
          type:'',
         sTime: this.timeNowStart(0),
         eTime: this.timeNowStart(1),
        },
        query5:{
          page: 0,
          size: 10,
          billno:'',
          method:'',
          sTime: this.timeNowStart(0),
         eTime: this.timeNowStart(1),
        },
        query52:{
          page: 0,
          size: 10,
          billno:'',
          sTime: this.timeNowStart(0),
          eTime: this.timeNowStart(1),
        },
        query8:{
          page: 0,
          size: 10,
          username:''
        },
        query9:{
          username:'',
          sDate:this.timeNowStart(0),
          eDate: this.timeNowStart(1)
        },
        query10:{
          page: 0,
          size: 10,
          lottery:'',
          status: 0,
         username:'',
        issue:'',
        sTime:this.timeNowStart(0),
        eTime: this.timeNowStart(1)
        },
        query11:{
          page: 0,
          size: 10,
          lottery:'',
          status: 0,
         username:'',
        issue:'',
        sTime:this.timeNowStart(0),
        eTime: this.timeNowStart(1)
        },
        query12:{
          page: 0,
          size: 10,
         username:'',

        },  query123:{
          page: 0,
          size: 10,

        },
        list1:[],
        list2:[],
        list3:[],
        list4:[],
        list5:[],
        list52:[],
        list8:[],
        list9:[],
        list10:[],
        list11:[],
        list12:[],
        list122:[],
        list123:[],
        list124:'',
        current: 1,
        formBean:{
          type: 0,
          username:'',
          lotteryPoint: '',
        },
        usernameRules: [
          { validate: (val) => !!val, message: '必须填写用户名'},
          { validate:validatAlphabets , message: '大小写字母开头，不能超过10个字符'}
        ],
        lotteryPointRules: [
          { validate: (val) => !!val, message: '必须填写彩票返点'},
          { validate: (val) => val >= 0.1 && val <= 9.8, message: '范围在0.1-9.8'}
        ],
        index:1

      }
    },
    filters: {
      formatDate: function (value, fmt) {
        let getDate = new Date(value);
        let o = {
          'M+': getDate.getMonth() + 1,
          'd+': getDate.getDate(),
          'h+': getDate.getHours(),
          'm+': getDate.getMinutes(),
          's+': getDate.getSeconds(),
          'q+': Math.floor((getDate.getMonth() + 3) / 3),
          'S': getDate.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (let k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
          }
        }
        return fmt;

      }
    },
    computed: {

        computedTxt() {
          return function(value) {
            var date = new Date(value);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() + ' ';
            return Y+M+D
          }
        },
      ...mapGetters([
        'person',
      ]),
    },
    mounted(){
      this.dWidth = window.screen.width
     // this.headerHeight = window.screen.height-this.$refs.contentDom.offsetHeight-70

    },
    created() {
      console.log()



      if(this.$route.query.tabIndex!=7){
        this['getList' + this.$route.query.tabIndex]()

      }

    },
    methods:{
      clickDetail(index,row){
        this.detailsDialog =true;
        this.detail =row
      },
        returnqyFun(type){
            if(type==0){
              Message.confirm('确定同意签订契约分红？', '提示', {
                type: 'warning'
              }).then(({ result }) => {
                if (result) {
                  confirmDividendContract({confirm: 'agree'}).then((res)=>{
                    this.$toast.success({
                      message:'成功！',
                      position: 'top-end '
                    });
                    this.getList12()

                  })


                }
              });

            }else{
              Message.confirm('确定拒绝签订契约分红？', '提示', {
                type: 'warning'
              }).then(({ result }) => {
                if (result) {

                  confirmDividendContract({confirm: 'refuse'}).then((res)=>{
                    this.$toast.success({
                      message:'成功！',
                      position: 'top-end '
                    });
                    this.getList12()

                  })
                }
              });
            }
        },
        timeNowStart (str) {
          var date1 = new Date()
          var date2 = new Date(date1);
          date2.setDate(date1.getDate()+str);
          var seperator1 = "-";
        var year = date2.getFullYear();
        var month = date2.getMonth() + 1;

          var strDate =date2.getDate()
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
      },
        //个人报表
        getList1(){

        reportGameLottery(this.query1).then(res=>{

          this.list1=res.data


        })
      },
      //投注记录
      getList2(flag){
        this.query2.status = this.selectAllOption
        if(flag){ this.query2.page = 0;this.list2 = []}
        searchOrder(this.query2).then(res=>{

          this.list2= this.list2.concat(res.data.list)
        })
      },
      //追号记录
      getList3(){
        loadContractStatus(this.query3).then(res=>{
          this.list3=res.data.list

        })
      },
      //资金明细
      getList4(flag){
        this.query4.type = this.selectAllOption2
        if(flag){ this.query4.page = 0;this.list4 = []}
        searchBill(this.query4).then(res=>{
          this.list4= this.list4.concat(res.data.list)
      })
      },
     //充值记录
      getList5(flag){
        this.query5.type = this.selectAllOption5
        if(flag){ this.query5.page = 0;this.list5 = [];this.query52.page = 0;this.list52 = []}
        searchRecharge(this.query5).then(res=>{
          this.list5= this.list5.concat(res.data.list)
        })
        //体现记录

          searchWithdraw(this.query52).then(res=>{

            this.list52= this.list52.concat(res.data.list)
          })

      },
      //团队管理
      getList8(flag){
        if(flag){this.query8.page =0; this.list8 = []}
        listTeamAccount(this.query8).then(res=>{
          this.list8= this.list8.concat(res.data.list)
          this.$refs.contentDom.offsetHeight
        })

      },
      //团队报表
      getList9(flag){
        if(flag){ this.list9 = []}
        reportGameLotteryTeam(this.query9).then(res=>{
          this.list9= res.data
        })

      },
      //团队投注记录
      getList10(flag){

        if(flag){this.query10.page =0; this.list10 = []}
        searchGameLotteryOrder(this.query10).then(res=>{
          this.list10= this.list10.concat(res.data.list)
        })

      },
      //团队彩票报表
      getList11(){

        teamloadContractStatus(this.query11).then(res=>{
          this.list11=res.data.list

        })

      },
      /*契约中心切换tab*/
      changeqiyue(){
          if(this.active12 == 0){
            this.list12= []
            listContractAccount(this.query12).then(res=>{
              this.list12= this.list12.concat(res.data.list)


            })

          }else  if(this.active12 == 1){
            statDividendRecord().then(res=>{
              this.list122=res.data

            })
          }else if(this.active12==2){
            this.list123= []
            listDividendRecord(this.query123).then(res=>{
              this.list123= this.list123.concat(res.data.list)

            })
          }else{

            loadDividendContract().then(res=>{
              this.list124=res.data

            })
          }
      },
      //契约中心
      getList12(){

        teamloadContractStatus().then(res=>{
          this.dividendContract = res.data.dividendContract.status
          if(res.data.dividendContract.status == 0 || res.data.dividendContract.status == -1){

            this.qyList= []
            this.$set(this.qyList,0,{name:'我的契约',value:3})
            this.active12 = 3
            this.changeqiyue()
          }else if(res.data.dividendContract.status == 1){
            this.qyList = []
            var arr=[{name:'契约下级',value:0},{name:'契约分红',value:1},{name:'分红处理',value:2},{name:'我的契约',value:3}]
            for (var i = 0; i <arr.length;i++) {

              this.$set(this.qyList, i, arr[i]);
            }
            this.active12 = 0
            listContractAccount(this.query12).then(res=>{
              this.list12= this.list12.concat(res.data.list)


            })

            listDividendRecord(this.query123).then(res=>{
              this.list123= this.list123.concat(res.data.list)

            })
          }


        })




      },
      prepareEditDividendContractFun(name){

        this.openprepar =  true


        prepareEditDividendContract({username:name}).then(res=>{
          this.preparData.dividendStatus = res.data.uAccount.dividendStatus
          this.isFlagprepar =res.data.uAccount.dividendStatus
          this.preparData.rangeConfig = res.data.rangeConfig
          this.preparData.username = res.data.uAccount.username
          if(res.data.uAccount.dividendStatus==0 || res.data.uAccount.dividendStatus==1){

            this.preparData.uGameLotteryDividendContract = res.data.uGameLotteryDividendContract
            this.preparData.extraRules = JSON.parse(res.data.uGameLotteryDividendContract.extraRules)

          }else if (res.data.uAccount.dividendStatus==null ){

            this.beanprepar.extraRules.push({"totalConsume": '', "totalLoss": '', "activeUser": '', "scalePoint":''})
          }else if (res.data.uAccount.dividendStatus==-1 ){
              this.beanprepar.username =  res.data.uAccount.username
              this.beanprepar.scalePoint =  res.data.uGameLotteryDividendContract.scalePoint
              this.beanprepar.activeUser =  res.data.uGameLotteryDividendContract.activeUser
              this.beanprepar.extraRules = JSON.parse(res.data.uGameLotteryDividendContract.extraRules)

          }


        })
      },
      /*确定签约分红*/
      applyEditDividendContractFun(type){
        if(type){
          var bean = {
            username: this.preparData.username,
            scalePoint: this.beanprepar.scalePoint,
            activeUser: this.beanprepar.activeUser,
            extraRules: JSON.stringify(this.beanprepar.extraRules)

          }

        }else{
          var bean = {
            username: this.preparData.username,
            scalePoint: this.preparData.uGameLotteryDividendContract.scalePoint,
            activeUser: this.preparData.uGameLotteryDividendContract.activeUser,
            extraRules: JSON.stringify(this.preparData.extraRules)

          }
        }

        applyEditDividendContract(bean).then(res=>{
          this.openprepar =  false
          this.changeqiyue(1)
          this.$toast.success({
            message:'成功！',
            position: 'top-end ',               // 弹出的位置

          });
        })
      },
      /*增加规则*/
      addprepar(){


        this.beanprepar.extraRules.push({"totalConsume": '', "totalLoss": '', "activeUser": '', "scalePoint":''})
      },
      /*删除规则*/
      deleteaddprepar(index){
        let  arr = []
        this.beanprepar.extraRules.forEach(function (a,b) {
          if(b != index){
            arr.push(a)
          }
        })
        this.beanprepar.extraRules = []
        this.beanprepar.extraRules=arr

      },
      hrefTeam(){
        window.location.href='/#/personSearch?tabIndex=9'
        location.reload()
      /*  this.$router.push({path: 'personSearch', query: {tabIndex: 9}})*/
      },
      /*发放分红*/
      sendContract(id){

        Message.confirm('确认发放下级分红？', '提示', {
          type: 'warning'
        }).then(({ result }) => {
          if (result) {
            drawDividendRecord({id:id}).then(res=>{
              this.getList12()
            })

          }
        });

      },
      /*转账 下级*/
      allowTransferFun(item){
        this.openprepareTransfer =  true
        prepareTransfer({username:item.username}).then(res=>{
          this.validateForm.username = res.data.uAccount.username
          this.validateForm.question = res.data.security.question
          this.validateForm.securityId = res.data.security.id

        })
      },
      /*确定转账*/
      sureApplyTransfer(){
        this.validateForm.transType = this.transType

        this.$refs.refRules.validate().then((result) => {
          if (result) {


            applyTransfer(this.validateForm).then(res=>{
              this.$toast.success({
                message:'成功！',
                position: 'top-end ',               // 弹出的位置

              });
              this.openprepareTransfer = false
            })
          }
        })

      },
      prepareEditPointByQuota(item){
        prepareEditPointByQuota({username:item}).then(res=>{
          this.editPiontData.username= res.data.uAccount.username
          this.editPiontData.point= res.data.uAccount.point
          this.editPiontData.balance= res.data.uAccount.balance
          this.openEditPoint = true
        })
      },
      surEditPointByQuota(){
        this.$refs.editPointForm.validate().then((result) => {
          if (result) {
            editPointByQuota({username: this.editPiontData.username, point: this.editPointForm.point}).then(res => {
              this.$toast.success({
                message:'成功！',
                position: 'top-end ',               // 弹出的位置

              });
              this.openEditPoint = false
            })
          }
        })
      },
      addAccount(type){
        this.$refs.formBean.validate().then((result) => {
          if(result){
            this.formBean.type = type
            addAccount(this.formBean).then(res=>{
              this.$toast.success({
                message:'开户成功！',
                position: 'top-end ',               // 弹出的位置

              });
            })
          }
        });

      },
      refresh () {

        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
        setTimeout(() => {
          this.refreshing = false;
          this['query'+this.tabIndex].page = 0
          this['list'+this.tabIndex] = []

          this['getList'+this.$route.query.tabIndex]()
        }, 2000)
      },
      load () {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;

          this['query'+this.tabIndex].page+=1
          this['getList'+this.$route.query.tabIndex]()
        }, 2000)
      },
      buttonDialog(index){
        this.oppenbuttonDialog = true
        this.buttonIndex =  index
      },
      submit () {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
      orderList(value){
        this.openFullscreen = true;
        this.tabIndex = value
      },

      openFullscreenDialog () {
        this.openFullscreen = true;
      },
      closeFullscreenDialog () {
        this.$router.push({ path: '/person'})
      }
    }
  }
</script>
<style scoped>
  .person-info{
    background-color: #fff;
    border-radius: 5px;
    padding: 1em;

  }
  .date-input{
    width: 35%;
    text-align: center;
    margin-bottom: 0;
  }
  .mu-demo-form{
    padding: 1em;
  }
  .demo-loadmore-wrap {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;

  }
  .mu-appbar {
    width: 100%;
  }
  .demo-loadmore-content {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0;
  }
.date-select{
  width: 96%;
  margin: 0 auto;
  border-radius: 3px;
  overflow-y: hidden;
}
 .noPaddingDialog /deep/ .mu-dialog-body{
   padding: 15px 5px;
    }
  .noPaddingDialog /deep/ .mu-input{
    margin-bottom: 0;
    } .noPaddingDialog /deep/ .mu-raised-button.mu-button-small{
      height: 32px;
    margin-top: -6px;
    }
      .details-ul li{
        list-style: none;
        line-height: 2em;

      }
  /*.ss /deep/ .mu-table-header-wrapper{padding-right:17px;background-color:#999;color:#000;}*/
  /*.ss /deep/ .mu-table-body-wrapper{width:100%; height:300px;overflow-y:scroll;}*/
   /*.ss /deep/ .mu-table-header-wrapper table, .ss /deep/.mu-table-body-wrapper table{width:100%;}*/
  /*.ss /deep/.mu-table-body-wrapper table tr:nth-child(2n+1){background-color:#f2f2f2;}*/
</style>
