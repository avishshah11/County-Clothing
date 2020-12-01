import React from 'react';
import { connect } from 'react-redux';

import { auth, signInWithGoogle} from '../../firebase/firebase.utils';

import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';
import react from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error){
            console.log(error);
        }
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value});
    };

    render(){
        const { googleSignInStart } = this.props;
        return (
            <div className = 'sign-in'>
                <h2> Already have an account!</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <FromInput  
                        name ="email" 
                        type="email" 
                        handleChange = {this.handleChange} 
                        value  = {this.state.email} 
                        label = 'email'
                        required 
                    />
                
                    <FromInput
                        name ="password" 
                        type ="password" 
                        value  = {this.state.password} 
                        handleChange = {this.handleChange}
                        label = 'password'
                        required 
                    />
                    <div className = 'buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton type = 'button'
                        onClick = {googleSignInStart} isGoogleSignIn>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>    
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);