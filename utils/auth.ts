// import { useAuth } from "@clerk/nextjs"
import prisma from "@/package/db/prisma/db";
import { auth } from "@clerk/nextjs/server"

const getUserByClerkId = async() =>{
    const {userId} = await auth();

    const user = await prisma.user.findUniqueOrThrow({
        where: {
            clerkId:userId as string,
            
        }
        
    })

    return user;

}

export default getUserByClerkId