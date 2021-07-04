import { Route } from "react-router-dom";
import "./App.css";
import Profile from './Components/profile'; 
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Icons from './Components/Icons';
import NewPost from './Components/NewPost';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Explore from './Components/Explore';
import Contact from './Components/Contact';
import About from './Components/About';
import Saved from "./Components/Saved";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Icons/>
        <Route path="/" exact component={Profile}/>
        <Route path="/Newpost" component={NewPost}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Login"  component={Login}/>
        <Route path="/Explore"  component={Explore}/>
        <Route path="/ContactUs"  component={Contact}/>
        <Route path="/About"  component={About}/>
        <Route path="/Saved"  component={Saved}/>

    </div>
  );
}

export default App;
