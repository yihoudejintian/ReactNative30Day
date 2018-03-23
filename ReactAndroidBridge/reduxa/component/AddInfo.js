/**
 * Created by tongqinyuan on 2018/1/18.
 */
import React, {Component} from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

export default class App extends Component<{}> {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            textValue :'',
        }
    }

    render() {
        return (<View style={styles.container}>
            <TextInput placeholder={'请输入....'}
                       ref="textId"
                       onchangetext={(text)=>this.setState({textValue:text})}/>
            <Button title="添加" onPress={(e)=> this.handleClick(e)}/>

        </View>);
    };

    handleClick(e){
        var text = this.state.textValue;
        this.props.onAddClick(text)
    }

}

/*
在定义属性的时候，如果是函数，参数可以不用声明与java有区别
 */
App.propTypes = {
    onAddClick:PropTypes.func.isRequired,
}

let styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
});