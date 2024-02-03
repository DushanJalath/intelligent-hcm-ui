import jobdetailstyle from '../styles/jobdetails.module.css'
import JobCard from './jobcard.js'

function Frame(props) {
    const job1 = {jobTitle:'Job Title',
        jobType:'Full Time/Permanent',
        company:'Company', 
        location:'Location', 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.'}


    return(
        <div className={jobdetailstyle.container}>
        <div className={jobdetailstyle.title}>{props.title}</div>
        <div className={jobdetailstyle.jobvacancy}>
        <JobCard {...job1} butval = "APPLY NOW"/>
        
        </div>
        </div>
        )
}
export default Frame;