import { Editor } from '@tinymce/tinymce-react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { doGet, doPost } from '../../../lib/DataSource';
import { tinyconfig } from '../../../TinyConfig';
import { tinyconfigBlog } from '../../../TinyConfigBlog';

export default function ProjectDetail() {
    const location = useLocation();
    console.log(location)
    const { project, investmentName } = location.state;
    let history = useHistory()
    return (
        <>
            <div className="wrapper__modal">
                <div>
                    <label className="label-txt">Tên dự án: </label> <input className="input-txt"
                        name="projectName"
                        type="text"
                        value={project?.projectName}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, marginBottom: 20 }}>
                    <div>
                        <div>
                            <label>Ảnh Cover:</label>
                        </div>

                        <img id="target" src={project?.imageCover?.url} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />

                    </div>
                    <div>
                        <div>
                            <div>
                                <label>Ảnh Infor:</label>
                            </div>

                            <img id="target" src={project?.imageInfor?.url} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />

                        </div>
                    </div>
                </div>
                <div>
                    <label className="label-txt">Lĩnh vực đầu tư: </label>
                    <input type="text" value={investmentName} />
                </div>
                <div>
                    <label className="label-txt">Địa chỉ: </label> <input className="input-txt"
                        name="address"
                        type="text"
                        value={project?.address}
                    />
                </div>
                <div>
                    <label className="label-txt">Ngày khởi công: </label> <input className="input-txt"
                        name="dateStart"
                        type="date"
                        value={moment(project?.dateStart).format("YYYY-DD-MM")}
                    />
                </div>
                <div>
                    <label className="label-txt">Ngày dự đoán hoàn thành: </label> <input className="input-txt"
                        name="dateFinish"
                        type="date"
                        value={moment(project?.dateFinish).format("YYYY-DD-MM")}
                    />
                </div>
                <div>
                    <label className="label-txt">Diện tích: </label> <input className="input-txt"
                        name="acreage"
                        type="text"
                        value={project?.acreage}
                    />
                </div>
                <div>
                    <label className="label-txt">Tổng vốn đầu tư: </label> <input className="input-txt"
                        name="totalInvestment"
                        type="text"
                        value={project?.totalInvestment}
                    />
                </div>
                <div>
                    <label className="label-txt">Hạng mục đầu tư: </label>
                    <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                        init={tinyconfig}
                        value={project?.categoryInvestment}


                    />
                </div>
                <div>
                    <label className="label-txt">Mô tả: </label>
                    <input id="my-file" type="file" name="my-file" style={{ display: "none" }} onChange="" />
                    <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                        init={tinyconfigBlog}
                        value={project?.description}

                    />
                </div>
                <div className="btn--bottom">
                    <div className="wrapper__btn">
                        <button className="back-btn" onClick={() => {
                            history.goBack()
                        }}>Quay lại</button>

                    </div>
                </div>
            </div>
        </>
    )
}