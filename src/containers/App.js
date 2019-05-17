import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './../styles/Style.css';
import TodoList from './TodoList/';
import BtnPlus from '../components/buttons/BtnPlus';
import TextTask from '../components/buttons/TextTask';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      open: false,
      field: '',
      items: []
    }
  }

  showField = () => {
      let state = this.state;
      if(state.open && state.field.length != 0) {
        state.items.push(state.field);
      }
      this.setState({open: !state.open});
      this.setState({field: ''});
  }

  addTaskText = (e) => {
      this.setState({field: e.target.value});
  }

  removeTask = (e) => {
    this.state.items.splice(e, 1);
    this.setState({items: this.state.items});
  }

  render() {
    return (
      <div className="App">
        <TodoList items={this.state.items} removeTask={this.removeTask}/>
        <div className="wrapBtns">
          <BtnPlus showField={() => this.showField()} open={this.state.open} />
          <TextTask open={this.state.open} addTaskText={this.addTaskText} field={this.state.field}/>
        </div>
      </div>
    );
  }
}


export default App;
