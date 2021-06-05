import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doGet,  doPut } from '../../../lib/DataSource';
import { Editor } from '@tinymce/tinymce-react';
import { tinyconfig } from '../../../TinyConfig';
export default function ModalUpdate(props) {
    let pj = [];
    props.data.imageProject.map(item => {
        pj.push(item.url)
        return pj;
    })
    const [fileCover, setFileCover] = useState(props.data.imageCover?.url);
    const [project, setProject] = useState(props.data)
    const [fileHero, setFileHero] = useState(props.data.imageHero?.url);
    const [fileInfor, setFileInfor] = useState(props.data.imageInfor?.url);
    const [fileProject, setFileProject] = useState(pj);
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
    let handleFileProject = (e) => {
        let image = [];
        image.push(e.target.files);
        let listImage = []
        for (let i = 0; i < image[0].length; i++) {
            listImage.push(URL.createObjectURL(image[0][i]))
        }
        setFileProject(listImage)
    }
    const updateProject = async (projectData) => {
        props.handleLoading(true)
        const path = `/project/${project._id}`;
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
        data.append("imageHero", project?.imageHero);
        data.append("imageInfor", project?.imageInfor);
        let listPj = Array.from(project.imageProject)
        for (let i = 0; i < listPj.length; i++) {
            data.append("imageProject", listPj[i]);
        } 
        data.append("dateStart", project?.dateStart);
        data.append("dateFinish", project?.dateFinish);

        try {
            let res = await doPut(path, headers, data)
            if (res.status === 200) {
                console.log("1")
                props.handleLoading(false)
                props.getSearch()
            }

        } catch (error) {
            props.handleLoading(false)
            console.log(error)
            console.log("2")

        }
    }
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
                            value={project.projectName}
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
                            {fileHero ? <div>
                                <img id="target" src={fileHero} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
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
                    <div style={{ display: 'flex' }}>
                        {fileProject?.map(item => {
                            return (
                                <div style={{ margin: 10 }}>
                                    <img id="target" src={item} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <label className="label-txt">Chọn lĩnh vực đầu tư: </label>
                        <select name="typeInvestment" id="cars" onChange={handleProject}
                            value={project.typeInvestment}

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
                            value={project.address}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Ngày khởi công: </label> <input className="input-txt"
                            name="dateStart"
                            type="date"
                            onChange={handleProject}
                            value={project.dateStart}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Ngày dự đoán hoàn thành: </label> <input className="input-txt"
                            name="dateFinish"
                            type="date"
                            onChange={handleProject}
                            value={project.dateFinish}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Diện tích: </label> <input className="input-txt"
                            name="acreage"
                            type="text"
                            onChange={handleProject}
                            value={project.acreage}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Tổng vốn đầu tư: </label> <input className="input-txt"
                            name="totalInvestment"
                            type="text"
                            onChange={handleProject}
                            value={project.totalInvestment}

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
                            value={project.categoryInvestment}

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
                            value={project.description}

                        />
                    </div>


                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={() => {
                                props.onHide()
                                setFileCover(null)
                                setFileHero(null)
                                setFileInfor(null)
                                setFileProject(null)
                            }}>Quay lại</button>
                            <button
                                onClick={async () => {
                                   await updateProject(project)
                                    setFileCover(null)
                                    setFileHero(null)
                                    setFileInfor(null)
                                    setFileProject(null)
                                    props.onHide()
                                }}

                            >Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}