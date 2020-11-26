import React, {useState, useRef} from 'react';
import styles from './DialogPage.module.css';
import Message from "./Message/Message";

const DialogPage = ({pageData}) => {
    const inputRef = useRef();
    const [inputMessage, setInputMessage] = useState('');
    const {messageHistory} = pageData;
    const [messages, setMessages] = useState(messageHistory);
    const inputHandler = event => {
        setInputMessage(event.target.value)
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        setMessages([
            ...messages,
            {
                id: 'test-rk',
                author: 'Denys',
                authorAvatar: null,
                date: '29-Nov-20',
                text: inputRef.current.value
            }
        ])
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
            <h2>The dialogs of {pageData.name}</h2>
            {dialogsHistory}
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