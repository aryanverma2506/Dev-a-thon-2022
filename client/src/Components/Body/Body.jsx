import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotificationSystem from "react-notification-system";

import Icon from "../Reuseable/Icon/Icon";
import Navbar from "../Navbar/Navbar";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import Profile from "./Profile/Profile";
import StudentList from "./StudentList/StudentList";
import { links, style } from "../AppConstant";
import { ContextApp } from "../../ContextAPI";
import styles from "./Body.module.css";

function Body() {
  const { scrolled, notifisystem } = useContext(ContextApp);

  return (
    <div className={`${styles["body"]}`}>
      <Icon
        icon={
          scrolled
            ? `fad fa-arrow-up ${styles["top"]} ${styles["scrol"]}`
            : `${styles["top"]}`
        }
        clickEvent={() => window.scrollTo(0, 0)}
      />
      <NotificationSystem ref={notifisystem} style={style} />
      <Navbar links={links} />

      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/studentList/webDev" element={<StudentList profile={"webDev"}/>} />
          <Route path="/studentList/appDev" element={<StudentList profile={"appDev"} />} />
          <Route path="/studentList/software" element={<StudentList profile={"software"} />} />
          <Route path="/studentList/cyber" element={<StudentList profile={"cyber"} />} />
          <Route path="/studentList/dataScience" element={<StudentList profile={"dataScience"} />} />
          <Route path="/studentList/machineLearning" element={<StudentList profile={"machineLearning"} />} />

          {/* <Route path="*" element={<YouAreLost />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Body;
