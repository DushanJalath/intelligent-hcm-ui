import '../styles/Totalovertime.css'
function Totalovertime(props) {
    return(
        <div className='container3'>
            <div className='title3'>{props.title}</div>
            
                <div className='content5'>
                    <span id='time3'>00:10:00</span>
                    <span id='time4'>(hr : min : sec)</span>
                </div>
                
            </div>
    );
}

export default Totalovertime;