import Jobdetails from "../components/jobdetails.js"
import Navbar from "../components/Sidebar.jsx"
import "../styles/employeeJobDetailsPage.css"

export default function CandidateApplyJobPage (){
    return (
        <div className="app-container">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main-content">
                <Jobdetails title="Job details"/>
            </div>
        </div>
    )
}