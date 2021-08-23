import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import ClanPage from '../components/ClanPage/ClanPage';
import HomePage from '../components/HomePage/HomePage';
import EventPage from '../components/EventsPage/EventPage';
import AboutUs from '../components/AboutUsPage/AboutUs';

const initial={
  route: 'clans',//default route
  signedIn: false,
  user:{
    id: '',
    name: '',
    email: '',
    clan: '',
    regno: '',
    joined: ''
  }
}
class App extends Component{
  constructor(){
    super();
    this.state=initial;
  }

  loadUser = (data) => {
    this.setState({
      user:{
        id: data.id,
        name: data.name,
        email: data.email,
        clan: data.clan,
        regno: data.regno,
        joined: data.joined
      }
    })
  }

  onBackgroundChange = (route) => {
    if(route === 'home'){
      document.body.style.backgroundImage = "url('../Images/back.png')";//homepage background
    } else if(route === 'clans'){
      document.body.style.backgroundImage = "url('../Images/hero.jpeg')";//clanpage background
    } else if(route === 'events') {
      document.body.style.backgroundImage = "url('../Images/flower.jpeg')";//eventspage background
    }else if (route === 'about us'){
      document.body.style.backgroundImage = "url('../Images/hero.jpeg')";//about us page background
    }
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
    document.body.style.padding = "10px";
  }

  routechange=(route)=>{
    this.setState({route: route});
  }

  signIn = (signedIn)=> {
    if(!signedIn){
      this.setState(initial);
    } else {
      this.setState({signedIn: signedIn});
    }
  }

  render(){
    const { route, signedIn } = this.state;
    
    return (
      <div className="App">
        <Navigation 
        signedIn={signedIn} 
        signIn={this.signIn} 
        routechange={this.routechange}
        loadUser={this.loadUser}
        />
        {
          route === 'home'
          ? <HomePage />
          : route === 'clans'
          ? <ClanPage />
          : route === 'events'
          ? <EventPage />
          : <AboutUs />
        }
        {this.onBackgroundChange(route)}
      </div>
    );
  }
}


export default App;

/*
HomePage
EventsPage
AboutUsPage
footer
social media
cards(optional)
*/