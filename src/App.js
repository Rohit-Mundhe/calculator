import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
    const clear =()=>{
        setResult("");
    }
    const handleClick = (e) =>{
        setResult(result.concat(e.target.name));
    }
    const backspace = () =>{
        setResult(result.slice(0, result.length -1));
    }
    const calculate = ()=>{
        try{
            setResult(eval(result).toString());
        }
        catch(err){
            setResult("ERROR");
        }
    }
    const [result, setResult] = useState("");
    return (
        <div>
            <div className= "container">
                <form>
                    <input type = "text" id ="display" value = {result}></input>
                </form>
                <div className = "keypad">
                    <button className="highlight" onClick = {clear} id = 'clear'>Clear</button>
                    <button className="highlight" onClick = {backspace} id = 'backspace'>C</button>
                    <button className="highlight" className="highlight" name = "/" onClick = {handleClick}>&divide;</button>
                    <button className="highlight" name = "*" onClick = {handleClick} > &times; </button>
                    <button name = "7" onClick = {handleClick}>7</button>
                    <button name = "8" onClick = {handleClick}>8</button>
                    <button name = "9" onClick = {handleClick}>9</button>
                    <button className="highlight" name = "+" onClick = {handleClick}>+</button>
                    <button name = "4" onClick = {handleClick}>4</button>
                    <button name = "5" onClick = {handleClick}>5</button>
                    <button name = "6" onClick = {handleClick}>6</button>
                    <button className="highlight" name = "-" onClick = {handleClick}>-</button>
                    <button name = "3" onClick = {handleClick}>3</button>
                    <button name = "2" onClick = {handleClick}>2</button>
                    <button name = "1" onClick = {handleClick}>1</button>
                    <button className="highlight" name = "=" id = "result" onClick = {calculate}>=</button>
                    <button name = "." onClick = {handleClick}>.</button>
                    <button name = "0" onClick = {handleClick}>0</button>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default App
