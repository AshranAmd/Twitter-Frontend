import React from 'react'
import Navigation from './navigation'
import { useState } from 'react'    
import { useEffect } from 'react'
import Setting from './settings'

 
function Account(){

    const [posts , setPost]= useState([{"name":"Admin","tweet":"Internet Connection is Missing , Try again after reassuring the connection ."}])
    
    useEffect(()=>{
    async  function fetching(){
    const datas =  await fetch("http://localhost:8080/user").then(data => data.json());
    setPost(datas);
}
    fetching()
    },[])

    const container = [];
    
    posts.forEach(post => {container.push(
        <div className = 'Account'> 
            <div className="account-name">
                <div className="acc-name">{post.username}</div><br/>
                <div className="acc-name">From{post.place}</div><br/>
                <div className="acc-name">{post.type}Account</div><br/>
                <div className="acc-name">Age:{post.age}</div>
                <div className="acc-pic">
                    <img src="C:\Users\Ashran\Documents\yes.jpg" type="image/jpg"></img>
                </div>
            </div>
        </div>
    )
  })

    return(
        <div id="account">
        <Navigation/>
        {container}
        <Setting/>
        </div>
        )

}

export default Account