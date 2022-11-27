import React from 'react';

// Stateless function
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href='http://www.google.com'>
                React JS
                <span className='badge badge-pill badge-secondary m-1'>
                    {props.totalCounters}
                </span>
            </a>
        </nav>
    );
}
 
export default Navbar;