import React, { useContext, useState, useEffect } from "react";
import emailjs from "emailjs-com";

import Card from "../../Reuseable/Card/Card";
import ObjectInput from "../../Reuseable/Input/ObjectInput";
import BannerProps from "../Banner/BannerProps";
import Iconbox from "../../Reuseable/Icon/Iconbox";
import AppButton from "../../Reuseable/Button/AppButton";
import { ContextApp } from "../../../ContextAPI";
import { contactInputs } from "../../AppConstant";
import { addNotification } from "../../AppFunctions";
import styles from "./StudentList.module.css";
import axios from "axios";

function StudentList(props) {
  const { notifisystem } = useContext(ContextApp);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [studentBoxes, setstudentBoxes] = useState([])
  function sendEmail(event) {
    console.log("asd");
    event.preventDefault();
    emailjs
      .sendForm(
        "service_jsaoihr",
        "template_h5vq1co",
        event.target,
        "user_B0W0FA6EBGqj9vC542Rs3"
      )
      .then(
        (result) => {
          console.log(result.text);
          const parameters = {
            msg: "Email Sent!",
            icon: "fad fa-envelope",
            notifisystem,
          };
          addNotification(parameters);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const formInputs = contactInputs?.map((input) => {
    return (
      <ObjectInput
        name={input.name}
        text={input.text}
        value={formValues}
        setValue={setFormValues}
        obj={input.value}
        textarea={input.textarea}
      />
    );
  });


  const getData = async () => {
    const profile = props.profile
    if(profile == 'webDev') {
      const data = await axios.post('/webDevStudents', {
        "inDefaultMode": true,
        "backend": 70,
        "frontend": 20,
        "database": 10
      })
      setstudentBoxes(data.data)
    } 
    else if(profile == 'appDev') {
      const data = await axios.post('/appDevStudents', {
        "inDefaultMode": true,
        "backend": 70,
        "frontend": 20,
        "database": 10
      })
      setstudentBoxes(data.data)
    }
    else if(profile == 'software') {
      const data = await axios.post('/softwareDeveloperStudents', {
        "inDefaultMode": true,
        "backend": 70,
        "frontend": 20,
        "database": 10
      })
      setstudentBoxes(data.data)
    }
    else if(profile == 'cyber') {
      const data = await axios.post('/cyberSecurityStudents', {
        "inDefaultMode": true,
        "backend": 70,
        "frontend": 20,
        "database": 10
      })
      setstudentBoxes(data.data)
    }
    else if(profile == 'dataScience') {
      const data = await axios.post('/dataScienceStudents', {
        "inDefaultMode": true,
        "backend": 70,
        "frontend": 20,
        "database": 10
      })
      console.log(data.data);
      setstudentBoxes(data.data)
    }
    else if(profile == 'machineLearning') {
      const data = await axios.post('/machineLearningStudents', {
        "inDefaultMode": true,
        "backend": 70,
        "frontend": 20,
        "database": 10
      })
      setstudentBoxes(data.data)
    }
  }

  useEffect(() => {
    getData()
    console.log(studentBoxes);
  }, [])
  

  const studentBoxesRow = studentBoxes?.map((box) => {
    return <Card className={styles} card={box}/>;
  });

  return (
    <div className={`${styles["contact"]}`}>
      <BannerProps
        img="https://i.imgur.com/fzc9vDw.png"
        title="Student List"
        text="Here are the top class Students you can ever get"
      />
      <div className={`${styles["contact-info"]}`}>
        <div className={`${styles["contact-title"]}`} data-aos="flip-left">
          <h2>Student List</h2>
        </div>
        <div className={`${styles["contact-boxes"]}`}>{studentBoxesRow}</div>
        {/* <div className={`${styles["contact-form"]}`} data-aos="zoom-out">
          <div className={`${styles["left-contact"]}`}>
            <Iconbox className={styles} icon="fad fa-envelope" />
            <h2>Send Me a Message</h2>
          </div>
          <form onSubmit={sendEmail}>
            {formInputs}
            <AppButton text={"Submit"} icon="fad fa-envelope" />
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default StudentList;
