const frontednSkills: {
  name: string;
  image: string;
}[] = [
  {
    name: "React",
    image:
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  },
  {
    name: "NextJS",
    image: "https://img.icons8.com/fluency/48/nextjs.png",
  },
  {
    name: "TypeScript",
    image:
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png",
  },
  {
    name: "Redux",
    image:
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png",
  },
  {
    name: "Tailwind CSS",
    image: "https://img.icons8.com/color/48/tailwindcss.png",
  },
];

const backednSkills: {
  name: string;
  image: string;
}[] = [
  {
    name: "Node JS",
    image: "https://img.icons8.com/fluency/48/node-js.png",
  },
  {
    name: "Express",
    image: "https://img.icons8.com/fluency/48/express-js.png",
  },
  {
    name: "Mongoose",
    image: "https://img.icons8.com/color/48/mongoose.png",
  },
  {
    name: "Prisma",
    image: "https://img.icons8.com/color/48/prisma-orm.png",
  },
];

const authSkills: {
  name: string;
  image: string;
}[] = [
  {
    name: "Firebase",
    image: "https://img.icons8.com/color/48/firebase.png",
  },
  {
    name: "Passport JS",
    image: "https://img.icons8.com/doodle/48/passport--v2.png",
  },
  {
    name: "JWT",
    image: "https://img.icons8.com/color/48/java-web-token.png",
  },
];

const dbSkills: {
  name: string;
  image: string;
}[] = [
  {
    name: "MongoDB",
    image:
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
  },
  {
    name: "Postgres SQL",
    image:
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo.png",
  },
  {
    name: "Redis",
    image: "https://img.icons8.com/color/48/redis--v1.png",
  },
  {
    name: "MySQL",
    image: "https://img.icons8.com/color/48/mysql-logo.png",
  },
];

const versionSkills: {
  name: string;
  image: string;
}[] = [
  {
    name: "Git Hub",
    image: "https://img.icons8.com/fluency/48/github.png",
  },
];

export const skillType: {
  frontend: {
    name: string;
    image: string;
  }[];
  backend: {
    name: string;
    image: string;
  }[];
  auth: {
    name: string;
    image: string;
  }[];
  db: {
    name: string;
    image: string;
  }[];
  versionControll: {
    name: string;
    image: string;
  }[];
} = {
  frontend: frontednSkills,
  backend: backednSkills,
  auth: authSkills,
  db: dbSkills,
  versionControll: versionSkills,
};
