"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar } from "./Avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ThemeToggle from "@/components/ThemeToggle";

export default function ProfileHeader() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vraut3468@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-start items-start justify-between gap-3 sm:gap-4 pt-2">
      <div className="flex items-center gap-4">
        {/* Avatar placeholder — initials */}
        <Avatar />
        <div>
          <div className="flex items-center gap-2.5">
            <h1
              className="text-foreground text-2xl sm:text-3xl md:text-4xl tracking-[0.01em] leading-tight"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Aditya Rajendera Raut
            </h1>

            {/* Authentic X verified badge */}
            <svg
              viewBox="0 0 22 22"
              aria-label="Verified"
              className="mt-1 size-5 sm:size-6 md:size-7 shrink-0"
            >
              <path
                fill="#1d9bf0"
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.972.854-1.245 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.083 1.897-.144.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816z"
              />
              <path
                fill="#fff"
                d="M9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
              />
            </svg>
          </div>

          <p className="text-dim-foreground text-base mt-0.5">
            I build things ·{" "}
            <button
              onClick={copyEmail}
              className="text-dim-foreground hover:text-muted-foreground transition-colors cursor-pointer"
              title="Copy email"
            >
              vraut3468@gmail.com
            </button>{" "}
            <span
              onClick={copyEmail}
              className="inline-block cursor-pointer hover:text-muted-foreground transition-colors text-dim-foreground"
              title={copied ? "Copied!" : "Copy email"}
            >
              {copied ? "✓" : "⎘"}
            </span>
          </p>

          <p className="text-muted-foreground mt-1 shimmer-text text-lg">
            22. Full Stack Developer
          </p>
        </div>
      </div>

      {/* Links icon row */}
      <TooltipProvider delayDuration={200}>
        <div className="flex items-center gap-1.5 sm:gap-3 mt-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/arrautx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dim-foreground hover:text-muted-foreground transition-colors text-lg inline-flex items-center justify-center size-11 sm:size-auto"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://x.com/A9449Raut"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dim-foreground hover:text-muted-foreground transition-colors inline-flex items-center justify-center size-11 sm:size-auto"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 5.857zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>Twitter / X</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/aditya-raut-%E2%9A%A1-6b7988215/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dim-foreground hover:text-muted-foreground transition-colors inline-flex items-center justify-center size-11 sm:size-auto"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>LinkedIn</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/resume"
                className="text-dim-foreground hover:text-muted-foreground transition-colors text-xs border border-border rounded hover:border-border-strong inline-flex items-center min-h-11 sm:min-h-0 px-3 sm:px-2 py-2 sm:py-1"
              >
                CV
              </Link>
            </TooltipTrigger>
            <TooltipContent>Resume</TooltipContent>
          </Tooltip>

          <ThemeToggle />
        </div>
      </TooltipProvider>
    </div>
  );
}
