import { useState } from 'react'
import React, { useEffect } from 'react'


function Fetch(){

    const [posts , setPost]= useState([{"name":"Ashran"}])
    
    useEffect(()=>{
    async  function fetching(){
    const datas =  await fetch("http://localhost:8080/").then(data => data.json());
    setPost(datas)
    console.log(posts[0]);
}
    fetching()
    },[])

    console.log(posts);

    const container = [];
    
    console.log(typeof posts);
    var nawa = [...posts]
    console.log(nawa);
    console.log(typeof nawa)
    
    posts.forEach(post => {container.push(
      <li className = "hellow">hello {post.name}</li>)

  })

    return(
        <ul>
        {container}
    </ul>
        )

}
export  default Fetch ;