import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
    mode: 'hash',
    base: 'h5',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/login.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('./views/logout.vue'),
            meta: {
                title: '切换账号'
            }
        },
        {
            path: '/entrance/select-action',
            name: 'selectAction',
            component: () => import('./views/entrance/select-action.vue'),
            meta: {
                title: '小柠檬之家'
            }
        },

        {
            path: '/trade/create',
            name: 'create',
            component: () => import('./views/trade/create.vue'),
            meta: {
                title: '新增消费'
            }
        }
        ,
        {
            path: '/order/taoList',
            name: 'taoList',
            component: () => import('./views/order/taoList.vue'),
            meta: {
                title: '销售列表'
            }
        }
        ,
        {
            path: '/trade/taobao',
            name: 'taoBao',
            component: () => import('./views/trade/taobao.vue'),
            meta: {
                title: '销售记录'
            }
        },
        {
            path: '/order/list',
            name: 'orderList',
            component: () => import('./views/order/list.vue'),
            meta: {
                title: '消费列表'
            }
        },
        {
            path: '/product/productState',
            name: 'productState',
            component: () => import('./views/product/product-state.vue'),
            meta: {
                title: '商品状态'
            }
        }
        ,
        {
            path: '/homework/addHomework',
            name: 'addHomework',
            component: () => import('./views/homework/add.vue'),
            meta: {
                title: '添加作业'
            }
        },
        {
            path: '/homework/homeworkList',
            name: 'homeworkList',
            component: () => import('./views/homework/homework-list.vue'),
            meta: {
                title: '添加记录'
            }
        },
        {
            path: '/product/monitor',
            name: 'monitor',
            component: () => import('./views/product/monitor.vue'),
            meta: {
                title: '监控记录'
            }
        }
        ,
        {
            path: '/housework/add',
            name: 'houseworkAdd',
            component: () => import('./views/housework/add.vue'),
            meta: {
                title: '家务安排'
            }
        },
        {
            path: '/housework/myTask',
            name: 'myTask',
            component: () => import('./views/housework/my.vue'),
            meta: {
                title: '我的任务'
            }
        },
        {
            path: '/housework/toTask',
            name: 'toTask',
            component: () => import('./views/housework/to.vue'),
            meta: {
                title: '我的安排'
            }
        },
        {
            path: '/homework/myAddress',
            name: 'myAddress',
            component: () => import('./views/homework/myAddress.vue'),
            meta: {
                title: '我的足迹'
            }
        }
        ,
        {
            path: '/homework/remind',
            name: 'remind',
            component: () => import('./views/homework/remind.vue'),
            meta: {
                title: '提醒记录'
            }
        } ,
        {
            path: '/ssq/ssq',
            name: 'ssq',
            component: () => import('./views/ssq/ssq.vue'),
            meta: {
                title: '人生巅峰'
            }
        } ,
        {
            path: '/ssq/buySsq',
            name: 'buySsq',
            component: () => import('./views/ssq/buySsq.vue'),
            meta: {
                title: '飞黄腾达'
            }
        },
        {
            path: '/ssq/ssqRecord',
            name: 'ssqRecord',
            component: () => import('./views/ssq/record.vue'),
            meta: {
                title: '衣紧还乡'
            }
        },
        {
            path: '/ssq/daiMai',
            name: 'daiMai',
            component: () => import('./views/ssq/daimai.vue'),
            meta: {
                title: '发起代买'
            }
        },
        {
            path: '/ssq/daiMaiOrder',
            name: 'daiMaiOrder',
            component: () => import('./views/ssq/daiMaiOrder.vue'),
            meta: {
                title: '代买订单'
            }
        },
        {
            path: '/changePassWord',
            name: 'changePassWord',
            component: () => import('./views/changePassWord.vue'),
            meta: {
                title: '修改密码'
            }
        },
        {
            path: '/ssq/getOnlineNum',
            name: 'getOnlineNum',
            component: () => import('./views/ssq/getOnlineNum.vue'),
            meta: {
                title: '获取号码'
            }
        },
        {
            path: '/ssq/history',
            name: 'history',
            component: () => import('./views/ssq/history.vue'),
            meta: {
                title: '历史开奖'
            }
        },
        {
            path: '/ssq/gaiLv',
            name: 'gaiLv',
            component: () => import('./views/ssq/gaiLv.vue'),
            meta: {
                title: '概率统计'
            }
        },
        {
            path: '/ssq/blue',
            name: 'blue',
            component: () => import('./views/ssq/blue.vue'),
            meta: {
                title: '蓝球之谜'
            }
        },
        {    path: '/homework/jjcc',
            name: 'jjcc',
            component: () => import('./views/homework/jjcc.vue'),
            meta: {
                title: '加减乘除'
            }
        },
        {    path: '/homework/mathLog',
            name: 'mathLog',
            component: () => import('./views/homework/mathLog.vue'),
            meta: {
                title: '线上记录'
            }
        },
        {    path: '/homework/dingDing',
            name: 'dingDing',
            component: () => import('./views/homework/dingDing.vue'),
            meta: {
                title: '钉钉群发'
            }
        },
        {    path: '/homework/cuoTi',
            name: 'cuoTi',
            component: () => import('./views/homework/cuoTi.vue'),
            meta: {
                title: '错题回顾'
            }
        }
        ,
        {    path: '/homework/homeworktotal',
            name: 'homeworktotal',
            component: () => import('./views/homework/homeworktotal.vue'),
            meta: {
                title: '作业汇总'
            }
        },
        {    path: '/homework/english',
            name: 'english',
            component: () => import('./views/homework/english.vue'),
            meta: {
                title: '每日英语'
            }
        }
        ,
        {    path: '/homework/du',
            name: 'du',
            component: () => import('./views/homework/du.vue'),
            meta: {
                title: '有毒鸡汤'
            }
        },
        {    path: '/register',
            name: 'register',
            component: () => import('./views/register.vue'),
            meta: {
                title: '用户注册'
            }
        },
        {    path: '/myFish',
            name: 'myFish',
            component: () => import('./views/order/fishList.vue'),
            meta: {
                title: '我的鱼获'
            }
        },
        {    path: '/tiKindTwo',
            name: 'tiKindTwo',
            component: () => import('./views/homework/tiKindTwo.vue'),
            meta: {
                title: '数学变形'
            }
        },
        {    path: '/suggest',
            name: 'suggest',
            component: () => import('./views/homework/suggest.vue'),
            meta: {
                title: '意见反馈'
            }
        },
        {    path: '/password',
            name: 'password',
            component: () => import('./views/order/password.vue'),
            meta: {
                title: '密码管理'
            }
        },
        {    path: '/chengChu',
            name: 'chengChu',
            component: () => import('./views/homework/chengChu.vue'),
            meta: {
                title: '乘除运算'
            }
        },
        {    path: '/jiangLi',
            name: 'jiangLi',
            component: () => import('./views/homework/jiangLi.vue'),
            meta: {
                title: '乘除运算'
            }
        },
        {    path: '/paiBan',
            name: 'paiBan',
            component: () => import('./views/paiBan/paiBan.vue'),
            meta: {
                title: '排班计划'
            }
        },
        {    path: '/waterLevel',
            name: 'waterLevel',
            component: () => import('./views/paiBan/waterLevel.vue'),
            meta: {
                title: '汉口水位'
            }
        },
        {    path: '/weather',
            name: 'weather',
            component: () => import('./views/housework/weather.vue'),
            meta: {
                title: '天气预报'
            }
        }
        ,
        {    path: '/compare',
            name: 'biJiaoDaXiao',
            component: () => import('./views/homework/compare.vue'),
            meta: {
                title: '数的比较'
            }
        }
        ,
        {    path: '/festival',
            name: 'festival',
            component: () => import('./views/housework/festival.vue'),
            meta: {
                title: '假期修改'
            }
        }

    ]
})
