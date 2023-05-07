'use client';

import {React, useState, useEffect} from 'react';
import PromptCard from './PromptCard';
import styles from '../styles/feed.module.css';
 
export default function Feed(){

    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);

    async function handlesearch(e){
        e.preventDefault();
        console.log(e);
    }

    useEffect(()=>{
        getAllposts();
    },[]);

    async function getAllposts(){
        const response = await fetch('/api/prompt');
        const data = await response.json();
        console.log(data);
        setPosts(data);
    }

    const renderPosts = posts?.length > 0 ? 
    posts.map((post, index)=>{
        return <PromptCard key={index} post={post} />
    })
    : <>Looks that there are no posts yet..</>
    
return(
<section className={styles.feed}>
    <form>
        <input type="text"
        onChange={handlesearch} value={search} required
        placeholder='Search for a tag or a username' />
    </form>
    <div className={styles.postsWrapper}>
        {renderPosts}
    </div>    
     
</section>
)
}