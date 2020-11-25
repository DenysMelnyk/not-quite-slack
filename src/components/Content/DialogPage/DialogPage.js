import React from 'react';
import styles from './DialogPage.module.css';
import Message from "./Message/Message";

const DialogPage = ({pageData}) => {
    const dialogsHistory = pageData.messageHistory.map(dialog => (
        <Message
            key={dialog.id}
            text={dialog.text}
            authorAvatarUrl={dialog.authorAvatar}
            author={dialog.author}
            date={dialog.date}
        />
    ))
    return (
        <div className={styles.DialogPage}>
            <h2>The dialogs of {pageData.name}</h2>
            {dialogsHistory}
        </div>
    )
}

export default DialogPage;