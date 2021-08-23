import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './Signin.css';


class Signin extends Component {

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
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

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitLogin = () => {
        //this is where we fetch the register api
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
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
                            <h4 className="modal-title">Login</h4>
                        </div>
                        <div className="modal-body">
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

                        </div>
                        <div className="modal-footer">
                            <button onClick={this.onSubmitLogin} className="button">Login</button>
                        </div>
                    </div>
                </div>
            </CSSTransition>,
            document.getElementById('root')
        )
    }
    
}
export default Signin;