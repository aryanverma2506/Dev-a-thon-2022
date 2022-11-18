import React, { useState } from "react";
import "./Profile.css";
import AppointmentTable from './Table/Small Tables/AppointmentTable';
import MedicalBillsTable from './Table/Small Tables/MedicalBillsTable';
import MedicalRecordsTable from './Table/Small Tables/MedicalRecordsTable';
import Medications from './Table/Small Tables/Medications';

function Profile () {
  const [current, setCurrent] = useState('profile');

  function handleClick (s) {
    document.getElementById(current)?.classList.remove("sidebarActive");
    document.getElementById(`${current}Div`)?.setAttribute("style", "display:none");
    setCurrent(s);
    document.getElementById(s)?.classList.add("sidebarActive");
    document.getElementById(`${s}Div`)?.removeAttribute("style");
  }

  return (
    <div className="profileBody">
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm mt-4">
            <div className="col-md-4 mb-4">
              <div className="card floatEffect">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle profuImg"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>Nitigya Joshi</h4>
                      <p className="text-secondary mb-1">Patient</p>
                      <p className="text-muted font-size-sm">
                        IIIT Sri City, Chittoor, A.P.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mt-3 floatEffect">
                <ul className="list-group list-group-flush">
                  <button className="list-group-item d-flex justify-content-between align-items-center flex-wrap sidebarActive" id='profile' onClick={() => handleClick('profile')}>
                    <h6 className="mb-0 imageAdjust">
                      <img
                        // @ts-ignore
                        src={require("../../../img/user.png")}
                        alt=""
                        className="profilePageProfImg"
                      />{" "}
                      Profile
                    </h6>
                  </button>
                  <button className="list-group-item d-flex justify-content-between align-items-center flex-wrap" id='appointment'
                    onClick={() => handleClick('appointment')}>
                    <h6 className="mb-0 imageAdjust">
                      <img
                        // @ts-ignore
                        src={require("../../../img/medical-appointment.png")}
                        alt=""
                        className="profilePageAppoinImg"
                      />{" "}
                      Appointments
                    </h6>
                  </button>
                  <button className="list-group-item d-flex justify-content-between align-items-center flex-wrap" id='bills'
                    onClick={() => handleClick('bills')}>
                    <h6 className="mb-0 imageAdjust">
                      <img
                        // @ts-ignore
                        src={require("../../../img/bill.png")} alt=""
                      />{" "}
                      Medical Bills
                    </h6>
                  </button>
                  <button className="list-group-item d-flex justify-content-between align-items-center flex-wrap" id='records'
                    onClick={() => handleClick('records')}>
                    <h6 className="mb-0 imageAdjust">
                      <img
                        // @ts-ignore
                        src={require("../../../img/medical-record.png")}
                        alt=""
                      />{" "}
                      Medical Records
                    </h6>
                  </button>
                  <button className="list-group-item d-flex justify-content-between align-items-center flex-wrap" id='medicine'
                    onClick={() => handleClick('medicine')}>
                    <h6 className="mb-0 imageAdjust">
                      <img
                        // @ts-ignore
                        src={require("../../../img/medicine.png")} alt=""
                      />{" "}
                      Medications
                    </h6>
                  </button>
                </ul>
              </div>
            </div>

            {/* right side part */}
            <div className="col-md-8">

              {/* profile */}
              <div className="card mb-3" id='profileDiv'>
                <h4 className='profileHeading'>Profile</h4><hr />
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Nitigya Joshi</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      nitigya@gmail.com
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (+91) 1234567890
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      BH-1, IIIT Sri City, Chittoor, A.P.
                    </div>
                  </div>
                </div>
              </div>

              {/* appointment table */}
              <div id='appointmentDiv' style={{ display: 'none' }}>
                <AppointmentTable />
              </div>

              {/* bill table */}
              <div id='billsDiv' style={{ display: 'none' }}>
                <MedicalBillsTable />
              </div>

              {/* records table */}
              <div id='recordsDiv' style={{ display: 'none' }}>
                <MedicalRecordsTable />
              </div>

              {/* medicine table */}
              <div id='medicineDiv' style={{ display: 'none' }}>
                <Medications />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
