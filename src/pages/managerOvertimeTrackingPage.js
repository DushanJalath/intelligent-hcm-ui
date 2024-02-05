import Monthlyreport from "../components/Monthlyreport.js"
import Overtimecount from "../components/Overtimecount.js"
import Totalovertime from "../components/Totalovertime.js"
import TimeAndDate from "../components/TimeAndDate.js"
import "../styles/managerOvertimeTrackingPage.css"
import Navbar from "../components/Sidebar.jsx"
import Control from "../components/Segmentedcontrol.js"
function App() {
  const Categories = ['Individual', 'Employees'];
    return (
  <>
   
        <div className="appontainer">
        <div className="navbar">
        <Navbar/>
        </div>
      
      <div className="content">
        <div className="control">
        <Control categories = {Categories}/>
        </div>
        <div className="columns">
      <div className="column1">
        
        <TimeAndDate title="Time and Date"/>
        <Overtimecount title="Overtime count"/>
        <Totalovertime title="Remainings Overtime"/>
        <Totalovertime title="Total Overflow"/>
         </div>
        <div className="column2">
        <Monthlyreport title="Monthly report"/> 
      </div>
      </div>
      </div>
    
        
        
    </div>
      </>
    );
  
  }
  
  
  
  export default App;
