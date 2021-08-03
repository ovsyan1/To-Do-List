import classes from './Header.module.css';
import React from 'react';
import Profile from '../Profile/Profile';

const Header = (props) => {
    let messages = props.store.to_do_items.map(message => {
        console.log(message.message);
        return <Profile message={message.message}/>
    })

    let ref = React.createRef();

    
    const addTxt = () => {
        let text = ref.current.value;
        console.log(props);
        props.addTxt(text)

        console.log(props.addTxt)
        console.log(props.store)
    }

    // const onMessageChange = (e) => {
    //     let text = e.target.value;
    //     props.store.to_do_items.push({
    //         id: 45,
    //         message: text
    //     })

    // }

    return (
        <div className={classes.header}>
            <h1>Batman's TO-DO List</h1>
            {/* <input onChange={onMessageChange} value={props.store.newMessageText} ref={ref} type="text" placeholder='add new item'  className={classes.input}/> */}
            <input  ref={ref} type="text" placeholder='add new item'  className={classes.input}/>
            <button className={classes.btn} onClick={addTxt}>+</button>
            <div>
                {messages}
            </div>
            
        </div>

    )
}

export default Header;