import React from 'react';
import Link from 'next/link';
import styles from '../styles/form.module.css';

export default function Form({type,post,setPost, submitting, handleSubmit}){

return(
<section className={styles.form}>
    
    <h1 className='blueColor'>{type} Post</h1>
    <p>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powerred platform
    </p>
    <form onSubmit={handleSubmit}>
        <span>Your AI Prompt</span>
        <textarea 
            cols="30" rows="5" value={post.prompt} required 
            placeholder="Proompt the AI here..."
            onChange={(e)=>setPost({...post, prompt:e.target.value})}>
        </textarea>

        <span>Your tag</span>
        <input 
            value={post.tag} required
            placeholder="#tag"
            onChange={(e)=>setPost({...post, tag:e.target.value})} />
         
        <Link href='/' className={styles.cancel}>
            Cancel
        </Link>

        <button className={styles.submit} type='submit' disabled={submitting}>{type}</button>
    </form>

</section>
)
}