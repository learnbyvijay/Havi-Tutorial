import React from 'react';
import Navbar from './component/Navbar'
import Home from './component/screen/Home'
import Signin from './component/screen/Signin'
import Signup from './component/screen/Signup'
import Profile from './component/screen/Profile'
import Createpost from './component/screen/Createpost'
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
  	<BrowserRouter>
    	<Navbar />
    	<Route path="/"  exact component={Home}/>
    	 <Route path="/Signin" component={Signin}/>
    	 <Route path="/Signup" component={Signup}/>
    	 <Route path="/Profile" component={Profile}/>
    	 <Route path="/Createpost" component={Createpost}/>
    </BrowserRouter>
  );
}

export default App;
