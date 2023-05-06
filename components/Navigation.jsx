'use client';
//since we are using reactHooks we need to define the use client
import {React, useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/navigation.module.css';

export default function Navigation(){
return(
<nav className={styles.navigation}>
    <Image src='/assets/images/logo.svg' alt='Proompt Logo' height={30} width={40} />
    <p>PROOMPTER</p>
</nav>
)
}