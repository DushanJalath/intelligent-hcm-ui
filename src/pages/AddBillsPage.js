import Sidebar from "../components/Sidebar";
import BillStatus from "../components/BillStatus";
import SendBill from '../components/SendBill'
import '../styles/addBillsPage.css'
function AddBillsPage(params) {
    return(
        <>
            <Sidebar/>
            <div className="content-addBill-page">
                <SendBill title="Send Bill to HR"/>
                <BillStatus title="Bill Status"/>
            </div>
        </>
    );
}

export default AddBillsPage