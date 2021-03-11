import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reduser";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi? how are you?', likesCount: 12},
                {id: 2, message: 'It`s my first post', likesCount: 10},
                {id: 3, message: 'i`m happy!', likesCount: 20}
            ],
            newPostText: 'new post'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Svitlana'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Dima'}
            ],
            messages: [
                {id: 1, message: 'Hi, Svitlana'},
                {id: 2, message: 'Hi, Sasha'},
                {id: 3, message: 'Hi, Dima'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sitebar = sidebarReducer(this._state.sitebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;