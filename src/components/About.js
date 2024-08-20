import React, {useState} from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'#1d3557',
        backgroundColor: props.mode === 'dark'?'#1d3557':'white',
        boredr: '1px solid',
        borderColor: props.mode === 'dark'?'white':'#1d3557'
    }

  return (
    <>
    <div className='container'>
        <h2 className  = "my-3"  style={{color: props.mode === 'dark'?'white':'#1d3557'}}>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze your text</strong> 
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            TextUtils give you a way to Analyze your text quickly and efficiently including features like word count and character count.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong> 
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browser such as Google Chrome, Firefox, Brave, Internet Explorer, Safari, Opera, etc. It suits to count character in facebook, blog, books, excel documents, pdf documents, essays, etc.
        </div>
        </div>
    </div>
    </div> 
    </div>
    </>
  )
}

