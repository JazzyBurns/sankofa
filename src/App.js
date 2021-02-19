import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Homepage/Home';
import Edu from './components/Education/Edu';
import Direct from './components/Directory/Directory';
import Testim from './components/Testimonies/Testimonies';
import Resources from './components/Resources/Resources';
import POA_Resources from './components/POA_Resources/POA_Resources';
import SupportServices from './components/SupportServices/SupportServices';
import RecordedSessions from './components/RecordedSessions/RecordedSessions';
import RegionalCenter from './components/RegionalCenter/RegionalCenter';
import GrowingTogether from './components/GrowingTogether/GrowingTogether';


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
          <Route path='/Policy' exact component={ POA_Resources } />
          <Route path ='/SupportServices'exact component={SupportServices}/>
          <Route path = '/RecordedSessions' exact component={RecordedSessions}/>
          <Route path = '/RegionalCenter' exact component={ RegionalCenter }/>
          <Route path = '/GrowingTogether' exact component={GrowingTogether}/>
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
