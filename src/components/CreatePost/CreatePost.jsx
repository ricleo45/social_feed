import React, { useState } from 'react';
import './CreatePost.css';

const CreatePostForm = (props) => {
    
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
        props.addNewPostProperty(newEntry);
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input placeholder='Name' className='textEntry' type='text' value={name} onChange={(event) => setName((event.target.value))} />
            <input placeholder='Post' className='textEntry' type='text' value={post} onChange={(event) => setPost((event.target.value))} />
            <br></br>
            <button className='button' type='submit'>Create</button>
        </form>
    )
}

export default CreatePostForm;
