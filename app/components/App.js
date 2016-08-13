import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Navbar from '../containers/NavbarContainer';

class App extends Component {
    render() {
        const { children } = this.props;
        return(
        <div>
            <Navbar />
            <h1>Filter table</h1>
            { children }
        </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
