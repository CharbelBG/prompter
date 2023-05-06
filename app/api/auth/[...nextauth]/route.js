//we will be using next.js api
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){

    },
    async signIn({profile}){
        //each route is a serverless route, meaning it is a lambda funcntion, 
        try{

        }catch(e){

        }
    },
});

export {handler as GET, handler as POST};