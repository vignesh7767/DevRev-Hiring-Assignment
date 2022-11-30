import React from "react";
import { ReactDOM } from "react";
import Dbook from "./display";

function Thebook()
{
    let name = localStorage.getItem("bookname");
    let book = []
    Dbook.map(x =>
    {
        if(x.Title == name)
        {
            book.push(x);
        }
    });
     return <>
     <div className="card">
     <h1 >{book[0].Title}</h1>
     <div class = "itsimage">
     <img  src ={book[0].img}></img>
     </div>
     <div class = "data">
     <b><i>Author</i></b> : <p>{book[0].Author}</p>
     <b><i>Subject</i></b> : <p>{book[0].Subject}</p>
     <b><i>Description</i></b> : <p>{book[0].Description}</p>
     <b><i>Published on</i></b> : <p>{book[0].publish.toString()}</p>
     <b><i>Located in library at</i></b> :<p>{book[0].Location}</p>
     <b><i>Status</i></b>  : <p>{book[0].status}</p>
     </div>
     </div>
     </>;
}

export default Thebook;