import project1 from "../assets/projects/agricultural.png";
import project2 from "../assets/projects/Energy_Optimization.png";
import project3 from "../assets/projects/Human_Life.png";
import edubotImage from "../assets/projects/EDUBOT.png";
import quickfoodImage from "../assets/projects/QUICKFOOD.png";

import certificate9 from "../assets/certificates/toeic.png";
import certificate1 from "../assets/certificates/docker.png";
import certificate2 from "../assets/certificates/ansible.png";
import certificate3 from "../assets/certificates/kubernetes.png";
import certificate4 from "../assets/certificates/linux.png";
import certificate5 from "../assets/certificates/machine_learning.png";
import certificate6 from "../assets/certificates/cloud.png";
import certificate7 from "../assets/certificates/CKA-certification.png";
import certificate8 from "../assets/certificates/Gitlab-CI-CD-certification.png";

import volunteering1 from "../assets/volunteering/Pacte.jpg";
import volunteering3 from "../assets/volunteering/RAS.png";
import volunteering2 from "../assets/volunteering/radio.png";
import volunteering4 from "../assets/volunteering/FORUM.jpg";




export const HERO_CONTENT = `3rd-year ICT Engineering Student at SUP'COM, specializing in Artificial Intelligence. Actively seeking a 6-month Final Year Internship (PFE) starting February 2026. I aim to apply my AI expertise in a challenging professional environment and am particularly interested in opportunities that offer a solid foundation for growth and hands-on project experience.`;

export const ABOUT_TEXT = `An AI enthusiast passionate about building intelligent systems that create tangible impact. My focus lies at the intersection of Generative AI (LLMs, AI Agents) and Classical AI (Deep Learning), powered by strong Data Engineering skills. I am currently expanding my expertise in Cloud Computing (AWS) to build and deploy scalable solutions. A curious and results-driven problem-solver, I am seeking a demanding internship that will serve as a platform for continuous learning and growth, allowing me to contribute meaningfully to ambitious projects while honing my technical and professional skills in an innovative setting. `;

