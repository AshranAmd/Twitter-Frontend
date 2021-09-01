import React from 'react'
import Tweet from './Tweet'
import Fetch from "./fetch"




function Content(){
    return(
        <div className='content'>
            <Tweet name="ShahRukh Khan" tweet="I have told you previously also that always 
            keep working hard no matter what are the circumstances in which you are in they
            are gonna be better someday."/>
            <Tweet name="Ashran Ahamad Siddiqui" tweet="Like Shah Said, keep working hard no
             matter what are the circumstances in which you are in they are gonna be better someday."/>
            <Fetch/>
        </div>
    )
}

export default Content