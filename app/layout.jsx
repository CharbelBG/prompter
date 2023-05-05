import { React} from 'react';
import "@styles/globals.css";

export const metadata = {
    title: "prompt",
    description: "Discover & Share AI prompts"
}



//The layout will be wrapped around everything in the app.
export default function RootLayout({children}){

return(
<html lang='en'>
    <body>
        <div className='main'>
            <div className='gradient' />
            
            <main className='app'>
                {children}
            </main>

        </div>
    </body>
</html>
)
}