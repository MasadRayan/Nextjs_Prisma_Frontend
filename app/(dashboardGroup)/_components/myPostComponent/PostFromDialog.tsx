"use client"
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { NewsItem } from '@/lib/types';
import { PencilIcon, PlusIcon } from 'lucide-react';
import React, { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner';

type PostDFromDialogProps = {
    mode: "create" | "edit";
    post?: NewsItem;
}

const PostFromDialog = ( {mode, post}: PostDFromDialogProps) => {

    const [open, setOpen] = useState(false);
    const action = mode === "edit" && post ? () => {} : () => {};

    const [state, formAction, pending] = useActionState(action, null) as any;

    useEffect( () => {
        if (!state) {
            return
        }
        if (state.success) {
            toast.success(state.message || (mode === "create" ? "Post created successfully!" : "Post updated successfully!"));
            setOpen(false);
        }
        else {
            toast.error(state.message || (mode === "create" ? "Failed to create post. Please try again." : "Failed to update post. Please try again."));
        }
    },[state])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {
                    mode === "edit" ? (
                        <Button variant="outline" size="sm">
                            <PencilIcon data-icon="inline-start" />
                            Edit
                        </Button>
                    ) : (
                        <Button>
                            <PlusIcon data-icon="inline-start" />
                            Create Post
                        </Button>
                    )
                }
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        {mode === "edit" ? "Edit Post" : "Create Post"}
                    </DialogTitle>
                </DialogHeader>
                <form action={formAction} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title" defaultValue={post?.title} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                            id="content"
                            name="content"
                            defaultValue={post?.content}
                            required
                            className="min-h-32"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="thumbnail">Thumbnail URL</Label>
                        <Input
                            id="thumbnail"
                            name="thumbnail"
                            defaultValue={post?.thumbnail ?? ""}
                            placeholder="https://..."
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="tags">Tags (comma separated)</Label>
                        <Input
                            id="tags"
                            name="tags"
                            defaultValue={post?.tags?.join(", ")}
                            placeholder="tech, sports"
                        />
                    </div>
                    <Label className="flex items-center gap-2">
                        <Checkbox name="isPremium" defaultChecked={post?.isPremium} />
                        Mark as premium content
                    </Label>
                    <DialogFooter>
                        <Button type="submit" disabled={pending}>
                            {pending ? "Saving..." : mode === "edit" ? "Save Changes" : "Create Post"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
  )
}

export default PostFromDialog
