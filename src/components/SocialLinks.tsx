import { Linkedin, Github, Mail } from "lucide-react";

type Props = {
  variant?: "body" | "footer";
};

export const SocialLinks = ({ variant = "body" }: Props) => {
  return (
    <div className="flex flex-row mt-4">
      <ul className="float-left">
        <li
          className={`float-left hover:bg-accent ${
            variant === "body" ? "pl-2 pr-4" : "px-3"
          } py-2 rounded-lg shadow-md dark:ring-accent dark:ring-2`}
        >
          <a
            href="mailto:djamey87+hello@gmail.com?subject=Hello%20Dave"
            className="flex items-center"
          >
            <Mail size="18" />
            {variant === "footer" ? null : (
              <span className="ml-2 leading-tight">Send me an email</span>
            )}
          </a>
        </li>
        <li className="float-left hover:bg-accent py-2 px-3 rounded-lg shadow-md ml-4 dark:ring-accent dark:ring-2">
          <a href="https://www.linkedin.com/in/djamey87/" target="_blank">
            <Linkedin size="18" />
          </a>
        </li>
        <li className="float-left ml-4 hover:bg-accent py-2 px-3 rounded-lg shadow-md dark:ring-accent dark:ring-2">
          <a href="https://github.com/djamey87" target="blank">
            <Github size="18" />
          </a>
        </li>
      </ul>
    </div>
  );
};
