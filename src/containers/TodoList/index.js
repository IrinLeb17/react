import React, {Component} from 'react';
import FilterBlock from '../../containers/FilterBlock';

class TodoList extends Component {

    render() {
        let elms;

        if(this.props.fullInput) {
            elms = this.props.enterTasks(this.props.filteredItems);
        } else {
            elms = this.props.enterTasks(this.props.items);
        }

        return (
            <div className="container">

                <FilterBlock items={this.props.items} searchTask={this.props.searchTask}/>
                <ul className="list-wrap">
                    {elms}
                </ul>
            </div>
        )
    }
}
export default TodoList;