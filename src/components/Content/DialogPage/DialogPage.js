import React, {useState, useRef, useContext} from 'react';
import styles from './DialogPage.module.css';
import Message from "./Message/Message";
import {SlackContext} from "../../../context/SlackProvider";

const DialogPage = ({pageData, dialogType}) => {
    const {changeData} = useContext(SlackContext)
    const inputRef = useRef();
    const [inputMessage, setInputMessage] = useState('');
    const inputHandler = event => {
        setInputMessage(event.target.value)
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        changeData(dialogType, pageData.name, inputRef.current.value)
        inputRef.current.value = '';
        setInputMessage('');

    }
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
            <div className={styles.AvailableMessages}>
                <h2>The dialogs of {pageData.name}</h2>
                {dialogsHistory}
            </div>
            <div className={styles.NewMessageWrap}>
                <form onSubmit={formSubmitHandler}>
                    <input
                        ref={inputRef}
                        className={styles.NewMessageInput}
                        type="text"
                        value={inputMessage}
                        onChange={inputHandler}
                        placeholder='Type your message here. Press Enter to send.'
                    />
                </form>
            </div>
        </div>
    )
}

export default DialogPage;