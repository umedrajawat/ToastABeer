import './App.css';
import {
  BrowserRouter as Router,
  Redirect,

} from "react-router-dom";
import Route from "react-router-dom/Route";
import Dashboard from './Components/Dashboard';
import BeerDetails from './Components/BeerDetails';
import Feed from './Components/Feed';

function App() {
  return (
    <div className="App">
   <Router>
      {/* routing to specific pages in react using router */}
    <Redirect to exact component={Dashboard}/> 
    <Route exact path="/" component={Feed}/>
    <Route path="/BeerDetails" exact component={BeerDetails} />
    <Route path="/Dashboard" exact component={Dashboard} />
    </Router>
    </div>
  );
}

export default App;
