import React, {Component} from 'react';
import Task from '../../components/Task';


class TodoList extends Component {
    state = {
        items : [
            '1',
            '2',
            '3',
            '4'
        ]
    }
    
    render () {
        const state = this.state;
        const itemsElms = state.items.map((el, index) => {
            return <Task key={index} data={el}/>
        })

        return (
            <div className="listWrap">
                <div className="list">
                    {itemsElms}
                </div>
            </div>
        )
    }




}

export default TodoList; 




































// class TodoList extends Component {

//     state = {
//         items: [
//             'Styleguide creation',
//             'Send wireframes',
//             'Readability About page',
//             'Check color contrast'
//         ]
//     }

//     render() {
//         const {items} = this.state;
//         const itemsElems = items.map( (el, index) => {
//                 return <Task key={index} data={el}/>
//         })
//         return (
//             <div className="listWrap">
//                 <div className="list">
//                     {itemsElems}
//                 </div>
//             </div>
//         )
//     }


// }

// export default TodoList;
