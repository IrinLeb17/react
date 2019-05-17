import React, {Component} from 'react';


const Task = props => {

    return (
        <li>{props.data} <span className="removeTask" onClick={props.removeTask}>X</span></li>
    )
}


export default Task;


































// import React from 'react';
// const Task = props => {

//     return (
//         <li>{props.data}</li>
//     )
// }

// export default Task;


