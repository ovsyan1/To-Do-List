const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
let newStore = {
    store: {
    to_do_items:[
        {id: 1, message: 'asdf'},
        {id: 2, message: 'asdfffff'},
        {id: 3, message: 'QQQQ'},
    ],
    newMessageText: 'best-network',
    },
    getState(){
        return this.store
    },
    _callSubscriber(){
        console.log('State changed');
    },
    // addTxt(){
    //     let newMessage = {
    //         id: 4,
    //         message: this.store.newMessageText
    //     };
    //     this.store.to_do_items.push(newMessage)
    //     this._callSubscriber(this.store)
    //     this.store.newMessageText = '';
    // },
    // updateNewMessageText(newText){
    //     this.store.newMessageText = newText;
    //     this._callSubscriber(this.store)
    // },
    subscribe(observer){
        this._callSubscriber = observer; //наблюдатель 
    },
    dispatch(action){
        if(action.type === SEND_MESSAGE){
            let newMessage = {
                id: 4,
                message: this.store.newMessageText
            };
            this.store.to_do_items.push(newMessage)
            this._callSubscriber(this.store)
            this.store.newMessageText = '';
        }else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this.store.newMessageText = action.newText;
            this._callSubscriber(this.store)
        }
    }
}

export default newStore;
window.store = newStore;