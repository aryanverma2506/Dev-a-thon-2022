import React, { useState } from "react";
import Donut from "../../Reuseable/ApexChart/Donut";
// import "./Profile.css";
import { temp } from "../../AppConstant";
import styles from "./Profile.module.css";
import AppointmentTable from "./Table/Small Tables/AppointmentTable";
import MedicalBillsTable from "./Table/Small Tables/MedicalBillsTable";
import MedicalRecordsTable from "./Table/Small Tables/MedicalRecordsTable";
import Medications from "./Table/Small Tables/Medications";

function Profile() {
  const [current, setCurrent] = useState("profile");

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
              <h4>Nitigya Joshi</h4>
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
              id="skills"
              onClick={() => handleClick("skills")}
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
              Nitigya Joshi
            </span>
          </div>
          <hr />
          <div className={`${styles["row"]}`}>
            <label className={`${styles["profile-label"]}`}>Email</label>
            <span className={`${styles["profile-label-info"]}`}>
              nitigya@gmail.com
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
          id="skillsDiv"
          style={{ display: "none" }}
        >
          <Donut series={temp.donut} title="Sample" colors={temp.colors} />
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

  // return (
  //   <div className="profileBody">
  //     <div className="container">
  //       <div className="main-body">
  //         <div className="row gutters-sm mt-4">
  //           <div className="col-md-4 mb-4">
  //             <div className="card floatEffect">
  //               <div className="card-body">
  //                 <div className="d-flex flex-column align-items-center text-center">
  //                   <img
  //                     src="https://bootdey.com/img/Content/avatar/avatar7.png"
  //                     alt="Admin"
  //                     className="rounded-circle profuImg"
  //                     width="150"
  //                   />
  //                   <div className="mt-3">
  //                     <h4>Nitigya Joshi</h4>
  //                     <p className="text-secondary mb-1">Patient</p>
  //                     <p className="text-muted font-size-sm">
  //                       IIIT Sri City, Chittoor, A.P.
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>

  //             <div className="card mt-3 floatEffect">
  //               <ul className="list-group list-group-flush">
  //                 <button className="list-group-item d-flex justify-content-between align-items-center flex-wrap sidebarActive" id='profile' onClick={() => handleClick('profile')}>
  //                   <h6 className="mb-0 button-heading">
  //                     <img
  //                       // @ts-ignore
  //                       src={require("../../../img/user.png")}
  //                       alt=""
  //                       className="profilePageProfImg"
  //                     />{" "}
  //                     Profile
  //                   </h6>
  //                 </button>
  //                 <button className="list-group-item d-flex justify-content-between align-items-center flex-wrap" id='appointment'
  //                   onClick={() => handleClick('appointment')}>
  //                   <h6 className="mb-0 button-heading">
  //                     <img
  //                       // @ts-ignore
  //                       src={require("../../../img/medical-appointment.png")}
  //                       alt=""
  //                       className="profilePageAppoinImg"
  //                     />{" "}
  //                     Appointments
  //                   </h6>
  //                 </button>
  //                 <button className="list-group-item d-flex justify-content-between align-items-center flex-wrap" id='bills'
  //                   onClick={() => handleClick('bills')}>
  //                   <h6 className="mb-0 button-heading">
  //                     <img
  //                       // @ts-ignore
  //                       src={require("../../../img/bill.png")} alt=""
  //                     />{" "}
  //                     Medical Bills
  //                   </h6>
  //                 </button>
  //                 <button className="list-group-item d-flex justify-content-between align-items-center flex-wrap" id='records'
  //                   onClick={() => handleClick('records')}>
  //                   <h6 className="mb-0 button-heading">
  //                     <img
  //                       // @ts-ignore
  //                       src={require("../../../img/medical-record.png")}
  //                       alt=""
  //                     />{" "}
  //                     Medical Records
  //                   </h6>
  //                 </button>
  //                 <button className="list-group-item d-flex justify-content-between align-items-center flex-wrap" id='medicine'
  //                   onClick={() => handleClick('medicine')}>
  //                   <h6 className="mb-0 button-heading">
  //                     <img
  //                       // @ts-ignore
  //                       src={require("../../../img/medicine.png")} alt=""
  //                     />{" "}
  //                     Medications
  //                   </h6>
  //                 </button>
  //               </ul>
  //             </div>
  //           </div>

  //           {/* right side part */}
  //           <div className="col-md-8">

  //             {/* profile */}
  //             <div className="card mb-3" id='profileDiv'>
  //               <h4 className='profileHeading'>Profile</h4><hr />
  //               <div className="card-body">
  //                 <div className="row">
  //                   <div className="col-sm-3">
  //                     <h6 className="mb-0">Full Name</h6>
  //                   </div>
  //                   <div className="col-sm-9 text-secondary">Nitigya Joshi</div>
  //                 </div>
  //                 <hr />
  //                 <div className="row">
  //                   <div className="col-sm-3">
  //                     <h6 className="mb-0">Email</h6>
  //                   </div>
  //                   <div className="col-sm-9 text-secondary">
  //                     nitigya@gmail.com
  //                   </div>
  //                 </div>
  //                 <hr />
  //                 <div className="row">
  //                   <div className="col-sm-3">
  //                     <h6 className="mb-0">Mobile</h6>
  //                   </div>
  //                   <div className="col-sm-9 text-secondary">
  //                     (+91) 1234567890
  //                   </div>
  //                 </div>
  //                 <hr />
  //                 <div className="row">
  //                   <div className="col-sm-3">
  //                     <h6 className="mb-0">Address</h6>
  //                   </div>
  //                   <div className="col-sm-9 text-secondary">
  //                     BH-1, IIIT Sri City, Chittoor, A.P.
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>

  //             {/* appointment table */}
  //             <div id='appointmentDiv' style={{ display: 'none' }}>
  //               <AppointmentTable />
  //             </div>

  //             {/* bill table */}
  //             <div id='billsDiv' style={{ display: 'none' }}>
  //               <MedicalBillsTable />
  //             </div>

  //             {/* records table */}
  //             <div id='recordsDiv' style={{ display: 'none' }}>
  //               <MedicalRecordsTable />
  //             </div>

  //             {/* medicine table */}
  //             <div id='medicineDiv' style={{ display: 'none' }}>
  //               <Medications />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Profile;
