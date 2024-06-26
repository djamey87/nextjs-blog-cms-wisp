import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  // TODO: limit is obsolete atm, this needs review
  const result = await wisp.getPosts({ limit: 6, page });

  return (
    <div className="container mx-auto px-5 mb-10 flex flex-col">
      <Header />
      <main>
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
