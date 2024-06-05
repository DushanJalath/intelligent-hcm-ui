import '../styles/setWorkingHours.css'
import ProjectType from './ProjectType';

function SetWorkingHours(props) {
    return (
        <div className='container-working-hours'>
            <div className='selectProject-title'>{props.title}</div> {/* Updated class name */}
            <div className='list'>
                <ProjectType
                    content="Work Task"
                />
                <ProjectType
                    content="Shop Order Operations"
                />
                <ProjectType
                    content="Project Activities"
                />
                <ProjectType
                    content="External"
                />
            </div>
        </div>
    );
}

export default SetWorkingHours;
