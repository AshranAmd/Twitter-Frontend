import React from 'react'
import Navigation from './navigation'
import { useEffect } from 'react'
import Suggestions from './suggestions'
import { useState } from 'react'

function Setting(){

const [name , setName] = useState('')
const [tweet , setTweet] = useState('')


// form.onsubmit = async (e)=>{
//     e.preventDefault();

//     var url = "http://localhost:8080/save";

//         fetch(url, {method:'POST',
//         body: new FormData(form)})
//     }
    

function handleusername(event){
    setTweet(event.target.value)
}
function handletype(event){
    setName(event.target.value)
}
function handleage(event){
    setName(event.target.value)
}
function handleplace(event){
    setName(event.target.value)
}

    return(
        <div className= "settings">
            <div className="details">
            
            <p>Tell us about Yourself .
                <br/>
                Complete your Profile
            </p>
            
            <form id="form" action="http://localhost:8080/user" method ="post" >
                
                <input type="text" name="username"
                 placeholder ="UserName..." onChange={handleusername}>
                </input>
                
                <br/>
                
                <input type="text" name = "place" placeholder="Place..."
                onChange = {handleplace}>
                </input>

                <br/>

                <input type="text" name = "age" placeholder="Age..."
                onChange = {handleage}>
                </input>

                <br/>

                <input type="text" name = "type" placeholder="Profile Type..."
                onChange = {handletype}>
                </input>
                
                <br/>
                
                <input type="submit" ></input>
                
                <br/>
                
                Maximum size - 140 characters
            </form>
            </div>
        </div>
    )
}

export default Setting ;