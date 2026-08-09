import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Elhassan",
  lastName: "DAHMOUCHI",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/Untitled-1.png",
  email: "hassandahmouchi0@gmail.com",
  location: "Africa/Casablanca", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic", "Frensh"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Dahmouchi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/elhassan-dahmouchi-a55b10391/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">BuildEstate website</strong>
      </>
    ),
    href: "https://buildalittlebiz-build-immo.przujz.easypanel.host/",
  },
  subline: (
    <>
      I'm Elhassan, a passionate developer focused on building smart web
      solutions.
      <br /> Currently working on an alert reporting and analysis project to
      help report and study incidents.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/hassan-dahmouchi-miszag/appointment",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Elhassan is a Morocco-based web developer passionate about creating
        smart solutions for real-world problems. His work focuses on building
        alert reporting and analysis systems, combining technology and
        innovation to improve incident management and response.
      </>
    ),
  },

  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "BuildalittleBiz", //[cite: 2]
        timeframe: "July 2024 - Present", //[cite: 2]
        role: "Full-Stack Web Developer", //[cite: 2]
        achievements: [
          <>
            Contributed to a <strong>School Management System</strong> project
            by creating dynamic interfaces, APIs, and database integrations.{" "}
            {/*[cite: 2] */}
          </>,
          <>
            Developed reactive and scalable applications using{" "}
            <strong>Next.js</strong>, <strong>Prisma</strong>, and other modern
            web technologies. {/*[cite: 2] */}
          </>,
          <>
            Designed an <strong>Affiliate Marketing Platform</strong> enabling
            user registration, referral tracking, and payment management via
            secure APIs and a high-performance admin dashboard. {/*[cite: 2] */}
          </>,
        ],
        images: [
          {
            src: "/images/og/build.webp",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance Projects", //[cite: 2]
        timeframe: "2024 - Present",
        role: "Full-Stack & Mobile Developer",
        achievements: [
          <>
            Developed <strong>KiraaGo</strong>, a complete car rental management
            platform featuring booking, fleet management, and real-time admin
            dashboards. {/*[cite: 2] */}
          </>,
          <>
            Built <strong>BuildEstate</strong>, an innovative real estate web
            and mobile platform integrating{" "}
            <strong>3D virtual tours (digital twins)</strong> for immersive
            property exploration. {/*[cite: 2] */}
          </>,
          <>
            Created <strong>Enita & Scoolia</strong>, comprehensive e-learning
            platforms with course management, interactive interfaces, and online
            evaluation systems. {/*[cite: 2] */}
          </>,
        ],
        images: [],
      },
      {
        company:
          "Program for the Generalization of Information and Communication Technologies in Public Education", //[cite: 2]
        timeframe: "March 2023 - July 2023", //[cite: 2]
        role: "Mobile Developer (Internship)",
        achievements: [
          <>
            Digitalized an educational program into a{" "}
            <strong>Mobile Application</strong> to improve accessibility and
            usage for students and teachers. {/*[cite: 2] */}
          </>,
          <>
            Designed and developed the application using modern frameworks to
            ensure intuitive navigation and smooth functionality.{" "}
            {/*[cite: 2] */}
          </>,
        ],
        images: [],
      },
      {
        company: "ERRAHMA HYDRO", //[cite: 2]
        timeframe: "March 2022 - July 2022", //[cite: 2]
        role: "Software Developer (Internship)",
        achievements: [
          <>
            Developed a <strong>Desktop Application</strong> for employee
            management using appropriate technologies to streamline internal
            operations. {/*[cite: 2] */}
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University Mohammed V, Rabat", //[cite: 2]
        description: (
          <>
            Master's degree in Software Development and Decision Engineering
            (Ingénierie de Développement Logiciel et Décisionnel).{" "}
            {/*[cite: 2] */}
          </>
        ),
      },
      {
        name: "Higher School of Technology (EST), Salé", //[cite: 2]
        description: (
          <>
            Professional License (Bachelor's degree) in Mobile Application
            Engineering. {/*[cite: 2] */}
          </>
        ),
      },
      {
        name: "Higher School of Technology (EST), Béni Mellal", //[cite: 2]
        description: (
          <>University Diploma of Technology (DUT) in Computer Engineering.</>
        ), //[cite: 2]
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend & Full-Stack",
        //[cite: 2]
        description: (
          <>
            Building next-gen applications with <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, <strong>ReactJS</strong>, and{" "}
            <strong>Tailwind CSS</strong>.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-02/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Mobile Development",
        //[cite: 2]
        description: (
          <>
            Creating cross-platform mobile experiences utilizing{" "}
            <strong>React Native</strong>.
          </>
        ),
        images: [],
      },
      {
        title: "Backend & Databases",
        //[cite: 2]
        description: (
          <>
            Developing robust server-side architectures with{" "}
            <strong>Node.js</strong>, <strong>Spring Boot</strong>, and
            databases including <strong>PostgreSQL</strong>,{" "}
            <strong>MongoDB</strong>, and <strong>Prisma ORM</strong>.
          </>
        ),
        images: [],
      },
      {
        title: "AI & Automation",
        //[cite: 2]
        description: (
          <>
            Implementing <strong>Machine Learning</strong> models and building
            automated workflows using <strong>N8N</strong>.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
