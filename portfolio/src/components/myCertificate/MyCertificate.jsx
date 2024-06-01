import React from "react";
import Style from "./myCertificate.module.css";
import c_certificate from "./certificates/C_Language.svg";
import cpp from "./certificates/CPP_With_STL.svg";
import dsa from "./certificates/DSA.svg";
import quiz from "./certificates/quiz.jpg";
const MyCertificate = ({ left, top }) => {
  return (
    <>
      <section className={Style.myCertificateSection} style={{ left, top }}>
        <span className={Style.tital}>Certificates</span>
        <div className={Style.titalDiv}>
          <div>
            <p className={Style.certificateTital}>
              Achieved proficiency in 'C Language' during the period spanning
              November 23, 2021, to February 5, 2022.
            </p>
            <img
              src={c_certificate}
              alt="c language certifiacte"
              className={Style.certificateImg}
            />
          </div>
          <div>
            <p className={Style.certificateTital}>
              Completed the 'C++ Language with Standard Template Library' course
              from April 15, 2022, to July 15, 2022.
            </p>
            <img
              src={cpp}
              alt="c language certifiacte"
              className={Style.certificateImg}
            />
          </div>
          <div>
            <p className={Style.certificateTital}>
              Successfully concluded a comprehensive 3-month training program on
              'Data Structures and Algorithms utilizing C++.
            </p>
            <img
              src={dsa}
              alt="c language certifiacte"
              className={Style.certificateImg}
            />
          </div>
          <div>
            <p className={Style.certificateTital}>
              Achieved victory in a C Programming Quiz conducted by MySirG
              Private Limited on June 17, 2022
            </p>
            <img
              src={quiz}
              alt="c language certifiacte"
              className={Style.certificateImg}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCertificate;
