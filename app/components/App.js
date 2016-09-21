import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Navbar from '../containers/NavbarContainer';

class App extends Component {
    render() {
        const { children } = this.props;
        return(
        <div>
            <Navbar />
            { children }
        </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
