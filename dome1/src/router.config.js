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
// 配置路由
export default {
  routes: [{
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      children: [{
          path: "",
          component: Chaopin
        },
        {
          path: "chaopin",
          component: Chaopin
        },
        {
          path: "yanzhi",
          component: Yanzhi
        },
        {
          path: "jaju",
          component: Jaju
        },
        {
          path: "chongtiao",
          component: Chongtiao
        },
        {
          path: "gengduo",
          component: Gengduo
        },

      ]
    },
    {
      path: "/money",
      component: Money,
      // redirect:"/money/classic/zaocan",
      children: [{
          path: "",
          component: Classic,
          redirect: "/money/classic/zaocan",
        },
        {
          path: "classic",
          component: Classic,
          redirect: "/money/classic/zaocan",
          children: [
            // {path:"",component:Zaocan},
            {
              path: "zaocan",
              component: Zaocan
            },
            {
              path: "xiading",
              component: Xiading
            },
            {
              path: "nuanka",
              component: Nuanka
            },
            {
              path: "sirong",
              component: Sirong
            },
            {
              path: "houru",
              component: Houru
            },
            {
              path: "shengye",
              component: Shengye
            },
            {
              path: "black",
              component: Black
            },
            {
              path: "old",
              component: Old
            },
            {
              path: "bigshi",
              component: Bigshi
            },
            {
              path: "ice",
              component: Ice
            },
            {
              path: "new",
              component: New
            },
            {
              path: "tianpin",
              component: Tianpin
            },
            {
              path: "foold",
              component: Foold
            },
            {
              path: "drink",
              component: Drink
            },
            {
              path: "round",
              component: Round
            },

          ]
        },
        {
          path: "christmas",
          component: Christmas
        },
        {
          path: "recom",
          component: Recom
        },
      ]

    },
    {
      path: "/mounth",
      component: Mounth
    },
    {
      path: "/message",
      component: Message,

    },
    {
      path: "/me",
      component: Me,
      children: [{
          path: "",
          component: Afternoon
        },
        {
          path: "afternoon",
          component: Afternoon
        },
        {
          path: "livingfurniture",
          component: Livingfurniture
        },
        {
          path: "digital",
          component: Digital
        },
        {
          path: "fashion",
          component: Fashion
        },
      ]

    },
    {
      path: "/money",
      component: Nav_left,

    },
    {
      path: "/Instant",
      name: 'Instant',
      component: Instant
    },

  ]
}
