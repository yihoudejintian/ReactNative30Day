/**
 * Created by tongqinyuan on 2018/1/13.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    View,
    Text,
} from 'react-native';

export default class Todo extends Component {
    render() {
        return (
            <Text
                onPress={this.props.onClick}
                style={{
                    color: this.props.completed ? 'red' : 'green',
                }}>
                {/*cursor: this.props.completed ? 'default' : 'pointer'*/}
                {this.props.text}
            </Text>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}