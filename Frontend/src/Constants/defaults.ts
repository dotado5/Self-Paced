import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import { Link } from "../Types/Footer";
import {
    CategoryProps,
    CourseCardProps,
    TestimonyCardProps,
} from "../Types/Homepage";
import testimony_img_1 from "../assets/testimony_img1.png";
import testimony_img_2 from "../assets/testimony_img2.png";
import engineering from "../assets/engineering.png";
import design from "../assets/design.png";
import data_science from "../assets/data_science.png";
import security from "../assets/it_security.png";
import business from "../assets/business_marketing.png";
import html from "../assets/html_css.png";
import elixir from "../assets/couses-images/elixir.png";
import javascript from "../assets/javascript.png";
import devops from "../assets/couses-images/devops.png";
import node_js from "../assets/couses-images/node-js.png";
import manual from "../assets/couses-images/manual.png";
import django from "../assets/couses-images/django.png";
import cypress from "../assets/couses-images/cypress.png";
import sql from "../assets/couses-images/sql.png";
import ai from "../assets/couses-images/ai.png";
import frontend from "../assets/couses-images/react.png";
import github from "../assets/couses-images/github.png";
import mobile_app from "../assets/couses-images/flutter.png";
import figma from "../assets/figma.png";
import photoshop from "../assets/couses-images/photoshop.png";
import BI from "../assets/couses-images/bi.png";
import PM from "../assets/couses-images/product_management.png";
import BA from "../assets/couses-images/business_analyst.png";
import DM from "../assets/couses-images/digital_analyst.png";
import seo from "../assets/couses-images/seo.png";
import data_analytics from "../assets/couses-images/data_analytics.png";
import financial_analytics from "../assets/couses-images/financial_analytics.png";
import network_security from "../assets/couses-images/network_security.png";
import cyber_security from "../assets/couses-images/cyber_security.png";
import c_sharp from "../assets/c_sharp.png";
import elixirLarge from "../assets/elixir_large.png";
import htmlLarge from "../assets/large_html.png";


export const socials = [
    { img: instagram, link: "" },
    { img: facebook, link: "" },
    { img: linkedin, link: "" },
    { img: twitter, link: "" },
];

export const Resources: Link[] = [
    { content: "Blog", link: "" },
    { content: "FAQs", link: "" },
    { content: "Events", link: "" },
];

export const Schools: Link[] = [
    { content: "Engineering", link: "" },
    { content: "Product", link: "" },
    { content: "Data", link: "" },
    { content: "Design", link: "" },
    { content: "Cyber Security", link: "" },
    { content: "Marketing", link: "" },
    { content: "No-Code Path", link: "" },
];

export const Testimonies: TestimonyCardProps[] = [
    {
        img: testimony_img_1,
        testimony:
            "Enrolling in the self-paced IT courses was a game-changer for me. The flexibility allowed me to balance my studies with my job, and the comprehensive content helped me land my dream role as a network engineer. Highly recommended!",
        name: "Solagbade Enitilo",
        role: "FullStack Developer",
    },
    {
        img: testimony_img_2,
        testimony:
            "This platform transformed my understanding of web development. The interactive lessons and hands-on projects made learning enjoyable and effective. Thanks to the self-paced format, I could learn at my own speed and truly grasp the concepts.",
        name: "Timilehin Ogunwole",
        role: "Frontend Developer",
    },
];

export const categories: CategoryProps[] = [
    { img: engineering, title: "Engineering", link: "/category/engineering" },
    { img: design, title: "Design", link: "/category/design" },
    {
        img: data_science,
        title: "Data Science",
        link: "/category/data_science",
    },
    { img: security, title: "IT Security", link: "/category/IT_security" },
    {
        img: business,
        title: "Business & Marketing",
        link: "/category/business_marketing",
    },
];

