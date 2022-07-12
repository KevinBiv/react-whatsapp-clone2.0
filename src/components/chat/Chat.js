import React, { useState } from 'react';
import MessageView from '../message-view';
import './Chat.css';




function Chat(props) {
    
    const [contactData, setContactData] = useState({});

    const getData = (data) => {
        setContactData(data);
    }

    return (
        <>
            <section className='section-box'>

                
                <MessageView contactData={contactData} />

            </section>
        </>
    )
}



export default Chat;