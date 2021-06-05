import { Editor } from '@tinymce/tinymce-react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doGet } from '../../../lib/DataSource';
import { tinyconfig } from '../../../TinyConfig';
export default function ModalDetail(props) {
    let pj = [];
    props.data.imageProject.map(item => {
        pj.push(item.url)
        return pj;
    })
    let fileCover = props.data.imageCover?.url
    let project = props.data
    let fileHero = props.data.imageHero?.url
    let fileInfor = props.data.imageInfor?.url
    let fileProject = pj

    const [investment, setInvestment] = useState({});

    useEffect(() => {
        let getInvestment = async () => {
            const path = `/investment/${props.data.typeInvestment}`;
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
        getInvestment()
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps
    
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
                            value={project.projectName}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, marginBottom: 20 }}>
                        <div>
                            <div>
                                <label>Ảnh Cover:</label>
                            </div>
                            {fileCover ? <div>
                                <img id="target" src={fileCover} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                            </div> : <></>}
                        </div>
                        <div>
                            <div>
                                <label>Ảnh Hero:</label>
                            </div>
                            {fileHero ? <div>
                                <img id="target" src={fileHero} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                            </div> : <></>}
                        </div>
                        <div>
                            <div>
                                <label>Ảnh Infor:</label>
                            </div>
                            {fileInfor ? <div>
                                <img id="target" src={fileInfor} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                            </div> : <></>}
                        </div>
                    </div>
                    <div>
                        <label>Ảnh dự án:</label>
                    </div>
                    <div style={{ display: 'flex' }}>
                        {fileProject?.map((item,idx) => {
                            return (
                                <div style={{ margin: 10 }} key={idx}>
                                    <img id="target" src={item} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <label className="label-txt">Lĩnh vực đầu tư: </label>
                        <input className="input-txt"
                            name="address"
                            type="text"
                            value={investment?.investmentName}

                        />

                    </div>
                    <div>
                        <label className="label-txt">Địa chỉ: </label> <input className="input-txt"
                            name="address"
                            type="text"
                            value={project.address}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Ngày khởi công: </label> <input className="input-txt"
                            name="dateStart"
                            type="date"
                            value={moment(project.dateStart).format("YYYY-MM-DD")}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Ngày dự đoán hoàn thành: </label> <input className="input-txt"
                            name="dateFinish"
                            type="date"
                            value={moment(project.dataFinish).format("YYYY-MM-DD")}


                        />
                    </div>
                    <div>
                        <label className="label-txt">Diện tích: </label> <input className="input-txt"
                            name="acreage"
                            type="text"
                            value={project.acreage}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Tổng vốn đầu tư: </label> <input className="input-txt"
                            name="totalInvestment"
                            type="text"
                            value={project.totalInvestment}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Hạng mục đầu tư: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}
                            value={project.categoryInvestment}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Mô tả: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}
                            value={project.description}

                        />
                    </div>


                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={() => {
                                props.onHide()                                                     
                            }}>Quay lại</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}