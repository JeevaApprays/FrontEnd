import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Error from "./Error/Error"
import Profile from './Profile/Profile';

function App() {
  return (
   <div>
<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}/>
<Route path='/register' element={<Register/>} />
<Route path="/Error" element={<Error/>}/>
<Route path='/profile' element={<Profile/>}/>
</Routes>
</BrowserRouter>
   </div>
  );
}

export default App;
