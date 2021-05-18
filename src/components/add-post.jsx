import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import elonAva from '../img/avatar.jpg';
import { addPost } from '../store';


const AddPost = () => {
    const dispatch = useDispatch();

    const anakinAva = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
    const shepardAva = "https://static.wikia.nocookie.net/mass-effect-ultimate-fannon-fanfiction/images/6/6b/Tumblr_pawng3fwD61sif4wjo1_1280.jpeg/revision/latest?cb=20191208044905";
    const silverhandAva = "https://i.pinimg.com/originals/85/ad/f8/85adf800892ff6927077a0d54386bfa6.png";
    const kikiAva = "https://cs10.pikabu.ru/post_img/big/2020/07/08/12/1594238492247893898.png";

    const [text, setText] = useState('');
    const [userPhoto, setUserPhoto] = useState(elonAva);
    const [nickname, setNickname] = useState('@elonmusk');
    const [photoURL, setPhotoURL] = useState('');
    const [userName, setUserName] = useState('elon');

    const handleSelectOption = (e) => {
        setUserName(e.target.value);
        switch (e.target.value) {
            case 'elon':
                setUserPhoto(elonAva);
                setNickname('@elonmusk');
                break;
            case 'anakin':
                setUserPhoto(anakinAva);
                setNickname('@dart_vader');
                break;
            case 'shepard':
                setUserPhoto(shepardAva);
                setNickname('@SPECTR');
                break;
            case 'Jhonny Silverhand':
                setUserPhoto(silverhandAva);
                setNickname('@f*ck_arasaka');
                break;
            case 'kiki':
                setUserPhoto(kikiAva);
                setNickname('@butt-queen');
                break;
            default:
                setUserPhoto(elonAva);
                setNickname('@elonmusk');
                break;
        }
    }

    const handleChangeText = (e) => {
        setText(e.target.value);
    }

    const handlePhotoURL = (e) => {
        setPhotoURL(e.target.value);
    }

    const handleAddPost = () => {
        const fullDate = new Date();
        const day = fullDate.getUTCDate();
        const month = fullDate.getUTCMonth() + 1;
        const year = fullDate.getUTCFullYear();
        const parsingDate = `${day}/${month}/${year}`;
        const postData = {
            userAvatar: userPhoto,
            userName: userName,
            nick: nickname,
            date: parsingDate,
            userText: text,
            postImg: photoURL,
            footerRespIconContent: 23.9 + 'k',
            footerRetwIconContent: 170.1 + 'k',
            footerLikeIconContent: 1 + 'm'
        }
        dispatch(addPost(postData));
    }

    return (
        <div className='add-post-wrapper'>
            <input type="text" placeholder="Please input publications text" onChange={handleChangeText} className='text-input'></input>
            <input type="url" placeholder="Please paste publications image url" onChange={handlePhotoURL} className='url-input'></input>
            <select onClick={handleSelectOption} className='select-input'>
                <option disabled>Choose person</option>
                <option value="elon">Elon Musk</option>
                <option value="anakin">Anakin Skywalker</option>
                <option value="shepard">Jhon Shepard</option>
                <option value="Jhonny Silverhand">Jhonny Silverhand</option>
                <option value="kiki">Kiki Vhyce</option>
            </select>
            <button onClick={handleAddPost}>Add post</button>
        </div>
    )
};

export default AddPost;

  // const handleText = (e) => {
    //     return e.target.value;
    // }

    // const handleUrl = (e) => {
    //     return e.target.value;
    // }

    // const handleOption = (e) => {
    //     return e.target.value;
    // }

    // const getAvatar = () => {
    //     let select = document.querySelector('.select-input');
    //     if (select.value === 'elon') {
    //         return elonAva;
    //     } else if (select.value === 'anakin') {
    //         return anakinAva;
    //     } else if (select.value === 'shepard') {
    //         return shepardAva;
    //     } else if (select.value === 'silverhand') {
    //         return silverhandAva;
    //     } else if (select.value === 'kiki') {
    //         return kikiAva;
    //     }
    // }

    // const getNick = () => {
    //     let select = document.querySelector('.select-input');
    //     if (select.value === 'elon') {
    //         return '@elonmusk';
    //     } else if (select.value === 'anakin') {
    //         return '@dart_vader';
    //     } else if (select.value === 'shepard') {
    //         return '@SPECTR';
    //     } else if (select.value === 'silverhand') {
    //         return '@f*ck_arasaka';
    //     } else if (select.value === 'kiki') {
    //         return '@butt-queen';
    //     }
    // }

    // const hollowPost = {
    //     userAvatar: getAvatar,
    //     userName: handleOption,
    //     nick: getNick,
    //     date: new Date(),
    //     userText: handleText,
    //     postImg: handleUrl,
    //     footerRespIconContent: 23.9 + 'k',
    //     footerRetwIconContent: 170.1 + 'k',
    //     footerLikeIconContent: 1 + 'm'
    // }

    // const sendNewPost = () => {
    //     return dispatch(addPost(hollowPost));
    // }
