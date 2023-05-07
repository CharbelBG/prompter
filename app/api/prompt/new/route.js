import {connectToDB} from '@utils/database';
import Prompt from '@models/prompts';


export const POST = async(req,res)=>{
    const {userId, prompt, tag} = await req.json();

    try{
        // since each route is a separate lamdba fucntion, we need to create each time an instance
        // of mongoDB.
        await connectToDB();
        const newPrompt = await Prompt.create({
            creator: userId,
            prompt,
            tag,
        })
        
        return new Response(JSON.stringify(newPrompt), {status:201});
    }catch(e){
        console.log(e);
        return new Response("failed to create a new prompt", {status:500});
    }

}