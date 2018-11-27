import * as types from '../constants/actionTypes';
import data from '../Models/TaskModel/TasksData'

const jsonTasks = JSON.parse(localStorage.getItem('tasks'));
const initialState = jsonTasks ? jsonTasks : [];

const reducer = (state = initialState, action) => {
    let jsonTasks = JSON.parse(localStorage.getItem('tasks'));
    switch (action.type) {
        case types.INITIALIZE_TASKS:
            localStorage.setItem('tasks', JSON.stringify(data));
            return state;
        
        case types.LIST_ALL:
            return jsonTasks;

        case types.ADD_TASK:
            jsonTasks.push(action.task);
            localStorage.setItem('tasks', JSON.stringify(jsonTasks));
            return jsonTasks;
        case types.EDIT_TASK:
            for (let index in jsonTasks) {
                if(jsonTasks[index].id === action.task.id) {
                    jsonTasks[index] = action.task
                    localStorage.setItem('tasks', JSON.stringify(jsonTasks));
                    return jsonTasks
                }
            }
            return jsonTasks
        case types.CHANGE_STATUS:
            for (let index in jsonTasks) {
                if(jsonTasks[index].id === action.id) {
                    jsonTasks[index].status = action.status
                    localStorage.setItem('tasks', JSON.stringify(jsonTasks));
                    return jsonTasks
                }
            }
            return jsonTasks

        default:
            return state;
    }
    
}

export default reducer;