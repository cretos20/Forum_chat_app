import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "r2faf6ddg855";
const api_secret = "4njzb9zjte83barg4bm2t63aqkknw934v7xurhjhhygsmm9yjx6vq47vtgnrhfva";
// const user_id = "user_2zjt74SpZT00jspH0e6b2O3NTUW";
export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED", token)
    const client = await clerkClient()
    await serverClient.upsertUser({ id: user.data.id })

    await client.users.updateUserMetadata(user.data.id, {
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
