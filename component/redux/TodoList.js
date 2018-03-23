/**
 * Created by tongqinyuan on 2018/1/15.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {
    View,
    Text,
} from 'react-native';
import Todo from './Todo'

export default class TodoList extends Component {

    render() {
        var {todos} = this.props
        console.log("tests", " state发生变化！所有订阅 store.subscribe(listener) 的监听器都将被调用；")
        return (
            <View>
                {todos.map((todo, index) =>{
                    console.log("==单个内容==", todo)
                       return  <Todo {...todo}
                              key={index}
                              onClick={() => this.props.onTodoClick(index)}/>

                    }

                )}
            </View>
            //         <View>
            //         {this.props.todos.map((todo, index) =>
            //             <Todo {...todo}
            //                   key={index}
            //                   onClick={() => this.props.onTodoClick(index)} />
            //         )}
            // </View>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired).isRequired
}