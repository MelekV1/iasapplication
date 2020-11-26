import React from 'react';
import './App.css';
import CompanyList from './Components/CompaniesComps/CompaniesList'
import CompanyData from './Components/CompaniesComps/CompaniesData';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import About from "./Components/Home/About"

function App() {

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/iasapplication/Application">
              <Header backButton="/iasapplication/Home"/>    
              <CompanyList data={CompanyData}/>
              <Footer/>
          </Route>
          <Route path="/iasapplication/Home">
              <Header/>    
              <Home/>
              <Footer/>
          </Route>
          <Route path="/iasapplication/About">
              <Header/>    
              <About/>
              <Footer/>
          </Route>
          <Route path="/iasapplication/Error">
            <Header backButton="/iasapplication/Home"/>
            <Error/>
            <Footer/>
          </Route>
          <Redirect to="/iasapplication/Error"/>
        </Switch>
      </Router>  
    </React.Fragment>
  );
}

export default App;