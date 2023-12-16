import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from './views/home.tsx';
import Login from './views/login.tsx';
import Signup from './views/signup.tsx';
import Editor from './views/editor.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component<Props, any>{

  render() {
    return (
      <div>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/editor" element={<Editor/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

}

export default App
