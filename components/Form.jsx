import React from 'react';
import Link from 'next/link';
import styles from '../styles/form.module.css';

export default function Form({type,post,setPost, submitting, handleSubmit}){

return(
<section className={styles.form}>
    
    <h1 className='blueColor'>{type} Post</h1>
    <p>
        {type} and share amazing propmpts wiht the world, and let you imagination run wild with any AI-powerred platform
    </p>
    <form handleSubmit={handleSubmit}>
        <span>Your AI Prompt</span>
        <textarea cols="30" rows="10" value={post.prompt} 
        placeholder="Proompt the AI here..."
        onChange={(e)=>setPost({...post, prompt:e.target.value})}>

        </textarea>
    </form>    

</section>
)
}