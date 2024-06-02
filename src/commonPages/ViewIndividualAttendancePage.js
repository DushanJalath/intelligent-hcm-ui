import Sidebar from '../components/Sidebar';
import ManagerSidebar from '../components/ManagerSidebar';

export default function ViewIndividualAttendancePage (){
    const userType = localStorage.getItem('userType');
    return (
        <>
         {userType === 'Employee' && <Sidebar/>}
         {userType === 'Manager' && <ManagerSidebar/>}  
            <div className="app-container">
                {/* View Individual Attendence Emploee and Manager */}
            </div>
        </>
      
    )
}