// const SEND_MESSAGE = 'SEND-MESSAGE';

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
    addTxt(){
        let newMessage = {
            id: 4,
            message: this.store.newMessageText
        };
        this.store.to_do_items.push(newMessage)
        this._callSubscriber(this.store)
        this.store.newMessageText = '';
    },
    updateNewMessageText(newText){
        this.store.newMessageText = newText;
        this._callSubscriber(this.store)
    },
    subscribe(observer){
        this._callSubscriber = observer; //наблюдатель 
    },
    
}

export default newStore;
window.store = newStore;