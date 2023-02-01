import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar"
import Date from "./components/Date/Date"

import './App.css'
import Welcome from "./components/Welcome/Welcome";
import Trips from "./components/Trips/Trips";
import Fouter from "./components/Fouter/Fouter";

const App = () => {
  return(
    <div className="principale">
      <Sidebar/>
      <div className="k1">
        <Navbar/>
        <Welcome/>
        <Date/>
        <Trips/>
        <Fouter/>
      </div>
      <div>
      
      </div>
    </div>
  );
 
}

export default App;
