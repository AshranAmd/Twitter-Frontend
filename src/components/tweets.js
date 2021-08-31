import React, { Component } from 'react'

class Tweets extends Component{
    
    

     componentDidMount(){
        var data;
        fetch(`http://localhost:8080/`).then(Response=>Response.json())
        .then(responsejson=>{data = responsejson;
            console.log(data) ;
            data.forEach(function updating(item,index){
                console.log(item);
                this.setState({name:item[0],tweet: item[0] })
            })
             
        })
}
    
   

        constructor(){
            super()
            this.state = ({name:'none', tweet:'none'})
        }

    render(){
    return(
    <div className='tweets'>
        <p className= 'name' > {this.state.name}</p>
        <p className= 'tweet'> {this.state.tweet}</p>
    </div>
    )}
}

export default Tweets