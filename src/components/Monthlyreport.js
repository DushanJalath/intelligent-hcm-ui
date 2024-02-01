import Monrep from '../styles/Monthlyreport.module.css'
import Printer from '../assets/printer.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Frame(props) {
    return(
        <div className={Monrep.container}>
            <div className={Monrep.title}>{props.title}</div>
            <div className={Monrep.content}>
                <div className={Monrep.content1}>
                Monthly Total Time :  02.10.30 (hr:min:sec)
                <p>Payment per hour    :  2$</p>
                </div>
            <div className={Monrep.content2}>
            Total Overtime payment :<br/> 5$
            </div>
            </div>
            <img src={Printer}></img>
            
            
            
            
        </div>
    );
}

export default Frame;