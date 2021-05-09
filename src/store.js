import { createStore } from 'redux';
import { Post } from './components/post';
import './App.css';
import elonAva from './img/avatar.jpg';
import elonPostImg from './img/elonPostImg.jpg';
import { AddPost } from './components/add-post';

const anakinAva = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const anakinPostImg = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const postsList = [
    {
        userAvatar: elonAva,
        userName: 'Elon Musk',
        nick: '@elonmusk',
        date: '4 feb.',
        userText: 'ur welcome',
        postImg: elonPostImg,
        footerRespIconContent: 23.9 + 'k',
        footerRetwIconContent: 170.1 + 'k',
        footerLikeIconContent: 1 + 'm'
    },
    {
        userAvatar: anakinAva,
        userName: 'Anakin Skywalker',
        nick: '@dart_vader',
        date: '10 apr',
        userText: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
        postImg: anakinPostImg,
        footerRespIconContent: 40 + 'k',
        footerRetwIconContent: 454 + 'k',
        footerLikeIconContent: 1.15 + 'm'
    }
]

export const Posts = () => {
    return (
        <div className="App">
            <AddPost />
            {postsList.map((post, index) => <Post {...post} key={index} />)},
        </div>
    );
}



const initialState = {
    postsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "load_posts":
            return {
                ...state,
            };
        case "add_post":
            return {
                ...state,
            };
        default:
            return state;
    }
};

export const loadPosts = () => ({
    type: "load_posts"
});

export const addPost = (value) => ({
    type: "add_post",
    payload: value,
});

export const store = createStore(reducer);

export default store;