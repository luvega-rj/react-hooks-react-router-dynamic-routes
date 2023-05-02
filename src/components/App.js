import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import MoviesPage from './MoviesPage';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;