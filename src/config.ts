export const config = {
  developer: {
    name: "Lokesh. T",
    fullName: "Lokesh. T",
    title:
      "Aspiring Software Developer | Python Automation | Full Stack Developer",
    


  },

  social: {
    // Replace these when ready (or keep empty for now)
    github: "Lokesh-web16",
    email: "lokeshnaikar7@gmail.com",
    location: "Bengaluru, India",
  },

  about: {
    title: "About Me",
  description:
  " I’m Lokesh, a highly analytical Investigation Specialist at Amazon who is actively transitioning into Software Development. I focus on leveraging critical thinking and code to build efficient, scalable solutions. My current role at Amazon has refined my ability to 'Dive Deep ' conduct rigorous Root Cause Analysis and optimize complex operational processes.\nCurrently seeking a challenging Junior/Associate Software Developer role where I can contribute immediately. Let’s connect to discuss full‑stack opportunities, Python projects or how my blend of analytical problem‑solving and development skills can add value to your team."

  },

 experiences: [
  {
    position: "Investigation Specialist",
    company: "Amazon",
    period: "Sep 2024 – Present",
    location: "Bengaluru, Karnataka",
    description:
      "Investigations Specialist in AWD, resolving shipment and inventory discrepancies using internal tools and SQL-based investigations. Built custom queries in Amazon Hubble to speed up analysis for stuck/incorrect ASNs, and partnered with ops/tech teams to improve inbound SOPs. Shipped workflow improvements like a Slack-based issue tool and a rerouting mechanism to reduce manual effort, duplication, and resolution turnaround time. Improved SIM communication quality with clearer formatting for internal stakeholders.",
  },
  {
    position: "Technical Assistant",
    company: "Mark Anthony Ventures",
    period: "JUNE 2023 – 24",
    location: "Bengaluru, Karnataka",
    description:
      "Supported backend data processing and report generation, and automated Excel-based workflows to reduce repetitive work. Provided technical support for internal tools and documentation systems, including troubleshooting Windows/OS and hardware issues. Worked closely with teams to keep day-to-day operations running smoothly and improve delivery consistency.",
  },
],


  projects: [
    {
      id: 1,
      title: "SmartBiz AI — Business Intelligence Platform",
      category: "Full Stack + AI",
      technologies:
        "React, Vite, Modern CSS, Google Cloud Run, Firebase Auth, Firestore, Gemini Pro API, Web Speech API",
      image: "images/project1.png",
      links: {
        demo: "https://smartbiz-frontend-75650840064.asia-southeast1.run.app",
        github: "https://github.com/Lokesh-web16/smartbiz-ai",
      },
      highlights: [
        "Voice-first interface (speech-to-text + text-to-speech).",
        "Real-time business analysis using Gemini Pro with Indian market context (₹).",
        "Firebase auth + persistent chat history in Firestore.",
        "Deployed on Cloud Run with scalable serverless architecture.",
      ],
    },
    {
      id: 2,
      title: "Face Recognition & Attendance System",
      category: "Python + Computer Vision",
      technologies: "Python 3.10, OpenCV, MySQL, Firebase",
      image: "images/project2.png",
      links: { demo: "", github: "" },
      highlights: [
        "Recognizes faces using stored encodings and marks attendance automatically.",
        "Stores attendance records in a database and generates reports.",
        "Built to reduce manual work and improve reliability of attendance tracking.",
      ],
    },
    {
      id: 3,
      title: "BattleGrounds Unleashed — Content + Analytics",
      category: "Growth + Analytics",
      technologies: "YouTube Analytics, Content Pipeline, Video Editing, Data-driven iteration",
      image: "images/project3.png",
      links: { demo: "", github: "" },
      highlights: [
        "Produced and edited 126+ videos with consistent scheduling discipline.",
        "Used analytics (CTR, retention, watch-time) to iterate and improve performance.",
        "Built communication and presentation skills transferable to engineering teams.",
      ],
    },
  ],

  contact: {
    email: "lokeshnaikar7@gmail.com",
    github: "https://github.com/Lokesh-web16",
    linkedin: "https://www.linkedin.com/in/lokesh-t-a00458208/",
    twitter: "",
    instagram: "",
  },

  skills: {
    develop: {
      title: "DEVELOP",
      description: "Full-stack development and automation",
      details:
        "Building web apps with React and strong fundamentals in Python automation. Comfortable with MySQL and Unix/Linux troubleshooting and learning cloud services for scalable deployments.",
      tools: [
        "Python",
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "MySQL",
        "Unix/Linux",
        "Firebase",
        "Google Cloud (Cloud Run)",
        "Git/GitHub",
      ],
    },

    design: {
      title: "ANALYZE",
      description: "Root-cause analysis and problem solving",
      details:
        "Investigation mindset: dive deep, find root cause, document clearly, and ship fixes. Strong at debugging and translating ambiguous issues into measurable outcomes.",
      tools: [
        "Root Cause Analysis (RCA)",
        "Troubleshooting",
        "Documentation",
        "Communication",
        "Data analysis basics",
      ],
    },
  },

  extras: {
    education: [
      {
        name: "SMSG Jain Degree College",
        program: "BCA (Bachelor of Computer Application)",
        period: "Mar 2021 - Nov 2023",
        grade: "9.05 CGPA",
      },
      {
        name: "Little Flower English High School",
        program: "SSLC",
        period: "May 2017 - Apr 2018",
        grade: "9.55 CGPA",
      },
    ],
    certifications: [
      {
        name: "Full Stack Web Development",
        issuer: "Besant Technologies",
        issued: "",
      },
      {
        name:
          "Accenture North America — Data Analytics & Visualization Job Simulation",
        issuer: "Forage",
        issued: "Jan 2024",
        credentialId: "RDD227SeoPKbfWk55",
      },
    ],
    volunteering: [
      {
        org: "YOUTH FOR SEVA (YFS)",
        role: "Student Volunteer",
        period: "May 2022 - Nov 2022",
        focus: "Children",
      },
      {
        org: "Nehru Yuva Kendra Sangathan (India)",
        role: "Student Volunteer",
        period: "Sep 2021 - Dec 2021",
        focus: "Environment",
      },
    ],
    languages: [
      { name: "Kannada", level: "Native or bilingual" },
      { name: "Tamil", level: "Native or bilingual" },
      { name: "English", level: "Full professional" },
      { name: "Hindi", level: "Full professional" },
      { name: "Telugu", level: "Limited working" },
    ],
  },
};
