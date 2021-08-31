import React from 'react'
import Tweet from './Tweet'

function Navigation(){
    return(
        <div className="navigation">
            <h1>Navigation</h1>
            <ul>
                <li><a href ="/home" ><img src="https://img.icons8.com/ios-glyphs/30/000000/home.png"/></a></li>
                <li><a href ="/trending" ><img src="https://img.icons8.com/ios-glyphs/30/000000/hashtag-key.png"/></a></li>
                <li><a href ="/compose" ><img src="https://img.icons8.com/material-two-tone/24/000000/multi-edit--v1.png"/></a></li>
                <li><a href ="/tweets" ><img src="https://img.icons8.com/material-rounded/24/000000/stack-of-tweets.png"/></a></li>
                <li><a href ="/messages" ><img src="https://img.icons8.com/ios-glyphs/30/000000/imessage.png"/></a></li>
                <li><a href ="/notifications" ><img src="https://img.icons8.com/material-rounded/24/000000/appointment-reminders.png"/></a></li>
                <li><a href ="/account" ><img src="https://img.icons8.com/ios-glyphs/24/000000/guest-male.png"/></a></li>
            </ul>
        </div>
    )
}

export default Navigation