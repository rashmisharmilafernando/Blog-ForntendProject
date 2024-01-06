import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from "./../components/input/input";
import * as validator from '../util/validator';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

interface State {
    email: string,
    password: string,
    errorMsg: string
}

function Login(): JSX.Element {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleInput = (e: { target: { value: React.SetStateAction<string>; }; }, type: any): void => {
        switch (type) {
            case 'email':
                // this.setState({...this.state, email: e.target.value})
                setEmail(e.target.value);
                break;
            case 'password':
                // this.setState({...this.state, password: e.target.value})
                setPassword(e.target.value)
                break;
        }
    }

    const handleLogin = (): void => {
        let isValidInputs = true;
        let errorMsg = "";

        if (!validator.validateEmail(email)) {
            // error
            isValidInputs = false;
            errorMsg = "> Invalid Email";
        }

        console.log(password)

        if (!validator.validatePassword(password)) {
            // error
            isValidInputs = false;
            errorMsg = errorMsg + " > Invalid Password";
        }

        if (isValidInputs) {
            // send data to backend
            const headers = { 'Content-Type': 'application/json' }
            let body = {
                email: email,
                password: password
            }
            axios.post("http://localhost:8095/user/auth", body, { headers: headers })
                .then(r => {
                    Cookies.set("token",r.data.data.accessToken)
                    navigate("/home");
                })
                .catch(e => {
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Something went wrong"
                    });
                })

        } else {
            // this.setState({...this.state, errorMsg: errorMsg});
            setErrorMsg(errorMsg);
        }

    }


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
                        callBack={handleInput}
                        value='email'
                    />

                    <Input
                        type={'password'}
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        optional={false}
                        callBack={handleInput}
                        value='password'
                    />
                </div>

                <div className={'text-center mt-5'}>
                    <button className={'bg-cyan-600 text-white px-5 py-3 hover:bg-cyan-400'} onClick={handleLogin}><b>Sign In</b></button>
                </div>
                {
                    errorMsg &&
                    <div className={'bg-red-100 text-center p-2 m-2'}>
                        {errorMsg}
                    </div>
                }

                <div className={'text-center mt-5'}>
                    Do not have an account? <Link to={'/signup'}><span className={'text-blue-600 underline'}>Sign up now</span></Link>
                </div>
            </div>
        </section>
    );
}



export default Login