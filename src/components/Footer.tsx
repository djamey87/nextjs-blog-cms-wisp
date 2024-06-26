"use client";
import { FunctionComponent } from "react";
import { config } from "@/config";
import { SocialLinks } from "./SocialLinks";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="flex flex-col self-center items-center justify-between mt-8 md:mt-16 mb-12">
      <SocialLinks />
      <p className="text-sm text-muted-foreground mt-4">
        © {config.blog.author} {new Date().getFullYear()}
      </p>
    </footer>
  );
};
