import React, { Component }  from 'react';
import { connect }from 'react-redux';
import { registr as registrAction} from '../../actions/registr'


export class index extends Component {
    constructor(props) {
    super(props);
    this.state = {
        login: '',
        pwd: '',
        name: '',
        surname: '',
        email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
     }
    handleLoginChange = (e) => {
    this.setState({ login: e.target.value })
  };
    handlePwdChange = (e) => {
    this.setState({ pwd: e.target.value })
  };
    handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  };
    handleSurnameChange = (e) => {
    this.setState({ surname: e.target.value })
  };
    handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  };
 
    handleSubmit(e){
        const {  registr } = this.props;
        e.preventDefault();
        console.log(555555)
        registr({
            login: this.state.login,
            pwd: this.state.pwd,
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email
        });
    }
    /*redirectAfterLogin() {
    const {history, location} = this.props;
    history.push('/');
  }*/
    render() {
        return (
            <div>
                {this.props.status}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="login"></label>
                    <input type="text" name="login" id="login" placeholder="login" onChange={this.handleLoginChange} value={this.state.login} />
                    <label htmlFor="pwd"></label>
                    <input type="text" name="pwd" id="pwd"placeholder="pwd" onChange={this.handlePwdChange} value={this.state.pwd} />
                    <label htmlFor="name"></label>
                    <input type="text" name="name" id="name" placeholder="name" onChange={this.handleNameChange} value={this.state.name} />
                    <label htmlFor="surname"></label>
                    <input type="text" name="surname" id="surname" placeholder="surname" onChange={this.handleSurnameChange} value={this.state.surname} />
                    <label htmlFor="email"></label>
                    <input type="text" name="email" id="email" placeholder="email" onChange={this.handleEmailChange} value={this.state.email} />
                    
                    <input type="submit" value="Отправить" />
                </form>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    status: state.registrReducer.status,
    user: state.registrReducer.login,
    
})

const mapDispatchToProps = dispatch => ({
    registr: (form)=>{ dispatch(registrAction(form)) } 
})
export default connect(mapStateToProps, mapDispatchToProps)(index)
