import * as types from '../constants/actionTypes';

export const initializeTasks = () => {
    return {
        type: types.INITIALIZE_TASKS
    }
}

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
}

export const convertAddToEdit = () => {
    return {
        type: types.CONVERT_ADD_TO_EDIT
    }
}

export const convertEditToAdd = () => {
    return {
        type: types.CONVERT_EDIT_TO_ADD
    }
}

export const getTaskEditing = (taskEditing) => {
    return {
        type: types.GET_TASK_EDITING,
        taskEditing
    }
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task
    }
}

export const changeStatus = (id, status) => {
    return {
        type: types.CHANGE_STATUS,
        id, status
    }
}

