import HRSidebar from '../components/HRSidebar';
import ManagerSidebar from '../components/ManagerSidebar';

export default function EmployeesAttendances (){
    const userType = localStorage.getItem('userType');
    return (
        <>
         {userType === 'HR' && <HRSidebar/>}
         {userType === 'Manager' && <ManagerSidebar/>}  
            <div className="app-container">
                {/* View Attendence Emploee*/}
            </div>
        </>
      
    )
}