import HRSidebar from "../components/HRSidebar";
import UserRegistration from "../components/UserRegistration";
import '../styles/userRegPage.css'

function UserRegPage(props) {
    return(
        <>
        <HRSidebar/>
        <div className="reg-form">
            <UserRegistration title="User Regsitration"/>
        </div>
        </>
    );
}

export default UserRegPage