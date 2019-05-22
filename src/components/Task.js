import React, {Component} from 'react';


const Task = props => {

    return (
        <li>
            <span className={props.selected ? 'circleFull' : 'circleEmpty'}></span>
            <p onClick={(e) => props.selectItem(e)} 
            style={props.selected ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{props.index + 1}. {props.data}</p>

            <span style={props.selected ? {display: 'block'} : {display: 'none'}} 
                onClick={props.removeTask}>X</span>
        </li>
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


