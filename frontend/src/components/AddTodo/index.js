import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo as addTodoAction } from '../../actions/addTodo';

export class index extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const {addTodo} = this.props;
        addTodo();
    }
    

    render() {
        const { status, users } = this.props
        console.log(status, users)
        let data;
        if(status === 'loading'){
            data = <h1>Loading</h1>
        } else if (status === 'success') {
            console.log(123)
            data = users.map((el, idx) => {
                return (
                    <div style={{border: '1px solid'}}>
                        <h4>{el.id}</h4>
                        <h4>{el.title}</h4>
                    </div>
                )
            })
        } else {
            data = null
        }
        return (
            <div>
                {data}
            </div>
        )
    }
}

index.defaultProps = {
    users: []
}

const mapStateToProps = (state) => ({
    status: state.appReducer.status,
    users: state.appReducer.users
})

const mapDispatchToProps = dispatch => ({
    addTodo: ()=>{ dispatch(addTodoAction()) } 
})
export default connect(mapStateToProps, mapDispatchToProps)(index)