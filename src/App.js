import ImageLinkForm from "./Components/image-link-form/ImageLinkForm.component";
import Logo from "./Components/Logo/Logo.component";
import Navigation from "./Components/Navigation/Navigation.component";
import Rank from "./Components/Rank/rank.component";
import Particles from "react-particles-js";
import React from "react";
import './App.css'
import FaceRecognition from "./Components/face-recognition/face-recognition.component";
import SignIn from "./Components/signin/signin.component";
import Register from "./Components/register/register.component";

const particlesOptions = {
  particles : {
    number : {
      value : 200,
      density :{
        enable : true,
        value_area : 1000
      }
    }  
  }
  
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input : '',
      imageUrl : '',
      clarifiaApiRegions : [],
      isSignedIn : false,
      route : 'signin',
      user : {}
    }
  }

  onInputChange = (event) => {
    this.setState({input : event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl : this.state.input})
    const raw = JSON.stringify({
      "user_app_id": {
            "user_id": "v57m5b9g3nh7",
            "app_id": "69b4c8286da24f64bad0e6d35cccae1f"
        },
      "inputs": [
        {
          "data": {
            "image": {
              "url": this.state.input
            }
          }
        }
      ]
    });
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key 59f9e1ebd3d64d7a9bac44b3ab662e91'
      },
      body: raw
    };
    
    fetch("https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result, null, 2).outputs[0].data.regions)
      .then(regions => this.setState({clarifiaApiRegions : regions}))
      .catch(error => console.log('error', error));
    fetch('http://localhost:3000/image', {
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({id : this.state.user.id})
    })
    .then(res => res.json())
    .then(id => {
      const {user} = this.state;
      user.entries++;
      this.setState({user})
    })
    
  }

  onRouteChange = (route) => {
    let isSignedIn ;
    if(route ==='home')
      isSignedIn = true;
    else
      isSignedIn = false
    this.setState({route , isSignedIn , imageUrl : ''});
  }

  setUser = (user) => {
    this.setState({user});
  }

  render() {
    const {route , isSignedIn , imageUrl , clarifiaApiRegions ,user} = this.state ;
    return (
      <div>
        <Particles className='particles' params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {
          (route === 'home') 
          ? <>
              <Logo />
              <Rank user = {user}/>
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} /> 
              <FaceRecognition  imageUrl={imageUrl} clarifiaApiRegions = {clarifiaApiRegions} />
            </>
          : (route === 'signin') 
            ? <SignIn setUser={this.setUser} onRouteChange={this.onRouteChange} />
            : <Register setUser={this.setUser} onRouteChange={this.onRouteChange} />
        }
        
      </div>
    );  
  }
  
}

export default App;
