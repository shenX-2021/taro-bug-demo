import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {
  }

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/somePage/somePage',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      borderStyle: 'white',
      color: '#CACDD8',
      selectedColor: '#194796',
      custom: true,
      list: [
        {
          pagePath: 'pages/index/index',
          text: 'tab1',
          iconPath: './assets/add.png',
          selectedIconPath: './assets/add.png',
        },
        {
          pagePath: 'pages/index/index',
          text: 'tab2',
          iconPath: './assets/add.png',
          selectedIconPath: './assets/add.png',
        },
        {
          pagePath: 'pages/index/index',
          text: 'tab3',
          iconPath: './assets/add.png',
          selectedIconPath: './assets/add.png',
        },
      ]
    },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
