import Jobdetails from "../components/jobdetails.js"
import "../styles/employeeJobDetailsPage.css"
import Sidebar from "../components/Sidebar.jsx"

export default function ApplyJobPage (){
    return (
        <div className="app-container">
            <div className="navbar">
                <Sidebar/>
            </div>
            <div className="main-content">
                <Jobdetails title="Job details"/>
            </div>
        </div>
    )
}