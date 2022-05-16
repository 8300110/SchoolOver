// 导入所有按钮对应关联的组件模板
import Home from "./components/Home"
import Money from "./components/Money"
import Mounth from "./components/Mounth"
import Message from "./components/Message"
import Me from "./components/Me"
import Nav_left from "./components/Nav_left"
import Chaopin from "./components/Chaopin"
import Yanzhi from "./components/Yanzhi"
import Jaju from "./components/Jaju"
import Chongtiao from "./components/Chongtiao"
import Gengduo from "./components/Mounth"
import Classic from "./components/Classic"
import Christmas from "./components/Christmas"
import Recom from "./components/Recom"

// 经典菜单
import Zaocan from "./components/Zaocan"
import Xiading from "./components/Xiading"
import Nuanka from "./components/Nuanka"
import Sirong from "./components/Sirong"
import Houru from "./components/Houru"
import Shengye from "./components/Shengye"
import Black from "./components/Black"
import Old from "./components/Old"
import Bigshi from "./components/Bigshi"
import Ice from "./components/Ice"
import New from "./components/New"
import Tianpin from "./components/Tianpin"
import Foold from "./components/Foold"
import Drink from "./components/Drink"
import Round from "./components/Round"
//  我的
import Afternoon from "./components/Afternoon"
import Livingfurniture from "./components/Livingfurniture"
import Digital from "./components/Digital"
import Fashion from "./components/Fashion"

//详情商品
import Instant from "./components/Instant"
import Christma from "./components/Christma"
//登录
import Login from "./components/Login.vue"
// 配置路由
export default {
  routes: [
    {
      path: "",
      name: "Login",
      redirect:'/login',
      component: Login,
      meta:{tabbarshow:false},
    },
    // {
    //   path: "/",
    //   redirect: "/home"
    // },
    {
      path: "/home",
      component: Home,
      meta:{tabbarshow:true},
      // meta: {
			// 	requireAuth: true
			// },
      // meta:{tabbarshow:true},
      children: [{
          path: "",
          component: Chaopin,
          meta:{tabbarshow:true},

        },
        {
          path: "chaopin",
          component: Chaopin,
          meta:{tabbarshow:true},
        },
        {
          path: "yanzhi",
          component: Yanzhi,
          meta:{tabbarshow:true},
        },
        {
          path: "jaju",
          component: Jaju,
          meta:{tabbarshow:true},
        },
        {
          path: "chongtiao",
          component: Chongtiao,
          meta:{tabbarshow:true},
        },
        {
          path: "gengduo",
          component: Gengduo,
          meta:{tabbarshow:true},
        },

      ]
    },
    {
      path: "/money",
      component: Money,
      meta:{tabbarshow:true},
      children: [{
          path: "",
          component: Classic,
          redirect: "/money/classic/zaocan",
          
          meta:{tabbarshow:true},
        },
        {
          path: "classic",
          component: Classic,
          redirect: "/money/classic/zaocan",
          meta:{tabbarshow:true},
          children: [
            // {path:"",component:Zaocan},
            {
              path: "zaocan",
              component: Zaocan,
              meta:{tabbarshow:true},
            },
            {
              path: "xiading",
              component: Xiading,
              meta:{tabbarshow:true},
            },
            {
              path: "nuanka",
              component: Nuanka,
              meta:{tabbarshow:true},
            },
            {
              path: "sirong",
              component: Sirong,
              meta:{tabbarshow:true},
            },
            {
              path: "houru",
              component: Houru,
              meta:{tabbarshow:true},
            },
            {
              path: "shengye",
              component: Shengye,
              meta:{tabbarshow:true},
            },
            {
              path: "black",
              component: Black,
              meta:{tabbarshow:true},
            },
            {
              path: "old",
              component: Old,
              meta:{tabbarshow:true},
            },
            {
              path: "bigshi",
              component: Bigshi,
              meta:{tabbarshow:true},
            },
            {
              path: "ice",
              component: Ice,
              meta:{tabbarshow:true},
            },
            {
              path: "new",
              component: New,
              meta:{tabbarshow:true},
            },
            {
              path: "tianpin",
              component: Tianpin,
              meta:{tabbarshow:true},
            },
            {
              path: "foold",
              component: Foold,
              meta:{tabbarshow:true},
            },
            {
              path: "drink",
              component: Drink,
              meta:{tabbarshow:true},
            },
            {
              path: "round",
              component: Round,
              meta:{tabbarshow:true},
            },

          ]
        },
        {
          path: "christmas",
          component: Christmas,
          meta:{tabbarshow:true},
        },
        {
          path: "recom",
          component: Recom,
          meta:{tabbarshow:true},
        },
      ]

    },
    {
      path: "/mounth",
      component: Mounth,
      meta:{tabbarshow:true},
    },
    {
      path: "/message",
      component: Message,
      meta:{tabbarshow:true},

    },
    {
      path: "/me",
      component: Me,
      meta:{tabbarshow:true},
      children: [{
          path: "",
          component: Afternoon,
          meta:{tabbarshow:true},
        },
        {
          path: "afternoon",
          component: Afternoon,
          meta:{tabbarshow:true},
        },
        {
          path: "livingfurniture",
          component: Livingfurniture,
          meta:{tabbarshow:true},
        },
        {
          path: "digital",
          component: Digital,
          meta:{tabbarshow:true},
        },
        {
          path: "fashion",
          component: Fashion,
          meta:{tabbarshow:true},
        },
      ]

    },
    {
      path: "/money",
      component: Nav_left,
      meta:{tabbarshow:true},

    },
    {
      path: "/Instant",
      name: 'Instant',
      component: Instant,
      meta:{tabbarshow:true},
    },
    {
      path: "/christma",
      name: "christma",
      component: Christma,
      meta:{tabbarshow:true},
    },

  ]
  
}

