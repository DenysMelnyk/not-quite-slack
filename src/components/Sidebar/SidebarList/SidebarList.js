import React from 'react';
import styles from './SidebarList.module.css';

const SidebarListItem = ({children}) => <>{children}</>

const SidebarList = ({data, updateData, heading, nameDecoration, changePage, activePage}) => {
    const dataItems = data.map(item => {
        let sidebarItemClasses = item.name === activePage
            ? [styles.SidebarListItem, styles.SidebarListItemActive]
            : [styles.SidebarListItem];
        return (
            <li
                className={sidebarItemClasses.join(' ')}
                key={item.id}
                onClick={() => changePage(item.name)}
            >
                <SidebarListItem>
                    {`${nameDecoration} ${item.name}`}
                </SidebarListItem>
            </li>
        )
    })
    return (
        <div className={styles.SidebarList}>
            <h4 className={styles.SidebarListHeading}>{heading}</h4>
            <ul>
                {dataItems}
            </ul>
        </div>
    )
}

export default SidebarList;