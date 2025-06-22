import BlogPostCard from "@/components/general/BlogPostCard";
import prisma from "@/lib/prisma";
import { Suspense } from "react";
async function getData() {
  await new Promise((resolve)=>setTimeout(resolve,2000))

  const data=await prisma.blogPosts.findMany({
    select:{
      title: true,
      content: true,
      imageUrl: true,
      createdAt: true,
      updatedAt: true,
      authorImage: true,
      id: true,
      authorName: true,
      authorId:true

    }
  });
  return data;
}
export default  function Home() {
  
  return (
    <div className="py-8 px-3">
    <h1 className="text-3xl font-bold tracking-tight mb-8">Blog Posts</h1>

    <Suspense fallback={<p>...Waiting</p>}>
       <BlogPosts/>
    </Suspense>
   
    </div>
  );
}

async function BlogPosts() {
  const data=await getData()

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {data.map((post) => (
          <BlogPostCard data={post} key={post.id} />
        ))}
      </div>
  )
}