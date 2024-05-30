import Sidebar from "../components/Sidebar";
import UserRegistration from "../components/UserRegistration";
import '../styles/userRegPage.css'

function UserRegPage(props) {
    return(
        <>
        <Sidebar/>
        <div className="reg-form">
            <UserRegistration title="User Regsitration"/>
        </div>
        </>
    );
}

export default UserRegPage