"use server";

import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export async function formSubmission(formData: FormData) {
  // This is a placeholder for the action function.
  // You can implement any server-side logic here if needed.

  const title = formData.get("title");
  const content = formData.get("content");  
    const url = formData.get("url");
  
    const {getUser}=getKindeServerSession();
    const user = await getUser();
    if (!user?.id) {
        throw new Error("User ID is required to create a blog post.");
    }
    if(!user){
        redirect("/api/auth/register")
    }
     await prisma.blogPosts.create({
        data: {
            title: title as string,
            content: content as string, 
            imageUrl: url as string,
            authorId: user.id,
            authorImage: user?.picture as string,
            authorName: user?.given_name as string,



            }
        })

 redirect("/dashboard");
}