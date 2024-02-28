 
import Home from "./Home"
import About from "./About"
import Contact from "./Contact";
import Header from "./Header"
import Users from "./Users"
import UserDetails from "./UserDetails"
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
 

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Users" element={<Users/>} />
        <Route path="/Users/:usersId" element={<UserDetails/>} />
      </Routes>
      </BrowserRouter>
    
 
  
    
    </div>
  );
}

export default App;
