import '../styles/Overtimecount.css'
function Overtimecount(props) {
    return(
        <div className='container2'>
            <div className='title2'>{props.title}</div>
            <div className='content2'>
                <div className='container6'>
                    <span id='time'>00:10:00</span>
                    <span id='time2'>(hr : min : sec)</span>
                </div>
                
                <div className='text'>
                Initiate overtime counting after the clock passes 05:00PM by engaging in project work. To activate overtime tracking, ensure ongoing project tasks are being performed.
                </div>

            </div>
        </div>
    );
}

export default Overtimecount;