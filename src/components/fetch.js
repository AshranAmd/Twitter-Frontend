import { useState } from 'react'
import React, { useEffect } from 'react'


function Fetch(){

    const [posts , setPost]= useState('[]')
    
    useEffect(()=>{
    async  function fetching(){
    const datas =  await fetch("http://localhost:8080/").then(data => data.json());

    setPost(datas)
    console.log(posts[0]);
}
    fetching()
    },[])

    console.log(posts);
    console.log(typeof posts);


    return(
        <ul>
    {Array.from(posts).forEach(async (post)=>(
        <p>the tweet is from{post}</p>
    ))}
    </ul>
        )

}
export  default Fetch ;