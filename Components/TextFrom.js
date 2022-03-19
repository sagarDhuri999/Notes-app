import React, { useState } from 'react'



export default function TextFrom(props) {
    const handleUp = () => {
        setText('u have click :' + text);

        let nt = text.toUpperCase();
        setText(nt);
    }
    const handleChange = (e) => {
        // console.log('On change');
        setText(e.target.value)

    }
    const onCopy = () => { navigator.clipboard.writeText(text) }

    const [text, setText] = useState('');
    return (
        <>
            <h1>{props.heading}  </h1>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <textarea className="form-control" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                    value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUp}  >Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={onCopy}  >Copy</button>
            <div className="cont my-4">
                <h1>Your text  summary</h1>
                <p>{text.split(/\s+/).filter((w) => { return w.length !== 0 }).length} words & {text.length} chart</p>
                <p> Time take to read above paragraph : {0.008 * text.split(" ").filter((w) => { return w.length !== 0 }).length}</p>
                <h2>Preview content :</h2>
                <p>{text.length > 0 ? text : "Type some thing to see"}</p>

            </div>
        </>

    )
}
