import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            {this.props.auth.isAuthenticated() ?
                                <Link className="nav-link" to="/" onClick={this.props.auth.logout}>Logout</Link> :
                                <Link className="nav-link" to="/" onClick={this.props.auth.login}>Login</Link>
                            }
                        </li>
                        <li>
                            {this.props.auth.isAuthenticated() &&
                                <Link className="nav-link" to="/secret">Secret</Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;