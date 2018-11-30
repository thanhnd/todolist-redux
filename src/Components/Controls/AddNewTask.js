import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { Link } from 'react-router-dom'

class AddNewTask extends Component {
    render() {
        return (
            <Link
                to="/add-task"
                className="btn my-1 btn--newTask"
                onClick={this.props.convertEditToAdd}
            >
                <i className="fa fa-pencil-square-o" />
                Tạo Task mới
            </Link>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        convertEditToAdd: () => {
            dispatch(actions.convertEditToAdd())
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNewTask);