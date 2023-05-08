'use client';

import styles from '../styles/promptCard.module.css';
import {React, useState} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter} from 'next/navigation';


export default function PromptCard({post, handleClickTag, handleEdit, handleDelete}){

    const {data:session} = useSession();
    const [copied,setCopied] = useState('');
    const pathName = usePathname();
    const router = useRouter();

    function handleCopy(){
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(()=>{
            setCopied("");
        },3000);
    }
     
return(
<div className={styles.promptCard}>

    <section>
    <Image
        className={styles.profileImg}
        src={post.creator.image}
        alt='userimage'
        width={40}
        height={40}/> 
        
        <div>
            <span>{post.creator.email}</span>  
            <span>{post.creator.username}</span>
        </div>
        
        <Image
            onClick={handleCopy}
            className={styles.copy}    
            src={copied === post.prompt ?
                '/assets/icons/tick.svg' :
                '/assets/icons/copy.svg'
            }
            width={15}
            height={15}
            alt='copy'
        />
    </section>

    <span>
        {post.prompt}
    </span>

    <span>
        {post.tag}
    </span>
    
    {(post.creator._id === session.user.id) && pathName==='/profile' ? 
    <div className={styles.postActions}>
        <span onClick={()=>handleEdit(post)}>Edit</span>
        <span onClick={()=>handleDelete(post)}>Delete</span>
    </div> : '' }

</div>
)
}