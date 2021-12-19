import React from 'react'

interface NotificationProps {
    title: string;
    text: string;
};

const containerStyles = {
    backgroundColor: "antiquewhite",
    borderBottom: "5px solid aliceblue",
    padding: "15px",
};

const buttonStyles = {
    padding: "5px",
};

function Notification({title, text} : NotificationProps) : React.ReactElement {
    const [shouldShow, setShouldShow] = React.useState<boolean>(true);

    const dismissNotification = () : void => {
        setTimeout(() => {
            setShouldShow(false);
        }, 1000);
    }

    return (
        shouldShow ? 
        <div style={containerStyles}>
            <h4>{title}</h4>
            <p>{text}</p>
            <button onClick={dismissNotification} style={buttonStyles}>Dismiss</button>
        </div>
        : <></>
    )
}

export default Notification;
