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
  ai,
  datascience,
  connection,
  Keck,
  tata,
  c5,
  ac,
  python,
  r,
  sql,
  django,
  agentic,
  diffusion,
  xai,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML",
    icon: ai,
  },
  {
    title: "Data Science",
    icon: datascience,
    // icon: mobile,
  },
  {
    title: "Cloud",
    // icon: backend,
    icon: connection,
  },
  {
    title: "Web Development",
    icon: web,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "SQL",
    icon: sql,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Graduate Machine Learning Research Assistant",
    company_name: "USC Keck Medicine of School",
    icon: Keck,
    iconBg: "#922B21",
    date: "Nov 2024 - Present",
    points: [
      "Developing MRI synthesis models with MONAI.",
      "Optimized ViT/DenseNet in PyTorch for Alzheimer’s classification, achieving 0.92 AUC and 11 percent improvement via parameter-efficient fine-tuning",
      "Evaluated deep learning models for neuroimaging classification tasks using DTI mean diffusivity maps.",
      "Implemented 2D and 3D convolutional neural networks for binary classification problems in the medical imaging domain.",
    ],
  },
  {
    title: "Computer Vision Research Intern",
    company_name: "TATA Advanced Systems Limited",
    icon: tata,
    iconBg: "#FFFFFF",
    date: "Aug 2023 - May 2024",
    points: [
      "Engineered and deployed an automated facial recognition system on SpiderCloud to identify crime suspects.",
      "Developed an automatic license plate scanning solution for real-time monitoring and operational scalability.",
      "Implemented 3D Facial Reconstruction.",
      "Alert dissemination feature to the nearest police stations.",
    ],
  },
  {
    title: "Digital and Advanced Analytics Intern",
    company_name: "Course5 Intelligence",
    icon: c5,
    iconBg: "#FFFFFF",
    date: "Aug 2022 - Sept 2022",
    points: [
      "Implemented SQL query optimization strategies in snowflake databases to reduce processing times.",
      "Designed a user friendly Streamlit Python app with dynamic visualisations and plots enhancing data-driven decision making efficiency.",
    ],
  },
  {
    title: "Django Developer Intern",
    company_name: "Articuno Coding LLP",
    icon: ac,
    iconBg: "#000000",
    date: "July 2022 - Aug 2022",
    points: [
      "Redesigned a Learning Management System (LMS) featuring user authentication, course creation and management, quizzes, progress tracking.",
      "Developed an admin panel along with it for managing courses and users.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Perseverance,sincerity, and thirst for knowledge have always been the hallmark of his personality.",
    name: "Dr. Vinaya Sawant",
    designation: "HOD",
    company: "University of Mumbai",
    image: "https://media.licdn.com/dms/image/v2/C5603AQFDxyOO_iHKyQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1589219511132?e=1756339200&v=beta&t=5cpmTzcerImoQJge6WjESUd2C010FKIoPJ7j5FjzSTA",
  },
  {
    testimonial:
      "During his internship with us, he was found to be sincere and hardworking.",
    name: "Mr. Sunil Badlani",
    designation: "Horizontal head at The Tata Power Company",
    company: "TATA Adavnced Systems Limited",
    image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  },
  {
    testimonial:
      "After Vraj used SQL query optimization strategies in the snowflake databases, it significantly reduced our processing times.",
    name: "Mr. Rizwan Khan",
    designation: "Project Manager",
    company: "Course5 Intelligence",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHfZ4pypBZ8mg/profile-displayphoto-shrink_400_400/B4DZcrDeV_GgAg-/0/1748774021054?e=1756339200&v=beta&t=4oMMTQ4gYLTfV-Q7WMrJajTxqLO4Fp41vLToiv1xVbk",
  },
];

const projects = [
  {
    name: "Agnetic AI Assistant",
    description:
      "Built an Agentic AI Workflow Assistant that autonomously books flights, reserves hotels, and schedules calendar events using LangChain agents and real-world APIs. Integrated OpenAI, Amadeus, RapidAPI, and Google Calendar for end-to-end task execution based on natural language prompts.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: agentic,
    source_code_link: "https://github.com/vrajdesai17/Agnetic-AI-Assistant",
  },
  {
    name: "Synthetic Diffusion Tensor Imaging Maps",
    description:
      "Developed and evaluated deep learning models for neuroimaging classification tasks using DTI mean diffusivity maps and Implemented 2D and 3D convolutional neural networks for binary classification problems in the medical imaging domain.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "Diffusion",
        color: "pink-text-gradient",
      },
    ],
    image: diffusion,
    source_code_link: "https://github.com/vrajdesai17/Synthetic-Diffusion-Tensor-Imaging-DTI-Maps",
  },
  {
    name: "XAI for Detection of Incidents of Fake News and Hate Speech",
    description:
      "Implemented explainable AI models for NLP workflow like SHAP , LIME and ELI5 that enable users to understand why a particular content item is flagged as problematic, fostering trust and accountability in content moderation efforts.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "XAI",
        color: "pink-text-gradient",
      },
    ],
    image: xai,
    source_code_link: "https://github.com/vrajdesai17/XAI-RP",
  },
];

export { services, technologies, experiences, testimonials, projects };
