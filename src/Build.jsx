import React from "react";
import { ReactDOM } from "react";
import { Navigate, useNavigate } from "react-router-dom";



function Build(props)
{

  let navigate = useNavigate();

  function showsome(event)
  {
    let id = event.target.textContent;
    localStorage.setItem("bookname",id);
    navigate("/specific");
    console.log(id);
  }

    return (
      <div class="itsrow" >
      <tr class="trr">   
      
       

      <th scope="row" style={{width:"1%"}} id = "id">{props.id}</th>
        <td className="itstd" onClick={showsome}>{props.name}</td>
        <td className="itstd">{props.subject}</td> 
        <td className="itstd">{props.author}</td>
        {/* <td >{props.dop}</td> */}
        <td className="itstd">{props.location}</td>
        <td className="itstd">{props.status}</td>
      </tr>
      </div>
        
    );
}

export default Build;