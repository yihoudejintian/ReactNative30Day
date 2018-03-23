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
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import TBIconText from './../commonComponent/TBIconText';
import BackIconItem from './../commonComponent/BackIconItem';
const {width} = Dimensions.get('window');

export default class FacebookTabBarExample extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        //做复杂操作
        // if(this.props){
        //     console.log("=props=存在");
        //     console.log(this.props);
        //     if(this.props.navigation){
        //         console.log("=navigation=存在");
        //         console.log(this.props.navigation);
        //         if(this.props.navigation.state){
        //             console.log("=state=存在");
        //             console.log(this.props.navigation.state);
        //             if(this.props.navigation.state.params){
        //                 console.log("=params=存在");
        //                 console.log(this.props.navigation.state.params);
        //             }else{
        //                 console.log("=params=不存在");
        //             }
        //         }else{
        //             console.log("=state=不存在");
        //         }
        //     }else{
        //         console.log("=navigation=不存在");
        //     }
        // }else{
        //     console.log("=props=不存在");
        // }
    };

    render(){
        return (<View style={styles.container}>
            <StatusBar backgroundColor={'rgb(255,97,0)'}/>
            <View>

            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1,height:45,justifyContent:'center',alignItems:'center',backgroundColor:'rgb(246,131,102)'}}>
                    <Text>100</Text>
                    <Text>卷</Text>
                </View>
                <View style={{flex:1,height:45,justifyContent:'center',alignItems:'center',backgroundColor:'rgb(246,131,102)'}}>
                    <Text>100</Text>
                    <Text>卷</Text>
                </View>
                <View style={{flex:1,height:45,justifyContent:'center',alignItems:'center',backgroundColor:'rgb(246,131,102)'}}>
                    <Text>100</Text>
                    <Text>卷</Text>
                </View>

            </View>
            <View style={{borderBottomWidth:0.5,borderBottomColor:'#eeeeee'}}>
                <BackIconItem title="我的订单" leftIcon={'collect'} rightTitle="查看全部订单" />
            </View>

            <View style={styles.rowOrderViewStyle}>
                {this.renderRowOrder()}
            </View>

            <View style={{marginTop:10}}>
                <BackIconItem title="钱包" leftIcon={'draft'} rightTitle="账户余额￥100" />
                <View style={{height:0.5,backgroundColor:'#eeeeee'}} />
                <BackIconItem title="抵用券" leftIcon={'like'} rightTitle="0" />
            </View>
            <View style={{marginTop:10}}>
                <BackIconItem title="积分商城" leftIcon={'card'} />
            </View>

            <View style={{marginTop:10}}>
                <BackIconItem title="今日推荐" leftIcon={'new_friend'} rightTitle="查看全部订单" />
            </View>
            <View style={{marginTop:10}}>
                <BackIconItem title="我的合作" leftIcon={'collect'} rightTitle="轻松开店，招财进宝" />
            </View>

        </View>);
    };

    renderRowOrder(){

        var AllImages = [];
        var titles = ['待付款','待使用','待评价','退款/售后'];
        var icons = ['order1','order2','order3','order4'];
        for (var i=0;i<titles.length;i++){
            AllImages.push(<View key={i} style={styles.rowOrderItem}>
                <TBIconText title={titles[i]} icon={icons[i]}/>
            </View>)
        }
        return AllImages;

    };


}

const styles = StyleSheet.create({
    container:{
    },
    rowOrderViewStyle:{
        backgroundColor:'white',
        flexDirection:'row',
        width:width,
        paddingTop:10,
        paddingBottom:10,
    },
    rowOrderItem:{
        flex:1,

    },
});
