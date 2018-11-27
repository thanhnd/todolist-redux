import React, { Component } from 'react';

// Components
import ModalTask from './ModalTask';
import TaskList from './TaskList';
import Controls from './Controls';
import FilterString from './Controls/FilterString';

class Secret extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {/* PANEL */}
                        <Controls />

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

                            <TaskList
                            // tasks={listOfTasks.list}
                            />
                        </div>
                    </div>
                </div>

                {/* ModalTask */}
                <ModalTask />
            </div>
        );
    }
}

export default Secret;