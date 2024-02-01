import '../styles/Monthlyreport.css'
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';

function Frame(props) {
    return(
        <div className='container1'>
            <div className='title1'>{props.title}</div>
            <div className='content'>
                <div className='content1'>
                Monthly Total Time :  02.10.30 (hr:min:sec)
                <p>Payment per hour    :  2$</p>
                </div>
            <div className='content3'>
            Total Overtime payment :<br/> 5$
            </div>
            </div>
            <div className = "printer">
            <PrintOutlinedIcon/>
            </div>
        </div>
    );
}

export default Frame;