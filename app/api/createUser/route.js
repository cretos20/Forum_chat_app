import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";
export const dynamic = "force-dynamic";


const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// const user_id = "user_2zjt74SpZT00jspH0e6b2O3NTUW";
export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();

    if (!user?.data?.id) {
        return new Response("User ID missing", { status: 400 });
    }

    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED", token)

    await serverClient.upsertUser({ id: user.data.id })
    await clerkClient.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token,
        },
    });

    const slugs = ["python-chat-new", "js-chat-new", "react-chat-new", "css-chat-new", "web-chat-new"];

    slugs.forEach(async (item) => {
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(item) + " Discussion",
            created_by_id: user.data.id
        });
        await channel.create()
        channel.addMembers([user.data.id])
    });


    return Response.json({ message: 'Hello World' });
}