import React, { Component } from 'react';

// Components
import TaskList from '../Components/TaskList';
import Controls from '../Components/Controls';
import FilterString from '../Components/Controls/FilterString';

class Secret extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {/* PANEL */}
                        <Controls {...this.props}/>

                        {/* DISPLAY */}
                        <div className="col-md-9 px-0">
                            <div className="container-fluid px-0">
                                <div className="row header header--right d-flex align-items-center mx-0">
                                    <div className="col-md-6">
                                        <div className=" d-flex justify-content-between">
                                            <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                                        </div>
                                    </div>

                                    {/* FilterString */}
                                    <FilterString />

                                </div>
                            </div>

                            <TaskList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Secret;