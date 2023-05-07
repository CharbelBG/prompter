'use client';

import {React, useState} from 'react';
import styles from '../../styles/createPromt.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

export default function createPrompt(){
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
                
            });

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