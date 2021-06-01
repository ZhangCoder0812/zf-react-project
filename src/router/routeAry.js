import { loadable } from '../utils/tool'
const Home = loadable({
  loader: () => import('../views/home')
})
const About = loadable({
  loader: () => import('../views/about')
})
let routes = [
  {
    grouptitle: '钱钱钱',
    list: [
      {
        path: '/home',
        title: '首页',
        component: Home
      },
      {
        path: '/about',
        title: '关于',
        component: About
      }
    ]
  }
]

export default routes