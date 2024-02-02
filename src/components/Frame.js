import '../styles/frame.css'

function Frame(props) {
    return(
        <div className='container'>
            <div className='title'>{props.title}</div>
        </div>
    );
}

export default Frame;