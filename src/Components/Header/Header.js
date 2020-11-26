import React from 'react';
import "./header.css";
import {Link ,useHistory} from "react-router-dom";
import Button from "../Utils/Button";
import FastRewindIcon from '@material-ui/icons/FastRewind';
import IconButton from '@material-ui/core/IconButton';


const Header=({backButton})=>{
    const history = useHistory();
    return(
        <React.Fragment>
            <div className="contentHead">
                {backButton &&(
                <IconButton onClick={()=>history.replace(backButton)}>
                    <FastRewindIcon fontSize="large"  />
                </IconButton>
                ) }
                <Link to="/iasapplication/About">
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
