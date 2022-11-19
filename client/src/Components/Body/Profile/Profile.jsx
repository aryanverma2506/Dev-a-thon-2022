import React, { useEffect, useState } from "react";
import Donut from "../../Reuseable/ApexChart/Donut";
// import { temp } from "../../AppConstant";
import styles from "./Profile.module.css";
import {useParams} from "react-router-dom"
import axios from "axios";

function Profile(props) {
  const [current, setCurrent] = useState("profile");
  const { id } = useParams()
  const [name, setName] = useState("")
  const [skillsData, setSkillsData] = useState({
    series: [],
    labels: []
  })

  const labels = [
    "backend",
    "frontend",
    "database",
    "android",
    "ios",
    "cross_platform",
    "version_control_systems",
    "python",
    "multivariate_calculus_linear_algebra",
    "probability_statistics",
    "ml_algorithms",
    "communication_networks",
    "operating_system",
    "data_structures",
    "algorithms",
    "problem_solving_and_aptitude"
  ]

  const colors = [
    '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
  ]

  function handleClick(s) {
    document
      .getElementById(current)
      ?.classList.remove(`${styles["active-button"]}`);
    document
      .getElementById(`${current}Div`)
      ?.setAttribute("style", "display:none");
    setCurrent(s);
    document.getElementById(s)?.classList.add(`${styles["active-button"]}`);
    document.getElementById(`${s}Div`)?.removeAttribute("style");
  }

  const getData = async () => {
    const data = await axios.get(`/getStudent/${id}`)
    setName(data.data.name)

    let temp = []
    labels.map((lab) => {
      temp.push(data.data[lab])
    })

    let test = {
      series: temp,
      labels: labels
    }
    setSkillsData(test)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={`${styles["profile-page"]}`}>
      <div className={`${styles["row"]}`}>
        <div className={`${styles["col"]}`}>
          <div className={`${styles["card"]}`}>
            <div className={`${styles["profile-img"]}`}>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Admin"
              />
            </div>
            <div className={`${styles["profile-info"]}`}>
              <h4>{name}</h4>
              <p>Student</p>
              <p>IIIT Sri City, Chittoor, A.P.</p>
            </div>
          </div>
          <div className={`${styles["buttons"]}`}>
            <button
              className={`${styles["active-button"]}`}
              id="profile"
              onClick={() => handleClick("profile")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i class="fas fa-user-circle"></i>
                </div>
                <span>Profile</span>
              </h6>
            </button>
            <button
              className=""
              id="skillsData"
              onClick={() => handleClick("skillsData")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i class="fas fa-pencil-paintbrush"></i>
                </div>
                <span>Skills</span>
              </h6>
            </button>
            <button
              className=""
              id="resume"
              onClick={() => handleClick("resume")}
            >
              <h6 className={`${styles["button-heading"]}`}>
                <div className={`${styles["icon-box"]}`}>
                  <i class="fad fa-file-user"></i>
                </div>
                <span>Resume</span>
              </h6>
            </button>
          </div>
        </div>
        <div
          className={`${styles["card"]} ${styles["info-div"]}`}
          id="profileDiv"
        >
          <h4 className={`${styles["profile-heading"]}`}>Profile</h4>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Full Name</label>
            <span className={`${styles["profile-label-info"]}`}>
              {name}
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Email</label>
            <span className={`${styles["profile-label-info"]}`}>
              {id}@gmail.com
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Mobile</label>
            <span className={`${styles["profile-label-info"]}`}>
              (+91) 1234567890
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Address</label>
            <span className={`${styles["profile-label-info"]}`}>
              BH-1, IIIT Sri City, Chittoor, A.P.
            </span>
          </div>
        </div>
        <div
          className={`${styles["card"]} ${styles["info-div"]}`}
          id="skillsDataDiv"
          style={{ display: "none" }}
        >
        <Donut series={skillsData} title="Sample" colors={colors}/>
        </div>
        <div
          className={`${styles["card"]} ${styles["info-div"]}`}
          id="resumeDiv"
          style={{ display: "none" }}
        >
          Hello
        </div>
      </div>
    </div>
  );
}

export default Profile;
