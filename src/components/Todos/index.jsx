import React, { Component } from 'react'
import { connect } from 'react-redux';
import DataGrid from 'react-data-grid';
import { getUsers as getUsersAction } from '../../actions/getUsers';

const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "title", name: "Title", editable: true },
  { key: "complete", name: "Complete", editable: true }
];

const rows = [
  { id: 0, title: "Task 1", complete: 20 },
  { id: 1, title: "Task 2", complete: 40 },
  { id: 2, title: "Task 3", complete: 60 }
];

export class index extends Component {
    constructor(props){
        super(props);
       this.state = { rows };
    }

    componentDidMount() {
        const {  getUsers } = this.props;
        getUsers();
    }
    

    //render() {
        onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  render() {
    return (
    <div >
        <DataGrid
            columns={columns}
            rowGetter={i => this.state.rows[i]}
            rowsCount={3}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
        />
    </div>
    );
  }
        /*const { status, users } = this.props
                console.log(status, users)
        let data;
        if(status === 'loading'){
            data = <h1>Loading</h1>
        } else if (status === 'success') {
            console.log(123)
            data = users.map((el, idx) => {
                        /*const columns = [{ key: 'id', name: 'ID', editable: true }, { key: 'title', name: 'Title', editable: true }];
                        const rows = [{ id: el.id, title: el.title }];
                        const rowGetter = rowNumber => rows[rowNumber];*/
                        
               /* return (
                    <div style={ {height: '200px', width: '600px'} }>
                        <DataGrid>
                            columnDefs={this.state.columnDefs}
                            rowData={this.state.rowData}>
                        </DataGrid>
                    </div>
                );*/
                /*return (
                    <div style={{border: '1px solid'}}>
                        <h4>{el.id}</h4>
                        <h4>{el.title}</h4>
                    </div>
                )*/
           /* })
        } else {
            data = null
        }
        return (
            <div>
                {data}
            </div>
        )*/
    }
//}

index.defaultProps = {
    users: []
}

const mapStateToProps = (state) => ({
    status: state.appReducer.status,
    users: state.appReducer.users
})

const mapDispatchToProps = dispatch => ({
    getUsers: ()=>{ dispatch(getUsersAction()) } 
})
export default connect(mapStateToProps, mapDispatchToProps)(index)
