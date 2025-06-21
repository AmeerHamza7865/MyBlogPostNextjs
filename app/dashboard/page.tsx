// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { get } from "http";
// import { redirect } from "next/navigation";

import BlogPostCard from "@/components/general/BlogPostCard";
import { buttonVariants } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

async function getData(UserId:string) {
  await new Promise((resolve)=>setTimeout(resolve,2000))
    const data=await prisma.blogPosts.findMany(
      {
        where:{
          authorId:UserId
        },
        orderBy:{
          createdAt:"desc"
        }
      }

    )

    return data
}

export default async function dashboard() {
 
    const {getUser}=getKindeServerSession()
    const user=await getUser()
    const result=await getData(user?.id as string)
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4 ">
        <h1 className="text-3xl font-semibold">Your Blog Article</h1>
        <Link className={buttonVariants()} href="/dashboard/create">Create Post</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          result.map((item)=>(
            <BlogPostCard data={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  );
}