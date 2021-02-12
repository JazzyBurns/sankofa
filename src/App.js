import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Homepage/Home';
import Edu from './components/Education/Edu';
import Direct from './components/Directory/Directory';
import Testim from './components/Testimonies/Testimonies';
import Resources from './components/Resources/Resources';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/Education' exact compoent={ Edu } />
          <Route path='/Directory' exact component={ Direct } />
          <Route path='/Testimonies' exact component={ Testim } />
          <Route path='/Resources' exact component={ Resources } />
          {/* 

          Add your pages paths here. Remember to import like I did above.

          EXAMPLE:
          <Route path='/directory' component={Directory} />
          
          */}

        </Switch>
      </Router>
    </>
  );
}

export default App;
