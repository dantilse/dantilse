export const experience = [];

type Experience = {
  role: string;
  company: string;
  dates: string;
  description: string[];
  highlights?: string[];
};

const iterable = {
  company: "Iterable",
  dates: "March 2022 - Present",
  description: [
    "Developing the most powerful customer engagement platform and helping to connect customers with their audience using real-time behavrioral data and building adaptive lifecycle journeys across any channel.",
  ],
  highlights: [
    "Develop user interfaces using React.js",
    "Translating designs and wireframes into high quality, reusable components",
    "Optimizing for maximum performance across an array of web-capable devices and browsers",
  ],
  role: "Sr. Software Engineer  ",
};

const rapidDeploy = {
  role: "Software Engineer",
  company: "RapidDeploy",
  dates: "Jan 2021 - Dec 2021",
  description: [
    "Developing the industry's only truly open and integrated emergency response platform and helping to transform 9-1-1 communication centers of any size into data-centric organizations, with a focus on adding text-to-911 commmunication within a web-based mapping solution.",
  ],
  highlights: [
    "Develop user interfaces with React.js utilizing a micro-frontend architecture",
    "Translating designs and wireframes into a custom pattern library of high quality, reusable components",
    "Deliver high-quality code through an Agile delivery process",
    "Work closesly with product owners and various stakeholders to define and communicate business requirements",
  ],
};

const nxpSemiconductors = {
  role: "UI Developer / UX Designer",
  company: "NXP Semiconductors",
  dates: "Oct 2018 - Jan 2021",
  description: [
    "UI developer responsible for advancing NXP's web presence by developing and improving UI modules and complete interfaces for web templates, single-page applications (SPAs), and other data-driven tools according to NXP's global brand guidelines.",
    "As a senior member of the User Experience team, I was responsible for managing concurrent projects using an Agile process. Working with various stakeholders, I would co-ordinate with a visual designer and other UX team members in order to deliver high fidelity mockups that adhere to a consistent design system. After design approval and product owner sign-off, I was responsible for building, testing, optimizing, and documenting UI elements and design patterns with HTML, CSS, JavaScript (including ReactJS).",
  ],
  highlights: [
    "Communicate with stakeholders to define project objectives and scope",
    "Deliver UX proposals based on best practices, industry standards, and direct and indirect user feedback",
    "Work directly with Visual Designer and Content Strategist to provide high-fidelity prototypes",
    "Deliver front-end UI elements built with HTML/CSS/JavaScript including ReactJS",
    "Document and manage documentation of pattern library",
  ],
};

const liasonCreative = {
  role: "UI Developer / UX Designer",
  company: "Liaison Creative + Marketing",
  dates: "Jun 2016 - Oct 2018",
  description: [
    "Contracting through Liaison Creative + Marketing, I was tasked to provide UX/UI services to NXP Semiconductors in order to develop an internal management tool. Through a rigorous process of user research, wireframing, and coordinating with the development team, I provided a complete UX solution. Unfortunately, the project was unable to proceed due to development costs.",
    "At the conclusion of that project, I was asked to stay on board to assist in converting their then static website into a new CMS which required an almost complete re-design in order to provide a fully responsive and updated web experience. My role was to develop a pattern library using HTML/CSS/JavaScript in alignment with NXP's global brand guidelines. Through this and subsequent successful projects, I was asked to join the NXP team as a full-time employee.",
  ],
  highlights: [""],
};

const edlio = {
  role: "Web Developer",
  company: "Edlio, LLC",
  dates: "Aug 2015 - May 2016",
  description: [
    "Built rich and engaging websites with the 'Slicing' team, and specializing in the educational area. Was responsible for taking Photoshop (PSD) files, and converting them into responsive websites for individual schools, multi-campus schools, and school districts across the United States. Our workflow involved a rigorous code review process by peers, following accessibility guidelines, and supporting all major browsers (mobile and desktop) including Internet Explorer 10.",
  ],
};

const freelance = {
  role: "Web Designer / Developer",
  company: "Freelance",
  dates: "Oct 2013 - Oct 2018",
  description: [
    "Provided Graphic/Web/UX design services for various startups,non-profits, and e-commerce clients.",
  ],
  highlights: [
    "Utilized common CMS systems such as WordPress",
    "Create consistent branding across web and social media platforms",
    "Provide continuing web support and design updates",
  ],
};

export const WORK_EXPERIENCE: Experience[] = [
  iterable,
  rapidDeploy,
  nxpSemiconductors,
  liasonCreative,
  edlio,
  freelance,
];
