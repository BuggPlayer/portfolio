import food from './assets/images/food.jpeg'
import gym from './assets/images/gym.jpeg'
// import yoga from './assets/images/yoga.jpeg'
import homepage from "./assets/images/homepage.png"
const logotext = "TECHORA";

const meta = {
    title: "Techora",
    description: "We are Techora, a full-stack development agency specializing in innovative and scalable solutions, currently based in Berlin. Let’s build the future together.",
};

const introdata = {
    title: "We are Techora",
    animated: {
        first: "We build scalable web applications for startups and enterprises",
        second: "We develop high-performance mobile apps for global audiences",
        third: "We create AI-driven solutions to solve complex business challenges",
    },
    your_img_url:homepage
};


const dataabout = {
    title: "A Bit About Myself",
    aboutme: 
        "I am a passionate full-stack developer with expertise in building web and mobile applications. With 7+ years of experience, I have worked on diverse projects, delivering high-quality, scalable, and AI-powered solutions. I thrive on solving complex problems and turning ideas into reality.",
};

const worktimeline = [
    {
    jobtitle: "Team Lead & Senior Software Engineer",
    where: "Trigent",
    date: "2024 - Present",
},
{
    jobtitle: "Senior Software Engineer",
    where: "Magic Soft",
    date: "2023 - 2024",
},
{
    jobtitle: "Fullstack Software Engineer",
    where: "Ketton Tech",
    date: "2019 - 2023",
},

];


const skills = [
    {
        name: "FrontEnd",
        value: 100,
    },
    {
        name: "Backend",
        value: 90,
    },
    {
        name: "Nextjs",
        value: 90,
    },
    {
        name: "react native",
        value: 90,
    },
    {
        name: "Javascript",
        value: 100,
    },
    {
        name: "React",
        value: 100,
    },
    {
        name: "Jquery",
        value: 90,
    },
];

const services = [{
        title: "Web Development",
        description: "Do your company need a new website or an enterprise-class web app or a web portal to help align your employees' workflows? Our [COMPANY NAME]'s custom web developers have the know-how and experience to build it for you. With a combination of our expertise in IT and ecommerce development, we enable companies from different industries to increase sales and expand their customer base"
    },
    {
        title: "Mobile Apps",
        description: " Enhance your brand’s reach with best-in-class cross-platform mobile app development services from [COMPANY NAME]. Our clients get the advantage of a diverse technology stack, dedicated teams of developers, and high-quality, functionally rich solutions aligned with their requirements. At [COMPANY NAME], we deliver not just an app but an entirely redefined mobile experience.",
    },
    {
        title: "Ecommerce",
        description: "Do you want to gain a winning advantage for your business with an e-commerce store that delivers top-notch shopping experiences? Build one that excels in look and feel and gets you high conversions. To attract the desired audience, you need an e-commerce store that is visually stunning and conversion-focused.",
    },
];

const dataportfolio = [{
        img: food,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: gym,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

   
 
];

const contactConfig = {
    YOUR_EMAIL: "techaora@gmail.com",
    YOUR_FONE: "(91)9920025516",
    description: " Have a project in mind? Let’s build something amazing together! Feel free to reach out to us for any inquiries, collaborations, or business opportunities.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_zp98nbg",
    YOUR_TEMPLATE_ID: "template_xamolsv",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/BuggPlayer",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/tech-aora-730a7934a/",
    twitter: "https://x.com/techaora",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};