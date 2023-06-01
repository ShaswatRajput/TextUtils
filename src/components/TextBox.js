import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Counters from './Counters';

export default function TextBox(){
  const [text,setText]=useState("");
  const [newText,setNewText]=useState(text);
  const clearAll= ()=>{
    setText("");
    setNewText("")
  }
  const handleOnChange= (ece)=>{
    setText(ece.target.value)
  }
  
 const uprcase= ()=>{
   let newTextx= text.toUpperCase();
     
    setNewText(newTextx);
    
  }
  const lwrcase= ()=>{
    let newTextx= text.toLowerCase();
      
     setNewText(newTextx);
     
     
   }
   
    return(
        
        <>
        <form >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label my-1">Input Text</label>
    <div id="emailHelp" className="form-text my-2">Enter Your Text here</div>
    <textarea type="text" value={text} onChange={handleOnChange} rows="8" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
    
  
  <button type="button" onClick={uprcase} className="btn btn-primary mx-3 my-2">Convert to Upper Case</button>
  <button type="button" onClick={lwrcase} className="btn btn-primary my-2">Convert to Lower Case</button>
  <button type="button" onClick={clearAll} className="btn btn-danger my-2 mx-3">Clear All</button>
  
  <br/>
  <label htmlFor='exampleInputEmail2'className="my-2">Output Text</label>
  <textarea type="text" readOnly value={newText} rows="8" className="form-control my-2" id="exampleInputEmail2" />
  </div>

  </form>
  <Counters text={text}/>
  
  </>

    )
}