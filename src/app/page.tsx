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
        {`Let's build something great together! or simply say words at each other.`}
      </p>
      <SocialLinks />

      <h2 className="font-bold mt-16 mb-4">{`Tech that I work with`}</h2>
      <ul className="inline-list">
        <li>Typescript</li>
        <li>Javascript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Remix</li>
        <li>Express</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>Shadcn</li>
        <li>C#</li>
        <li>Python</li>
        <li>Bun</li>
        <li>SQL</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>AWS</li>
        <li>Azure</li>
        <li>Vercel</li>
        <li>Expo EAS</li>
        <li>DigitalOcean</li>
        <li>Docker</li>
        <li>Appium</li>
        <li>Detox</li>
        <li>Cypress</li>
        <li>Jest</li>
        <li>Storybook</li>
        <li>Puppeteer</li>
        <li>Electron</li>
        <li>Redis</li>
        <li>Nginx</li>
        <li>Figma</li>
      </ul>
      <p className="italic mt-2 text-muted-foreground text-xs">
        This is not an exclusive list, as trends and environments change so too
        does this list.
      </p>

      <h2 className="font-bold mt-16 mb-4">{`Companies I have worked with`}</h2>
      <ul className="inline-list">
        <li>Ministry of Defence</li>
        <li>Intel</li>
        <li>Sony</li>
        <li>Sonos</li>
        <li>John Lewis</li>
        <li>Microsoft</li>
        <li>Currys PC World</li>
        <li>Cambridge University</li>
        <li>Gov.uk</li>
        <li>AXA</li>
        <li>Simplyhealth</li>
        <li>Vinehealth</li>
      </ul>

      {/* TODO: comment out until you have content Dave... */}
      {/* <h2 className="font-bold mt-16 mb-4">{`More words`}</h2>
      <p className="mt-4 mb-6">Some more words</p>

      <BlogPostsPreview posts={result.posts} />
      {result.pagination.totalPages === 1 ? null : (
        <BlogPostsPagination pagination={result.pagination} />
      )} */}
    </>
  );
};

export default Page;
