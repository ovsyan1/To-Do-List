import classes from './Header.module.css';
import React from 'react';
import Profile from '../Profile/Profile';

const Header = (props) => {
    let messages = props.store.to_do_items.map(message => {
        return <Profile message={message.message}/>
    })

    let ref = React.createRef();
    const SEND_MESSAGE = 'SEND-MESSAGE';
    const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

    const addTxt = () => {
        props.dispatch({type: SEND_MESSAGE});
    }
    const onMessageChange = (e) => {
        let text = e.target.value;
        let action = {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
        props.dispatch(action);
    }

    return (
        <div className={classes.header}>
            <h1>Batman's TO-DO List</h1>
            <input  ref={ref} type="text" placeholder='add new item' onChange={onMessageChange} value={props.store.newMessageText}  className={classes.input}/>
            <button className={classes.btn} onClick={addTxt}>+</button>
            <div>
                {messages}
            </div>
            
        </div>

    )
}

export default Header;