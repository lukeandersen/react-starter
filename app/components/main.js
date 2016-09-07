import React, { PropTypes } from 'react';
import NormalizeIgnored from 'normalize.css';
import StylesIgnored from '../styles/main.css';

const Main = (props) => (
    <div>
        {/* Header */}
        {props.children}
        {/* Footer */}
    </div>
);

Main.propTypes = {
    children: PropTypes.object.isRequired
};

export default Main;
