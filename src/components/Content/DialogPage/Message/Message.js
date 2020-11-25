import React from 'react';
import styles from './Message.module.css';

const Message = ({text, authorAvatarUrl, author, date}) => {
    return (
        <div className={styles.Message}>
            <div className={styles.UserAvatar}>
                <img src={authorAvatarUrl} alt={author}/>
            </div>
            <div className={styles.UserMessageText}>
                <h4 className={styles.UserName}>
                    <span className={styles.UserTitle}>{author}</span>
                    <span className={styles.UserMessageDate}>{date}</span>
                </h4>
                <p className={styles.UserText}>{text}</p>
            </div>
        </div>
    )
}

export default Message;