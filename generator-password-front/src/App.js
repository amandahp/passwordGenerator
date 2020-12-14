import React from 'react'
import routes from './routes/Router'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            {routes.map((entry, index) => {return (<Route key={index+1} {...entry}/>)})}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
