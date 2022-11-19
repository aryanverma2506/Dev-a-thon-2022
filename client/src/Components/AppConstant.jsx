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
    img: require("../img/web_devloper.png"),
    text: "Need Someone who can bring your ideas to reality? You are at the right place. With more than 300 developers, select your perfect fit.",
    icon: "fad fa-browser",
    link: "/studentList/webDev",
  },
  {
    title: "App Developers",
    img: require("../img/mobile_app_devloper.png"),
    text: "With growing number of mobile users in our countries, Now is the best time to take your business online. With more than 300 developers, select your perfect fit.",
    icon: "fad fa-mobile",
    link: "/studentList/appDev",
  },
  {
    title: "Data Science",
    img: require("../img/data_science.png"),
    text: "Want to get valuable insights about your data? Hire our Data Science experts.",
    icon: "fad fa-analytics",
    link: "/studentList/dataScience",
  },
  {
    title: "Software Developers",
    img: require("../img/software_devloper.png"),
    text: "Welcome to new era of softwares. Build your product with our rich collection of world class software developers",
    icon: "fad fa-laptop-code",
    link: "/studentList/software",
  },
  {
    title: "Cyber Security",
    img: require("../img/cyber_security.png"),
    text: "Data is the new oil. Protect your data with our Cyber Security experts.",
    icon: "fas fa-shield-alt",
    link: "/studentList/cyber",
  },
  {
    title: "Machine Learning",
    img: require("../img/machine_learning.png"),
    text: "Automation is here. Meet our machine learning engineers which will help you to grow you business automatically.",
    icon: "fad fa-user-robot",
    link: "/studentList/machineLearning",
  },
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
    title: "App Developers",
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
    icon: "fad fa-laptop-code",
    link: "/studentList/software",
  },
  {
    img: require("../img/cyber_security.png"),
    title: "Cyber Security",
    texts: ["Encrypt", "Decrypt", "Secure"],
    text: "Secure your product.",
    icon: "fas fa-shield-alt",
    link: "/studentList/cyber",
  },
  {
    reverse: true,
    img: require("../img/machine_learning.png"),
    title: "Machine Learning",
    texts: ["Train", "Test", "Optimize"],
    text: "Train your machine to do the task.",
    icon: "fad fa-user-robot",
    link: "/studentList/machineLearning",
  },
];
