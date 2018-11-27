import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class AddNewTask extends Component {
    render() {
        return (
            <button
                type="button"
                className="btn my-1 btn--newTask"
                data-toggle="modal"
                data-target="#modalTask"
                onClick={this.props.convertEditToAdd}
            >
                <i className="fa fa-pencil-square-o" />
                Tạo Task mới
            </button>
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