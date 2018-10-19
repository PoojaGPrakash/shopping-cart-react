import React from 'react';
import './Header.css';
 
const Header = (props) => {
    return  (
        <div className="header">
            <p onClick={props.click}>I'm {props.name} and i'm {props.age} years of old !! </p>
            <div>{props.children}</div>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default Header;