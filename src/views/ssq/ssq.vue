<template>
    <div class="box">
        <van-notice-bar
                left-icon="volume-o"
                text="天灵灵...地灵灵...天灵灵...地灵灵...,老天保佑,中大奖,中大奖~阿弥陀佛!"
        />


       <!-- <van-dropdown-menu @change.native="changeValue">
            <van-dropdown-item v-model="value1" :options="option1" @click.native="changeValue"/>
        </van-dropdown-menu>-->
        <!-- 详情弹窗 -->
        <van-popup v-model="showDetails" class="detail" :close-on-click-overlay="false" closeable >
            <h4>彩票照片</h4>
            <div class="detail-main">
                    <img :src=this.url style="width: 100%;height:100%" v-if="this.url!=null&&this.url!=''" >
            </div>
        </van-popup>
        <div class="content">
            <div class="list" v-for="item in list" :key="item.id" style="border: #ee0a24 solid 1px">
                <h6 style="text-align: center">期数:{{item.term}}&nbsp;开奖时间:{{item.createTime}}&nbsp;{{item.week}}</h6>
                <p style="font-size: medium;margin-bottom: 5px;margin-top: 5px;text-align: center">开奖号码:</p>
                <van-button round type="danger" style="margin-left: 15px" size="small">{{item.red1}}</van-button>
                <van-button round type="danger" style="margin-left: 15px" size="small">{{item.red2}}</van-button>
                <van-button round type="danger" style="margin-left: 15px" size="small">{{item.red3}}</van-button>
                <van-button round type="danger" style="margin-left: 15px" size="small">{{item.red4}}</van-button>
                <van-button round type="danger" style="margin-left: 15px" size="small">{{item.red5}}</van-button>
                <van-button round type="danger" style="margin-left: 15px" size="small">{{item.red6}}</van-button>
                <van-button round type="info" style="margin-left: 15px" size="small">{{item.blue}}</van-button>
                <p style="font-size: medium;margin-bottom: 5px;margin-top: 5px;text-align: center">我的投注:</p>
                    <div class="list2" v-for="item2 in item.list" :key="item2.id" v-if="item.list!=null">
                        <van-button round type="danger" style="margin-left: 15px;margin-bottom: 5px" size="small">{{item2.red1}}</van-button>
                        <van-button round type="danger" style="margin-left: 15px;margin-bottom: 5px" size="small">{{item2.red2}}</van-button>
                        <van-button round type="danger" style="margin-left: 15px;margin-bottom: 5px" size="small">{{item2.red3}}</van-button>
                        <van-button round type="danger" style="margin-left: 15px;margin-bottom: 5px" size="small">{{item2.red4}}</van-button>
                        <van-button round type="danger" style="margin-left: 15px;margin-bottom: 5px" size="small">{{item2.red5}}</van-button>
                        <van-button round type="danger" style="margin-left: 15px;margin-bottom: 5px" size="small">{{item2.red6}}</van-button>
                        <van-button round type="info" style="margin-left: 15px;margin-bottom: 5px" size="small">{{item2.blue}}</van-button>
                       <!-- <van-button round type="warning" style="margin-left: 10px;margin-bottom: 5px" size="small">{{item2.num}}注</van-button>-->
                    <div style="text-align: center;font-size: small;margin-left: 10px;margin-bottom: 15px">中奖情况:红球:{{item2.redNum}}个,蓝球:{{item2.blueNum}}个,单笔奖金:{{item2.bonus}},注数:{{item2.num}}注</div>
                    </div>
                    <div class="list2"  v-if="item.list==null">
                        <h4 style="text-align: center">未投注,与五百万擦肩而过~</h4>
                    </div>
                <van-button type="info" plain hairline round size="small" class="btn-small" @click="toDetails(item.url)" style="margin-left: 130px">
                    彩票照片
                </van-button>
                </div>

            <van-button class="button" @click="back" type="info" size="large" >回菜单</van-button>
        </div>
        <div class="footer">
            <van-pagination v-model="currentPage" :page-count="pageTotal" mode="simple" @change="changePage"/>
        </div>
    </div>
</template>

