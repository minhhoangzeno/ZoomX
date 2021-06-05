import { Editor } from '@tinymce/tinymce-react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doGet } from '../../../lib/DataSource';
import { tinyconfig } from '../../../TinyConfig';
export default function ModalDetail(props) {
    let pj = [];
    props.data.imageBlog.map(item => {
        pj.push(item.url)
        return pj;
    })
    let fileImage = pj;
    const [categoryBlog, setCategoryBlog] = useState();
    useEffect(() => {
        async function fetchData() {
            const path = `/categoryblog/${props.data?.categoryId}`;
            const headers = {
                Accept: "*/*"
            }
            try {
                var resp = await doGet(path, headers);
                if (resp.status === 200) {
                    setCategoryBlog(resp.data)

                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
   
    return (
        <>

            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <div className="wrapper__modal">
                <div>Chi tiet</div>
                    <div>
                        <label className="label-txt">Tieu de: </label> <input className="input-txt"
                            name="title"
                            type="text"
                            value={props.data.title}

                        />
                    </div>
                    
                    <div>
                        <label className="label-txt">Ngày viet: </label> <input className="input-txt"
                            name="date"
                            type="date"
                            value={moment(props.data?.date).format("YYYY-MM-DD")}

                        />
                    </div>
                    <div>
                        <label>Ảnh dự án:</label>
                    </div>
                    <div style={{ display: 'flex' }}>
                        {fileImage?.map((item, idex) => {
                            return (
                                <div style={{ margin: 10 }} key={idex}>
                                    <img id="target" src={item} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <label className="label-txt">Danh muc bai viet: </label>
                        <input type="text" value={categoryBlog?.name} />

                    </div>

                    <div>
                        <label className="label-txt">Mo bai: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}

                            value={props.data?.contentStart}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Than bai: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}
                            value={props.data?.contentMain}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Ket bai: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}
                            value={props.data?.contentBegin}
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