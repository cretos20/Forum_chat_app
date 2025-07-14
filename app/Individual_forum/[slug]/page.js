import Single_chat from '@/components/Single_chat';
import { currentUser } from '@clerk/nextjs/server'

export default async function page({ params }) {
    const user =await currentUser()
    const slug = (await params).slug
    return <Single_chat slug={slug} clerkUser={{id: user.id, name: user.firstName, token: user.publicMetadata.token}} />;
}