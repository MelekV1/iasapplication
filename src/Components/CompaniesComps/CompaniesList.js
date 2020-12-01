import React from 'react'
import CompanyCard from './CompanyCard'
import NotFound from './NotFound'
import "./StyleCompanies.css"

export default function CompanyList({companyNamekey,data}){
  return(
    <div className="CardsWrapper">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {data
      .filter(
        (el) =>
          el.Name.toLowerCase().includes(companyNamekey.toLowerCase().trim())
      )
      .map((el, i) => (
        <CompanyCard key={i} Company={el} />
      ))}
      </div>
    </div>
  )
}
