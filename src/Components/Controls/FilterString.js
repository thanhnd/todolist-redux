import React, { Component } from 'react';

class filterString extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="form-group text-left my-0">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tìm kiếm công việc"
                    />
                </div>
            </div>
        );
    }
}

export default filterString;