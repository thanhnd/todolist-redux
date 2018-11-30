import React, { Component } from 'react';
import randomID from 'random-id';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom'

class ModalTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            labelArr: [],
            priority: 1,
            memberIDArr: [],
            status: 1,
            description: ''
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.props.isAddNewTask) {
            this.setState({
                id: randomID(5, "aA0")
            }, () => {
                this.props.addTask(this.state)
            })
        } else {
            this.props.editTask(this.state)
        }

    }

    onReset = () => {
        this.setState({
            id: '',
            name: '',
            labelArr: [],
            priority: 1,
            memberIDArr: [],
            status: 1,
            description: ''
        })
    }

    componentDidMount() {
        
        if(this.props.match) {
            let {match, tasks} = this.props
            console.log("match.params.id", match.params.id)
            if(match.params.id) {
                for(let task of tasks) {
                    if(task.id === match.params.id) {
                        this.props.convertAddToEdit()
                        this.setState(task)
                    }
                }
            }
        }
    };
    
    render() {
        let { isAddNewTask } = this.props
        return (
            <form onSubmit={this.onSubmit} className="container">
                {/* Modal body */}
                <div className="modal-body">

                    <div className="form-group">
                        <label>Tên công việc:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mô tả:</label>
                        <textarea
                            className="form-control"
                            rows={2}
                            name="description"
                            onChange={this.onChange}
                            value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priority">Độ ưu tiên:</label>
                        <select
                            className="form-control"
                            name="priority"
                            onChange={this.onChange}
                            value={this.state.priority}
                        >
                            <option value="1" >Thấp</option>
                            <option value="2" >Trung bình</option>
                            <option value="3" >Cao</option>
                        </select>
                    </div>

                    <CheckboxGroup
                        checkboxDepth={2} // This is needed to optimize the checkbox group
                        name="memberIDArr"
                        value={this.state.memberIDArr}
                        onChange={this.membersChanged}
                        className="mt-2"
                    >
                        <label>Người thực hiện:</label><br />
                        <label><Checkbox value="user_2" className="ml-3" /> Phó Nghĩa Văn</label>
                        <label><Checkbox value="user_3" className="ml-3" /> Nguyễn Tiến Minh Tuấn</label>
                        <label><Checkbox value="user_4" className="ml-3" /> Đặng Trung Hiếu</label>
                        <label><Checkbox value="user_5" className="ml-3" /> Trương Tấn Khải</label>
                    </CheckboxGroup>

                    <CheckboxGroup
                        checkboxDepth={2} // This is needed to optimize the checkbox group
                        name="labelArr"
                        value={this.state.labelArr}
                        onChange={this.labelsChanged}
                        className="mt-2"
                    >
                        <label>Nhãn: </label><br />
                        <label><Checkbox value="Frontend" className="ml-3" />Frontend </label>
                        <label><Checkbox value="Backend" className="ml-3" />Backend </label>
                        <label><Checkbox value="API" className="ml-3" />API </label>
                        <label><Checkbox value="Issue" className="ml-3" />Issue </label>
                    </CheckboxGroup>


                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                    <button
                        type="submit"
                        className={`btn btn-${isAddNewTask ? "success" : "warning"}`}
                    >
                        {isAddNewTask ? "Thêm Task" : "Sửa Task"}
                    </button>

                    <Link
                        to="/secret"
                        className="btn btn-danger ml-2"
                        data-dismiss="modal"
                    >
                        Quay Lại
                            </Link>
                </div>
            </form>

        );
    }

    membersChanged = (newMemberss) => {
        this.setState({
            memberIDArr: newMemberss
        });
    }
    labelsChanged = (newLabels) => {
        this.setState({
            labelArr: newLabels
        });
    }
}

const mapPropsToState = (state) => {
    return {
        isAddNewTask: state.isAddNewTask,
        taskEditing: state.taskEditing,
        tasks: state.tasks
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => {
            dispatch(actions.addTask(task))
        },
        editTask: (task) => {
            dispatch(actions.editTask(task))
        },
        convertAddToEdit: () => {
            dispatch(actions.convertAddToEdit())
        }
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(ModalTask);