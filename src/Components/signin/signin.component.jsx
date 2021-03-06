import React from "react";

class  SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            signinEmail : '',
            signinPassword : ''
        }
    }

    onEmailChange = (event)=>{
        this.setState({signinEmail : event.target.value});
    }

    onPasswordChange = (event)=>{
        this.setState({signinPassword : event.target.value});
    }

    onSignIn = () => {
        const {signinEmail , signinPassword} = this.state
        fetch('http://localhost:3000/signin' , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email : signinEmail , password : signinPassword})
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
        const {onRouteChange} = this.props;
        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80 center">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0 tc">Sign In</legend>
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
                                value="Sign in"
                                onClick={this.onSignIn}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p 
                                className="f6 link dim black db tc pointer"
                                onClick={()=> {onRouteChange('register')}}
                            >Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );    
    }
    
}

export default SignIn;