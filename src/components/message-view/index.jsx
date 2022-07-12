import React from 'react';

function MessageView(props) {
    const {contactData} = props;
    return contactData == null ? <h1>No Data</h1> : (
        <>
            <img src={props.profile} alt="" />
            <div>
                <h2>{contactData.name}</h2>
                <p>{contactData.date}</p>
            </div>
        </>
    )
}

export default MessageView;