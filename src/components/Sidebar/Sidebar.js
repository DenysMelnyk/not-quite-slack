import React, {useState, useContext} from 'react';
import {SlackContext} from "../../context/SlackProvider";
import SidebarList from "./SidebarList/SidebarList";
import styles from './Sidebar.module.css'

const Sidebar = ({changePage, activePage}) => {
    const {data} = useContext(SlackContext)
    const [usersList, setUsersList] = useState(data.users);
    const [channelsList, setChannelsList] = useState(data.channels);

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