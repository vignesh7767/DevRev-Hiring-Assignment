import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import Formatb from "./Formatb";
import books from "./books";

const book = books;





function Filter()
{

    const [modifbooks,setbooks]=useState(book);

    const [count,setcount] = useState(book.length);

    function senddata(){

        var temp = [];
    
        var name = document.getElementById("name").value;
        var Subject = document.getElementById("subject").value;
        var Author = document.getElementById("author").value;
        var Location = document.getElementById("location").value;
        var status = document.getElementById("status").value;
    
         temp = book.filter((item) => {
            return item.Title.toLowerCase().includes(name.toLowerCase()) || (name == "");
         });

         temp = temp.filter((item) => {
            return item.Subject.toLowerCase().includes(Subject.toLowerCase()) || (Subject == "");
         });
         temp = temp.filter((item) => {
            return item.Author.toLowerCase().includes(Author.toLowerCase()) || (Author == "");
         });
         temp = temp.filter((item) => {
            return item.Location.toLowerCase().includes(Location.toLowerCase()) || (Location == "");
         });
         temp = temp.filter((item) => {
            return item.status.toLowerCase().includes(status.toLowerCase()) || (status == "");
         });

         setcount(temp.length);
        

         setbooks(temp);
    
    }

    return (<>

        <div className="heading" style={{"color":"bisque"}}><h1 style={{"color":"bisque"}} >Library Management System</h1></div>
        <div className="nav"> 

        

          <p className="filt">Filter by:</p>
          <p className="filt"> Name:<input type = "text" id = "name" onChange={senddata}></input></p>
          <p className="filt">Subject:<input type = "text" id = "subject" onChange={senddata}></input></p>
          <p className="filt"> Author:<input type = "text" id = "author" onChange={senddata}></input></p>
          <p className="filt">Location: <input type = "text" id = "location" onChange={senddata}></input></p>
          <p className="filt"> Status: <input type = "text" id = "status" onChange={senddata}></input></p>
          
          
          <Formatb data = {modifbooks} />
          
         
          </div>
          <div className="count">
          No of Books Count: <p className="filt">{count}</p>
          </div>
          </>
    );
}

export default Filter;