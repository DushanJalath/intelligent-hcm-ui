// import TimeAndDate from "./components/TimeAndDate";
import HRTimeReportingSubComponent from "../components/HRTimeReportingSubComponent";
import '../styles/HRTimeReportingPage.css';
import HRSidebar from '../components/HRSidebar';
import TimeAndDate from "../components/TimeAndDate";



export default function TimeAndReportingPageEmp (){
    
   const managerTimeReportingData=[
    { dp: 'https://picsum.photos/200/300', name: 'John', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/301', name: 'Sam', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/302', name: 'Jane', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/303', name: 'Robert', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/304', name: 'Paul', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/305', name: 'Mery', details:'Total hours 10:20:25'},
];

const employeesTimeReportingData=[
    { dp: 'https://picsum.photos/200/306', name: 'Geny', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/307', name: 'Tessa', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/308', name: 'Lourie', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/309', name: 'Ben', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/310', name: 'Vicky', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/311', name: 'Lee', details:'Total hours 10:20:25'},
]
    return (
        <>
        <div>
            <HRSidebar/>
        </div>

        <div className="main-container">
            <div className="upper-container">
                <TimeAndDate title="Time and Date"/>
            </div>

            <div className="lower-container">
                <div className="manager-data">
                    <HRTimeReportingSubComponent 
                        title="Managers"
                        data={managerTimeReportingData}
                    />
                </div>

                <div className="employees-data">
                    <HRTimeReportingSubComponent 
                        title="Employees"
                        data={employeesTimeReportingData}
                    />
                </div>


            </div>

        </div>
        
        
    </>
   
    )
}