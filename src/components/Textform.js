import React, { useState } from 'react';

export default function Textform(props) {
    const [Text ,settext] =useState('Entre the Text To convert')

    const handelupclick= ()=>{
        // console.log("On Upper btn Click"+ Text);
        let newText = Text.toUpperCase();
        settext(newText);
    }

    const handelwpclick= ()=>{
        // console.log("On Upper btn Click"+ Text);
        let newText = Text.toLowerCase();
        settext(newText);
    }

    const handelclick= (event)=>{
        // console.log("On Upper btn Click f")
        settext(event.target.value);
    }

  return (
    <>
        <div className="container">
            <h1 className="my-3" >
                {props.heading}
            </h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handelclick} id="mybox" value={Text} rows="8"> </textarea>
        </div>
        <button className="btn btn-primary mx-2 " onClick={handelupclick} >Upper Case </button>
        <button className="btn btn-primary mx-2 " onClick={handelwpclick} >Lower Case </button>
        </div>
        <div className="container my-3">
            <h1>Summary Of Text </h1>
            <p>Your Text Conatin {Text.split(" ").length} Words and {Text.length} char</p>
            <p>{0.08*Text.split(" ").length} min To read</p>
            <h2>Preview</h2>
            <p>{Text}</p>
        </div>
        

    </>
  )
}
