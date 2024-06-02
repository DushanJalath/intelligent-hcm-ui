import BillStatus from "../components/BillStatus";
import SendBill from '../components/SendBill'
import '../styles/addBillsPage.css'
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";

function AddBillsPage(params) {
    const userType = localStorage.getItem('userType');
        return(
            <>
                {userType === 'Employee' && <Sidebar/>}
                {userType === 'Manager' && <ManagerSidebar/>}   
                <div className="content-addBill-page">
                    <SendBill title="Send Bill to HR"/>
                    <BillStatus title="Bill Status"/>
                </div>
            </>
        );
}

export default AddBillsPage