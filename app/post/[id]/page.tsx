import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import prisma from "@/lib/prisma"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

async function getdata(id: string) {
    const data = await prisma.blogPosts.findUnique(
        {
            where: {
                id: id
            }
        }

    )

    if (!data) {
        return notFound()
    }
    return data
}

type Params = Promise<{ id: string }>

export default async function IdPage({ params }: { params: Params }) {

    const { id } = await params;

    const data = await getdata(id)
   
    return (
        <div className="max-w-4xl mx-auto py-8 px-6">

            <Link className={buttonVariants({ variant: "secondary" })} href={"/"}>back to Posts</Link>

            <div className="mb-8 mt-6">

                <h1 className="text-3xl font-bold tracking-tight mb-4">{data?.title}</h1>

                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-3">
                        <div className="relative size-9 overflow-hidden rounded-full">
                            <Image src={data.authorImage} className="object-cover" alt={data.authorName} fill />
                        </div>
                        <p className="font-medium">{data.authorName}</p>

                    </div>
                    <p className="text-sm text-gray-500">
                        {
                            new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            }).format(data.createdAt)
                        }
                    </p>
                </div>

                <div className="relative w-full mb-20 bg-gray-100 rounded-lg">
                    {data.imageUrl ? (
                        <Image
                            src={data.imageUrl}
                            alt={data.title || "Post image"}
                            width={500}
                            height={430}
                            className="object-cover mt-20 h-auto rounded-lg"
                            
                            
                        />
                    ) : (
                        <div className="aspect-video grid place-items-center text-gray-500">
                            Image not available
                        </div>
                    )}
                </div>
            </div>
            <Card>
                <CardContent>
                    <p>{data.content}</p>
                </CardContent>
            </Card>
        </div>
    )
}