import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SocialLinks } from "@/components/SocialLinks";
import { wisp } from "@/lib/wisp";
import { Linkedin, Github, Mail } from "lucide-react";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  // TODO: limit is obsolete atm, this needs review
  const result = await wisp.getPosts({ limit: 6, page });

  return (
    <>
      <h1 className="font-bold">Hello there! 👋</h1>

      <p className="mt-4">{`I'm Dave, an engineer now 14 years into the game (😬), remaining passioniate for blending optimal functionality and seamless design into mobile and web based applications.`}</p>

      <p className="mt-2">
        Based in the UK I enjoy clean code, innovative tech, process
        optimisation and bringing a touch of character to everything I build.
      </p>

      <p className="mt-4 mb-6">
        {`Let's build something great together! or simply say words at each other`}
      </p>
      <SocialLinks />

      <h2 className="font-bold mt-16 mb-4">{`More words`}</h2>
      {/* <p className="mt-4 mb-6">Some more words</p> */}

      <BlogPostsPreview posts={result.posts} />
      {result.pagination.totalPages === 1 ? null : (
        <BlogPostsPagination pagination={result.pagination} />
      )}
    </>
  );
};

export default Page;
