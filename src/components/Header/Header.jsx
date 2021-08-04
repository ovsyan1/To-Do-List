import classes from './Header.module.css';
import React from 'react';
import Profile from '../Profile/Profile';
import {addTxtActionCreator, updateNewTxtActionCreator} from '../redux/store';


const Header = (props) => {
    let messages = props.store.to_do_items.map(message => {
        return <Profile message={message.message}/>
    })

    let ref = React.createRef();
    

    const addTxt = () => {
        props.dispatch(addTxtActionCreator());
    }
    const onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewTxtActionCreator(text)
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