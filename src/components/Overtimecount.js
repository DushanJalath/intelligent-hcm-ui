import Overt from '../styles/Overtimecount.module.css'
function Overtimecount(props) {
    return(
        <div className={Overt.container}>
            <div className={Overt.title}>{props.title}</div>
            <div className={Overt.content}>
                <div className={Overt.container2}>
                    <span id={Overt.time1}>00:10:00</span>
                    <span id={Overt.time2}>(hr : min : sec)</span>
                </div>
                
                <div className={Overt.text}>
                Initiate overtime counting after the clock passes 05:00PM by engaging in project work. To activate overtime tracking, ensure ongoing project tasks are being performed.
                </div>

            </div>
        </div>
    );
}

export default Overtimecount;