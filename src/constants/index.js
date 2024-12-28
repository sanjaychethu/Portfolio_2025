import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ieee1,
  codefury,
  kagada,
  ieeemain,
  marvel,
  guvi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Secretary, Software Development SIG",
    company_name: "IEEE UVCE",
    icon: ieee1,
    iconBg: "#ffffff",
    date: "July 2024 - Present",
    points: [
      "Designed and developed responsive websites for CodeFury 7.0, Kagada 2024 and IEEE UVCE Official Website.",
      "Played a key role in organizing technical events such as CodeFury 7.0, ensuring smooth coordination and student participation from across India.",
      "Contribute to building a vibrant technical community within UVCE by organizing workshops, hackathons and meetups.",
    ],
  },


  {
    title: "AIML Research Student",
    company_name: "MARVEL UVCE",
    icon: marvel,
    iconBg: "ffffff",
    date: "Oct 2023 - Present",
    points: [
      "Conducted data analysis and visualization using tools such as Python, Pandas, and Matplotlib to derive insights from large datasets and support research initiatives.",
      "Applied deep learning techniques using frameworks like TensorFlow and PyTorch to design, train, and evaluate neural networks for complex tasks like image recognition and natural language processing.",
      "Implemented data preprocessing pipelines, including feature extraction, normalization, and data augmentation, to improve model accuracy and robustness.",
      
    ],
  },

  {
    title: "Campus Expert",
    company_name: " GUVI Geek Networks, IITM Research Park ",
    icon: guvi,
    iconBg: "#ffffff",
    date: "Sep 2023 - Present",
    points: [
      "Helped foster a community of learners by engaging students through social media and campus events.",
      "Assisted in organizing workshops, webinars, and study groups to enhance learning experiences for students.",
      "Delivered technical content and tutorials on emerging technologies such as machine learning, web development, and cloud computing, helping students stay updated with industry trends.",
     
    ],
  },


];


const projects = [
  {
    name: "Codefury 7.0",
    description:
      "Developed a fully responsive and user-friendly website for CodeFury 7.0, the IEEE UVCE Computer Society's annual national-level hackathon held on August 10th and 11th, 2024. The website streamlined the registration process, enabling students across India to sign up effortlessly. It featured an intuitive interface, event details.",
    
    image: codefury,
    source_code_link: "https://github.com/mythili953/CodeFury",
  },
  {
    name: "KAGADA 2024",
    description:
      "Developed a fully responsive and user-friendly website for Kagada, the IEEE UVCE Computer Society's flagship annual technical event. The website facilitated smooth registration, enabling students across India to participate effortlessly. It featured an intuitive interface, comprehensive event details, and seamless form submissions.",
    
    image: kagada,
    source_code_link: "https://github.com/SDSIG/Kagada-2024",
  },
  {
    name: "IEEE UVCE Website",
    description:
      "Contributed to the development and maintenance of the IEEE UVCE main website by updating past event reports and integrating detailed descriptions of upcoming events. Worked on ensuring that the platform remained current and informative by regularly uploading event details, descriptions, and schedules. ",
   
    image: ieeemain,
    source_code_link: "https://github.com/sanjaychethu/ieee_uvce_events",
  },
];

export {  technologies, experiences,  projects };