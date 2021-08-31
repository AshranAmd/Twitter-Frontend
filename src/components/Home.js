import React from 'react'
import Navigation from './navigation'
import Content from './content'
import Suggestion from './suggestions'
import './Home.css';

function Home(){
    return(
        <div className = "home">
            <Navigation/>
            <Content/>
            <Suggestion/>
        </div>
    )
}

export default Home