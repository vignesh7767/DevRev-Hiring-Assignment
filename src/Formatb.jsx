import React from "react";
import { ReactDOM } from "react";
import Build from "./Build";

function publish(book)
{
     return <Build 
     id = {book.id}
     name = {book.Title}
        subject = {book.Subject}
        author = {book.Author}
        // dop = {book.publish}
        location = {book.Location}
        status = {book.status}
        />;
}

function Formatb(props)
{
    return (

        <table class="table">
  <thead>
    <tr>
        <th scope="col"  style={{width:"0.1%"}}>Id</th>
      <th scope="col" style={{border:"none"}}>Title</th>
      <th scope="col" style={{border:"none"}}>Subject</th>
      <th scope="col" style={{border:"none"}}>Author</th>
      {/* <th scope="col">Publish</th> */}
      <th scope="col" style={{border:"none"}}>Location</th>
      <th scope="col" style={{border:"none"}}>Status</th>
    </tr>
  </thead>
  <tbody>

 
 
  {props.data.map(publish)}
        


  </tbody>
  </table>
      
    );
}

export default Formatb;