export const Courses: CourseCardProps[] = [
    // engineering courses

    {
        courseId: '',
        img: html,
        title: "HTML5 and CSS3 Fundamentals",
        description:
            "The 'Mastering HTML5 + CSS3 Essentials' course designed to provide participants with a strong foundation in the fundamental concepts of HTML5 and CSS3.",
        category: "engineering",
        featured: true,
    },
    {
        courseId: '',
        img: elixir,
        title: "Elixir + Phoenix For Beginners",
        description:
            "This course aims to provide a solid foundation in Elixir programming and the Phoenix web framework, empowering students to embark on their journey in web application development with Elixir and Phoenix.",
        category: "engineering",
    },
    {
        courseId: '',
        img: javascript,
        title: "Mastering Javascript Essentials",
        description:
            "From the fundamentals to advanced techniques, you'll gain the knowledge and practical experience needed to build dynamic and interactive web applications.",
        category: "engineering",
        featured: true,
    },
    {
        courseId: '',
        img: devops,
        title: "DevOps Engineering",
        description:
            "The DevOps Fundamentals course provides a comprehensive understanding of the key principles and practices that form the foundation of a DevOps culture.",
        category: "engineering",
    },
    {
        courseId: '',
        img: node_js,
        title: "Full-Stack Web Development With Node",
        description:
            "This comprehensive course dives deep into the world of full stack web development using the popular technologies React, Node.js, Express, and PostgreSQL.",
        category: "engineering",
    },
    {
        courseId: '',
        img: manual,
        title: "Manual Software Testing",
        description:
            "Our Comprehensive Online Manual Testing Course is a comprehensive and interactive program designed to equip learners with the necessary knowledge and skills to become proficient manual testers.",
        category: "engineering",
    },
    {
        courseId: '',
        img: c_sharp,
        title: "C# For Beginners",
        description:
            "The main objective of the course is to equip beginners with the necessary knowledge and skills to begin their journey as C# developers.",
        category: "engineering",
    },
    {
        courseId: '',
        img: django,
        title: "Full-Stack Web Development With Python and Django",
        description:
            "This comprehensive course is designed to equip you with the skills and knowledge necessary to become a proficient full- stack web developer using Python and Django.",
        category: "engineering",
    },
    {
        courseId: '',
        img: cypress,
        title: "Automation Software Testing",
        description:
            "By the end of this course, participants will have a strong foundation in automation software testing methodologies and techniques.",
        category: "engineering",
    },
    {
        courseId: '',
        img: sql,
        title: "Basics of SQL",
        description:
            "The Basics of SQL course is designed to provide a fundamental understanding of Structured Query Language(SQL), a critical skill for anyone involved in data management and analysis.",
        category: "engineering",
    },
    {
        courseId: '',
        img: ai,
        title: "Artificial Intelligence Fundamentals",
        description:
            "This course provides a comprehensive introduction to artificial intelligence(AI), covering fundamental concepts, techniques, and applications.",
        category: "engineering",
    },
    {
        courseId: '',
        img: frontend,
        title: "Frontend Development",
        description:
            "In this hands - on course, you will start by mastering the foundational web technologies, including HTML, CSS, and JavaScript.",
        category: "engineering",
    },
    {
        courseId: '',
        img: github,
        title: "Mastering GitHub Essentials",
        description:
            "This course is designed for individuals who want to learn the basics of using Git and GitHub for version control and collaborative software development.",
        category: "engineering",
    },
    {
        courseId: '',
        img: mobile_app,
        title: "Mobile App Development",
        description:
            "In this course, you will learn to design, develop, and deploy mobile apps that are not only visually appealing but also robust and responsive.",
        category: "engineering",
    },

    // design courses

    {
        courseId: '',
        img: figma,
        title: "UI/UX Design",
        description:
            "This course is designed to equip individuals with the skills and knowledge needed to become proficient UI/UX designers using the Figma design tool.",
        category: "design",
        featured: true,
    },

    {
        courseId: '',
        img: photoshop,
        title: "Graphics Design",
        description:
            "The Comprehensive Graphics Design with Photoshop course is a 12-module program designed to equip participants with a solid foundation in graphic design using Adobe Photoshop.",
        category: "design",
    },

    // business and marketing
    {
        courseId: '',
        img: BI,
        title: "Business Intelligence",
        description:
            "The Business Intelligence Fundamentals course introduces students to the principles, tools, and techniques that enable organizations to transform raw data into actionable insights.",
        category: "business & marketing",
    },
    {
        courseId: '',
        img: PM,
        title: "Product Management",
        description:
            "This is a comprehensive course that will equip you with the skills, knowledge, and strategies to excel in the dynamic field of product management.",
        category: "business & marketing",
    },
    {
        courseId: '',
        img: BA,
        title: "IT Business Analysis",
        description:
            "Our Comprehensive Business Analytics Training program is designed to equip you with the skills and knowledge needed to excel in the field of business analytics.",
        category: "business & marketing",
    },
    {
        courseId: '',
        img: DM,
        title: "Digital Marketing",
        description:
            "Our Comprehensive Digital Marketing Training program is designed to equip you with the knowledge and skills needed to excel in the dynamic field of digital marketing.",
        category: "business & marketing",
    },
    {
        courseId: '',
        img: seo,
        title: "Search Engine Optimization",
        description:
            "Our Comprehensive SEO Specialist Training program is designed to transform you into a skilled SEO specialist capable of driving organic traffic and improving search engine rankings.",
        category: "business & marketing",
    },

    // data science
    {
        courseId: '',
        img: data_science,
        title: "Data Science",
        description:
            "This course is designed to provide you with a comprehensive introduction to the field of data science, covering essential concepts, techniques, and tools.",
        category: "data science",
    },
    {
        courseId: '',
        img: data_analytics,
        title: "Data Analytics",
        description:
            "The Data Analytics Essentials course is designed to provide participants with a comprehensive understanding of fundamental concepts and practical techniques in the field of data analytics.",
        category: "data science",
    },
    {
        courseId: '',
        img: financial_analytics,
        title: "Financial Data Analytics",
        description: `The "Financial Data Analytics" course provides a comprehensive exploration of how data analytics techniques can be applied to financial data to gain insights, make informed decisions, and drive strategic financial planning`,
        category: "data science",
    },

    // IT security
    {
        courseId: '',
        img: network_security,
        title: "Network Security",
        description:
            "Our Comprehensive Network Security Training program is designed to provide you with the knowledge and skills needed to excel in the field of network security.",
        category: "IT security",
    },
    {
        courseId: '',
        img: cyber_security,
        title: "Cyber Security",
        description:
            "Our Comprehensive Cybersecurity Training program is designed to equip you with the knowledge and skills needed to excel in the field of cybersecurity.",
        category: "IT security",
    },
];

const Icons = [html, elixir
    , javascript,
    devops,
    node_js,
    manual,
    c_sharp,
    django,
    cypress,
    sql,
    ai,
    frontend,
    github,
    mobile_app,
    figma,
    photoshop
]

const Images = [htmlLarge, elixirLarge]
export { Icons, Images }