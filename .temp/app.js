import Taro, { Component } from "@tarojs/taro-h5";


import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 375,
  "deviceRatio": {
    "375": 0.5,
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
class App extends Component {
  state = {
    __tabs: {
      borderStyle: 'white',
      color: '#CACDD8',
      selectedColor: '#194796',
      custom: true,
      list: [{
        pagePath: "/pages/index/index",
        text: 'tab1',
        iconPath: require("././assets/add.png"),
        selectedIconPath: require("././assets/add.png")
      }, {
        pagePath: "/pages/index/index",
        text: 'tab2',
        iconPath: require("././assets/add.png"),
        selectedIconPath: require("././assets/add.png")
      }, {
        pagePath: "/pages/index/index",
        text: 'tab3',
        iconPath: require("././assets/add.png"),
        selectedIconPath: require("././assets/add.png")
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };


  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ["/pages/index/index", "/pages/somePage/somePage"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: { borderStyle: 'white', color: '#CACDD8', selectedColor: '#194796', custom: true, list: [{ pagePath: "/pages/index/index", text: 'tab1', iconPath: require("././assets/add.png"), selectedIconPath: require("././assets/add.png") }, { pagePath: "/pages/index/index", text: 'tab2', iconPath: require("././assets/add.png"), selectedIconPath: require("././assets/add.png") }, { pagePath: "/pages/index/index", text: 'tab3', iconPath: require("././assets/add.png"), selectedIconPath: require("././assets/add.png") }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
  };render() {
    return <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
          path: '/pages/index/index',
          componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
          isIndex: true
        }, {
          path: '/pages/somePage/somePage',
          componentLoader: () => import( /* webpackChunkName: "somePage_somePage" */'./pages/somePage/somePage'),
          isIndex: false
        }]} tabBar={this.state.__tabs} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById('app'));