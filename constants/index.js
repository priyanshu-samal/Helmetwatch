import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "About Us",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Brainstorming Project, Market, and User Needs",
    text: "Analyze our project, market opportunities, and user needs to develop targeted strategies for effective product positioning.",
    date: "Jan 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Creation, Testing & Refinement",
    text: "After training, perform rigorous testing to evaluate the model's accuracy across various scenarios and datasets. Fine-tune the model's parameters and architecture based on testing results to achieve optimal performance and refinement.",
    date: "Feb 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Disrupt, Intrigue, Click ",
    text: "Capture attention, intrigue potential users to engage with our application, and convert clicks with a solid frontend experience.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Complete Automation",
    text: "No human intervention is needed for anything, and the system can convert challans autonomously when required.",
    date: "Jul 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Easily integrates with existing systems to ensure continuous helmet monitoring without disruptions.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Basic Monitoring & Detection",
    price: "0",
    features: [
      "3 vechicle at a time detection",
      "Monitoring and output at 3 min delay",
      "Get our other project notification",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced Monitoring & API",
    price: "100",
    features: [
      "An advanced monitoring of 8 vechicle at a time",
      "An analytics dashboard to track Movements",
      "Api provided for your personal projects",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced monitoring, API, COMMING SOON",
    price: null,
    features: [
      "An AI chatbot that can monitor all the task and work by itself",
      "An advanced monitoring of 8 vechicle at a time",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Improve everyday",
    text: "HalmetWatch integrates cutting-edge Deep Learning to continuously learn and optimize, ensuring unmatched accuracy in safeguarding helmet usage and user needs.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Connect everywhere",
    text: "Connect effortlessly with HalmetWatch's AI chatbot anytime, anywhere, across all devices, ensuring accessibility and convenience at your fingertips.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Fast responding",
    text: "Ensures seamless connectivity for real-time helmet detection, ensuring continuous monitoring and immediate safety alerts.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Helmet Verification",
    text: "Helps users instantly verify helmet usage without the need for manual inspection. Ensures swift identification of helmet presence for safety compliance.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "API Integration",
    text: "Empowering seamless integration with our API for widespread access and utilization across various platforms and applications.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Enhance Safety Daily",
    text: "HalmetWatch utilizes advanced deep learning to detect helmet usage accurately and ensure immediate safety compliance.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];