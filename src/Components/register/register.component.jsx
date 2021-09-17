import React from "react";

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            registerName : '',
            registerEmail : '',
            registerPassword : ''
        }
    }

    onNameChange = (event)=>{
        this.setState({registerName : event.target.value});
    }

    onEmailChange = (event)=>{
        this.setState({registerEmail : event.target.value});
    }

    onPasswordChange = (event)=>{
        this.setState({registerPassword : event.target.value});
    }

    onRegister = () => {
        const {registerEmail , registerPassword , registerName} = this.state
        fetch('http://localhost:3000/register' , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({name : registerName , email : registerEmail , password : registerPassword})
        })
        .then(res => res.json())
        .then(user => {
            if(user.id){
                this.props.setUser(user);
                this.props.onRouteChange('home')
            }
        });
    }

    render(){
        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80 center">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0 tc">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name" >Name</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name"  
                                    id="name" 
                                    onInput={this.onNameChange}
                                />                        
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address" 
                                    onInput={this.onEmailChange}
                                />                        
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password" 
                                    onInput={this.onPasswordChange}
                                />                        
                            </div>
                        </fieldset>
                        <div className="tc ">
                            <input 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Register"
                                onClick={this.onRegister}
                            />
                        </div>
                    </div>
                </main>
            </article>
        );    
    }
    
}

export default Register;