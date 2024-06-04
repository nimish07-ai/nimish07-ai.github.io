// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nimish's Portfolio",
  description:  
    "M.Tech. Information Technology student at IIIT Allahabad, skilled in Python, JavaScript, and cybersecurity, with a strong background in project development and research.",
  og: {
    title: "Nimish Boda Portfolio",
    type: "website",
    url: "https://nimish07-ai.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Nimish",
  logo_name: "NimishBoda",
  nickname: "Seven",
  subTitle:
    "M.Tech. Information Technology student at IIIT Allahabad, skilled in Python, JavaScript, and cybersecurity, with a strong background in project development and research.",
  resumeLink:
  // TODO
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/nimish07-ai/nimish07-ai.github.io",
  githubProfile: "https://github.com/nimish07-ai",
};

const socialMediaLinks = [


  {
    name: "Github",
    link: "https://github.com/nimish07-ai",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nimish-boda-1129b8212/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
 
  {
    name: "Gmail",
    link: "mailto:nimishboda7@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nimishboda/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing webe applications using React, react router and Service worker  and solo android apps using React native",
        "⚡ Creating application backend in Python ,django  & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },          
        },
        {
          skillName: "Django",
          
          fontAwesomeClassname: "skill-icons:django",
          style: {
            color: "#CB3837",
          },
          
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Cyber Security",
      fileName: "DesignImg",
      skills: [
        "⚡ Proficient in cybersecurity tools such as Nmap, Wireshark, and Metasploit for network scanning, traffic analysis, and vulnerability exploitation.",
        // "⚡ Customizing logo designs and building logos from scratch",
        // "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "wireshark",
          fontAwesomeClassname: "iconify simple-icons--wireshark",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Nmap",
          fontAwesomeClassname: "iconify file-icons--nmap",
          style: {
            color: "#FF2BC2",
          },
        },

      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/nimishboda7/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bharati Vidyapeeth College Of Engineering Navi Mumbai",
      subtitle: "B.E. in Information Techonology",
      logo_path: "bvp_logo.jpg",
      alt_name: "BVCOENM",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Acquired comprehensive knowledge in computer science fundamentals, including data structures, algorithms, operating systems, and database management systems.",
        "⚡ Developed proficiency in Python programming.",
        "⚡ Learned web development using modern technologies such as HTML, CSS, and JavaScript.",
      ],
      website_link: "https://bvcoenm.edu.in/",
    },
    {
      title: "Indian Institute of Information Technology Allahabad, Uttar Pradesh",
      subtitle: "M.Tech. in Information Techonology",
      logo_path: "iiita.png",
      alt_name: "Indian Institute of Information Technology Allahabad, Uttar Pradesh",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Gained in-depth understanding of cybersecurity principles, including risk assessment and threat mitigation.",
        "⚡ Studied cyber law to comprehend the legal aspects of information security and data protection.",
        "⚡ Developed skills in advanced encryption techniques and secure communication protocols.",
      ],
      website_link: "https://www.iiita.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Skill-Badges on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/9f6e3c2e-70ad-457a-ba04-77559ab1fa4d",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Teaching Assistant",
  description:
    "I have Worked as a Teaching Assistant, facilitating learning in computer science courses, while concurrently undertaking internships in software development, enhancing practical skills and theoretical knowledge.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Wear Pakau",
          company: "Wear pakau",
          company_url: ".",
          logo_path: "wearpakau.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            `
            worked as CTO in this Startup.
            Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.
            `,
          color: "#000000",
        },
      ],
    },
    {
      title: "Teaching Assistant",
      experiences: [
        {
          title: "Computer Security",
          company: "IIIT Allahabad",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "iiita.png",
          duration: "August 2023 - December 2023",
          location: "Allahabad",
          description:
            "Taught students of Btech in 3 year(5 semister) about topics such has cryptographic algorithm and secure authentication protocols",
          color: "#000000",
        },
        {
          title: "BlockChain Technology",
          company: "IIIT Allahabad",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "iiita.png",
          duration: "Jan 2024 - May 2024",
          location: "Allahabad",
          description:
            "Taught students of Btech in 3 year(6 semister) about topics such has Basics of BLock chian , Hyperledgeer fabric,iota ",
          color: "#000000",
        },
      ],
    },
    {
      title: "Freelancing",
      work: true,
      experiences: [
        {
          title: "Nanda Electronics",
          company: "Nanda Electronics",
          company_url: ".",
          logo_path: "wearpakau.png",
          duration: "January 2022",
          location: "India",
          description:
            "Designed a website for product promotion",
          color: "#000000",
        },
      ],
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Backend projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "PlaceIT:-The-Placement-Auxiliary",
      name: "PlaceIT: The Placement Auxiliary",
      createdAt: "2023-06-01T00:00:00Z",
      description: "Paper published in IEEE explore",
      url: "https://ieeexplore.ieee.org/document/10263679",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "A/102 , Nana Complex, sec 23",
    locality: "Juinagar",
    country: "India",
    region: "Navi Mumbai",
    postalCode: "400 706",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/TwFUNjs1VGf7UnqT6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
