import Jobdetails from "../components/jobdetails.js"
import "../styles/employeeJobDetailsPage.css"

import Navbar from "../components/Sidebar.jsx"

function App() {
    return (
      <div className="app-container">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main-content">
      <Jobdetails title="Job details"/>
      </div>
      
    </div>
    );
  
  }
  
  
  
  export default App;