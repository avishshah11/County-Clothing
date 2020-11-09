import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value});
    };

    render(){
        return (
            <div className = 'Sign-in'>
                <h2> Already have an account!</h2>
                <span> Sign in with your email ans password</span>

                <form onSubmit = {this.handleSubmit}>
                    <input name ="email" type="email" onChange = {this.handleChange} value  = {this.state.email} required />
                    <label>Email</label>
                    <input 
                        name ="password" 
                        type ="password" 
                        value  = {this.state.email} 
                        onChange = {this.handleChange}
                        required 
                    />
                    <label>Email</label>

                    <input type = 'submit' value = 'Submit form'/>
                </form>
            </div>
        );
    }
}

export default SignIn;