import React, { Component } from 'react'
/****** */
import { Redirect } from 'react-router';
import { connect }from 'react-redux';
import { login } from './reducer/registerReducer'

class Form extends Comment {
state ={
    inputLogin: '',
    inputPwd: '',
}
handleSubmit  = e => {
    e.preventDefault();
    this.props.login(this.state.form)
}

    render() {
        const {form} = this.state;
        const {isLoading, isError, shouldRedirect, errorMessage} = this.props 
        return (
            axios.post('/registr', this.state.form)
            .then(response => {
                if (response.data === false){
                    this.setState({ error: 'Неверный логин или пароль'});
                } else {
                    this.setState({redirectTo: '/index'});
                }
            })
            .catch(err => console.log(err));



            <form>
                <label htmlFor="login"></label>
                <input type="text" name="login" id="login" value={inputLogin} />
                <label htmlFor="pwd"></label>
                <input type="text" name="login" id="pwd" value={inputPwd} />
                <button>Submit</button>
            </form>
        )
    }



}

const mapStateToProps = state => ({
    isLoading: state.login.isLoading,
    isError: state.login.isError,
    shouldRedirect: state.login.shouldRedirect,
    errorMessage: state.login.errorMessage,
});

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)

/*import { connect } from 'react-redux';
import { getUsers as getUsersAction } from '../../actions/getUsers';

export class index extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const {  getUsers } = this.props;
        getUsers();
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
    getUsers: ()=>{ dispatch(getUsersAction()) } 
})
export default connect(mapStateToProps, mapDispatchToProps)(index)*/
