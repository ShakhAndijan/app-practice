import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
