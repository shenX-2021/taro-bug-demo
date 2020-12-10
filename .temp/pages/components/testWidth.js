import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './testWidth.scss';

export default class TestWidth extends Taro.Component {

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    let width = Taro.pxTransform(30);
    console.log(width);
    return <View className="index">
        <View className="text30">width: 30px;</View>
        <View className="pxTransform" style={{ width }}>pxTransform: 30</View>
      </View>;
  }
}