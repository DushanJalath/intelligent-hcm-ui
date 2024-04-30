import HRSidebar from "../components/HRSidebar";
import HRAddVacancy from "../components/HRAddVacancy";

function app() {
    const Styles = {
        marginTop: '-800px',
        
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

