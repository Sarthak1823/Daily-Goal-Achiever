import './App.css';
import Header from "./Components/Header.js"
import Home from "./Components/Home.js"
import About from "./Components/About.js"
import Contact from "./Components/Contact.js"
import Footer from "./Components/Footer.js"
import User from "./Components/User.js"
import {BrowserRouter,Route,Routes} from 'react-router-dom';
 
/*function App() {
  return (
    <BrowserRouter>
 <div> 
 <Header/> 
 <Routes>
 <Route path="/" element={<Home/>}></Route>
<Route path="/abouT" element={<About/>}></Route>
 <Route path="/contact" element={<Contact/>}></Route>
 <Route path="/user/:id" element={<User/>}></Route>
 </Routes>

 </div>
 </BrowserRouter>
  );
}
*/
function App() {
  return (
    <BrowserRouter>
 <div> 
 <Header/> 
  <Home/>
 </div>
 </BrowserRouter>
  );
}
export default App;
