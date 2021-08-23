import React, { Component } from 'react';
import './Navigation.css';
import logo from '../../Images/KugeGemu.png';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state={
            signedIn:props.signedIn,
            loginShow: false,
            registerShow: false
        }
    }

    setLoginShow(showState){
        this.setState({loginShow: showState});
    }

    setRegisterShow(showState){
        this.setState({registerShow: showState});
    }

    render() {
        const { signedIn } = this.props;
        if(signedIn){
            return (
                <div>
                    <header>
                        <nav className="navbar">
                            <img src={logo} alt="Logo" id="logo"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <ul className="nav_links">
                                <li><p onClick={()=>this.props.routechange('home')}>Home</p></li>
                                <li><p onClick={()=>this.props.routechange('clans')}>Clans</p></li>
                                <li><p onClick={()=>this.props.routechange('events')}>Events</p></li>
                                <li><p onClick={()=>this.props.routechange('about us')}>About us</p></li>
                            </ul>
                        </nav>
                        <div className="nav-right">
                            <button 
                            onClick={()=>{
                                this.props.signIn(false);
                                this.setRegisterShow(false);
                                this.setLoginShow(false);
                                }}>Sign Out</button>
                        </div>
                    </header>
                </div>
            );
        } else {
            return (
                <div>
                    <header>
                        <nav className="navbar">
                            <img src={logo} alt="Logo" id="logo"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <ul className="nav_links">
                                <li><p onClick={()=>this.props.routechange('home')}>Home</p></li>
                                <li><p onClick={()=>this.props.routechange('clans')}>Clans</p></li>
                                <li><p onClick={()=>this.props.routechange('events')}>Events</p></li>
                                <li><p onClick={()=>this.props.routechange('about us')}>About us</p></li>
                            </ul>
                        </nav>
                        <div className="nav-right">
                            <button onClick={() => this.setLoginShow(true)}>Login</button>
                            <Signin 
                            onClose={() => this.setLoginShow(false)}
                            show={this.state.loginShow}
                            signIn={this.props.signIn}
                            loadUser={this.props.loadUser}
                            />

                            <button onClick={() => this.setRegisterShow(true)}>Join Us</button>
                            <Register 
                            onClose={() => this.setRegisterShow(false)}
                            show={this.state.registerShow}
                            signIn={this.props.signIn}
                            loadUser={this.props.loadUser}
                            /> 
                        </div>
                    </header>
                </div>
            );    
        }
    }
}

export default Navigation;
