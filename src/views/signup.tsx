import React from "react";
import { Link } from "react-router-dom";
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
                                <label htmlFor="fname" className={'block'}>First Name<span className="text-red-600">*</span></label>
                                <input type="test" id="fname" placeholder="First Name" className={'block border border-cyan-300 outline-none focus:border-green-600 h-10 w-full'} />
                            </div>
                            <div className={'m-2'}>
                                <label htmlFor="lname" className={'block'}>Last Name<span className="text-red-600">*</span></label>
                                <input type="test" id="lname" placeholder="Last Name" className={'block border border-cyan-300 outline-none focus:border-green-600 h-10 w-full'} />
                            </div>
                        </div>

                        <div className={'m-2'}>
                            <label htmlFor="username" className={'block'}>Username<span className="text-red-600">*</span></label>
                            <input type="test" id="username" placeholder="Username" className={'block border border-cyan-300 outline-none focus:border-green-600 h-10 w-full'} />
                        </div>

                        <div className={'m-2'}>
                            <label htmlFor="email" className={'block'}>Email<span className="text-red-600">*</span></label>
                            <input type="email" id="email" placeholder="Email" className={'block border border-cyan-300 outline-none focus:border-green-600 h-10 w-full'} />
                        </div>

                        <div className={'m-2'}>
                            <label htmlFor="password" className={'block'}>Password<span className="text-red-600">*</span></label>
                            <input type="password" id="password" placeholder="Password" className={'block border border-cyan-300 outline-none focus:border-green-600 h-10  w-full'} />
                        </div>
                    </div>

                    <div className={'text-center mt-5'}>
                        <button className={'bg-cyan-600 text-white px-5 py-3 hover:bg-cyan-400'}>Sign In</button>
                    </div>

                    <div className={'text-center mt-5'}>
                        Do have an account? <Link to={'/signin'}><span className={'text-blue-600 underline'}>Sign in now</span></Link>
                    </div>

                </div>
            </section>
        );
    }


}

export default Signup