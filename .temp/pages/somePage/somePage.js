import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';

export default class Index extends Taro.Component {

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    console.log('some page show');
    Taro.redirectTo({ url: '/pages/index/index' });
  }

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    return <View className="index">
        some page
      </View>;
  }
}