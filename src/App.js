import React from "react";
import HomePage from "./pages/Homepage";
import PokemonPage from "./pages/PokemonPage"
import {BrowserRouter  as Router, Route, Switch} from "react-router-dom"

const App = () => {

  return (
    <>
      <Router>
        <Switch>
            <Route 
                exact path ="/" 
                render={(props) => <HomePage {...props} />}
            />
            <Route 
                exact path="/pokemon/:pokemonName" 
                render={(props) => <PokemonPage {...props} 
            />} 
          /> 
        </Switch>
      </Router>
    </>

  );
}

export default App;
