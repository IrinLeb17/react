import React, {Component} from 'react';
// import Task from '../../components/Task';

import Task from '../../components/Task';

class TodoList extends Component {

    render() {
        const itemEl = this.props.items.map((el,i) => {
            return <Task key={i} data={el} removeTask={() => this.props.removeTask(i)}/>
        })

        return (
            <div className="list-wrap">
                <ul className="list">
                    {itemEl}
                </ul>
            </div>

        )
    }
}
export default TodoList;