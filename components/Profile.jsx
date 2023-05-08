import React from 'react';
import styles from '../styles/profile.module.css';
import PromptCard from './PromptCard';

export default function Profile({name, desc, data,handleEdit, handleDelete}){
    
    const renderPosts = data?.length > 0 ? 
    data.map((post, index)=>{
        return <PromptCard key={index} post={post} />
    })
    : <>Looks that there are no posts yet..</>

return(
<div className={styles.profile}>
    <h1>{name} Profile</h1>
    <p>{desc}</p>

    <div className={styles.cardsWrapper}>
        {renderPosts}
    </div>

</div>
)
}