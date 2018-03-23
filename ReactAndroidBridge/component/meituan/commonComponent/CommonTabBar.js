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
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';


export default class CommonTabBar extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //做复杂操作
    };

    render(){
        return (<View style={styles.container}>
            {this.props.tabs.map((tab,i)=>this.renderChildsView(tab,i))}
        </View>);
    };

    renderChildsView(tab,i){
        var colora = this.props.activeTab == i?'rgb(252,98,32)':'rgb(137,137,137)';
        const uri = this.props.activeTab == i?this.props.tabSelectedIconNames[i]:this.props.tabIconNames[i];
        return (<TouchableOpacity key={i} activeOpacity={0.5} style={styles.tabitemStyle} onPress={()=>this.props.goToPage(i)}>
            <Image source={{uri:uri}} style={styles.imageIcon} />
            <Text style={{color:colora}}>{this.props.tabNames[i]}</Text>
        </TouchableOpacity>);
    };


}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        borderTopWidth:0.5,
        borderTopColor:'#bbbbbb'
    },
    imageIcon:{
        width:30,
        height:30,
    },
    tabitemStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});