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