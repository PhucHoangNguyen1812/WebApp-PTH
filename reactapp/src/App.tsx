import './App.css';
import Header from './app/containers/layout/Header';
import {BrowserRouter as Router,Route} from "react-router-dom";
import WebFont from "webfontloader";
import React, {useEffect} from 'react';
import Footer from './app/containers/layout/Footer';
import Home from "./app/containers/layout/Home";



function App() {

  useEffect(() => {
    WebFont.load({
        google:{
            families: ["Roboto", "Droid Sans", "Chilanka"],
        },
    });
  }, []);

  return( 
    <Router>
      <Header />
        <Route extact path ="/" component= {Home}/>
      <Footer/>
    </Router>
  );
}
export default App;


