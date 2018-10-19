import React from 'react';

const Courses = (props) => {
    return  (
        <div className="courses">
            <p onClick={props.click}>I'm {props.name} and i'm {props.age} years of old !! </p>
            <div>{props.children}</div>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default Courses;
