import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { doGet, doPut } from '../../../../lib/DataSource';
import { tinyconfigBlog } from '../../../../TinyConfigBlog';
import Loading from '../../../image/Loading';

export default function BlogUpdate() {
    let location = useLocation()
    const blogData = location.state;
    let history = useHistory()
    const [blog, setBlog] = useState(blogData);
    const [category, setCategory] = useState();
    const [fileCover, setFileCover] = useState(blogData?.imageCover?.url);
    const [fileInfor, setFileInfor] = useState(blogData?.imageInfor?.url);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function fetchData() {
            let path = "/categoryblog";
            try {
                let resp = await doGet(path);
                if (resp.status === 200) {
                    setCategory(resp.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])
    const updateBlog = async () => {
        setLoading(true)
        let path = `/blog/${blog?._id}`;
        let data = new FormData();
        data.append("title", blog?.title);
        data.append("categoryId", blog?.categoryId);
        data.append("content", blog?.content);
        data.append("imageCover", blog?.imageCover);
        data.append("imageInfor", blog?.imageInfor);
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        try {
            let resp = await doPut(path, headers, data);
            if (resp.status === 200) {
                alert("ok")
                history.goBack()
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    console.log(blog)
    return (
        <>
            {!loading ?
                <div className="wrapper__blog">
                    <div className="wrapper__blog--item">
                        <label>Nhập tiêu đề</label>
                        <input onChange={(e) => setBlog({
                            ...blog,
                            title: e.target.value
                        })}
                            value={blog?.title}
                        />
                    </div>
                    <div className="wrapper__blog--item">
                        <label>Chọn danh mục bài viết</label>
                        <select
                            onChange={(e) => {
                                setBlog({
                                    ...blog,
                                    categoryId: e.target.value
                                })
                            }}
                            value={blog?.categoryId}
                        >
                            {category?.map((item, idx) => {
                                return (
                                    <option key={idx} value={item?._id} >{item?.name}</option>
                                )
                            })}
                        </select>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, marginBottom: 20 }}>
                    <div>
                        <div>
                            <label>Ảnh Cover:</label> <input id="file-input" type="file"
                                name="imageCover"
                                onChange={(e) => {
                                    setBlog({
                                        ...blog,
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
                                    setBlog({
                                        ...blog,
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
                    <div className="wrapper__blog--item">
                        <label>Nội dung</label>
                        <input id="my-file" type="file" name="my-file" style={{ display: "none" }} onChange="" />
                        <Editor
                            apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfigBlog}
                            onEditorChange={(event) => {
                                setBlog({
                                    ...blog,
                                    content: event
                                })
                            }}
                            value={blog?.content}
                        />
                    </div>
                    <div className="wrapper__blog--item">
                        <button onClick={() => {
                            history.goBack()
                        }}>Quay lại</button>
                        <button onClick={() => updateBlog()}>Xác nhận</button>
                    </div>
                </div> :
                <Loading />
            }
        </>
    )
}