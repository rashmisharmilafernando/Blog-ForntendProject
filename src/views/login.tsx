import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/input/input";


class Login extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <section className={'flex justify-center items-center p-5'}>
                <div className={'w-fit p-24 border shadow-xl rounded-xl'}>

                    <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" title="logo" alt="logo" className={'w-24 m-auto'} />

                    <div className={'text-2xl font-bold text-cyan-600 text-center mt-5'}>
                        Sign In
                    </div>

                    <div className={'mt-5 min-w-[300px]'}>
                        <Input type={'email'} name="email" label="Email" placeholder="Enter your email" optional={false}/>
                        <Input type={'password'} name="password" label="Password" placeholder="Enter your password" optional={false}/>
                    </div>

                    <div className={'text-center mt-5'}>
                        <button className={'mainbtn'}><b>Sign In</b></button>
                    </div>
                    <div className={'text-center mt-5'}>
                        Do not have an account? <Link to={'/signup'}><span className={'text-blue-600 underline'}>Sign up now</span></Link>
                    </div>
                </div>
            </section>
        );
    }


}

export default Login