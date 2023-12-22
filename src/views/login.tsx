import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/input/input";
import * as validator from '../util/validator.ts';

interface State {
    email: string,
    password: string,
    errorMsg: string
}

class Login extends React.Component<any, State> {

    state = {
        email: '',
        password:'',
        errorMsg:''
    }

    handleInput = (e: { target: { value: any; }; }, type: any): void => {
        switch (type) {
            case 'email':
                this.setState({ ...this.state, email: e.target.value })
                break;
            case 'password':
                this.setState({ ...this.state, password: e.target.value })
                break;
        }
    }

    handleLogin = (): void => {
        let email = this.state.email;
        let password = this.state.password;

        let isvalidinput = true;
        let errorMsg = '';


        if (!validator.validateEmail(email)) {
            isvalidinput = false;
            errorMsg = "Invalid Email";
        }
        if (!validator.validatePassword(password)) {
            isvalidinput = false;
            errorMsg = errorMsg + "Invalid Password";
        }

        if (isvalidinput) {

        } else {
            this.setState({ ...this.state, errorMsg: errorMsg })

        }



    }

    render(): React.ReactNode {
        return (
            <section className={'flex justify-center items-center p-5'}>
                <div className={'w-fit p-24 border shadow-xl rounded-xl'}>

                    <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" title="logo" alt="logo" className={'w-24 m-auto'} />

                    <div className={'text-2xl font-bold text-cyan-600 text-center mt-5'}>
                        Sign In
                    </div>

                    <div className={'mt-5 min-w-[300px]'}>
                        <Input 
                        type={'email'} 
                        name="email" 
                        label="Email" 
                        placeholder="Enter your email" 
                        optional={false} 
                        callBack={this.handleInput} 
                        />

                        <Input 
                        type={'password'} 
                        name="password" 
                        label="Password" 
                        placeholder="Enter your password" 
                        optional={false} 
                        callBack={this.handleInput} 
                        />
                    </div>

                    <div className={'text-center mt-5'}>
                        <button className={'bg-cyan-600 text-white px-5 py-3 hover:bg-cyan-400'} onClick={this.handleLogin}><b>Sign In</b></button>
                    </div>
                    {
                        this.state.errorMsg &&
                            <div className="bg-red-200 text-center p-2 m-2">
                                {this.state.errorMsg}
                            </div>
                           
                    }

                    <div className={'text-center mt-5'}>
                        Do not have an account? <Link to={'/signup'}><span className={'text-blue-600 underline'}>Sign up now</span></Link>
                    </div>
                </div>
            </section>
        );
    }


}

export default Login