/**
 * Created by tongqinyuan on 2017/12/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    DeviceEventEmitter,
    Platform,
    ScrollView,
} from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';
let base = require('./../../../constant');
import DetailModule from './../app_module/DetailModule';
import HomeScreen from './../Home/MtHome';
import ShopScreen from './../Shop/MtShop';
import MineScreen from './../Mine/MtMine';
import MoreScreen from './../More/MtMore';
import MainScreen from './MtMain';
import HomeDetailScreen from './../Home/HomeDetail';



const MeiTuanRoutes = {
    Home: {
        screen: HomeScreen,
        path:'app/home/:name',
    },
    Shop: {
        screen: ShopScreen,
        path:'app/shop',
    },
    Mine: {
        name: 'Drawer Example',
        description: 'Android-style drawer navigation',
        screen: MineScreen,
        path:'app/mine/:name',
    },
    More: {
        screen: MoreScreen,
        path:'app/more/:name',
    },
    HomeDetail:{
        screen:HomeDetailScreen,
        path:'app/homedetail',
    }

};
const Splash = StackNavigator({
    ...MeiTuanRoutes,
    Main:{
        name:'主页',
        screen:MainScreen,
        description:'这是一个主页',
        path:'app/main/:name'
    }
},{
    initialRouteName:'Main',
    headerMode: 'none',
    /*
     * Use modal on iOS because the card mode comes from the right,
     * which conflicts with the drawer example gesture
     */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',

});


const prefix = 'rou://rou/';
const Myapp = ()=> <Splash uriPrefix={prefix} />;
export default Myapp;

const styles = StyleSheet.create({
    container:{

    },
});
