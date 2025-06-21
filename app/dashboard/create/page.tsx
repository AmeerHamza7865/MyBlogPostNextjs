import { formSubmission } from "@/app/action";
import SubmitedButton from "@/components/general/SubmitedButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePost() {
  return (
    <div >
      <Card className="max-w-xl mx-auto mt-10 p-6">
        <CardHeader>
            <CardTitle>Create a New Post</CardTitle>
            <CardDescription>Write your post content here.</CardDescription>
        </CardHeader>
        <CardContent>
            <form className="flex flex-col gap-4" action={formSubmission} >
                <div className="flex flex-col gap-2">
                    <Label>Title</Label>
                    <Input name="title" type="text" required placeholder="Enter post title"/>
                </div>
                 <div className="flex flex-col gap-2">
                    <Label>Content</Label>
                    <Textarea name="content" required placeholder="Enter post content"/>
                </div>

                 <div className="flex flex-col gap-2">
                    <Label>Image Url</Label>
                    <Input name="url" type="url" required placeholder="Enter image URL"/>
                </div>
                <SubmitedButton/>

            </form>
        </CardContent>
      </Card>
    </div>
  );
}