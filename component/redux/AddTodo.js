/**
 * Created by tongqinyuan on 2018/1/13.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    TextInput,
    Button,
    Dimensions,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

const {width} = Dimensions.get("window");

export default class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput ref="texta"
                           style={styles.inputtxt}
                           placeholder={'请输入...'}
                           value={this.state.textValue}
                           onChangeText={(text) => this.setState({textValue: text})}
                />
                <Button style={{width: 100, textAlign: 'center'}}
                        onPress={(e) => this.handleClick(e)}
                        title={'添加'}/>
            </View>
        )
    }

    handleClick(e) {
        var text = this.state.textValue;
        console.log("==value==" + text);
        this.props.onAddClick(text),
            this.setState({textValue: ''});
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 40,
        flexDirection: 'row',


    },
    inputtxt: {
        width: 200,
        height: 35,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 0,
        backgroundColor: 'white',

    },
});