import React, { useEffect, useState } from 'react';
import { doGet } from '../../lib/DataSource';
import '../../style/detail-recruitment.scss'
import RecruitmentMain from './RecruitmentMain';
import RecruitmentSameItem from './RecruitmentSameItem';


export default function DetailRecruitment({ data }) {
    const [sames, setSame] = useState();
    useEffect(() => {
        getDataSame()
    }, [data?._id])
    let getDataSame = async () => {
        let path = `/recruitment-search?q=${data?.career}`;
        try {
            let resp = await doGet(path);
            if (resp.status === 200) {
                setSame(resp.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="detail-recruitment">
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-lg-8 col-12">
                        <RecruitmentMain data={data} />
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="recruitment__list__same">
                            <div className="list__same">
                                <div className="title"><strong>Việc làm tương tự</strong></div>
                                {sames?.map((item, index) => {
                                    return (
                                        <RecruitmentSameItem key={index} data={item} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}