import { rerenderEntireTree } from "../../render";

const SEND_MESSAGE = 'SEND-MESSAGE';


const store = {
    to_do_items:[
        {id: 1, message: 'asdf'},
        {id: 2, message: 'asdfffff'},
        {id: 3, message: 'QQQQ'},
    ],
    newMessageText: 'best-network',

    // callSubscriber(){
    //     console.log('state changed');
    // },
    // subscribe(observer){
    // this.callSubscriber = observer;
    // },
    // addTxt(txt){
    //     store.to_do_items.push({
    //         id: 4,
    //         message: txt
    //     })  
    // }
    

}


export let addTxt = (txtMessage) => {
    let newMessage = {
        id: 4,
        message: txtMessage
    };
    store.to_do_items.push(newMessage)
    console.log(store.to_do_items);
    rerenderEntireTree(store)
}


// export let callSubscriber = () => {
//         console.log('state changed');
// }

// export let subscribe = (observer) => {
//     callSubscriber = observer;
// }

// export let addTxt = (txtMessage) => {
//     let newMessage = store.to_do_items.push({
//         id: 4,
//         message: txtMessage
//     })
//     store.to_do_items.push(newMessage)
// }

export default store;