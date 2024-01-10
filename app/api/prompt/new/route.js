import { connectToDB } from "@/utils/database";
import Prompt from '@/models/prompt'


export async function POST (request) {


    const { userId, prompt, tag } = await request.json();

    // console.log("yaha aya madarchod",userId)
    try {
        await connectToDB();

        const newPrompt= new Prompt({
            creator:userId,tag,prompt
        })

        await newPrompt.save();


        return new Response(JSON.stringify(newPrompt),{
            status : 201,
        })
    } catch (error) {

        return new Response('Failed to create prompt',{
            status : 500,
        })
    }

}


// export default Post;