import React, {useState} from 'react';
import SidebarList from "./SidebarList/SidebarList";
import styles from './Sidebar.module.css'

const Sidebar = ({users, channels, changePage, activePage}) => {
    const [usersList, setUsersList] = useState(users);
    const [channelsList, setChannelsList] = useState(channels);

    return (
        <div className={styles.Sidebar}>
            <SidebarList
                heading='Channels'
                data={channelsList}
                updateData={setChannelsList}
                nameDecoration='#'
                changePage={changePage}
                activePage={activePage}
            />
            <SidebarList
                heading='Users'
                data={usersList}
                updateData={setUsersList}
                nameDecoration=''
                changePage={changePage}
                activePage={activePage}
            />
        </div>
    )
}

export default Sidebar;