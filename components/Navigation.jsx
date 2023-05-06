'use client';
//since we are using reactHooks we need to define the use client
import {React, useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
import Link from 'next/link';

import Image from 'next/image';
import styles from '../styles/navigation.module.css';

export default function Navigation(){

    const {data:session} = useSession();

    const [providers, setProviders] = useState(null);
    // to sign in with 0auth or google
    useEffect(()=>{
        fetchProviders();
    },[]);
 
    async function fetchProviders(){
        let response = await getProviders();
        setProviders(response);
        console.log(response);
    }
 
return(
<nav className={styles.navigation}>
    <div>
        <Image src='/assets/images/logo.svg' alt='Proompt Logo' height={30} width={40} />
        <p>PROOMPTER</p>
    </div>
     
    {session?.user ?
        <div className={styles.headerBtns}>
        <Link href="/">
            Create Post
        </Link>
        <button type='button' onClick={signOut}>Sign Out</button>
        
        <Image src={session?.user.image} alt='profile' 
        height={30} width={40} className={styles.profile} />
        </div>
    : 
        <div className={styles.headerBtns}>
        {providers && Object.values(providers).map((provider)=>{
        return <button type='button' key={provider.name} onClick={()=> signIn(provider.id)}>
            Sign In
        </button> 
        })}
    </div >
    }
</nav>
)
}