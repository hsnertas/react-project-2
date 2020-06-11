import React from 'react';
import PropTypes from 'prop-types';

 function Navbar(props) {
    return (
        <div>
              <h2 className="text-center">{props.title}</h2>
        </div>
    )
}
Navbar.propTypes={

    title: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"Default App"
}
export default Navbar;