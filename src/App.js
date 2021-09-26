import Nav from './components/Nav';
import About from './pages/About';
import Shop from './pages/Shop';
import Home from './pages/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
