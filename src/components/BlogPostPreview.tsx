"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { badgeVariants } from "@/components/ui/badge";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
}> = ({ post }) => {
  return (
    <div>
      <Card className="overflow-hidden relative">
        <div className="aspect-[3/4]">
          <Image
            alt={post.title}
            className="object-cover"
            src={post.image || "/images/placeholder.webp"}
            fill
          />
        </div>
        <div className="absolute top-0 p-2">
          {post.tags.length === 0 ? null : (
            <div className="text-sm text-muted-foreground">
              {post.tags.map((tag) => (
                <div key={tag.id} className="mr-2 inline-block">
                  <Link
                    className={`${badgeVariants({
                      variant: "default",
                    })} opacity-70`}
                    href={`/tag/${tag.name}`}
                  >
                    {tag.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
      <Link href={`/blog/${post.slug}`} className="hover:underline">
        <div className="grid grid-cols-1 gap-2 md:col-span-2 my-2">
          <p className="text-xs text-muted-foreground">
            {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
          </p>
          <h4 className="font-sans font-semibold text-primary">{post.title}</h4>
        </div>
      </Link>
    </div>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 md:grid-cols-3 place-content-around",
        className
      )}
    >
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
