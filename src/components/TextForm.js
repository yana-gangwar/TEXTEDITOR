import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState(" ");
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("converted to upper case","success")};
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("converted to lower case","success")
    };
    const handleClear = () => {

        let newText = ""
        setText(newText);
        props.showalert("Cleared","success")
    };
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("Started Speaking","success")
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);

    };
    const handleinverseclick = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newtext += text[i];
        }
        setText(newtext);
        props.showalert("Inversed","success")
    };



    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#2D5987' }}
            >
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label" >
                        {props.heading}
                    </label>
                    <textarea
                        value={text}
                        className="form-control"
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={{backgroundcolour: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#2D5987' }}
                    ></textarea>
                </div>
                <div className="btn btn-primary  mx-1" onClick={handleUpClick}>
                    Convert To UpperCase
                </div>
                <div className="btn btn-primary mx-1" onClick={handleLoClick}>
                    Convert To LowerCase
                </div>
                <div className="btn btn-primary mx-1" onClick={handleClear}>
                    Clear
                </div>
                <div className="btn btn-primary mx-1" onClick={speak}>
                    Speak
                </div>
                <div className="btn btn-primary mx-1" onClick={handleinverseclick}>
                    Inverse Click
                </div>






                <div className="container my-3" style={{backgroundcolour: props.mode === 'dark' ? 'Grey' : 'white', color: props.mode === 'dark' ? 'white' : '#2D5987' }}
                >
                    <h1>Your Text Summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p> {0.008 * text.split(" ").length} Minutes read</p>
                    <h2>Preview</h2>
                        <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
                    </div>
                </div>
            </>
            );
}
