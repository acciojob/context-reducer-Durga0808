import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const handleLogin = () => {
        setCurrentUser('rohan');
        setIsAuthenticated(true);
    };

    const handleSignout = () => {
        setCurrentUser('');
        setIsAuthenticated(false);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    const handleRemoveItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const handleClearList = () => {
        setItems([]);
    };

    return (
        <div>
            <h1>dp here</h1>
            {isAuthenticated ? (
                <div id="current-user">Current user: {currentUser}, isAuthenticated: Yes</div>
            ) : (
                <button id="login-btn" onClick={handleLogin}>Login</button>
            )}
            {isAuthenticated && (
                <button id="signout" onClick={handleSignout}>Signout</button>
            )}
            <input id="shopping-input" type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button id={`remove-${item}`} onClick={() => handleRemoveItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button id="clear-list" onClick={handleClearList}>Clear List</button>
        </div>
    );
};

export default App;
