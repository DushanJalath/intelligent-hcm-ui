import Totalover from '../styles/Totalovertime.module.css'
function Totalovertime(props) {
    return(
        <div className={Totalover.container}>
            <div className={Totalover.title}>{props.title}</div>
            
                <div className={Totalover.content}>
                    <span id={Totalover.time1}>00:10:00</span>
                    <span id={Totalover.time2}>(hr : min : sec)</span>
                </div>
                
            </div>
    );
}

export default Totalovertime;