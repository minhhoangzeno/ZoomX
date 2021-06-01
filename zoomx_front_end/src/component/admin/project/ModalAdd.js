import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doGet, doPost } from '../../../lib/DataSource';
import { Editor } from '@tinymce/tinymce-react';
import { tinyconfig } from '../../../TinyConfig';
export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [project, setProject] = useState({})
    const [fileHero, setFileHero] = useState();
    const [fileInfor, setFileInfor] = useState();
    const [fileProject, setFileProject] = useState([]);
    const [investment, setInvestment] = useState();

    console.log("fileInfor", fileInfor);
    console.log("fileProject", fileProject)
    useEffect(() => {
        getInvestment()
    }, [])
    const getInvestment = async () => {
        const path = "/investment";
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
    let handleFileProject = (e) => {
        let image = [];
        image.push(e.target.files);
        let listImage = []
        for (let i = 0; i < image[0].length; i++) {
            listImage.push(URL.createObjectURL(image[0][i]))
        }
        setFileProject(listImage)
    }
    // const addRecruitment = async (recruitmentData) => {
    //     props.handleLoading(true)
    //     const path = "/recruitment";
    //     const headers = {
    //         "Content-Type": "multipart/form-data"
    //     }
    //     const data = new FormData();
    //     data.append("title", recruitment?.title);
    //     data.append("address", recruitment?.address)
    //     data.append("rank", recruitment?.rank)
    //     data.append("typeRank", recruitment?.typeRank);
    //     data.append("experience", recruitment?.experience)
    //     data.append("salary", recruitment?.salary)
    //     data.append("career", recruitment?.career);
    //     data.append("dateReceived", recruitment?.dateReceived)
    //     data.append("imageRecruitment", recruitment?.imageRecruitment)
    //     data.append("welfare", recruitment?.welfare);
    //     data.append("description", recruitment?.description)
    //     data.append("requestCareer", recruitment?.requestCareer)
    //     try {
    //         let res = await doPost(path, headers, data)
    //         if (res.status === 200) {
    //             props.handleLoading(false)
    //             props.getSearch()
    //         }

    //     } catch (error) {
    //         props.handleLoading(false)
    //         console.log(error)
    //     }
    // }
    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <div className="wrapper__modal">
                    <div>
                        <label className="label-txt">Tên dự án: </label> <input className="input-txt"
                            name="projectName"
                            type="text"
                            onChange={handleProject}
                        />
                    </div>
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
                    <div>
                        <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div>
                        <label>Ảnh Hero:</label> <input id="file-input" type="file"
                            name="imageHero"
                            onChange={(e) => {
                                setProject({
                                    ...project,
                                    imageHero: e.target.files[0]
                                })
                                setFileHero(URL.createObjectURL(e.target.files[0]))
                            }}
                        />
                    </div>
                    <div>
                        <img id="target" src={fileHero} style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
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
                    <div>
                        <img id="target" src={fileInfor} style={{ width: 200, height: 'auto' }} alt="" />
                    </div>

                    <div>
                        <label>Ảnh dự án:</label> <input id="file-input" type="file"
                            name="imageInfor"
                            onChange={(e) => {
                                setProject({
                                    ...project,
                                    imageProject: e.target.files
                                })
                                handleFileProject(e)

                            }}
                            multiple
                        />
                    </div>
                    {fileProject?.map(item => {
                        return (
                            <div>
                                <img id="target" src={item} style={{ width: 200, height: 'auto' }} alt="" />
                            </div>
                        )
                    })}

                    <div>
                        <label className="label-txt">Chọn lĩnh vực đầu tư: </label>
                        <select name="typeInvestment" id="cars" onChange={handleProject}>
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

                        />
                    </div>
                    <div>
                        <label className="label-txt">Diện tích: </label> <input className="input-txt"
                            name="acreage"
                            type="text"
                            onChange={handleProject}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Tổng vốn đầu tư: </label> <input className="input-txt"
                            name="totalInvestment"
                            type="text"
                            onChange={handleProject}

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

                        />
                    </div>
                    <div>
                        <label className="label-txt">Mô tả: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}

                            onEditorChange={(event) => {
                                setProject({
                                    ...project,
                                    description: event
                                })
                            }}

                        />
                    </div>


                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button
                            // onClick={() => {
                            //     addRecruitment(recruitment)
                            //     setFileCover(null)
                            //     props.onHide()
                            // }}

                            >Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}