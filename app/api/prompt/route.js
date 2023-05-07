import {connectToDB} from '@utils/database';
import Prompt from '@models/prompts';

export const GET = async(request) =>{
    
    try{
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');
        console.log(prompts);
        return new Response(JSON.stringify(prompts), {status:201});
    }
    catch(e){
        console.log(e);
        return new Response("Failed to fetch prompts", {status:500});
    }
}