import { Linkedin, Github, Mail } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center mt-4">
      <ul className="float-left">
        <li className="float-left hover:bg-accent p-2 rounded-md">
          <a href="https://www.linkedin.com/in/djamey87/" target="_blank">
            <Linkedin size="36" />
          </a>
        </li>
        <li className="float-left ml-4 hover:bg-accent p-2 rounded-md">
          <a href="https://github.com/djamey87" target="blank">
            <Github size="36" />
          </a>
        </li>
        <li className="float-left ml-4 hover:bg-accent p-2 rounded-md">
          <a href="mailto:djamey87+hello@gmail.com?subject=Hello%20Dave">
            <Mail size="36" />
          </a>
        </li>
      </ul>
    </div>
  );
};
