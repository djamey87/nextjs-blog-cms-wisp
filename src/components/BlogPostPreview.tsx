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
              <p className="prose text-xs lg:prose-lg text-muted-foreground">
                {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
              </p>
              <h4 className="font-sans font-semibold text-primary">
                {post.title}
              </h4>
            </div>
          </CardContent>
        </Card>
      </Link>
      {post.tags.length === 0 ? null : (
        <div className="text-sm text-muted-foreground mt-4">
          {post.tags.map((tag) => (
            <div key={tag.id} className="mr-2 inline-block">
              <Link
                className={badgeVariants({ variant: "secondary" })}
                href={`/tag/${tag.name}`}
              >
                #{tag.name}
              </Link>
            </div>
          ))}
        </div>
      )}
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
        "grid grid-cols-1 gap-8 lg:gap-16 md:grid-cols-4 md:my-16 my-8",
        className
      )}
    >
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
