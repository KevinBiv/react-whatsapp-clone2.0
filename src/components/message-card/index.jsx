import React from 'react';
import './styles.css';



function MessageCard(props) {
    // const [isOpen, setIsOpen] = useState(false);
    // const chatClicked = (evt) => {
    //     console.log("Menu Icon clicked");
    //     setIsOpen(!isOpen) 
    // }
    // const [active, setActive] = useState(false);

    return( <>
    
    
        <button className='card-btn'>
            <div className="card">
                <img src={props.profile} alt="" draggable="false" class="profile-pic" />
                    <div className="card-content">
                        <div className="upper-content">
                            <p className='contact-name'>{props.name}</p>
                            <p className='date'>{props.date}</p>
                        </div>
                        <div className="lower-content">
                            <p className='message-content'><span className='message-status'>{props.messageStatus}</span>{props.message}</p>
                        </div>
                    </div>
            </div>

        </button>
        </>
    )
}

export default MessageCard;