import React from 'react'
import "./boxStyle.css";
export default function SearchBox({setCompanyName}) {
    return (
        <React.Fragment>
            <div className="search-box">
                <input type="search" placeholder="Type the name of the company" onChange={(e)=>{setCompanyName(e.target.value)}}/>
                <i className="fa fa-search"></i>
            </div>
        </React.Fragment>
        )       
}
