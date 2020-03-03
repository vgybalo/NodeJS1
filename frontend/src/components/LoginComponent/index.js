import React, { Component }  from 'react';
import { connect }from 'react-redux';
import { registr as registrAction} from '../../actions/registr'


export class index extends Component {
    constructor(props) {
    super(props);
    this.state = {
        login: '',
        pwd: '',
       
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
     }
    handleLoginChange = (e) => {
    this.setState({ login: e.target.value })
  }
    handlePwdChange = (e) => {
    this.setState({ pwd: e.target.value })
  }
    
 
    handleSubmit(e){
        const {  registr } = this.props;
        e.preventDefault();
        console.log(555555)
        registr({
            login: this.state.login,
            pwd: this.state.pwd
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
                    <input type="text" name="login" id="login" onChange={this.handleLoginChange} value={this.state.login} />
                    <label htmlFor="pwd"></label>
                    <input type="text" name="pwd" id="pwd" onChange={this.handlePwdChange} value={this.state.pwd} />
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
