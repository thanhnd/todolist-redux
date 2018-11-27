import * as types from '../constants/actionTypes'

const initialState = {
    id: '',
    name: '',
    labelArr: [],
    priority: 1,
    memberIDArr: [],
    status: 1,
    description: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASK_EDITING:
            return action.taskEditing
        
        default:
            break
    }

    return state
}

export default reducer
