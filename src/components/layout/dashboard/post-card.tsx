"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import UserAvatar from "../nav/user-avatar";
import { useRetrieveAccountQuery } from "@/lib/features/auth-endpoints";

interface PostCardProps {
  className?: string;
  data?: Post;
  isLoading?: boolean;
}

const PostCard = (props: PostCardProps) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const dateCreatedAt = new Date(props.data?.created_at!);
  return (
    <Card className={cn("flex flex-col gap-2", props.className)}>
      <CardHeader className="w-full flex gap-2 justify-between">
        <UserAvatar />
        <p className="text-xs">{dateCreatedAt.toDateString()}</p>
      </CardHeader>
      <CardContent>
        {props.data?.thumbnail && (
          <Image
            className="w-full max-h-[208px] object-cover rounded-md"
            alt="post-image"
            width={3}
            height={1}
            src={`${backendUrl}${props.data.thumbnail}`}
          />
        )}
        <div className="flex flex-col justify-center items-start gap-2 w-full">
          <h3 className="font-semibold text-violet-600">{`${dateCreatedAt.toDateString()}`}</h3>
          <h2 className="font-semibold">{props.data?.title}</h2>
          <p className="text-secondary">{props.data?.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
