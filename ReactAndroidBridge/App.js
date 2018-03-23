/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,
    ToastAndroid,
    Linking,
    DeviceEventEmitter,
    View
} from 'react-native';


// let base = require('./constant');

import DetailModule from './component/meituan/app_module/DetailModule';
import Splash from './component/meituan/Main/MtSplash';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            page: "Main",
        };
    }

    componentWillMount() {
        // Linking.getInitialURL().then((url) => {
        //     if (url) {
        //         console.log('Initial will 获取到深度链接 url is: ' + url);
        //     }
        // }).catch(err => console.error('An error occurred', err));
    };

    render() {

        return (<Splash />);
        // return (<View>
        //     <Text>哈哈哈哈</Text>
        // </View>);
        // return ( <Provider store={store}>
        //     <Appa />
        // </Provider>);
    };

    componentDidMount() {

        // Linking.getInitialURL().then((url) => {
        //     if (url) {
        //         console.log('Initial did 获取到深度链接 url is: ' + url);
        //     }
        // }).catch(err => console.error('An error occurred', err));

        // DetailModule.IntentDataToJs((result)=>{
        //     console.log("==成功=="+result);
        //     if(result == "1"){
        //         base.columnID = 'Shop';
        //     }else if(result == "2"){
        //         base.columnID = 'Mine';
        //     }else if(result == "3"){
        //         base.columnID = 'More';
        //     }else{
        //         base.columnID = 'Main';
        //     }
        //     console.log("==成功=="+base.columnID);
        //     this.setState({page:base.columnID});
        //
        // },(result)=>{
        //     console.log("出错了=="+result);
        //
        // });
        // console.log('执行1');

    };


}



