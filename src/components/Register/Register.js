import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './Register.css';


class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            name: '',
            regno: ''
        }
    }
    
    closeOnEscapeKeyDown = (e) => {
        if((e.charCode || e.keyCode) === 27){
            this.props.onClose();
        }
    }

    componentDidMount() {
        document.body.addEventListener('keydown', this.closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener('keydown', this.closeOnEscapeKeyDown);
        }
    }
    componentDidUpdate() {
        document.body.addEventListener('keydown', this.closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener('keydown', this.closeOnEscapeKeyDown);
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange =(event) => {
        this.setState({password: event.target.value});
    }

    onRegnoChange = (event) => {
        this.setState({regno: event.target.value});
    }

    onSubmitRegister = () => {
        //this is where we fetch the register api
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                regno: this.state.regno
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.signIn(true);
                this.props.loadUser(user);
            }
        })
        .catch(console.log)

    }

    render() {
        return ReactDOM.createPortal(
            <CSSTransition
            in={this.props.show}
            unmountOnExit
            timeout={{enter: 0, exit: 300}}
            >
                <div className='modal' onClick={this.props.onClose}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h4 className="modal-title">Register</h4>
                        </div>
                        <div className="modal-body">
                            <input 
                            type="text"
                            id="username"
                            name="username" 
                            placeholder="Username"
                            onChange={this.onNameChange}
                            />

                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Email"
                            onChange={this.onEmailChange}
                            />

                            <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Password"
                            onChange={this.onPasswordChange}
                            />

                            <input 
                            type="text" 
                            id="regno" 
                            name="regno" 
                            placeholder="Registration Number"
                            onChange={this.onRegnoChange}
                            />

                        </div>
                        <div className="modal-footer">
                            <button onClick={this.onSubmitRegister} className="button">Register</button>
                        </div>
                    </div>
                </div>
            </CSSTransition>,
            document.getElementById('root')
        )
    }
    
}
export default Register;