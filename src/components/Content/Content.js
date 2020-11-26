import React, {useContext} from 'react';
import styles from './Content.module.css'
import DialogPage from "./DialogPage/DialogPage";
import {SlackContext} from "../../context/SlackProvider";

const Content = ({activePage }) => {
    const {data} = useContext(SlackContext)
    const currentPage = action => {
        let dialogHistory = data.users.filter(user => user.name === action)[0];
        let channelsHistory = data.channels.filter(channel => channel.name === action)[0];

        const contentRender = (pageDataArg, dialogType) => (
            <DialogPage
                pageData={pageDataArg}
                dialogType={dialogType}
            />
        );

        switch (action){
            case action = 'Denys':
                return contentRender(dialogHistory, 'users');
            case action = 'Dave':
                return contentRender(dialogHistory, 'users');
            case action = 'Joe':
                return contentRender(dialogHistory, 'users');
            case action = 'Sarah':
                return contentRender(dialogHistory, 'users');
            case action = 'Pam':
                return contentRender(dialogHistory, 'users');
            case action = 'Zach':
                return contentRender(dialogHistory, 'users');
            case action = 'Erin':
                return contentRender(dialogHistory, 'users');
            case action = 'general':
                return contentRender(channelsHistory, 'channels');
            case action = 'help':
                return contentRender(channelsHistory, 'channels');
            case action = 'react':
                return contentRender(channelsHistory, 'channels');
            case action = 'mobX':
                return contentRender(channelsHistory, 'channels');
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