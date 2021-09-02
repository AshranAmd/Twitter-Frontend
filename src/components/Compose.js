import React from 'react'
import Navigation from './navigation'
import { useEffect } from 'react'
import Suggestions from './suggestions'
import { useState } from 'react'

function Compose(){

const [name , setName] = useState('')
const [tweet , setTweet] = useState('')


// form.onsubmit = async (e)=>{
//     e.preventDefault();

//     var url = "http://localhost:8080/save";

//         fetch(url, {method:'POST',
//         body: new FormData(form)})
//     }
    

function handletweet(event){
    setTweet(event.target.value)
}
function handlename(event){
    setName(event.target.value)
}

    return(
        <div className= "compose">
            <Navigation/>
            <div className="compose-tweet">
            
            <p>Compose your Tweet</p>
            
            <form id="form" action="http://localhost:8080/save" method ="post" >
                
                <input type="text" name="twitter"
                 placeholder ="Your Name" onChange={handlename}>
                </input>
                
                <br/>
                
                <input type="text" name = "tweetContent" placeholder="Tweet here..."
                onChange = {handletweet}>
                </input>
                
                <br/>
                
                <input type="submit" ></input>
                
                <br/>
                
                Maximum size - 140 characters
            </form>
            </div>
            <Suggestions/>
        </div>
    )
}

export default Compose