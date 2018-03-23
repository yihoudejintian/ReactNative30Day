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
    ToolbarAndroid,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import  AddTodo from '../../redux/AddTodo';
import  Footer from '../../redux/Footer';



export default class FacebookTabBarExample extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        //做复杂操作
    };

    render(){
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (<View style={styles.container}>
            <TouchableOpacity>
                <Text>商家</Text>
                <AddTodo onAddClick={text=>console.log("hhhh"+text)}/>
                <Footer onFilterChange={nextFilter => console.log("哈哈哈"+nextFilter)} filter={'SHOW_ALL'}/>
            </TouchableOpacity>
        </View>);
    };


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});
