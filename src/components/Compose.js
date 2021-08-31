import React from 'react'
import Notification from './navigation'
import { useEffect } from 'react'
import Suggestions from './suggestions'
import { useState } from 'react'

function Compose(){

const [name , setName] = useState('')
const [tweet , setTweet] = useState('')

useEffect(()=>{
   
    
    var name1 = name;
    var tweet1 = tweet;

    })

function submit(){

    var url = "http://localhost:8080/save";

        fetch(url, {method:'POST',
        body:JSON.stringify({name,tweet})
                     })
    }


function handletweet(event){
    setTweet(event.target.value)
}
function handlename(event){
    setName(event.target.value)
}

    return(
        <div className= "compose">
            <Notification/>
            <div className="compose-tweet">
            <p>Compose your Tweet</p>
            <form action="http://localhost:8080/save" method ="post">
                <input type="text" className="twitter"
                 placeholder ="Your Name" onChange={handlename}></input><br/>
                <textarea name = "tweet-content" placeholder="Tweet here..."
                onChange = {handletweet}></textarea><br/>
                <input type="submit" onClick={submit}></input><br/>
                Maximum size - 140 characters
            </form>
            </div>
            <Suggestions/>
        </div>
    )
}

export default Compose