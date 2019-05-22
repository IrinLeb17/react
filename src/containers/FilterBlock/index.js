import React, {Component} from 'react';

class FilterBlock extends Component {

    render() {

        return(
            <div className="filter-wrap">
                <input type="text" placeholder="Search task" onInput={(e) => this.props.searchTask(e)}  />
            </div>
        )
    }
}

export default FilterBlock;