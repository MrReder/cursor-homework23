import React from 'react';
import './add-post.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import elonAva from '../img/avatar.jpg';
import { addPost } from '../store';


const AddPost = () => {
    const dispatch = useDispatch();

    const anakinAva = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
    const shepardAva = "https://i.pinimg.com/originals/a7/e8/f3/a7e8f34c2523402796d236120673e0de.jpg";
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
            case 'Elon Musk':
                setUserPhoto(elonAva);
                setNickname('@elonmusk');
                break;
            case 'Anakin Skywalker':
                setUserPhoto(anakinAva);
                setNickname('@dart_vader');
                break;
            case 'Jhon Shepard':
                setUserPhoto(shepardAva);
                setNickname('@SPECTR');
                break;
            case 'Jhonny Silverhand':
                setUserPhoto(silverhandAva);
                setNickname('@f*ck_arasaka');
                break;
            case 'Kiki Vhyce':
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
                <option value="Elon Musk">Elon Musk</option>
                <option value="Anakin Skywalker">Anakin Skywalker</option>
                <option value="Jhon Shepard">Jhon Shepard</option>
                <option value="Jhonny Silverhand">Jhonny Silverhand</option>
                <option value="Kiki Vhyce">Kiki Vhyce</option>
            </select>
            <button onClick={handleAddPost} style={{ marginBottom: 20 }}>Add post</button>
        </div>
    )
};

export default AddPost;


