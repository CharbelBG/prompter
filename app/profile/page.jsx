'use client';

import {React, useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Profile from '@components/Profile';

export default function ProfilePage(){

    const {data:session} = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getuserPosts();
    },[session]);

    async function getuserPosts(){
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
        setPosts(data);
    }

    function handleEdit(){
        
    }

    async function handleDelete(){

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