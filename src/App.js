import { GoogleLoginProps } from "react-google-login";
import Login from "./components/login";
import Signup from "./components/signup";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
          
           <Switch>
             
               
                <Route path="/login"  component={Login} />
                <Route path="/signup"  component={Signup} />
               
           </Switch>
       </Router>
    
  );
}

export default App;
