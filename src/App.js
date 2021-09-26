import Nav from './components/Nav';
import About from './pages/About';
import Shop from './pages/Shop';
import Home from './pages/Home';
import ItemDetails from './components/ItemDetails';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:uuid" component={ItemDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