<script>
    import {ssqRecord,changeState} from "../../api/order";
    import Vue from 'vue';
    import { Toast } from 'vant';
    import { DropdownMenu, DropdownItem } from 'vant';

    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Toast);
    export default {
        name: 'ssq',
        data() {
            return {
                showDetails: false,
                url: '',
                list: [],
                currentPage: 0,
                pageTotal: 0,
                value1: '',
                option1: [
                    { text: '全部', value: '' },
                    { text: '未中奖', value: '0' },
                    { text: '已中奖', value: 1 },
                ],





            }
        },
        mounted() {
            this.getList(this.currentPage - 1, 10);
        },
        methods: {

            toSearch(isSearch) {
                if (isSearch == 0) {
                    this.currentPage = 0;
                }
                this.getList(this.currentPage, 10)
            },
            getList: async function(cp,c) {
                let params = {};
                params.page = cp;
                params.limit = c;

                if(this.value1){
                    params.isDo=this.value1
                }





               /* this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: '请稍后...',
                });*/
                const result = await ssqRecord(params);
                this.$toast.clear();
                if (result.data.code == '20000') {
                    if(result.data.data.content.length > 0) {
                        this.showEmpty = false;
                        this.list = result.data.data.content;
                        this.pageTotal = result.data.data.totalPages;
                    }else {
                        this.showEmpty = true;
                        this.list = [];
                        this.pageTotal = 0;
                        this.currentPage = 0;
                    }
                }else {
                    this.$toast({
                        message: result.data.msg,
                        icon: 'warning-o'
                    });
                }
            },
            changePage: function (cp) {
                this.getList((cp-1), 10)
            },
            back(){
                this.$router.push({name:'selectAction'});
            },
            doJob: async function(id){
                let params = {};
                params.id=id
                const result = await changeState(params);
                console.log(result.data.code)
                if (result.data.code == '20000') {
                    const toast = Toast.loading({
                        duration: 0, // 持续展示 toast
                        forbidClick: true,
                        message: '正在处理,剩余3 秒',
                    });

                    let second = 3;
                    const timer = setInterval(() => {
                        second--;
                        if (second) {
                            toast.message = `正在处理,剩余 ${second} 秒`;
                        } else {
                            clearInterval(timer);
                            // 手动清除 Toast
                            Toast.clear();
                        }
                    }, 1000);
                    let getist = 3;
                    const time = setInterval(() => {
                        getist--;
                        if (getist) {
                        } else {
                            clearInterval(time);
                            this.getList(this.currentPage - 1, 10);
                        }
                    }, 1000);
                }
            },
            changeValue:async function(){
                this.getList(this.currentPage - 1, 10);
                console.log(this.value1)
            },
            toDetails(url){
                this.showDetails=true
                    this.url=url
                console.log(url)
            }
        }
    }
</script>

<style scoped>
    html,
    body {
        width: 100%;
        height: 100%;
    }
    .box{
        display:flex; /*父元素的定义为flex布局*/
        width:100%;
        height: calc(100vh - 0px); /* 高度自适应*/
        flex-direction: column; /*定义排列方向为竖排*/
        background: #F3F3F5;
    }
    .box .header{
        height: 35px;
        margin: 5px 12px;
    }
    .box .content{
        flex:1; /*中间分配剩下的所有空间*/
        overflow:auto;
        margin: 0 12px;
    }
    .content .list{
        background: #ffffff;
        border-radius: 3px;
        padding: 8px;
        margin-bottom: 8px;
    }
    .content .list p {
        font-size: 0.75em;
        margin: 0;
        line-height: 16px;
    }
    .content .list h4 {
        font-size: 1rem;
        margin: 0;
        color: #121212;
        line-height: 24px;
    }
    .filter-head{
        background: #ffffff;
        color: #121212;
        border: 0;
    }
    .box .footer{
        height: 65px;
    }
    .van-pagination {
        line-height: 60px;
    }
    .box .footer >>>.van-pagination__item {
        height: 65px;
    }
    .van-button{
        border-radius: 3px;
    }
    .btn-small{
        height:24px;
        min-width: 50px;
        line-height: 24px;
        font-size: 0.75em;
    }
    .color-1{
        color: #2873FF;
    }
    .color-2{
        color: #269B26;
    }
    .color-3{
        color: #FF8400;
    }
    .color-4{
        color: #9C00FF;
    }
    .filter{
        margin: 15px;
    }
    .van-cell {
        background-color: #F3F3F5;
        border-radius: 3px;
        line-height: 22px;
        font-size: 11px;
        margin-bottom: 8px;
    }
    .radio{
        margin-bottom: 20px;
    }
    .radio p{
        font-size: 0.75em;
    }
    .radio span{
        font-size: 0.75em;
        background: #F3F3F5;
        border: 1px solid #F3F3F5;
        border-radius: 5px;
        padding: 5px 8px;
        margin-right: 8px;
    }
    .search{
        margin-top: 45px;
    }
    .search .btn-cancel{
        width: 90%;
    }
    .search .btn-search{
        width: 100%;
    }
    .radio-label,
    .radio-check {
        display: inline-block;
        position: relative;
        margin-right: 5px;
        margin-top: 6px;
    }
    .radio-check input[type="radio"] {
        appearance: none; /*清楚默认样式*/
        -webkit-appearance: none;
        /* opacity: 0; */
        outline: none;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        background: #b4b4b4;
    }
    .radio-check input[type="radio"] {
        opacity: 0;
    }
    .radio-check label {
        display: inline-block;
        /* min-width: 50px; */
        height: 24px;
        font-size: 0.75em;
        line-height: 24px;
        text-align: center;
        padding-right: 10px;
        border: 1px solid #F3F3F5;
        background-color: #F3F3F5;
        border-radius: 5px;
        padding-left: 10px;
        cursor: pointer;
    }
    .radio-check input[type="radio"]:checked + label + span {
        background-color: #EFF3FF;
        color: #2873FF;
        opacity: 1;
    }
    .activeClass{
        color: #2873FF;
        border: 1px solid #2873FF;
        background-color: #EFF3FF;
        border-radius: 5px;
    }
    .detail{
        width: 90%;
        height: 90%;
        border-radius: 3px;
    }
    .detail h4{
        font-size: 1em;
        text-align: center;
    }
    .detail .detail-main{
        padding: 0 10px 10px 10px;
        font-size: 0.75em;
    }
    .detail .detail-main .left{
        text-align: left;
        color: #555555;
    }
    .detail .detail-main .right{
        text-align: right;
    }
    .overflow-hide{
        height: 32px;
        line-height: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .input-overlay{
        background-color: black;
        opacity: 0.2;
        width: 90%;
        height:40px;
        z-index: 999;
    }
</style>
