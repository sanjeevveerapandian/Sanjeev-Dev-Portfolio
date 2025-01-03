import html from "/public/svg/skills/html.svg";
import css from "/public/svg/skills/css.svg";
import javascript from "/public/svg/skills/javascript.svg";
import typescript from "/public/svg/skills/typescript.svg";
import react from "/public/svg/skills/react.svg";
import nextJS from "/public/svg/skills/nextJS.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import mysql from "/public/svg/skills/mysql.svg";
import git from "/public/svg/skills/git.svg";
import aws from "/public/svg/skills/aws.svg";
import bootstrap from "/public/svg/skills/bootstrap.svg";
import figma from "/public/svg/skills/figma.svg";
import firebase from "/public/svg/skills/firebase.svg";
import java from "/public/svg/skills/java.svg";
import materialui from "/public/svg/skills/materialui.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "react":
      return react;
    case "next js":
      return nextJS;
    case "tailwind":
      return tailwind;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "git":
      return git;
    case "aws":
      return aws;
    case "bootstrap":
      return bootstrap;
    case "figma":
      return figma;
    case "firebase":
      return firebase;
    case "java":
      return java;
    case "materialui":
      return materialui;
    default:
      break;
  }
};
