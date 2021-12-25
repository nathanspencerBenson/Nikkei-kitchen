
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Nav/Nav';
import Menu from './Pages/Menu/Menu';
import Home from './Pages/Home/Home';
import Footer from './Footer/Footer';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    
      <Router>
        <div className="App">
            
            <Switch>
              <Route exact path ="/">
                <Home />
              </Route>
              <Route path="/menu">
                <Menu />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/reserve">
                reserve
              </Route>
              <Route path="/delivery">
                delivery
              </Route>
            </Switch>
            <Footer />
        </div>
      </Router>
   
  );
}

export default App;
