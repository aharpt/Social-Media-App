import React from 'react'
import NavBar from '../common/NavBar'
import Notification from './Notification'

interface NotificationsProps {
    notifications: Array<{
        id: number;
        title: string;
        text: string;
    }>;
};

function Notifications({notifications} : NotificationsProps) : React.ReactElement {
    return (
        <>
            <NavBar />
            {
                notifications.map(({id, title, text}) => (
                    <Notification key={id} title={title} text={text} />
                ))
            }
        </>
    )
}

export default Notifications
