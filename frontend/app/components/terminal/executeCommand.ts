import { WindowName } from "@/app/context/WindowContext";

type Props = {
  command: string;
  openWindow: (name: WindowName) => void;
};

export function executeCommand({
  command,
  openWindow,
}: Props) {
  const cmd = command.trim();

  switch (cmd) {
    case "help":
      return `Available Commands

help
about
skills
projects
profile
contact
resume
ls
cls
project
pwd
clear
github
linkedin`;

    case "ls":
      return `Desktop

Projects

Resume.pdf

Contact.txt`;

    case "pwd":
      return "/home/jyoti";

    case "profile":
      openWindow("profile");
      return "Opening Profile...";

    case "projects":
      openWindow("projects");
      return "Opening Projects...";
      
    case "project":
      openWindow("projects");
      return "Opening Projects...";

    case "contact":
      openWindow("contact");
      return "Opening Contact...";

    case "resume":
      window.open("/resume.pdf");
      return "Opening Resume...";

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
      return `Command not found : ${cmd}`;
  }
}





