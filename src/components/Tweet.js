import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function Tweet(props){

    // const [count,fetching] =  useState({});
    
    
    // useEffect(async ()=>{ 
    //    var response = await fetch("http://localhost:8080/");
    //     var data = await response.json();
    //     var data1 = JSON.parse(data);
    //     fetching(data1);
    //     console.log(data1);
    // },[])   

    
    // console.log(typeof count)
    // console.log(count)
    // console.log(count.name);   


    return(
        <div className = 'tweets'> 
            <div className="tweet-name">
                <div className="name">{props.name}</div>
                <div className="pic">
                    <img src="C:\Users\Ashran\Documents\yes.jpg" type="image/jpg"></img>
                </div>
            </div>
            <div className="tweet">{props.tweet}</div>
        </div>
    )
}   


export default Tweet 