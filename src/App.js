import React ,{useState} from 'react';
import './App.css';
import CompanyList from './Components/CompaniesComps/CompaniesList'
import CompanyData from './Components/CompaniesComps/CompaniesData';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import About from "./Components/Home/About"
import SearchBox from "./Components/Utils/SearchBox"
import DropSelect from "./Components/Utils/DopSelect"
import ParticlesBg from 'particles-bg'

function App() {
  const [companyName,setCompanyName]=useState('');
  const [Companies,setCompanies]=useState(CompanyData);
  const [field, setField] = React.useState('');

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/iasapplication/Application">
              <Header backButton="/iasapplication/Home"/>
              <SearchBox 
                setCompanyName={setCompanyName}/>
              
              <CompanyList 
                companyNamekey={companyName}
                data={Companies}/>
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
      <ParticlesBg color="#259e57" num={200} type="cobweb" bg={true} />

    </React.Fragment>
  );
}

export default App;
