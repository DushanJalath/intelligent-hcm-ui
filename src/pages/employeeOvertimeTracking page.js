import Monthlyreport from "../components/Monthlyreport.js"
import Overtimecount from "../components/Overtimecount.js"
import Totalovertime from "../components/Totalovertime.js"
import TimeAndDate from "../components/TimeAndDate.js"
import "./employee overtime tracking page.css"

function App() {
    return (
  <>
   
        <div className="app-container">
      <div className="navbar">
        
      </div>
      
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
      </>
    );
  
  }
  
  
  
  export default App;
