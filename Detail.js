/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
    DeviceEventEmitter,
    ToastAndroid,
  View,
} from 'react-native';

import {NativeModules} from 'react-native';
const {DetailModule} = NativeModules;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Detail extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }

    /**
     * 获取上一个Activity传递过来的数据
     * */
    componentDidMount() {   //这是React的生命周期函数，会在界面加载完成后执行一次

        DetailModule.getDataFromIntent(
            (successMsg1, successMsg2, successMsg3, successMsg4) => {
                this.setState({
                    text1: successMsg1,
                    text2: successMsg2,
                    text3: successMsg3,
                    text4: successMsg4,
                }); //状态改变的话重新绘制界面
            },
            (errorMsg) => {
                alert(errorMsg)
            }
        );

    };

    nativeCallRn(){
        DeviceEventEmitter.addListener('nativeCallRn',(msg)=>{
           var title = "React Native界面,收到数据：" + msg;
            ToastAndroid.show("发送成功", ToastAndroid.SHORT);
        })
    };

    promiseComm(msg) {
        // NativeModules.commModule.rnCallNativeFromPromise(msg).then(
        //     (result) =>{
        //         ToastAndroid.show("Promise收到消息:" + result, ToastAndroid.SHORT)
        //     }
        // ).catch((error) =>{console.log(error)});
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
