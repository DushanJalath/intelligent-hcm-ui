import '../styles/jobvacancy.css'
import JobCard from './jobcard.js'

function Frame(props) {
    const job1 = {jobTitle:'Job Title',
        jobType:'Full Time/Permanent',
        company:'Company', 
        location:'Location', 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.'}


    return(
        <div className="container5">
        <div className="title5">{props.title}</div>
        <div className="jobvacancy">
        <JobCard {...job1}/>
        <button className="applybutton">Apply</button>
        </div>
        </div>
        )
}
export default Frame;