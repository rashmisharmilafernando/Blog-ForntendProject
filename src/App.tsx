import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from './views/home.tsx';
import Login from './views/login.tsx';
import Signup from './views/signup.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// interface Props{

// }

// interface State{
//   count:number
// }


class App extends React.Component<Props, any>{


  // state = {
  //   count: 0
  // }




  // up = () => {
  //   this.setState({count: this.state.count + 1})
  // }
  render() {
    return (
      <div>
      
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
        
        {/* <div className={'text-center m-5'}>
          <div className={'text-2xl font-bold'}>{this.state.count}</div>
          <br/>
          <button className={'bg-green-600 text-white p-5'} onClick={this.up}>Click</button>
        </div>

        {
          this.state.count> 0 ? null :<Card title={"hi"} content={"vbcvhcbvcv"}/>
        } */}
       
        {/* <Home/> */}

      </div>
    );
  }

}

export default App