export const EXPERIENCES = [
  {
    year: "September 2025 - Present",
    role: "AI/DevOps - Intern",
    company: "Converty",
    description: `As part of a collaboration with the Tunisian fintech startup Converty, I worked on a project aimed at automating the monitoring of Facebook advertising activity for clients using Converty’s platforms. Since the company’s revenue is directly linked to the performance of its clients’ online sales, the solution was designed to track ad campaigns, detect inactive periods, and provide insights for timely interventions. Leveraging AI and DevOps practices, the system uses the Facebook Ads Library API, Apify, and Python to automatically collect, structure, and integrate advertising data (JSON/CSV) into internal tools. This automation reduced manual monitoring and helped optimize both client and company performance.`,
    technologies: ["AI", "DevOps", "Python" , "Facebook Ads Library API", "Apify", "Web Scraping", "JSON/CSV", "Docker", "GitLab CI/CD"],
  },
  {
    year: "July 2025 – August 2025",
    role: "Generative AI/Data Engineering Internship",
    company: "KPIT Technologies",
    description: `During my internship at KPIT, I worked on a critical challenge for the Data Engineering teams: automating repetitive and complex tasks, such as creating SQL queries and Grafana dashboards, which were time-consuming and error-prone. I contributed to the design and development of an intelligent system capable of automatically generating SQL queries and Grafana dashboards from natural language descriptions. The system leverages a ReAct agent (LangChain) powered by the Mistral LLM, capable of iterative reasoning to produce complex and accurate SQL queries. A dashboard generator, based on advanced prompt engineering, produces a valid JSON file ready for direct import into Grafana.`,
    technologies: ["AI Agent", "LangChain", "LLM", "Mistral API", "Grafana API", "Python", "SQL","Prompt Engineering"],
  },
  {
    year: "July 2024 – August 2024",
    role: "Development Intern",
    company: "Numeryx MEA",
    description: `Full-stack design and development of the "CAR PARK" web application for automated vehicle and client management. Implementation of a MySQL database and a responsive interface using Bootstrap. Development of CRUD (Create, Read, Update, Delete) functionalities in PHP and secured access through user authentication with password encryption.An operational solution enhancing both efficiency and data security in car park management.`,
    technologies: ["HTML,", "CSS", "JavaScript", "Bootstrap,", "PHP,", "MySQL", "XAMPP"],
  },
  {
    year: "May 2025",
    role: "Entrepreneurship Project Challenge",
    company: "SUP’COM",
    description: `Selected among the 8 finalists for a week-long challenge focused on innovative health-tech solutions. Led complete project management, including market research, competitive benchmarking, financial analysis, and development of a Business Model Canvas. The project centered on a connected intelligent patch capable of real-time dehydration detection, combining technological feasibility with a viable business strategy. Delivered a final presentation highlighting both the technical concept and the market potential.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "AI Assistant for Agricultural Risk Management ",
    image: project1,
    video: "",
    description:
      "Creating a smart AI assistant that actively helps farmers make better decisions in real time. Using LangChain and LLaMA-2, the agent continuously analyzes weather data from APIs and other risk factors to recommend the most suitable insurance coverage. Farmers can interact with the system through a Gradio interface, testing different scenarios and receiving actionable insights. The project combines cutting-edge AI with practical, real-world decision support to reduce risks and improve agricultural outcomes.",
    date: "September 2025 – Ongoing",
  },
  {
    title: "AI Chatbot for Energy Optimization",
    image: project2,
    video: "",
    description:
      "Developing an AI chatbot for smart grids that helps households optimize energy usage in real time. Leveraging large language models (LLMs), the chatbot analyzes consumption data, provides actionable insights, and offers personalized energy-saving recommendations. Users can interact directly with the system to explore different scenarios, making energy management smarter, simpler, and more efficient.",
  github: "",
    date: "September 2025 – Ongoing",
  },

  {
    title: "AI-Powered Human Life Detection System for Search and Rescue Operations",
    image: project3,
    video: "",
    description:
      "This project designs an intelligent system to detect survivors trapped under debris by combining FMCW radar and thermal imaging. Radar captures micro-movements like breathing, while thermal imaging identifies heat signatures. Using CWT/STFT signal processing and a late-fusion deep learning model (CNNs for radar, 3D-CNNs for thermal video, and an MLP for decision fusion), the system achieved 99% accuracy on a simulated dataset of 32,000 images. This significantly reduces false alarms and enhances the efficiency of search and rescue missions.",
  github: "",
    date: "Jan 2025 - June 2025",
  },

  {
    title: "EduBot – Intelligent Learning Assistant",
    image: edubotImage,
  // Local video removed from repo; leave blank or replace with remote URL
    video: "https://youtu.be/GfidG2nZmgE",
    description:
      "Developed a web platform with an intuitive interface for educational content, featuring an AI-powered chatbot to answer students’ course-related questions. Built using Java Spring Boot for the backend, Angular for the frontend, PostgreSQL for data management, and integrated with AI APIs to provide interactive learning support.",
  github: "",
    date: "Nov 2024 - Dec 2024",
  },

  {
    title: "QuickFood – Smart Food Ordering Platform",
    image: quickfoodImage ,
    video: "https://youtu.be/mTGeE0fgKWg",
    description:
      "Developed a full-stack web application for smart food ordering, allowing customers to browse restaurant categories, view menus, and place orders seamlessly. The system integrates secure user authentication, structured offer displays, and a streamlined ordering process. Built with Java Spring Boot and PostgreSQL for the backend, and a responsive frontend using HTML, CSS, JS, and Bootstrap to ensure an intuitive user experience.",
  github: "",
    date: "Nov 2024 – Dec 2024",
  },
  

];

export const CONTACT = {
  address: "Tunis, Tunisia",
  phoneNo: "+216 25 951 732 ",
  email: "ghofarne.mahfoudhi@supcom.tn",
};

export const CERTIFICATES = [
    {
    title: "Test of English for International Communication (TOEIC) Certification - 765/990",
    date: "July 14, 2025",
    issuer: "Educational Testing Service (ETS)",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
  credlyLink: "",
    image: certificate9,
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    date: "November 03, 2024",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://www.credly.com/badges/7d270443-830c-4053-990c-1b283d89f866",
    image: certificate6,
  },
  {
    title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
    date: "October 19, 2024",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Earners of this badge have completed the AWS Academy Machine Learning Foundations course.",
    credlyLink: "https://www.credly.com/badges/b24a66d6-6139-48a7-9137-ed7a1cfe651b",
    image: certificate5,
  },

  {
    title: "Docker Training Course for the Absolute Beginner",
    date: "May 31, 2024",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/2DEF43B7FD3C-2DEF3DC131E0-2DEF3D84EC94",
    image: certificate1,
  },

  {
    title: "GitLab CI/CD certification",
    date: "February 16, 2025",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/d6d907ab-9866-43d1-958e-1ed3e6dc732b",
    image: certificate8,
  },

  {
    title: "CKA certification course",
    date: "February 16, 2025",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/76f7932f-542a-440d-974a-4c7714941533",
    image: certificate7,
  },

  {
    title: "Learning Linux Basics Course & Labs",
    date: "September 18, 2024",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/31b49397-bd2b-4185-a2cc-17a2a5932eea",
    image: certificate4,
  },

  {
    title: "Learn Ansible Basics",
    date: "September 21, 2024",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/184955ac-d215-425e-abe1-816f8a450041",
    image: certificate2,
  },
  {
    title: "Kubernetes for the Absolute Beginners",
    date: "September 20, 2024",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/37fab153-3031-4795-ad1f-5e3723ece30c",
    image: certificate3,
  },

];

export const events = [
  {
    title: "Community Volunteering - PACTE Project",
    description: "Collaborated with a Tunisian high school to provide financial and educational support. The project included fully refurbishing the school library, donating sports equipment, and organizing student activities. Delivered hands-on workshops such as Python programming, while also inviting external experts for sessions on topics like design thinking. This initiative combined infrastructure improvement with skill-building opportunities for students.",
    date: "2024",
    image: volunteering1,
  },
  {
    title: "Community Volunteering - Radio Jeune Tunisie",
    description: "Produced a radio report in partnership with Radio Jeune Tunisie to present the PACTE community project, share its objectives, and call for support through book donations and other contributions to improve a Tunisian high school.",
    date: "2024",
    image: volunteering2,
  },

  {
    title: "IEEE SUP’COM – Member of RAS Committee (Robotics and Automation Society)",
    description: "Participated as a committee member in the Robotics and Automation Society, contributing to an internal competition where we developed a robot capable of autonomously following a model track. Gained hands-on experience in robotics design, programming, and teamwork.",
    date: "2023",
    image: volunteering3,
  },
  {
    title: "Forum Sup’Com 2023 – Co-Design Manager",
    description: "Participated in organizing the Sup’Com Forum as part of the design committee, creating and designing posters using Photoshop to visually promote the event.",
    date: "2023",
    image: volunteering4,
  },

];

export const SKILLS = [
  {
    title: "Programming Languages",
    items: ["Python", "C++", "MATLAB", "Java", "PHP", "SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks & Web Development",
    items: ["Spring Boot", "Angular", "Bootstrap"],
  },
  {
    title: "Artificial Intelligence & Data Science",
    items: [
      "TensorFlow",
      "PyTorch",
      "CNNs",
      "3D-CNNs",
      "NLP",
      "Mistral",
      "LLaMA-2",
      "LangChain",
      "AI Agents",
      "Prompt Engineering",
    ],
  },
  {
    title: "Data Engineering",
    items: ["Pandas", "NumPy", "Data Visualization (Power BI, Grafana)"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    title: "Cloud",
    items: ["AWS"],
  },
  {
    title: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman", "IntelliJ", "Linux"],
  },
];

export const EDUCATION = [
  {
    institution: "Higher School of Communication of Tunis (SUP'COM)",
    degree: "ICT Engineering",
    period: "2023 - Present",
    subjects: [
      "Artificial Intelligence",
      "Data Engineering", 
      "Cloud Computing",
      "Machine Learning",
      "LLM & Agents",
      "Networking & Cybersecurity",
      "Signal Processing"
    ],
    description: "Engineering track focused on AI, data engineering, and cloud infrastructure. Preparing for a final-year internship in 2026."
  },
  {
    institution: "Preparatory Institute for Engineering Studies of Sfax (IPEIS)",
    degree: "Pre-Engineering studies - Ranked 24/1500 at National Entrance Exams",
    period: "2021 - 2023",
    subjects: [
      "Advanced Algebra",
      "Probability & Statistics",
      "Theoretical and Applied Physics", 
      "Database management (SQL)",
      "Python programming"
    ],
    description: "Intensive two-year program preparing for the highly competitive National Engineering Exam with focus on advanced mathematics, physics, and computer science."
  }
];