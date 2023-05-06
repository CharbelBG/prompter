import React from 'react';
import Feed from '@components/Feed';

export default function Home(){

return(
<section className='header'>
    <h1>Discover & Share</h1>
    <span className='orangeColor'>AI-Powered Prompts</span>
    <p>
        Proompter is an open-source AI <span className='greenColor'>proompting</span> tool for modern world to <span className='blueColor'>discover</span>, create and share creative proompts
    </p>
    
    <Feed />

</section>
)
}