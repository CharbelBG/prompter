'use client';

import {React, useState} from 'react';
import styles from '../../styles/createPromt.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

export default function createPrompt(){

    const {data:session} = useSession();
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt:'',
        tag:'',
    });


    async function createPrompt(e){
        e.preventDefault();
        setSubmitting(true);
        
        try{
            const response = await fetch('/api/prompt/new',{
                method:'POST',
                body:JSON.stringify({
                    prompt:post.prompt,
                    userId:session?.user.id,
                    tag:post.tag
                })
            });
            console.log("Event Created");
        }catch(e){
            console.log(e);
        }
    }

return(
<div>
     <Form 
        type='Create'
        post={post} 
        setPost={setPost}
        submitting = {submitting}
        handleSubmit = {createPrompt} />
</div>
)
}