import HRSidebar from "../components/HRSidebar";
import HRAddVacancy from "../components/HRAddVacancy";

function AddJobVacancyPage() {
    const Styles = {
        marginTop: '-550px',
        
      };
    return (
        <>

        <HRSidebar/>
        <div style={Styles}>
            <HRAddVacancy title="Add Vacancy"/>

        </div>
        
    </>
   

    )
    
}

export default AddJobVacancyPage;

