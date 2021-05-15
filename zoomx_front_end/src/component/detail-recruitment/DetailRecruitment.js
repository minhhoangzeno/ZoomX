import React from 'react';
import '../../style/detail-recruitment.scss'
import RecruitmentMain from './RecruitmentMain';
import RecruitmentSameItem from './RecruitmentSameItem';


export default function DetailRecruitment(){
    return (
        <div className="detail-recruitment">
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-lg-8 col-12">
                        <RecruitmentMain />
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="recruitment__list__same">
                                <div className="list__same">
                                    <div className="title"><strong>Việc làm tương tự</strong></div>
                                    <RecruitmentSameItem />
                                    <RecruitmentSameItem />
                                    <RecruitmentSameItem />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}