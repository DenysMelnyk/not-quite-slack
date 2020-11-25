import React from 'react';
import styles from './Content.module.css'

const Content = ({activePage}) => {
    const currentPage = action => {
        switch (action){
            case action = 'Denys':
                return (
                    <div>
                        Denys Dialogs
                    </div>
                )
            default: return(
                <p>Please chose interesting for you channel or dialog )).</p>
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