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

  // TODO: use a centralised layout component
  return (
    <div className="container mx-auto px-5 min-h-screen flex flex-col justify-between">
      <Header />
      <main className="md:max-w-prose mx-auto">
        <h2 className="font-merri">Hello there! 👋</h2>

        <p className="mt-4">{`I'm Dave, an engineer now 14 years into the game (😬), remaining passioniate for blending optimal functionality and seamless design into mobile and web based applications.`}</p>

        <p className="mt-2">
          Based in the UK I enjoy clean code, innovative tech, process
          optimisation and bringing a touch of character to everything I build.
        </p>

        <h2 className="font-merri mt-16">{`Let's connect! 🤝`}</h2>
        <p className="mt-4">
          We can build something great! Or simply say words at each other, I am
          happy with either.
        </p>

        {/* social links */}
        <SocialLinks />

        <h2 className="font-merri mt-16 mb-4">{`More words 📖`}</h2>

        <BlogPostsPreview posts={result.posts} />
        {result.pagination.totalPages === 1 ? null : (
          <BlogPostsPagination pagination={result.pagination} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Page;
