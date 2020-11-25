import React, {useState} from 'react';
import styles from './App.module.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App({users, channels}) {
    const [activeWindow, setActiveWindow] = useState('');
    const changePage = value => setActiveWindow(value)
    return (
        <div className={styles.App}>
            <Sidebar
                channels={channels}
                users={users}
                changePage={changePage}
                activePage={activeWindow}
            />
            <Content activePage={activeWindow}/>
        </div>
    );
}

export default App;
