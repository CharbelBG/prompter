'use client';

import {React, useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

export default function ProfilePage(){

    const {data:session} = useSession();
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    useEffect(()=>{
        getuserPosts();
    },[session]);

    async function getuserPosts(){
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
        setPosts(data);
    }
    function handleEdit(post){
        router.push(`update-prompt?id=${post._id}`);
    }

    async function handleDelete(post){
        const hasConfirmed = confirm('Arou you sure you want to delete this prompt?');
        if(hasConfirmed){
            try{
                await fetch(`/api/prompt/${post._id.toString()}`,{
                    method:'DELETE',
                });
                location.reload();
            }
            catch(e){
                console.log(e);
            }
        }
    }

return(
<div>
    <Profile
    name="my"
    desc = 'personal profile page'
    data={posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
</div>
)
}