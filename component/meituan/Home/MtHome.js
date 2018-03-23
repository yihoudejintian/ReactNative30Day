/**
 * Created by tongqinyuan on 2017/12/25.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Button,
    StatusBar,
    Navigator,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    DeviceEventEmitter,
    ToastAndroid,
    ScrollView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
let base = require('./../../../constant');
import DetailModule from './../app_module/DetailModule';
import TopListView from './../commonComponent/TopListView';
const TopMenu = require('./../../../LocalData/TopMenu.json');
const {width, height} = Dimensions.get('window');
const cellNum = 5;
const itemWidth = Math.floor(width / cellNum);

export default class MtHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
        };
    }

    render() {
        return (<View style={styles.container}>
            <StatusBar backgroundColor={'rgb(252,97,32)'}/>
            <View style={styles.toolbarStyle}>
                <Text style={{color: 'white'}}>广州</Text>
                <TextInput style={styles.toolbarInput}
                           placeholder={'输入商家、品类、商圈'}
                           underlineColorAndroid={'transparent'}
                />
                <Image source={{uri: 'icon_homepage_message'}} style={styles.toolbarTint}/>
                <Image source={{uri: 'icon_homepage_scan'}} style={styles.toolbarTint}/>
            </View>
            <ScrollView>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}
                    style={{backgroundColor: 'red'}}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e) => this.pageCircleChange(e)}

                >
                    {this.scrollViewItem()}
                </ScrollView>
                <View style={styles.scrollDot}>
                    {this.scrollDotView()}
                </View>
                <View style={{marginTop:10,height:1,width:1}}/>
                <Button style={styles.btn} title="跳转到其他activity" onPress={() => {
                    this.clickDetail()
                }}/>
                <View style={{marginTop:10,height:1,width:1}}/>
                <Button style={styles.btn} title="callback调用回调" onPress={this.callbackInvoke.bind(this)}/>

                <View style={{marginTop:10,height:1,width:1}}/>
                <Button title="promise调用回调" onPress={this.promiseResolve.bind(this)}/>


                <TouchableOpacity style={{marginTop:10,alignItems:'center',width:width,justifyContent:'center'}} activeOpacity={0.5} onPress={() => {
                    this.props.navigation.navigate('HomeDetail', {mode: '好的'})
                }}>
                    <Text style={{color:'purple'}} >首页</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>);
    };

    componentDidMount() {
        //做复杂操作
        if (this.props.navigation) {
            console.log('存在' + width);
        } else {
            console.log('不存在' + width);
        }
        DeviceEventEmitter.addListener('nativeCallRn', (msg) => {
            var title = "React Native界面,收到数据：" + msg;
            console.log('执行2');
            ToastAndroid.show("发送成功", ToastAndroid.SHORT);
        });


    };




    callbackInvoke() {
        DetailModule.RNCallNativeCallback('哈哈哈', (msg) => {
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        });
    };

    promiseResolve() {
        DetailModule.RNCallNativePromise('呵呵呵').then(
            (result) => {
                ToastAndroid.show("Promise收到消息:" + result, ToastAndroid.SHORT)
            }
        ).catch((error) => {
            console.log(error)
        });
    };

    clickDetail() {
        DetailModule.getDataFromIntent('这是传递的参数ok');
    };

    scrollViewItem() {

        var dataJson = TopMenu.data;
        var allImages = [];
        // console.log('有数据吗==' + dataJson.length);
        // console.log(dataJson);
        for (var i = 0; i < dataJson.length; i++) {
            allImages.push(<TopListView key={i} dataArr={dataJson[i]}>
            </TopListView>);
        }
        return allImages;
    };

    scrollDotView() {
        var allDots = [];
        var dataJson = TopMenu.data;
        for (var i = 0; i < dataJson.length; i++) {
            var c = this.state.currentPage == i ? 'rgb(255,97,0)' : 'rgb(135,135,135)';
            allDots.push(<Text key={i} style={{color: c}}>&bull;</Text>)
        }
        return allDots;
    };

    pageCircleChange(e) {
        var scrollX = e.nativeEvent.contentOffset.x;
        this.setState({currentPage: Math.floor(scrollX / width)});
    };


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbarStyle: {
        flexDirection: 'row',
        height: 54,
        backgroundColor: 'rgb(252,97,32)',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    toolbarInput: {
        width: Math.floor(width * 0.7),
        backgroundColor: 'white',
        height: 30,
        fontSize: 16,
        padding: 0,
        borderRadius: 15,
        paddingLeft: 10,

    },
    singleLine: {
        fontSize: 16,
        padding: 4,
    },
    toolbarTint: {
        width: 30,
        height: 30,
    },
    scrollItemView: {
        width: itemWidth,

    },
    scrollItemView_Image: {
        width: 90,
        height: 90,
    },
    scrollDot: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 10,
        backgroundColor: 'white',

    },
    btn: {
        width: width * 0.8,
        height: 40,
        borderRadius: 20,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
