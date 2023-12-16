import React from "react";

class Signup extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <section className={'flex justify-center items-center p-5'}>
            <div className={'w-fit p-24 border shadow-xl rounded-xl'}>
    
              <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" title="logo" alt="logo" className={'w-24 m-auto'}/>
    
              <div className={'text-2xl font-bold text-green-600 text-center mt-5'}>
                Sign Up
              </div>
    
              <div className={'mt-5 min-w-[300px]'}>
                <div className={'m-2'}>
                  <label htmlFor="email" className={'block'}>Email<span className="text-red-600">*</span></label>
                  <input type="email" id="email" placeholder="Email" className={'block border border-green-300 outline-none focus:border-green-600 h-10 w-full'}/>
                </div>
    
                <div className={'m-2'}>
                  <label htmlFor="password" className={'block'}>Password<span className="text-red-600">*</span></label>
                  <input type="password" id="password" placeholder="Password" className={'block border border-green-300 outline-none focus:border-green-600 h-10  w-full'}/>
                </div>
              </div>
    
              <div className={'text-center mt-5'}>
                <button className={'bg-green-600 text-white px-5 py-3 hover:bg-green-400'}>Sign In</button>
              </div>
    
            </div>
          </section>
        );
    }


}

export default Signup