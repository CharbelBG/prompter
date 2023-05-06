'use client';
//since we are using reactHooks we need to define the use client
import {React, useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
import Link from 'next/link';

import Image from 'next/image';
import styles from '../styles/navigation.module.css';

const isUserLoggedIn = true;


export default function Navigation(){
return(
<nav className={styles.navigation}>
    <div>
        <Image src='/assets/images/logo.svg' alt='Proompt Logo' height={30} width={40} />
        <p>PROOMPTER</p>
    </div>
     
    {isUserLoggedIn ? 
    <div className={styles.headerBtns}>
    <Link href="/">
        Create Post
    </Link>
    <button type='button' onClick={signOut}>Sign Out</button>
    {/* we can load here the user image from google sign in */}
    <Image src='/assets/images/logo.svg' alt='profile' height={30} width={40} className={styles.profile} />
    </div> : <div className={styles.headerBtns}>
            <button onClick={signIn}>Sign In</button>
    </div> }
</nav>
)
}