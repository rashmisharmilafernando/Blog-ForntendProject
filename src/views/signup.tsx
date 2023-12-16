import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/input/input";

class Signup extends React.Component<any, any> {
    render(): React.ReactNode {
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
                                <Input type={'fname'} name="fname" label="First Name" placeholder="First Name" optional={false}/>

                            </div>
                            <div className={'m-2'}>
                               <Input type={'lname'} name="lname" label="Last Name" placeholder="Last Name" optional={false}/>
                            </div>
                        </div>

                        <div className={'m-2'}>
                            <Input type={'username'} name="username" label="username" placeholder="username" optional={false}/>
                        </div>

                        <div className={'m-2'}>
                        <Input type={'email'} name="email" label="Email" placeholder="Enter your email" optional={false}/>
                       
                        </div>

                        <div className={'m-2'}>
                        <Input type={'password'} name="password" label="Password" placeholder="Enter your password" optional={false}/>
                        </div>
                    </div>

                    <div className={'text-center mt-5'}>
                        <button className={'bg-cyan-600 text-white px-5 py-3 hover:bg-cyan-400'}>Sign In</button>
                    </div>

                    <div className={'text-center mt-5'}>
                        Do have an account? <Link to={'/login'}><span className={'text-blue-600 underline'}>Sign in now</span></Link>
                    </div>

                </div>
            </section>
        );
    }


}

export default Signup