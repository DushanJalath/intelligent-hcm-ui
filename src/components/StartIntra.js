import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCircleStop, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import '../styles/startIntra.css';

function StartIntra(params) {
    return (
        <div className='container-intra'>
            <span>To start project select the project type and start your timer.</span>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faCirclePlay} style={{ color: 'green', marginRight: '9px'}}/>Time Start/Resume Button
                </li>
                <li>
                    <FontAwesomeIcon icon={faCircleStop} style={{ color: 'red', marginRight: '9px' }}/>Time Stop Button
                </li>
                <li> 
                    <FontAwesomeIcon icon={faCirclePause} style={{ color: 'orange', marginRight: '9px' }}/>Time Pause Button
                </li>
            </ul>
        </div>
        

    );
}

export default StartIntra;