export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "As a client your collaboration is prioritized, open communication is of utmost importance",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am adaptable to various time zone schedules.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate developer enthusiastically moving to the most current",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently working on various projects to showcase my progressive programming",
    description: "The Inside Scoop",
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

export const projects = [
  {
    id: 1,
    title: "Basic Weather Application",
    des: "Find out the weather forecast for a specified location",
    img: "4-weathers.jpg",
    iconLists: [
      "next.svg",
      "/tail.svg",
      "/ts.svg",
      "vercel.png",
      "MongoDB.png",
    ],
    link: "https://github.com/Ungabad/aaron-weather-app",
  },
  {
    id: 2,
    title: "Pupster App",
    des: "A cute little app that allows you to like a dogs picture",
    img: "https://media.istockphoto.com/id/483449001/photo/group-of-dogs.jpg?b=1&s=612x612&w=0&k=20&c=XUgcSmcO1JqcynaIm6aiUo0qvnw94Hvaia5x5v8n238=",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "vercel.png"],
    link: "https://github.com/Ungabad/aaron-pupster-app",
  },
  {
    id: 3,
    title: "ToDo App",
    des: "An app that allows you to input new todo projects, give them a checkmark when completed and delete them.",
    img: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "Netlify.png",
      "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    ],
    link: "https://github.com/Ungabad/aaron_todo_app",
  },
  {
    id: 4,
    title: "Express Book App",
    des: "A simple book database application with the ability to add, edit and delete various data about books.",
    img: "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconLists: [
      "/re.svg",
      "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      "/Netlify.png",
      "/MongoDB.png",
      "https://ungabad.github.io/images/express.png",
    ],
    link: "https://github.com/Ungabad/express-book-app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Student",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web App Dev Student",
    desc: "Designed and developed Web applications using React, Express, and Next under the guidance of experienced professionals.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Ungabad",
  },
  {
    id: 2,
    img: "/instagram.jpg",
    link: "https://www.instagram.com/ungabad/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aaron-dalager-71933a24b/",
  },
];
