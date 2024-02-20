import Sidebar from "../components/Sidebar"
import HRAddVacancy from "../components/HRAddVacancy";

function app() {
    const Styles = {
        marginTop: '-550px',
        
      };
    return (
        <>
        <Sidebar/>,
        <div style={Styles}>
            <HRAddVacancy title="Add Vacancy"/>

        </div>
        
    </>
   

    )
    
}

export default app;

