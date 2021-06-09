import { Editor } from '@tinymce/tinymce-react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { doGet, doPut } from '../../../lib/DataSource';
import { tinyconfig } from '../../../TinyConfig';
import { tinyconfigBlog } from '../../../TinyConfigBlog';

export default function ProjectUpdate() {
    const location = useLocation();
    const { projectData } = location.state;
    let history = useHistory()
    const [fileCover, setFileCover] = useState(projectData?.imageCover?.url);
    const [project, setProject] = useState(projectData)
    const [fileInfor, setFileInfor] = useState(projectData?.imageInfor?.url);
    const [investment, setInvestment] = useState();

    useEffect(() => {
        getInvestment()
    }, [])
    const getInvestment = async () => {
        const path = "/investment-all";
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status === 200) {
                setInvestment(resp.data)
            }
        } catch (e) {
            console.log(e)
        }
    }
    let handleProject = (e) => {
        const { name, value } = e.target
        setProject({
            ...project,
            [name]: value
        })
    }
    const updateProject = async () => {
        const path = `/project/${project?._id}`;
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("projectName", project?.projectName);
        data.append("typeInvestment", project?.typeInvestment);
        data.append("address", project?.address);
        data.append("acreage", project?.acreage);
        data.append("totalInvestment", project?.totalInvestment);
        data.append("categoryInvestment", project?.categoryInvestment);
        data.append("description", project?.description);
        data.append("imageCover", project?.imageCover);
        data.append("imageInfor", project?.imageInfor);
        data.append("dateStart", project?.dateStart);
        data.append("dateFinish", project?.dateFinish);
        try {
            let res = await doPut(path, headers, data)
            if (res.status === 200) {
                alert("ok")
                history.goBack()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="wrapper__modal">
                <div>
                    <label className="label-txt">Tên dự án: </label> <input className="input-txt"
                        name="projectName"
                        type="text"
                        onChange={handleProject}
                        value={project?.projectName}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, marginBottom: 20 }}>
                    <div>
                        <div>
                            <label>Ảnh Cover:</label> <input id="file-input" type="file"
                                name="imageCover"
                                onChange={(e) => {
                                    setProject({
                                        ...project,
                                        imageCover: e.target.files[0]
                                    })
                                    setFileCover(URL.createObjectURL(e.target.files[0]))
                                }}
                            />
                        </div>
                        {fileCover ? <div>
                            <img id="target" src={fileCover} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                        </div> : <></>}
                    </div>
                    <div>
                        <div>
                            <label>Ảnh Infor:</label> <input id="file-input" type="file"
                                name="imageInfor"
                                onChange={(e) => {
                                    setProject({
                                        ...project,
                                        imageInfor: e.target.files[0]
                                    })
                                    setFileInfor(URL.createObjectURL(e.target.files[0]))
                                }}
                            />
                        </div>
                        {fileInfor ? <div>
                            <img id="target" src={fileInfor} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                        </div> : <></>}
                    </div>
                </div>
                <div>
                    <label className="label-txt">Chọn lĩnh vực đầu tư: </label>
                    <select name="typeInvestment" id="cars" onChange={(e) => {
                        setProject({
                            ...project,
                            typeInvestment: e.target.value
                        })
                    }}
                        value={project?.typeInvestment}
                    >
                        {investment?.map((item, idx) => {
                            return (
                                <option key={idx} value={item._id}>{item.investmentName}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label className="label-txt">Địa chỉ: </label> <input className="input-txt"
                        name="address"
                        type="text"
                        onChange={handleProject}
                        value={project?.address}

                    />
                </div>
                <div>
                    <label className="label-txt">Ngày khởi công: </label> <input className="input-txt"
                        name="dateStart"
                        type="date"
                        onChange={handleProject}
                        value={moment(project?.dateStart).format("YYYY-DD-MM")}
                    />
                </div>
                <div>
                    <label className="label-txt">Ngày dự đoán hoàn thành: </label> <input className="input-txt"
                        name="dateFinish"
                        type="date"
                        onChange={handleProject}
                        value={moment(project?.dateFinish).format("YYYY-DD-MM")}

                    />
                </div>
                <div>
                    <label className="label-txt">Diện tích: </label> <input className="input-txt"
                        name="acreage"
                        type="text"
                        onChange={handleProject}
                        value={project?.acreage}
                    />
                </div>
                <div>
                    <label className="label-txt">Tổng vốn đầu tư: </label> <input className="input-txt"
                        name="totalInvestment"
                        type="text"
                        onChange={handleProject}
                        value={project?.totalInvestment}

                    />
                </div>
                <div>
                    <label className="label-txt">Hạng mục đầu tư: </label>
                    <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                        init={tinyconfig}
                        onEditorChange={(event) => {
                            setProject({
                                ...project,
                                categoryInvestment: event
                            })
                        }}
                        value={project?.categoryInvestment}

                    />
                </div>
                <div>
                    <label className="label-txt">Mô tả: </label>
                    <input id="my-file" type="file" name="my-file" style={{ display: "none" }} onChange="" />
                    <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                        init={tinyconfigBlog}
                        onEditorChange={(event) => {
                            setProject({
                                ...project,
                                description: event
                            })
                        }}
                        value={project?.description}

                    />
                </div>
                <div className="btn--bottom">
                    <div className="wrapper__btn">
                        <button className="back-btn" onClick={() => {
                            setFileCover(null)
                            setFileInfor(null)
                            history.goBack()
                        }}>Quay lại</button>
                        <button
                            onClick={() => {
                                updateProject()
                                setFileCover(null)
                                setFileInfor(null)

                            }}
                        >Xác nhận</button>
                    </div>
                </div>
            </div>
        </>
    )
}