import { GoogleLoginProps } from "react-google-login";
import Login from "./components/login";
import Signup from './components/signup';
import Reset from "./components/reset";
import NewPassword from "./components/newPassword";
import  Google from "./components/google";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
          
           <Switch>
             
               
                <Route path="/login"  component={Login} />
                <Route path="/signup" component={Signup}/>
                <Route path="/reset" component={Reset}/>
                <Route path="/newPassword" component={NewPassword}/>
                <Route path="/googlelogin" component={Google}/>
               
           </Switch>
       </Router>
    
  );
}

export default App;
