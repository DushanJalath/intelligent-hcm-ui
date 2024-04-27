import HRSidebar from "../components/HRSidebar";
import HRAddVacancy from "../components/HRAddVacancy";

function app() {
    const Styles = {
        marginTop: '-900px',
        
      };
    return (
        <>
        <HRSidebar/>,
        <div style={Styles}>
            <HRAddVacancy title="Add Vacancy"/>

        </div>
        
    </>
   

    )
    
}

export default app;

