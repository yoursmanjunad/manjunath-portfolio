import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
  // {name: "Writing", link: "Writing"},

];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-60",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex flex-col justify-center",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A Tech savvy enthusiast, with a passion for fastening SD Lifecycle",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently deploying a Node Js based application on-premises",
    description: "@Onwe.in",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// export const writings = [
//   {
//     id: 1,
//     quote:
//       "",
//     img: "/signoz.jpeg",
//     title: "1st Runner Up, Arweave Hacker House Cohort #1",
//   }
// ]

export const writings = [
  {
    id: 1,
    quote:
      "Article to provide comprehensive guide to systemctl logs",
    img: "/signoz.jpeg",
    title: "https://signoz.io/guides/systemctl-logs/",
  },
  {
    id: 2,
    quote:
      "What are SysLog formats? How to use them?",
    img: "/signoz.jpeg",
    title: "https://signoz.io/blog/syslog-formats/",
  },
  {
    id: 2,
    quote:
      "What are SysLog formats? How to use them?",
    img: "/signoz.jpeg",
    title: "https://signoz.io/blog/syslog-formats/",
  },
]

export const projects = [
  {
    id: 1,
    title: "Deploying a Spring Application",
    des: "Deployed a Spring application using Git, GitHub, Jenkins, Docker, Kubernetes, Ansible, Grafana, Prometheus, AWS",
    img: "/project3.png",
    iconLists: ["/docker.svg", "/k8s.png", "/jenkins.svg", "/prometheus.png", "/grafana.svg", "maven.jpeg"],
    link: "https://github.com/yoursmanjunad/DevOps-Project-3.git",
  },
  {
    id: 2,
    title: "Open Telemetry Monitoring",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/dash.png",
    iconLists: ["/open telemetry.png", "/grafana.svg", "/prometheus.png", "/jaeger.png", "/cloud.svg"],
    link: "https://github.com/yoursmanjunad/OpenTelemetry-Monitoring.git",
  },
  {
    id: 3,
    title: "Setting up Infrastructure",
    des: "Defining infrastructure using Terraform",
    img: "/tfff.Default",
    iconLists: ["/terraform.svg", "/aws.png", "/prometheus.png", "/grafana.svg"],
    link: "https://github.com/yoursmanjunad/AWS-Terraform",
  },
  // {
  //   id: 4,
  //   title: "",
  //   des: "Build the Zed Code Editor based on Rust from Source for Windows which isn't available officially yet.",
  //   img: "/zed.png",
  //   iconLists: ["/rust.png", "/crate.png", "/window.svg", "/github.png", "/markdown.png"],
  //   link: "https://github.com/Atharva-3000/zed-windows-unofficial-release",
  // },
]

export const achievements = [
  {
    id: 1,
    quote:
      "I was appointed as Freelance Technical Content Writer at Y-Combinator Funded startup - SigNoz.io.",
    img: "/signoz.jpeg",
    title: "My article resulting in better searches for SigNoz",
  },
  {
    id: 2,
    quote:
      "Got selected as potential startup project over 200 teams and got 2 weeks of startup incubation at PIERC",
    img: "/pierc.jpeg",
    title: "Startup Incubation at PIERC",
  },
  {
    id: 3,
    quote:
      "I was appointed as the DevOps and OpenSource Lead for Google Developer Student Club - Parul University for the year 2023-2024.",
    img: "gdsc.png",
    title: "GDSC DevOps & OpenSource Lead",
  },
  // {
  //   id:4,
  //   quote:
  //     "Was selected as the contributo",
  //     img: "gssoc.png",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   id:5,
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   img: "./nothing.jpeg",
  //   title: "Director of AlphaStream Technologies",
  // },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Technical Content Writer - Intern",
    desc: "Contributed to more than 7 repositories by successfully making 10 Pull Requests over the span of a week involving technologies like Javascript, React and Markdowns.",
    className: "md:col-span-2",
    thumbnail: "parul.jpg",
  },
  {
    id: 2,
    title: "DevOps & Open-Source Lead",
    desc: "Led the Web track for GDSC PU, conducted cohort and taught over 150 students with Practical Hands-On and projects.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/gdsc.png",
  },
  {
    id: 3,
    title: "DevOps Content Writer - Freelance",
    desc: "Led the Web track for GDSC PU, conducted cohort and taught over 150 students with Practical Hands-On and projects.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/signoz.jpeg",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    desc: "Working at a startup as a Intern DevOps Engineer, daily job - Maintain Software Lifecycle, Branching Strategies and maintain code, Deploy features branches, and monitor them.",
    className: "md:col-span-2",
    thumbnail: "/onwe.jpg",
  },
  {
    id: 5,
    title: "More Incoming",
    desc: "Actively looking to gather more Experiece, drop me an email if you think that I can help you.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/yoursmanjunad",
    img: "/git.svg",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/irumanjunath/",
    img: "/link.svg",
  },
];