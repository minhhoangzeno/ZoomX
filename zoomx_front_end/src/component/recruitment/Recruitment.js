import React from "react";
import "../../style/recruitment.scss";
import RecruitmentItem from "./RecruitmentItem";
export default function Recruitment() {
  return (
    <>
      <div className="recruitment">
        <div className="container-fluid">
          <div className="recruitment__list">
            <div className="row">
              <RecruitmentItem />
              <RecruitmentItem />
              <RecruitmentItem />
              <RecruitmentItem />
              <RecruitmentItem />
              <RecruitmentItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
