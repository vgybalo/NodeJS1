import React, { Component } from 'react';

import TableComponent from '../../components/TableComponent';
import KokoitaComponent from '../../components/KokoitaComponent';
import Todos from '../../components/Todos';
import AddTodo from '../../components/AddTodo';

class index extends Component {
    render() {
        return (
            <div>

            <TableComponent/>
            <KokoitaComponent/>
                <AddTodo />
               <Todos /> 
            </div>
        );
    }
}

export default index;