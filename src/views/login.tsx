import React from "react";
import { Link } from "react-router-dom";
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
                        <div className={'m-2'}>
                            <label htmlFor="email" className={'block'}>Email<span className="text-red-600">*</span></label>
                            <input type="email" id="email" placeholder="Email" className={'block border border-cyan-300 outline-none focus:border-cyan-600 h-10 w-full'} />
                        </div>

                        <div className={'m-2'}>
                            <label htmlFor="password" className={'block'}>Password<span className="text-red-600">*</span></label>
                            <input type="password" id="password" placeholder="Password" className={'block border border-cyan-300 outline-none focus:border-cyan-600 h-10  w-full'} />
                        </div>
                    </div>

                    <div className={'text-center mt-5'}>
                        <button className={'bg-cyan-600 text-white px-5 py-3 hover:bg-cyan-400'}><b>Sign In</b></button>
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