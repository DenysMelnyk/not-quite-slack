import React from 'react';
import styles from './Content.module.css'
import DialogPage from "./DialogPage/DialogPage";

const Content = ({activePage, users, channels}) => {
    const currentPage = action => {
        let dialogHistory = users.filter(user => user.name === action)[0];
        let channelsHistory = channels.filter(channel => channel.name === action)[0];

        switch (action){
            case action = 'Denys':
                return (
                    <DialogPage pageData={dialogHistory}/>
                )
            case action = 'Dave':
                return (
                    <DialogPage pageData={dialogHistory}/>
                )
            case action = 'Joe':
                return (
                    <DialogPage pageData={dialogHistory}/>
                )
            case action = 'Sarah':
                return (
                    <DialogPage pageData={dialogHistory}/>
                )
            case action = 'Pam':
                return (
                    <DialogPage pageData={dialogHistory}/>
                )
            case action = 'Zach':
                return (
                    <DialogPage pageData={dialogHistory}/>
                )
            case action = 'Erin':
                return (
                    <DialogPage pageData={dialogHistory}/>
                )
            case action = 'general':
                return (
                    <DialogPage pageData={channelsHistory}/>
                )
            case action = 'help':
                return (
                    <DialogPage pageData={channelsHistory}/>
                )
            case action = 'react':
                return (
                    <DialogPage pageData={channelsHistory}/>
                )
            case action = 'mobX':
                return (
                    <DialogPage pageData={channelsHistory}/>
                )
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