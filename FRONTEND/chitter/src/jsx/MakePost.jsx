import React from 'react';
import '../css/MakePost.css';
import axios from 'axios';
import { useState } from 'react';



const MakePost = ({ setChange, currentUser }) => {

    const [message, setMessage] = useState('');
    const [chitterPost, setChitterPost] = useState({
        postBody: ``
    });


    const handleChange = e => {
        const { name, value } = e.target;
        setChitterPost({
            ...chitterPost,
            [name]: value
        });
        setMessage('');
    }



    const postChitterPosts = async (e) => {
        e.preventDefault();
        const { postBody } = chitterPost;
        const { firstName, secondName, userName } = currentUser;
        const post = { firstName: firstName, secondName: secondName, userName: userName, postBody: postBody };
        if (postBody) {
            const res = await axios.post(`http://localhost:4000/chitterPosts`, post);
            setMessage(res.data.message);
            setChange(true);
            setChitterPost({ postBody: `` });
            return;
        }
        setMessage('Invalid input');
    }







    return (
        <>
            <div className="App">
                <div>Hi! {currentUser.firstName} {currentUser.secondName} </div>
                <div>{currentUser.userName} </div> <br />
                <form onSubmit={postChitterPosts}>
                    <textarea id='postBox' name="postBody" value={chitterPost.postBody} cols="40" rows="5" placeholder='Enter your Post here' onChange={handleChange} required></textarea>
                    {message && <div id='postMessage'><small>{message}</small></div>}
                    <button data-testid='submit' id='submit' type="submit"  >Post</button>
                </form>
            </div>
        </>
    );
}



export default MakePost;