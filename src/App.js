import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import ProductDetailPage from './components/ProductDetailPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    {/* <Router>
      <Route path = '../components/ProductDetailPage' component= {ProductDetailPage}/>   */}
      <HomePage/>
      <ProductDetailPage />
      <Footer/>
    {/* </Router> */}
    </div>
  );
}

export default App;
