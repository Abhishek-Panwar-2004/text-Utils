import React, { useState } from 'react'

export default function Form(props) {
    const upBtn = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const lowBtn = () => {
        let newText2 = text.toLowerCase()
        setText(newText2)
    }

    const clearBtn = () => {
        let newText3 = ""
        setText(newText3)
    }

    const copybtn=()=>{
        let box=document.getElementById("box")
        navigator.clipboard.writeText(box.value)
    }

    const change = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.mode==="light"? "#212529":"white"}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode==="light"? "black":"white"} bg-${props.mode==="light"? "white":"black"}`} value={text} onChange={change} id="box" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={upBtn}>Convert to uppercase</button>
                <button className='btn btn-primary mx-4' onClick={lowBtn}>Convert to lowercase</button>
                <button className='btn btn-danger mx-4' onClick={clearBtn}>Clear</button>
                <button className='btn btn-danger mx-4' onClick={copybtn}>Copy</button>
            </div>
            <div className="container my-3">
                <p className={`text-${props.mode==="light"? "#212529":"white"}`}>{text.split(" ").length} words, {text.length} characters</p>
                <p className={`text-${props.mode==="light"? "#212529":"white"}`}>{0.008 * text.split(" ").length} minutes to read</p>
                <h2 className={`text-${props.mode==="light"? "black":"white"}`}>Preview:</h2>
                <p className={`text-${props.mode==="light"? "black":"white"}`}>{text}</p>
            </div>
        </>
    )
}
