export const links = [
  {
    link: "/",
    text: "Home",
    exact: true,
  },
  {
    link: "/contact",
    text: "Contact",
  },
];

export const socialIcons = [
  { text: "Twitter", icon: "fab fa-twitter", link: "" },
  { text: "Facebook", icon: "fab fa-facebook", link: "" },
  { text: "Instagram", icon: "fab fa-instagram", link: "" },
  { text: "Pinterest", icon: "fab fa-pinterest", link: "" },
  { text: "YouTube", icon: "fab fa-youtube", link: "" },
];

export const profile = [
  {
    title: "Web Developers",
    img: "https://i.imgur.com/EMcyIBn.png",
    text: "Need Someone who can bring your ideas to reality? You are at the right place. With more than 300 developers, select your perfect fit.",
    icon: "paint-brush",
  },
  {
    title: "App Developers",
    img: "https://i.imgur.com/PldPiNS.png",
    text: "With growing number of mobile users in our countries, Now is the best time to take your business online. With more than 300 developers, select your perfect fit.",
    icon: "quote-left",
  },
  {
    title: "Machine Learning",
    img: "https://i.imgur.com/ih8gwVB.png",
    text: "Automation is here. Meet our machine learning engineers which will help you to grow you business automatically.",
    icon: "lightbulb",
  },
  {
    title: "Data Science",
    img: "https://i.imgur.com/ih8gwVB.png",
    text: "Want to get valuable insights about your data? Hire our Data Science experts.",
    icon: "lightbulb",
  },
  {
    title: "Cyber Security",
    img: "https://i.imgur.com/ih8gwVB.png",
    text: "Data is the new oil. Protect your data with our Cyber Security experts.",
    icon: "lightbulb",
  },
  {
    title: "Software Developers",
    img: "https://i.imgur.com/ih8gwVB.png",
    text: "Welcome to new era of softwares. Build your product with our rich collection of world class software developers",
    icon: "lightbulb",
  }
];

export const style = {
  NotificationItem: {
    DefaultStyle: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      border: "solid 1px rgb(0, 0,0,0)",
      boxShadow: "var(--light-shadow)",
      height: "45px",
      display: "flex",
      alignItems: "center",
    },
    warning: {},
  },
};

export const contactInputs = [
  {
    text: "Full Name",
    value: "name",
    name: "form-name",
  },
  {
    text: "Email",
    value: "email",
    name: "form-email",
  },
  {
    text: "Message",
    value: "msg",
    textarea: true,
    name: "form-message",
  },
];

export const loginInputs = [
  {
    text: "Email",
    value: "email",
    name: "login-email",
    type: "email",
  },
  {
    text: "password",
    value: "password",
    name: "login-password",
  },
];

export const signupInputs = [
  {
    text: "Name",
    value: "Name",
    name: "signup-name",
    type: "text",
  },
  {
    text: "Email",
    value: "email",
    name: "signup-email",
    type: "email",
  },
  {
    text: "Password",
    value: "password",
    name: "signup-password",
    type: "password",
  },
  {
    text: "Confirm password",
    value: "confirmPassword",
    name: "signup-hospital-confirm-password",
    type: "password",
  },
];

export const gridservices = [
  {
    img: require("../img/web_devloper.png"),
    title: "Web Developers",
    texts: ["Backend", "Frontend", "Database"],
    text: "Breath taking Web designs for an amazing user experience.",
    icon: "fad fa-browser",
    link: "/studentList/webDev",
  },
  {
    reverse: true,
    img: require("../img/mobile_app_devloper.png"),
    title: "Mobile Apps",
    texts: ["Android", "IOS", "Cross Platform"],
    text: "Mobile Apps allow users to access your web app on their phone!",
    icon: "fad fa-mobile",
    link: "/studentList/appDev",
  },
  {
    img: require("../img/data_science.png"),
    title: "Data Science",
    texts: ["Process data", "Visualize", "Analyse"],
    text: "Process and analyse the valuable insights of your data.",
    icon: "fad fa-analytics",
    link: "/studentList/dataScience",
  },
  {
    reverse: true,
    img: require("../img/software_devloper.png"),
    title: "Software Developers",
    texts: ["Build", "Test", "Launch"],
    text: "World class softwares.",
    link: "/studentList/software",
    icon: "fad fa-laptop-code",
  },
  {
    img: require("../img/cyber_security.png"),
    title: "Cyber Security",
    texts: ["Encrypt", "Decrypt", "Secure"],
    text: "Secure your product.",
    link: "/studentList/cyber",
    icon: "fas fa-shield-alt",
  },
  {
    reverse: true,
    img: require("../img/machine_learning.png"),
    title: "Machine Learning",
    texts: ["Train", "Test", "Optimize"],
    text: "Train your machine to do the task.",
    link: "/studentList/machineLearning",
    icon: "fad fa-user-robot",
  },
];
