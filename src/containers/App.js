import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './../styles/Style.css';
import TodoList from './TodoList/';
import Task from '../components/Task';
import BtnPlus from '../components/buttons/BtnPlus';
import TextTask from '../components/buttons/TextTask';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      open: false,
      field: '',
      items: [],
      filteredItems: [],
      fullInput: false
    }
  }

  addTask = () => {
      let state = this.state;
      if(state.open && state.field.length !== 0) {
        let obj = {elem: state.field, selected: false}
        state.items.push(obj);
      }
      this.setState({open: !state.open});
      this.setState({field: ''});
  }

  addTaskText = (e) => {
      this.setState({field: e.target.value});
  }

  removeTask = (text) => {

    this.sortArrTasks(text, (i, name) => {
      this.setState((state) => {
        if(name === 'items') state.items.splice(i, 1);
        else state.filteredItems.splice(i, 1);
      })
    })
  }

  selectItem = (text) => {

    this.sortArrTasks(text, (i, name) => {
      this.setState((state) => {
        if(name === 'items') state.items[i].selected = !state.items[i].selected;
        else state.filteredItems[i].selected = !state.filteredItems[i].selected;
      })

    })
  }

  sortArrTasks = (text, func) => {
    let sortArrs = (arr, nameArr) => {
      arr.map((el, i) => {
        if(el.elem === text) func(i, nameArr);
      });
    }
    sortArrs(this.state.items, 'items');
    sortArrs(this.state.filteredItems, 'filteredItems');

    this.setState({ items: this.state.items, filteredItems: this.state.filteredItems});
  }

  searchTask = (e) => {

    let value = e.nativeEvent.target.value,
        items = this.state.items;

    this.setState(function(state) {
      state.filteredItems = [];
      items.map(o => {

        if(new RegExp(value).test(o.elem)) {
          let cloneObj = JSON.parse(JSON.stringify(o));
          state.filteredItems.push(cloneObj);
        }
        return state.filteredItems;
      })
      return {filteredItems: state.filteredItems}
    });

    if(value.length === 0) {
      this.setState({fullInput: false})
    } else {
      this.setState({fullInput: true})
    }

  }

  enterTasks (list) {
    return list.map((el,i) => {
        if(el.elem === ''){return false};
        return <Task key={i} data={el.elem} index={i} removeTask={() => this.removeTask(el.elem)} selectItem={() => this.selectItem(el.elem)} selected={el.selected}/>
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todo list</h1>
        <TodoList 
          items={this.state.items} 
          filteredItems={this.state.filteredItems} 
          removeTask={this.removeTask} 
          selectItem={this.selectItem} 
          searchTask={this.searchTask} 
          enterTasks={this.enterTasks}
          fullInput={this.state.fullInput} />

        <div className="wrapBtns">
          <BtnPlus addTask={() => this.addTask()} open={this.state.open} />
          <TextTask open={this.state.open} addTaskText={this.addTaskText} field={this.state.field}/>
        </div>
      </div>
    );
  }
}


export default App;