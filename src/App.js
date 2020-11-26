import React, {useState} from 'react';
import styles from './App.module.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
    const [activeWindow, setActiveWindow] = useState('');
    const changePage = value => setActiveWindow(value)
    return (
        <div className={styles.App}>
            <Sidebar
                changePage={changePage}
                activePage={activeWindow}
            />
            <Content
                activePage={activeWindow}
            />
        </div>
    );
}

export default App;
