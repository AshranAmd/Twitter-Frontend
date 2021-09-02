import React from 'react'
import Navigation from './navigation'
import { useEffect } from 'react'
import Suggestions from './suggestions'
import { useState } from 'react'

function Register(){

const [name , setName] = useState('')
const [tweet , setTweet] = useState('')


// form.onsubmit = async (e)=>{
//     e.preventDefault();

//     var url = "http://localhost:8080/save";

//         fetch(url, {method:'POST',
//         body: new FormData(form)})
//     }
    

function handlepassword(event){
    setTweet(event.target.value)
}
function handleusername(event){
    setName(event.target.value)
}

    return(
        <div className= "compose">
            <Navigation/>
            <div className="compose-tweet">
            
            <p>Log on to your Account</p>
            
            <form id="form" action="http://localhost:8080/login" method ="post" >
                
                <input type="text" name="username"
                 placeholder ="UserName..." onChange={handleusername}>
                </input>
                
                <br/>
                
                <input type="password" name = "password" placeholder="Password..."
                onChange = {handlepassword}>
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

export default Register ;