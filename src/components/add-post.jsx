import React from 'react';
import elonAva from '../img/avatar.jpg';
import { addPost } from '../store';



export const AddPost = () => {


    const anakinAva = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
    const shepardAva = "https://static.wikia.nocookie.net/mass-effect-ultimate-fannon-fanfiction/images/6/6b/Tumblr_pawng3fwD61sif4wjo1_1280.jpeg/revision/latest?cb=20191208044905";
    const silverhandAva = "https://i.pinimg.com/originals/85/ad/f8/85adf800892ff6927077a0d54386bfa6.png";
    const kikiAva = "https://cs10.pikabu.ru/post_img/big/2020/07/08/12/1594238492247893898.png";


    const handleText = (e) => {
        return e.target.value;
    }

    const handleUrl = (e) => {
        return e.target.value;
    }

    const handleOption = (e) => {
        return e.target.value;
    }

    const getAvatar = () => {
        let select = document.querySelector('.select-input');
        if (select === 'Elon Musk') {
            return elonAva;
        } else if (select === 'Anakin Skywalker') {
            return anakinAva;
        } else if (select === 'Jhon Shepard') {
            return shepardAva;
        } else if (select === 'Jhonny Silverhand') {
            return silverhandAva;
        } else if (select === 'Kiki Vhyce') {
            return kikiAva;
        }
    }

    const getNick = () => {
        let select = document.querySelector('.select-input');
        if (select === 'Elon Musk') {
            return '@elonmusk';
        } else if (select === 'Anakin Skywalker') {
            return '@dart_vader';
        } else if (select === 'Jhon Shepard') {
            return '@SPECTR';
        } else if (select === 'Jhonny Silverhand') {
            return '@f*ck_arasaka';
        } else if (select === 'Kiki Vhyce') {
            return '@butt-queen';
        }
    }

    const hollowPost = {
        userAvatar: getAvatar,
        userName: handleOption,
        nick: getNick,
        date: new Date(),
        userText: handleText,
        postImg: handleUrl,
        footerRespIconContent: 23.9 + 'k',
        footerRetwIconContent: 170.1 + 'k',
        footerLikeIconContent: 1 + 'm'
    }



    return (
        <div className='add-post-wrapper'>
            <input type="text" placeholder="Please input publications text" onChange={handleText} className='text-input'></input>
            <input type="url" placeholder="Please paste publications image url" onChange={handleUrl} className='url-input'></input>
            <select onClick={handleOption} className='select-input'>
                <option disabled>Choose person</option>
                <option value="elon">Elon Musk</option>
                <option value="anakin">Anakin Skywalker</option>
                <option value="shepard">Jhon Shepard</option>
                <option value="silverhand">Jhonny Silverhand</option>
                <option value="kiki">Kiki Vhyce</option>
            </select>
            <button onClick={addPost}>Add post</button>
        </div>
    )
};

