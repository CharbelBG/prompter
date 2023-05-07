'use client';

import styles from '../styles/promptCard.module.css';
import {React, useState} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter} from 'next/navigation';


export default function PromptCard({post, handleClickTag, handleEdit, handleDelete}){

    const {data:session} = useSession();
    console.log(post);

return(
<div className={styles.promptCard}>
    
    <span>
        {post.prompt}
    </span>

    <span>
        {post.tag}
    </span>

    <Image src={post.creator.image}
        alt='userimage'
        width={40}
        height={40}
    />

</div>
)
}