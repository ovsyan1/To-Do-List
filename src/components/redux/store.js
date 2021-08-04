import { rerenderEntireTree } from "../../render";

const SEND_MESSAGE = 'SEND-MESSAGE';


const store = {
    to_do_items:[
        {id: 1, message: 'asdf'},
        {id: 2, message: 'asdfffff'},
        {id: 3, message: 'QQQQ'},
    ],
    newMessageText: 'best-network',
}


export let addTxt = () => {
    let newMessage = {
        id: 4,
        message: store.newMessageText
    };
    store.to_do_items.push(newMessage)
    rerenderEntireTree(store)
    store.newMessageText = '';
}

export let updateNewMessageText = (newText) => {
    store.newMessageText = newText;
    rerenderEntireTree(store)
}

export default store;