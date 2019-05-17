import React, {Component} from 'react';

class BtnPlus extends Component {

    render() {

        return (
            <button onClick={this.props.showField}>{this.props.open ? 'Add' : '+ New Task'}</button>
        )
    }
}

export default BtnPlus;