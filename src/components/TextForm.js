import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter more text here');  
    // text = "new text"  // wrong way to channge the state, use a function.
  return (
<>
<div>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" aria-label="Textarea" onChange={handleOnChange} id='myBox' rows="8" value={text}></textarea>
</div>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</>
  )
}
