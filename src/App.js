
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Nav/Nav';
import Menu from './Pages/Menu/Menu';
import Home from './Pages/Home/Home';

function App() {
  return (
    
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path ="/">
              <Home />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/contact">
              contact
            </Route>
            <Route path="/reserve">
              reserve
            </Route>
            <Route path="/delivery">
              delivery
            </Route>
          </Switch>
        </div>
      </Router>
   
  );
}

export default App;
