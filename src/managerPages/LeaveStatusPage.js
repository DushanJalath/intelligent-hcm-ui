import ViewEmployeeLeaveStatus from "../components/ViewEmployeeLeaveStatus";
import ManagerSidebar from "../components/ManagerSidebar";

export default function LeaveStatusPage (){
    return(
        <div>
            <ManagerSidebar/>
            <ViewEmployeeLeaveStatus/>
        </div>
    )
}