import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

I'm Dave, an engineer now 14 years into the game (😬), remaining passioniate for blending optimal functionality and seamless design into mobile and web based applications.

Based in the UK I enjoy clean code, innovative tech, process optimisation and bringing a touch of character to everything I build.

## My Journey

I started out in design before moving to software engineering, and throughout all the roles since I have managed to cling on to small elements of design.

My engineering experience began in the days when Adobe Flash and Actionscript were king of the internet, which was great fun and allowed me to apply design and animation skills alongside coding abilities, and it all started with an AS3 bootcamp.
I initially worked through agencies and consultancy firms which gave me some great exposure to many different types of clients and products.

As an avid reader of "smashing magazine", ".net" and other popular magazines at the time, curiosity and excitement grew for the capabilities of node.js (and javascript generally) and as soon as I dipped my toe into these waters the rest was history.
I used gulp.js to automate everything (building rudimentary CI/CD pipelines before I knew it was a thing), nw.js to build all the applications I could and ionic with cordova (way back when) for very early stage mobile apps.

I navigated my way through companies gravitating toward product focused companines to focus on specific domains.

As I have progressed, engineering has become less of an all-encompassing focus for me and more of a tool I can wield to achieve a goal. It sits comfortably alongside design, leadership, communication, organisation and other skill sets I have acquired (and continue to).


## What I Do
Areas I cover while onboard:

- Full-Stack development
- Systems architecture
- Mobile engineering
- Proof of Concept development
- Low fidelity design
- Prototyping
- Mobbing / pair programming facilitation
- Mentoring
- 1:1's
- Communication and lifecycle processes
- Stakeholder management
- Product ownership
`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Dave",
    openGraph: {
      title: "About Me",
      description: "Learn more about Dave",
      images: [
        signOgImageUrl({
          title: "Dave",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="prose dark:prose-invert blog-content">
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default Page;
