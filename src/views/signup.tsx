import { Link } from "react-router-dom";
import Input from "../components/input/input";
import React, { useState } from 'react';
import * as validator from '../util/validator.ts';


interface State  {
    fname: string,
    lname: string,
    username: string,
    email: string,
    password: string,
    errorMsg: string
}
function Signup(this: any): JSX.Element {
    const [state,setState]=useState<State>({
        fname: '',
        lname: '',
        username: "",
        email: "",
        password: "",
        errorMsg: ""
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, type: string): void => {
        switch (type) {
            case 'fname':
                this.setState({ ...this.state, fname: e.target.value })
                break;
            case 'lname':
                this.setState({ ...this.state, lname: e.target.value })
                break;
            case 'username':
                this.setState({ ...this.state, username: e.target.value })
                break;
            case 'email':
                this.setState({ ...this.state, email: e.target.value })
                break;
            case 'password':
                this.setState({ ...this.state, password: e.target.value })
                break;

        }
    }

    const headleSignUp=(): void => {
        let fname=this.state.fname;
        let lname=this.state.lname;
        let username=this.state.username;
        let email = this.state.email;
        let password = this.state.password;

        let isvalidinput = true;
        let errorMsg = '';

        if (!validator.validatefname(fname)) {
            isvalidinput = false;
            errorMsg = "Check First name";
        }
        if (!validator.validatelname(lname)) {
            isvalidinput = false;
            errorMsg = "Check last name";
        }
        if (!validator.validateUsername(username)) {
            isvalidinput = false;
            errorMsg = "Check username";
        }
        if (!validator.validateEmail(email)) {
            isvalidinput = false;
            errorMsg = "Invalid Email";
        }
        if (!validator.validatePassword(password)) {
            isvalidinput = false;
            errorMsg = errorMsg + "Invalid Password";
        }


    }
    return (
        <section className={'flex justify-center items-center p-5'}>
            <div className={'w-fit p-10 border shadow-xl rounded-xl'}>

                <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" title="logo" alt="logo" className={'w-24 m-auto'} />

                <div className={'text-2xl font-bold text-cyan-600 text-center mt-5'}>
                    Sign Up
                </div>

                <div className={'mt-5 min-w-[400px]'}>
                    <div className="flex">
                        <div className={'m-2'}>
                            <Input
                                type={'fname'}
                                name="fname"
                                label="First Name"
                                placeholder="First Name"
                                optional={false}
                                callBack={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, 'fname')}

                            />

                        </div>
                        <div className={'m-2'}>
                            <Input
                                type={'lname'}
                                name="lname"
                                label="Last Name"
                                placeholder="Last Name"
                                optional={false} 
                                callBack={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, 'lname')}
                                />
                        </div>
                    </div>

                    <div className={'m-2'}>
                        <Input
                            type={'username'}
                            name="username"
                            label="username"
                            placeholder="username"
                            optional={false}
                            callBack={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, 'username')}
                            />
                    </div>

                    <div className={'m-2'}>
                        <Input
                            type={'email'}
                            name="email"
                            label="Email"
                            placeholder="Email"
                            optional={false} 
                            callBack={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, 'email')}/>

                    </div>

                    <div className={'m-2'}>
                        <Input
                            type={'password'}
                            name="password"
                            label="Password"
                            placeholder="Password"
                            optional={false} 
                            callBack={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, 'password')}
                            />
                    </div>
                </div>

                <div className={'text-center mt-5'}>
                    <button className={'bg-cyan-600 text-white px-5 py-3 hover:bg-cyan-400'} onClick={this.headleSignUp} >Sign In</button>
                </div>

                {
                        this.state.errorMsg &&
                            <div className="bg-red-200 text-center p-2 m-2">
                                {this.state.errorMsg}
                            </div>
                           
                    }

                <div className={'text-center mt-5'}>
                    Do have an account? <Link to={'/login'}><span className={'text-blue-600 underline'}>Sign in now</span></Link>
                </div>

            </div>
        </section>
    );


}

export default Signup