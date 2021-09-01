<div className = "App">
      
      <Router>
            <div className="Route"> 
                <Switch> 
                    <Route exact path ={ "/home"} component={Home}/>
                    <Route exact path = {"/account"} component={Account}/>
                    <Route exact path = {"/compose"} component={Compose}/>
                    <Route exact path = {"/trending"} component = {Trending}/>
                </Switch>
            </div>
        </Router>
    </div>



///



class App extends Component {
  
    render(){
    return (
      <div className = "App">
        
      </div>
    )}
  }

  
///

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



//

posts.forEach(post => {container.push(
    <li className = "hellow">hello {post.name} and <br/> his tweet is : <br/>{post.tweet}</li>
  )
})
