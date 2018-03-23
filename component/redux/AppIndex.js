/**
 * Created by tongqinyuan on 2018/1/15.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {
    View,
    Text,
} from 'react-native';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends Component {

    componentDidMount(){

    };
    render() {
        // Injected by connect() call:
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <View style={{flexDirection:'column',}}>
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                    } />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
                        dispatch(toggleTodo(index))
                    } />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>{
                        console.log("nextFilter","==有默认值="+nextFilter)
                        dispatch(setVisibilityFilter(nextFilter))
                    }

                    } />
            </View>
        )
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    console.log("state发生改变了执行这里=="+filter);
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

// Which props do we want to inject, given the global state?
//
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    console.log("tests","==这里是什么时候调用")
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)