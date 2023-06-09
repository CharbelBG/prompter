import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import {connectToDB} from '@utils/database';
import User from '@models/user';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks:{
        async session({session}){
            const sessionUser = await User.findOne({email:session.user.email});
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({profile}){
            //each route is a serverless route, meaning it is a lambda funcntion
            try{
                await connectToDB();
              
                const userExists = await User.findOne({email:profile.email});
                //if not create a new user and save it to the db.
                
                if(!userExists){
                    await User.create({
                    email: profile.email,
                    username:profile.name.replaceAll(" ","").toLowerCase(),
                    image:profile.picture,
                    })
                }

                return true;
            }catch(e){
                console.log(e);
                return false;
            }
        },
    },
});

export {handler as GET, handler as POST};