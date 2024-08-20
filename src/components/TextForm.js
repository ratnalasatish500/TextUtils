import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = () => {
      console.log("Lowercase was clicked " + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase", "success");
  }
   const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent == "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    const handleCopy = () => {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied to clipboard", "success");
    }
    //uses Regex
    const handleExtraSpaces = () => {                            
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))   
    }
    const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
}
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');  
    // text = "new text"  // wrong way to channge the state, use a function.
  return (
<>
<div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h2 className='mb-2'>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" aria-label="Textarea" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#1d3557':'white', color: props.mode === 'dark'?'white':'#1d3557' }} id="myBox" rows="8" value={text}></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
<button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-2 my-2" id="toggle">Speak</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to Clipboard</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
</div>
<div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
  <h3>Text summary</h3>
  <p>Word count : {text.split(" ").filter((element)=>{return element.length!==0}).length} | Character count : {text.length}</p>
</div>
</>
  )
}
