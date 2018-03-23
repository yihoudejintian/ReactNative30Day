/**
 * Created by tongqinyuan on 2018/1/15.
 */
import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

//数据流第二步： 接受action,返回一个新的state
function todos(state = [], action) {
    console.log("tests","==我再添加数据的时候把add_one的信息")
    switch (action.type) {
        case ADD_TODO:
            console.log("添加一天数据"+action.text);
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    title:'哈哈哈'
                }
            ]
        case TOGGLE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

//数据流第三步：合并成一个Reducers
const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp