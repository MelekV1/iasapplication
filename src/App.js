import React ,{useState} from 'react';
import './App.css';
import CompanyList from './Componenets/CompaniesComps/CompaniesList'
import CompanyData from './Componenets/CompaniesComps/CompaniesData';

function App() {

  return (
    <React.Fragment>
      <div className="App">
      <header className="App-header">
        <p>IAS Application</p>
      </header>
    </div>
      <CompanyList data={CompanyData}/>
    </React.Fragment>
  );
}

export default App;