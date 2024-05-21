import { redirect } from 'next/navigation'
import React from 'react'
import  prisma  from "@/package/db/prisma/db"
import { currentUser } from '@clerk/nextjs/server'

const createNewUser = async()=>{
  const user = await currentUser();

  const match = await prisma.user.findUnique({
    where:{
      clerkId: user?.id as string
    }
  })

  if(!match){
    try {
      const newuser = await  prisma.user.create({
        data:{
          clerkId: user?.id as string,
          email: user?.primaryEmailAddress?.emailAddress ,
          entries: {create:[]},
        }
      })
      console.log(newuser)
      
    } catch (error) {
      console.log(error);
      return;
      
    }
    
  }


  redirect('/journal');


}


async function page() {
  await createNewUser()

  return (
    <div>
    </div>

  )
}

export default page
