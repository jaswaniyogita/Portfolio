/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yogita's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Yogita Jaswani Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Yogita Jaswani",
  logo_name: "Yogita Jaswani",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1ZSuPKn-2OLx6EHc7TLgeqTrJMCwn9Dke/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/jaswaniyogita",
  // linkedin: "https://www.linkedin.com/in/yogitajaswani/",
  // gmail: "yogitajaswani@arizona.edu"

  {
    name: "Github",
    link: "https://github.com/jaswaniyogita",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yogitajaswani/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:yogitajaswani@arizona.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Product Management",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
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
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
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
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
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
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Eller College Of Management, University of Arizona",
      subtitle: "Masters in Management Information Systems",
      logo_path: "uoa.png",
      alt_name: "UoA",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ I solve the challenges of today’s tech-driven business world by learning to use IT to support business processes and strategic needs.",
        "⚡ Apart from this, I have done courses on Enterprise Data Management, Product Management, Business Intelligence and Information Systems Analysis and Design.",
        "⚡  I've secured the 2nd position in the Data Analytics Challenge & have also been Graduate Teaching Assistant",
      ],
      website_link: "https://eller.arizona.edu/",
    },
    {
      title: "The Northcap University",
      subtitle: "B.Tech in Computer Science and Engineering",
      logo_path: "ncu.png",
      alt_name: "The Northcap University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have taken varity of courses related to Data Science, Cloud Computing, Web Development and Software Engineering.",
        "⚡ Apart from this, I had also developed Smart Parking System for my campus using IoT and Machine Learning which got high praise from the Dean.",
        "⚡ I developed Face Mask Detection using Tensorflow and OpenCV for my Internship firm where I built a CNN model to help people in Covid crisis visiting the offices.",
      ],
      website_link: "https://www.ncuindia.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Product Analytics Micro-Certification (PAC)",
      subtitle: "Product School",
      logo_path: "Pschool.png",
      certificate_link:
        "https://drive.google.com/file/d/1rdRUE8hSQO3Klujd1v3o_rZadei18zBh/view?usp=sharing",
      alt_name: "Product School",
      color_code: "#8C151599",
    },
    {
      title: "Product-led Certification",
      subtitle: "Pendo.io",
      logo_path: "pendo.png",
      certificate_link:
        "https://www.credly.com/badges/e319eb37-7e37-43e7-8c20-1fb886535c9e/public_url",
      alt_name: "Pendo.io",
      color_code: "#1F70C199",
    },
    {
      title: "Product-Led Growth Micro-Certification (PLGC)™️",
      subtitle: "Product School",
      logo_path: "Pschool.png",
      certificate_link:
        "https://drive.google.com/file/d/1OgykMepdTt7M7Y5D8y1oRHaTofqPzHZc/view?usp=sharing",
      alt_name: "Salesforce",
      color_code: "#8C151599",
    },
    {
      title: "Product Analytics Certification",
      subtitle: "Pendo.io",
      logo_path: "pendo.png",
      certificate_link:
        "https://www.credly.com/badges/911e36d5-817a-40a4-9bb6-1f44f0824f16/public_url",
      alt_name: "Pendo",
      color_code: "#1F70C199",
    },
    {
      title: "Azure Data Engineer Associate	",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/6d816ed6-023d-4be5-86ca-cd597dec447d/public_url",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Product Management Basics Certification",
      subtitle: "Pendo.io",
      logo_path: "pendo.png",
      certificate_link:
        "https://www.credly.com/badges/040f8945-9890-4d17-9f3e-58d1b36065bb/public_url",
      alt_name: "Pendo",
      color_code: "#1F70C199",
    },
    {
      title: "Azure AI Fundamentals",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/42d08754-4460-43f0-a013-10e5da01b1ac/public_url",
      alt_name: "Google",
      color_code: "#D83B0199",
    },
    {
      title: "Salesforce Certified Business Analyst",
      subtitle: "Salesforce",
      logo_path: "salesforce.png",
      certificate_link:
        "https://drive.google.com/file/d/17WEHo8WOdhxlrpr-ylVeIYyr1igeMLj1/view?usp=sharing",
      alt_name: "Salesforce",
      color_code: "#00000000",
    },
    {
      title: "Azure Data Fundamentals",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/216644ab-82a5-4537-8086-e8837e529a74/public_url",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Salesforce Certified Platform App Builder",
      subtitle: "Salesforce",
      logo_path: "salesforce.png",
      certificate_link:
        "https://drive.google.com/file/d/1ifEcTmnqRM55m8dRFYRN7oV75dVcJ1oN/view?usp=sharing",
      alt_name: "Salesforce",
      color_code: "#00000000",
    },
    {
      title: "Python for Data Science",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/0c44641b-cf69-459d-bbfc-873843370124/public_url",
      alt_name: "IBM",
      color_code: "#AFE1AF",
    },
    {
      title: "Salesforce Certified Marketing Cloud Email Specialist",
      subtitle: "Salesforce",
      logo_path: "salesforce.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZdDELXtaJ3s93iVgKXR3OfuSkBBk2Ibx/view?usp=sharing",
      alt_name: "Salesforce",
      color_code: "#00000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate Product Manager",
          company: "Salesforce",
          company_url: "https://www.salesforce.com/",
          logo_path: "salesforce.png",
          duration: "Sep 2022 - Aug 2023",
          location: "Hyderabad, Telangana",
          description: 
            "⚡ I worked as a Product Manager for the Salesforce Commerce Cloud. I was responsible for the product roadmap, strategy, and feature definition for the Salesforce Commerce Cloud. I worked with the engineering team to define, build, and launch new features. I also worked with the sales and marketing teams to define the go-to-market strategy, helping them understand the product positioning, key benefits, and target customer. I also worked with the customer success team to understand customer needs and gather feedback on the product.",
          color: "#0879bf",
        },
        {
          title: "Senior Software Engineer",
          company: "Capgemini Pvt. Ltd.",
          company_url: "https://www.capgemini.com/us-en/",
          logo_path: "capgemini.png",
          duration: "Sep 2020 - Sep 2022",
          location: "Pune, Maharashtra",
          description:
            "I worked as a Senior Software Engineer for the Capgemini. I was responsible for the product roadmap, strategy, and feature definition for the Capgemini. I worked with the engineering team to define, build, and launch new features. I also worked with the sales and marketing teams to define the go-to-market strategy, helping them understand the product positioning, key benefits, and target customer. I also worked with the customer success team to understand customer needs and gather feedback on the product.",
          color: "#9b1578",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [

          
        {
          title: "Global Ambassador",
          company: "WomenTech Network",
          company_url: "https://www.womentech.net/en-us",
          logo_path: "wn.png",
          duration: "Dec 2020 - PRESENT",
          location: "New Delhi, India",
          description:
            "On a mission to unite 100000 women in tech to discuss things that matter! As a member of the WomenTech Network, I get to learn about diversity & inclusion, develop my leadership skills and expand my network.",
          color: "#181717",
        },
        {
          
          title: "Read-a-Story",
          company: "Read a Story NGO",
          company_url: "https://readastory.org.in/",
          logo_path: "ngo.png",
          duration: "Apr 2022 - Jul 2023",
          location: "New Delhi, India",
          description:
            "Read-a-story hopes to improve the english skills of children from undeserved parts of the country. I tutor a child who wishes to improve his/her english and help them do the same via telephonic conversations.",
          color: "#4285F4",
        },

        {
          title: "Mentor",
          company: "GirlScript Summer of Code",
          company_url:
            "https://gssoc.girlscript.tech/",
          logo_path: "gsoc.png",
          duration: "Feb 2021 - Jun 2021",
          location: "New Delhi, India",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Mentor",
          company: "Script Winter Of Code | Devfolio",
          company_url: "https://swoc.devfolio.co/",
          logo_path: "swoc.png",
          duration: "Dec 2020 - Mar 2021",
          location: "New Delhi, India",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Placement Head Coordinator",
          company: "The Northcap University",
          company_url: "https://www.ncuindia.edu/",
          logo_path: "ncu.png",
          duration: "Jul 2018 - Jan 2020",
          location: "Gurugram, Harayana",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
      
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Tucson, Arizona, USA",
    locality: "Kanodar",
    country: "US",
    region: "Arizona",
    postalCode: "85719",
    streetAddress: "Tucson",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/cpJgsy1LAwsFWwwX8",
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
