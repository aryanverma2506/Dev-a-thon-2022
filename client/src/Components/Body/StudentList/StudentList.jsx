import React, { useState, useEffect } from "react";
import Card from "../../Reuseable/Card/Card";
import ObjectInput from "../../Reuseable/Input/ObjectInput";
import BannerProps from "../Banner/BannerProps";
import AppButton from "../../Reuseable/Button/AppButton";
import styles from "./StudentList.module.css";
import axios from "axios";
import { Checkbox, FormControlLabel } from "@material-ui/core";

function StudentList(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [formInputFields, setFormInputFields] = useState([])
  const [formInput, setFormInput] = useState([0, 0, 0, 0])
  const [studentBoxes, setstudentBoxes] = useState([])
  const [defaultState, setDefaultState] = useState(true)

  const getData = async (inDefaultMode) => {
    const profile = props.profile
    if(profile == 'webDev') {
      setFormInputFields([
        {
          text: "Backend Web Technologies",
          value: formInput[0],
          name: "backend",
          type: "Number",
        },
        {
          text: "Frontend Web Technologies",
          value: formInput[1],
          name: "frontend",
          type: "Number",
        },
        {
          text: "DataBase",
          value: formInput[2],
          name: "database",
          type: "Number",
        }
      ])

      console.log(formInput);
      const data = await axios.post('/webDevStudents', {
        "inDefaultMode": inDefaultMode,
        "backend": formInput[0],
        "frontend": formInput[1],
        "database": formInput[2]
      })
      setstudentBoxes(data.data)
    } 
    else if(profile == 'appDev') {
      setFormInputFields([
        {
          text: "Android",
          value: formInput[0],
          name: "android",
          type: "Number",
        },
        {
          text: "IOS",
          value: formInput[1],
          name: "ios",
          type: "Number",
        },
        {
          text: "Cross Platform",
          value: formInput[2],
          name: "crossPlatform",
          type: "Number",
        }
      ])
      const data = await axios.post('/appDevStudents', {
        "inDefaultMode": inDefaultMode,
        "android": formInput[0],
        "ios": formInput[1],
        "cross_platform": formInput[2]
      })
      setstudentBoxes(data.data)
    }
    else if(profile == 'software') {
      setFormInputFields([
        {
          text: "Data Structures",
          value: formInput[0],
          name: "ds",
          type: "Number",
        },
        {
          text: "Algorithms",
          value: formInput[1],
          name: "algo",
          type: "Number",
        },
        {
          text: "Problem Solving",
          value: formInput[2],
          name: "problemSolving",
          type: "Number",
        }
      ])
      const data = await axios.post('/softwareDeveloperStudents', {
        "inDefaultMode": inDefaultMode,
        "data_structures": formInput[0],
        "algorithms": formInput[1],
        "problem_solving_and_aptitude": formInput[2]
      })
      setstudentBoxes(data.data)
    }
    else if(profile == 'cyber') {
      setFormInputFields([
        {
          text: "Operating System",
          value: formInput[0],
          name: "os",
          type: "Number",
        },
        {
          text: "Communication and Networks",
          value: formInput[1],
          name: "ccn",
          type: "Number",
        }
      ])
      const data = await axios.post('/cyberSecurityStudents', {
        "inDefaultMode": inDefaultMode,
        "operating_system": formInput[0],
        "communication_networks": formInput[1]
      })
      setstudentBoxes(data.data)
    }
    else if(profile == 'dataScience') {
      setFormInputFields([
        {
          text: "Python",
          value: formInput[0],
          name: "python",
          type: "Number",
        },
        {
          text: "Multivariate Calculus and Linear Algebra",
          value: formInput[1],
          name: "mcla",
          type: "Number",
        },
        {
          text: "Probability and Statistics",
          value: formInput[2],
          name: "pns",
          type: "Number",
        }
      ])
      const data = await axios.post('/dataScienceStudents', {
        "inDefaultMode": inDefaultMode,
        "python": formInput[0],
        "multivariate_calculus_linear_algebra": formInput[1],
        "probability_statistics": formInput[2]
      })
      setstudentBoxes(data.data)
    }
    else if(profile == 'machineLearning') {
      setFormInputFields([
        {
          text: "Python",
          value: formInput[0],
          name: "python",
          type: "Number",
        },
        {
          text: "Multivariate Calculus and Linear Algebra",
          value: formInput[1],
          name: "mcla",
          type: "Number",
        },
        {
          text: "Probability and Statistics",
          value: formInput[2],
          name: "pns",
          type: "Number",
        },
        {
          text: "Machine Learning Algorithms",
          value: formInput[3],
          name: "mlalgo",
          type: "Number",
        }
      ])
      const data = await axios.post('/machineLearningStudents', {
        "inDefaultMode": inDefaultMode,
        "python": formInput[0],
        "multivariate_calculus_linear_algebra": formInput[1],
        "probability_statistics": formInput[2],
        "ml_algorithms": formInput[3]
      })
      setstudentBoxes(data.data)
      console.log(data.data);
    }
  }

  const getDevelopers = () => {
    getData(false)
    console.log(formInput);
  }

  useEffect(() => {
    getData(true)
  }, [])

  const handleCheckBoxChange = (e) => {
    if(defaultState === false) {
      setDefaultState(true)
      e.target.checked = true
    } else {
      setDefaultState(false)
      e.target.checked = false
    }
  }
  

  const studentBoxesRow = studentBoxes?.map((box) => {
    return <Card className={styles} card={box}/>;
  });

  const getInputFields = formInputFields?.map((input,idx) => {
    return (
      <ObjectInput
        name={input.name}
        text={input.text}
        type={input.type}
        disabled={defaultState}
        value={formInput}
        setValue={setFormInput}
        obj={idx}
        textarea={input.textarea}
      />
    );
  })

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
        <div className={`${styles["contact-boxes"]}`} >
        <FormControlLabel control={<Checkbox defaultChecked onChange={handleCheckBoxChange}/>} label="Default Mode" />
          {getInputFields}
          {/* <input type={"Number"} max={100} placeholder={"Enter backend Weightage"} value={backendInput} onChange={(e) => setBackendInput(e.target.value)}/>
          <input type={"Number"} max={100} placeholder={"Enter frontend Weightage"} value={frontendInput} onChange={(e) => setFrontendInput(e.target.value)}/>
          <input type={"Number"} max={100} placeholder={"Enter database Weightage"} value={databaseInput} onChange={(e) => setDataBaseInput(e.target.value)}/> */}
          <AppButton text="Get Developers" clickEvent={getDevelopers}/>
        </div>
        <div className={`${styles["contact-boxes"]}`}>{studentBoxesRow}</div>
      </div>
    </div>
  );
}

export default StudentList;
