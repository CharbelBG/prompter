import {connectToDB} from '@utils/database';
import Prompt from '@models/prompts';

export const GET = async(request, {params}) =>{  
    try{
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');
        if(!prompt){
            return new Response("Prompt not found", {status:404});
        }
        return new Response(JSON.stringify(prompt), {status:201});
    }
    catch(e){
        console.log(e);
        return new Response("Failed to fetch prompts", {status:500});
    }
}

export const PATCH = async(request, {params}) =>{
    
    const {prompt, tag} = await request.json();

    try{
        await connectToDB();
        const existingPompt = await Prompt.findById(params.id);
        if(!existingPompt){
            return new Response('Prompt not found', {status:404});
        }
        existingPompt.prompt = prompt;
        existingPompt.tag = tag;
        await existingPompt.save();
        return new Response(JSON.stringify(existingPompt), {status:201});
    }   
    catch(e){
        console.log(e);
        return new Response("Failed to update prompt", {status:500});
    }
}

export const DELETE = async (reqest, {params}) =>{
    try{
        await connectToDB();
        await Prompt.findByIdAndRemove(params.id); 
        return new Response('prompt removed', {status:200});
    }       
    catch(e){
        console.log(e);
        return new Response('Failed to delete', {status:500});
    }
}