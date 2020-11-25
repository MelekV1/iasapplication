import React from 'react'
import CompanyCard from './CompanyCard'
/*import NotFound from '../Search/NotFound'

  /* {(data.length===0)?<NotFound/>:
        (keyword==='')?
        data.map( (el,i) => <MovieCard key={i} movie={el}/> ) :(
          data.filter(el=> el.title.toLowerCase().includes(keyword.toLowerCase().trim())).length===0 ?
            <NotFound/>:
            data.filter( (el)=>  el.title.toLowerCase().includes(keyword.toLowerCase().trim()))
            .map( (el,i) =>
                            <MovieCard key={i} movie={el}/>

            ) ) }*/

import "./StyleCompanies.css"

export default function CompanyList({data}){
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
        {data.map( (el,i)=><CompanyCard key={i} Company={el}/> )};
      </div>
    </div>
  )
}
