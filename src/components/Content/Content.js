import React from 'react';
import styles from './Content.module.css'
import DialogPage from "./DialogPage/DialogPage";

const Content = ({activePage, users, channels}) => {
    const currentPage = action => {
        let dialogHistory = users.filter(user => user.name === action)[0];
        let channelsHistory = channels.filter(channel => channel.name === action)[0];

        const contentRender = pageDataArg => (
            <DialogPage pageData={pageDataArg}/>
        );

        switch (action){
            case action = 'Denys':
                return contentRender(dialogHistory);
            case action = 'Dave':
                return contentRender(dialogHistory);
            case action = 'Joe':
                return contentRender(dialogHistory);
            case action = 'Sarah':
                return contentRender(dialogHistory);
            case action = 'Pam':
                return contentRender(dialogHistory);
            case action = 'Zach':
                return contentRender(dialogHistory);
            case action = 'Erin':
                return contentRender(dialogHistory);
            case action = 'general':
                return contentRender(channelsHistory);
            case action = 'help':
                return contentRender(channelsHistory);
            case action = 'react':
                return contentRender(channelsHistory);
            case action = 'mobX':
                return contentRender(channelsHistory);
            default:
                return(
                    <p className={styles.ContentEmptyMessage}>Please chose interesting for you channel or dialog )).</p>
                )
        }
    }
    return (
        <div className={styles.Content}>
            {currentPage(activePage)}
        </div>
    )
}

export default Content;