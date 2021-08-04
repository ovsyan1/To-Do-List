let rerenderEntireTree = () => {
    console.log('State changed');
}

// const SEND_MESSAGE = 'SEND-MESSAGE';


const store = {
    to_do_items:[
        {id: 1, message: 'asdf'},
        {id: 2, message: 'asdfffff'},
        {id: 3, message: 'QQQQ'},
    ],
    newMessageText: 'best-network',
}


export const addTxt = () => {
    let newMessage = {
        id: 4,
        message: store.newMessageText
    };
    store.to_do_items.push(newMessage)
    rerenderEntireTree(store)
    store.newMessageText = '';
}

export const updateNewMessageText = (newText) => {
    store.newMessageText = newText;
    rerenderEntireTree(store)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //наблюдатель 
}

export default store;
window.store = store;