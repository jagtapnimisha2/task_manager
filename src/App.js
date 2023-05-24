import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Signup from './component/signup/Signup';
import Login from './component/login/Login';
import Create from './component/Create';
import Read from './component/Read';
// import Navbar from './Navbar';
// import Script from './Script';

function App() {
  return (
    <div className="App">
       {/* <Script />
   <Navbar /> */}
   {/* <h1>Fetch Api(applications programing interface)</h1>
   <h2>Fetch is used to get data over the network</h2> */}
<Router>
<Routes>
  <Route path='/' element={<Login />}/>
  <Route path='/singup' element={<Signup />}/>
  <Route path='/create' element={<Create />}/>
  {/* <Route path='/login' element={<Login />}/> */}
  {/* <Route path='/singup' element={<Signup />}/> */}
  <Route path='/read' element={<Read />}/>
  {/* <Route path='/create' element={<Create />}/>  */}
  

</Routes>
</Router>
    </div>
  );
}

export default App;

