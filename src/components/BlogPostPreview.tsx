"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
}> = ({ post }) => {
  console.log("testing", JSON.stringify(post));
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden hover:ring-2">
        <div className="aspect-[3/4] relative">
          <Image
            alt={post.title}
            className="object-cover"
            src={post.image || "/images/placeholder.webp"}
            fill
          />
        </div>
        <CardContent className="pb-0">
          <div className="grid grid-cols-1 gap-2 md:col-span-2 my-2">
            <h4 className="font-sans font-semibold tracking-tighter text-primary">
              {post.title}
            </h4>
            <p className="prose text-sm lg:prose-lg tracking-tighter text-muted-foreground">
              {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
            </p>
          </div>
        </CardContent>
        {/* <CardFooter>
          <div className="text-sm text-muted-foreground">
            {post.tags.map((tag) => (
              <div key={tag.id} className="mr-2 inline-block">
                <Link href={`/tag/${tag.name}`}>#{tag.name}</Link>
              </div>
            ))}
          </div>
        </CardFooter> */}
      </Card>
    </Link>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-3 md:my-16 my-8",
        className
      )}
    >
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
