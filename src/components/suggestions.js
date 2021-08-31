import React, { Component } from 'react'
import '../App.css';


class Suggestions extends Component{
     render(){
         return(
             <div className='suggestions'>
                <h1>Suggestions</h1>
                <p>This section will tell you about the persons and the topics you should be aware of.</p>
                <input type="text" placeholder="type your query here..."></input>
                <form>
                    <input type="radio" placeholder="asrhan" value="shra"></input>
                    <input type="range" min="0"></input>
                    <input type="checkbox" name = "hello"></input>
                    <select> choose
                        <option>ashran</option>
                        <option>hashir</option>
                        <option>furquan</option>
                    </select>
                </form>
                <input type= "file"></input>
             </div>
         )
     }
 }

export default Suggestions