import * as types from '../constants/actionTypes'

const initialState = true

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CONVERT_ADD_TO_EDIT:
            return false
        case types.CONVERT_EDIT_TO_ADD:
            return true
        default:
            break
    }

    return state
}

export default reducer
