import { WindowName } from "@/app/context/WindowContext";

type ExecuteArgs = {
  command: string;
  openWindow: (name: WindowName) => void;
};

export function executeCommand({
  command,
  openWindow,
}: ExecuteArgs): string {
  switch (command) {
    case "help":
      return `Available Commands

help
profile
projects
contact
skills
about
resume
github
linkedin
clear`;

    case "profile":
      openWindow("profile");
      return "Opening Profile...";

    case "projects":
      openWindow("projects");
      return "Opening Projects...";

    case "contact":
      openWindow("contact");
      return "Opening Contact...";

    case "terminal":
      openWindow("terminal");
      return "";

    case "about":
      return `
Jyoti Ranjan Sahoo

Full Stack Developer

Next.js
React
Node.js
MongoDB
Express
Tailwind CSS
`;

    case "skills":
      return `
Frontend
---------
Next.js
React
Tailwind

Backend
---------
Node
Express
MongoDB
JWT
`;

    case "resume":
      window.open("/resume.pdf");
      return "Downloading Resume...";

    case "github":
      window.open(
        "https://github.com/jyotiranjansahooo",
        "_blank"
      );
      return "Opening GitHub...";

    case "linkedin":
      window.open(
        "https://www.linkedin.com/in/jyoti-ranjan-sahoo-80bb6a36a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "_blank"
      );
      return "Opening LinkedIn...";

    default:
      return `Command not found: ${command}`;
  }
}