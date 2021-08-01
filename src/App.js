import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
    const [result, setResult] = useState("hello")
    return (
        <div>
            <div className= "container">
                <form>
                    <input type = "text" value = " result "></input>
                </form>
                <div className = "keypad">
                    <button>Clear</button>
                    <button>C</button>
                    <button>&divide</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>3</button>
                    <button>2</button>
                    <button>1</button>
                    <button>+</button>
                    <button>0</button>
                    <button>-</button>
                    <button>=</button>
                </div>
            </div>
        </div>
    )
}

export default App
