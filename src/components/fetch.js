import { useState } from 'react'
import React, { useEffect } from 'react'


function Fetch(){

    const [posts , setPost]= useState([{"name":"Admin","tweet":"Internet Connection is Missing , Try again after reassuring the connection ."}])
    
    useEffect(()=>{
    async  function fetching(){
    const datas =  await fetch("http://localhost:8080/").then(data => data.json());
    setPost(datas);
}
    fetching()
    },[])

    const container = [];
    
    posts.forEach(post => {container.push(
        <div className = 'tweets'> 
            <div className="tweet-name">
                <div className="name">{post.name}</div>
                <div className="pic">
                    <img src="C:\Users\Ashran\Documents\yes.jpg" type="image/jpg"></img>
                </div>
            </div>
            <div className="tweet">{post.tweet}</div>
        </div>
    )
  })

    return(
        <li id="pakad">
        {container}
        </li>
        )
}
export  default Fetch ;