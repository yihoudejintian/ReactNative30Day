/**
 * Created by tongqinyuan on 2017/12/25.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default class HomeDetail extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //做复杂操作
    };

    render(){
        const {state} =this.props.navigation;
        if(state.params.user){
            console.log('user存在');
        }else{
            console.log('user不存在');
        }
        return (<View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this.props.navigation.navigate('Main',{Page:3})}>
                <Text>首页详情</Text>
            </TouchableOpacity>
        </View>);
    };


}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
