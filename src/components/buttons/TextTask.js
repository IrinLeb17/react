import React, {Component} from 'react';

class TextTask extends Component {

    render() {

        return (
            <input type="text" className={this.props.open ? 'visibleInput' : 'hiddenInput'} onChange={this.props.addTaskText} value={this.props.field}/>
        )
    }
}

export default TextTask;
