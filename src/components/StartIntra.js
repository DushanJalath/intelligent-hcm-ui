import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/startIntra.css';

function StartIntra(params) {
    return (
        <div className='container'>
            <span>To start project select the project type and start your timer.</span>
            <ul>
                <li>
                    <FontAwesomeIcon icon="fa-light fa-circle-play" />Time Start/Resume Button
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-light fa-circle-stop" />Time Stop Button
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-light fa-circle-pause" />Time Pause Button
                </li>
            </ul>
        </div>
        

    );
}

export default StartIntra;