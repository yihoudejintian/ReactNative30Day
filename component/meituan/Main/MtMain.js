/**
 * Created by tongqinyuan on 2017/12/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    DeviceEventEmitter,
    ScrollView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CommonTabBar from './../commonComponent/CommonTabBar';
import Home from './../Home/MtHome';
import Shop from './../Shop/MtShop';
import Mine from './../Mine/MtMine';
import More from './../More/MtMore';

let base = require('./../../../constant');
import DetailModule from './../app_module/DetailModule';
export default class MtMain extends Component {

    constructor(props) {
        super(props);

        if(this.props){
            if(this.props.navigation){
                console.log("constructor","=navigation=存在");
                console.log(this.props.navigation);
                if(this.props.navigation.state){
                    console.log("constructor","=state=存在");
                    console.log(this.props.navigation.state);
                    if(this.props.navigation.state.params){
                        console.log("constructor","=params=存在");
                        console.log(this.props.navigation.state.params);
                    }else{
                        console.log("=params=不存在");
                    }
                }else{
                    console.log("=state=不存在");
                }
            }else{
                console.log("=navigation=不存在");
            }
        }else{
            console.log("=props=不存在");
        }

        this.state = {
            tabNames: ['首页', '商家', '我的', '更多'],
            tabIconNames: ['icon_tabbar_homepage', 'icon_tabbar_merchant_normal', 'icon_tabbar_mine', 'icon_tabbar_misc'],
            tabSelectedIconNames: ['icon_tabbar_homepage_selected', 'icon_tabbar_merchant_selected', 'icon_tabbar_mine_selected', 'icon_tabbar_misc_selected'],
            tabPage: 0,
        };



    }

    componentWillMount(){
        if(this.props){
            if(this.props.navigation){
                console.log("componentWillMount","=navigation=存在");
                console.log(this.props.navigation);
                if(this.props.navigation.state){
                    console.log("componentWillMount","=state=存在");
                    console.log(this.props.navigation.state);
                    if(this.props.navigation.state.params){
                        console.log("componentWillMount","=params=存在");
                        console.log(this.props.navigation.state.params);
                    }else{
                        console.log("=params=不存在");
                    }
                }else{
                    console.log("=state=不存在");
                }
            }else{
                console.log("=navigation=不存在");
            }
        }else{
            console.log("=props=不存在");
        }
    };



    render() {
        const {state} = this.props.navigation;
        var page = 0;
        if (state.params && state.params.Page) {
            console.log('mtmain','存在设置他的page');
            page = state.params.Page;
        } else {
            page = 0;
            console.log('mtmain','不存在设置他的page');
        }
        return (

            <ScrollableTabView
                ref="scrollableTabView"
                locked={true}
                initialPage={page}
                tabBarPosition="bottom"
                renderTabBar={() => <CommonTabBar tabNames={this.state.tabNames}
                                                  tabIconNames={this.state.tabIconNames}
                                                  tabSelectedIconNames={this.state.tabSelectedIconNames}
                />}
            >
                <Home tabLabel="home" navigation={this.props.navigation}/>
                <Shop tabLabel="shop" navigation={this.props.navigation}/>
                <Mine tabLabel="mine" navigation={this.props.navigation}/>
                <More tabLabel="more" navigation={this.props.navigation}/>

            </ScrollableTabView>);
    };

    componentDidMount() {

        //做复杂操作
        if (this.props) {
            console.log('mtmain',"=props=存在");
            console.log(this.props);
            if (this.props.navigation) {
                console.log('mtmain',"=navigation=存在");
                console.log(this.props.navigation);
                if (this.props.navigation.state) {
                    console.log('mtmain',"=state=存在");
                    console.log(this.props.navigation.state);
                    if (this.props.navigation.state.params) {
                        console.log('mtmain',"=params=存在");
                        console.log(this.props.navigation.state.params);
                        var scrollviewTab = this.refs.scrollableTabView;
                        var {params} = this.props.navigation.state;
                        var page = 0;
                        if (params.name == "shop") {
                            page = 1;
                        } else if (params.name == "mine") {
                            page = 2;
                        } else if (params.name == "more") {
                            page = 3;
                        } else {
                            page = 0;
                        }
                        scrollviewTab.goToPage(page);

                    } else {
                        console.log('mtmain',"=params=不存在");
                    }
                } else {
                    console.log('mtmain',"=state=不存在");
                }
            } else {
                console.log('mtmain',"=navigation=不存在");
            }
        } else {
            console.log('mtmain',"=props=不存在");
        }

        // var  url= window.location.href
        // console.log(url);
        // var  ss = url.split('/');
        // for(var i =0 ;i<ss.length;i++){
        //     if(ss[i]=='name')
        //         console.log(ss[i+1]);
        //     if(ss[i]=='city_code')
        //         console.log(ss[i+1]);
        // }

    };

    async sa() {
        var scrollviewTab = this.refs.scrollableTabView;


        // DetailModule.IntentDataToJs((result)=>{
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
        //     scrollviewTab.goToPage(parseInt(result));
        //
        // },(result)=>{
        //     console.log("出错了=="+result);
        // });

    };


}

const styles = StyleSheet.create({
    container: {},
});
