import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import ProductDetailPage from './components/ProductDetailPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Route path = '/productdetail' exact component= {ProductDetailPage}/>  
      <Route path = '/' exact component= {HomePage}/>  
      <Route path = '/' component= {Footer}/>  
      {/* <HomePage/>
       <ProductDetailPage /> 
      <Footer/> */}
    </div>
    </Router>
  );
}

export default App;
