import { connectToDB } from "@/utils/database";
import Prompt from '@/models/prompt'
export const dynamic = 'force-dynamic';

export const GET = async (request) => {
    try {
 
    await connectToDB();

    const prompts = await Prompt.find({}).populate('creator');

    console.log(prompts)
    return new Response(JSON.stringify(prompts),{
        status:200
    })

    } catch (error) {


        return new Response("Failed to fetch all prompts",{
            status:500
        })
    }
}
