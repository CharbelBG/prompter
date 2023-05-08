'use client';

import {React, useState, useEffect} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

export default function EditPrompt(){

    const searchParams = useSearchParams();
    const router = useRouter();
    const promptId = searchParams.get('id');
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt:'',
        tag:'',
    });

    useEffect(()=>{
        if(!promptId){
            router.push('/profile'); 
        }
        getPromptDetails();
    },[promptId]);

    async function getPromptDetails(){
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();
        setPost(data); 
    }

    async function updatePrompt(e){
        e.preventDefault();
        setSubmitting(true);
        try{
            const response = await fetch(`/api/prompt/${promptId}`,{
                method:'PATCH',
                body:JSON.stringify({
                    prompt:post.prompt,
                    tag:post.tag,
                })
            });
            console.log("Event Updated");

            setSubmitting(false);
        }catch(e){
            console.log(e);
        }
    }

return(
<div>
     <Form 
        type='Edit'
        post={post} 
        setPost={setPost}
        submitting = {submitting}
        handleSubmit = {updatePrompt}/>
</div>
)
}