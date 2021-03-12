const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi? how are you?', likesCount: 12},
        {id: 2, message: 'It`s my first post', likesCount: 10},
        {id: 3, message: 'i`m happy!', likesCount: 20}
    ],
    newPostText: 'new post',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let body = state.newPostText;
            return  {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 10, message: body, likesCount: 0}]
            };
        case  UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText};
        case SET_USER_PROFILE:{
            return {...state, profile:action.profile}
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})

export default profileReducer;