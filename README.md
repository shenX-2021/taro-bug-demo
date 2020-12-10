##### componentDidShow钩子函数调用之后一直触发当前页面的componentDidShow的bug

```
npm i
npm run dev:h5
```
* 1、打开调试工具F12
* 2、打开 http://172.168.16.227:10086/#/pages/somePage/somePage
* 3、可以看到一直打印 some page show

不稳定重现，无法重现就新开标签页再来一次

<a href="https://github.com/gxsandzxl/taro-bug-demo/blob/master/src/pages/somePage/somePage.jsx">代码导航</a>
