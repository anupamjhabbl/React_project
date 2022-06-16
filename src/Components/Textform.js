import './Textform.css';
import React, {useState} from 'react';

function Textform(props){

    
    //text="Python"  wrong way to change the value of state
    //setText("Python")   right way to set the value of text/state

    let modevalue="light";
    if  (props.mode){
        modevalue="light"
    }
    else{
        modevalue="dark";
    }

    const stylehr={
        marginTop:"70px"
    }

    

    const Uppercase=()=>{
        
        setText(text.toUpperCase());
        props.showAlert("You are changing into uppercaes","Success");
        
    }

    const Lowercase=()=>{
        setText(text.toLowerCase());
        props.showAlert("You are changing into lowercase","Success");
        
    }
    const copy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Item copied","Success");
        
    }

    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
        //props.showAlert("You are changing input value","Success");
        
    }

    
    

    const [text,setText]= useState('');

    

    

    

    
    return(
        <>
        <div className="textfoe"  style={props.mystyle2}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${modevalue}`}>Textbox</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"  value={text} onChange={handleOnChange}  style={props.mystyle}></textarea>
                
                <button disabled={text.length==0} type="button" className="btn btn-success btnt" id="Uppercase"onClick={Uppercase}>Uppercase</button>
                <button disabled={text.length==0} type="button" className="btn btn-danger btnt" id="Lowercase" onClick={Lowercase}>Lowercase</button>
                <button disabled={text.length==0} type="button" className="btn btn-primary btnt" id="Lowercase" onClick={copy}>Copy</button>

                <div className={`text-${modevalue} mb2`}>
                    <h2>Your Text Summary</h2>
                    <p>{text.split(/\s+/).filter((element)=>{
                        if (element!=" " && element!="\n"){
                            return element;
                        }
                    }).length} words and {text.length} characters time needed {((text.split(/\s+/).filter((element)=>{
                        if (element!=" " && element!="\n"){
                            return element;
                        }
                    }).length)/300)*60} seconds.</p>  {/*text.split(/\s+/) will give give */}
                </div>

                <h2 className={` text-${modevalue}`}>Preview</h2>
                <p className={` text-${modevalue}`}>{text}</p>
                <hr style={stylehr}/>
            </div>
            
            
        </div>
        
        </>
    );
}

export default Textform;


