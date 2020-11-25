import React from 'react';
import "./header.css";
import {Link ,useHistory} from "react-router-dom";
import Button from "../Utils/Button";
const Header=({backButton})=>{
    const history = useHistory();
    return(
        <React.Fragment>
            <div className="contentHead">
                <Link to="/">
                    <Button text="About the WebApp"></Button>
                </Link>
                <Link to="/iasapplication/Application">
                    <Button text="Companies"></Button>
                </Link>
                <Link to="/Error">
                    <Button text="Error"></Button>
                </Link>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg" alt="TN" height="70px" />
            </div>
        </React.Fragment>
    )
  }
  export default Header
