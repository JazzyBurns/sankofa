import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Edu from './components/Education/Edu';
import Direct from './components/Directory/Directory';
import Testim from './components/Testimonies/Testimonies';
import Resources from './components/Resources/Resources';
import POA_Resources from './components/POA_Resources/POA_Resources';
import SupportServices from './components/SupportServices/SupportServices';
import RecordedSessions from './components/RecordedSessions/RecordedSessions';
import RegionalCenter from './components/RegionalCenter/RegionalCenter';
import GrowingTogether from './components/GrowingTogether/GrowingTogether';
import MH_Resources from './components/MH_Resources/MH_Resources';
import ContactUs from './components/ContactUs/ContactUs';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/about-us' exact component={ AboutUs }/>
          <Route path='/Education' exact component={ Edu } />
          <Route path='/Directory' exact component={ Direct } />
          <Route path='/Testimonies' exact component={ Testim } />
          <Route path='/Resources' exact component={ Resources } />
          <Route path='/Policy' exact component={ POA_Resources } />
          <Route path ='/SupportServices'exact component={SupportServices}/>
          <Route path = '/RecordedSessions' exact component={RecordedSessions}/>
          <Route path = '/Regional-Center' exact component={ RegionalCenter }/>
          <Route path = '/Growing-Together' exact component={GrowingTogether}/>
          <Route path = '/MH_Resources' exact component={MH_Resources}/>
          <Route path = '/Contact-Us' exact component={ ContactUs }/>
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
