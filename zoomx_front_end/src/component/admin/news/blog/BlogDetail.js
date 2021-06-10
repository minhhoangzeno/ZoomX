import { Editor } from '@tinymce/tinymce-react';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { tinyconfigBlog } from '../../../../TinyConfigBlog';

export default function BlogDetail() {
    let location = useLocation();
    const { data, categoryBlog } = location.state;
    let history = useHistory();
    return (
        <>
            <div className="wrapper__blog">

                <div className="wrapper__blog--item">
                    <label>Nhập tiêu đề</label>
                    <input type="text"
                        value={data?.title}
                    />
                </div>
                <div className="wrapper__blog--item">
                    <label>Chọn danh mục bài viết</label>
                    <input type="text"
                        value={categoryBlog}
                    />

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, marginBottom: 20 }}>
                    <div>
                        <div>
                            <label>Ảnh Cover:</label>
                        </div>

                        <img id="target" src={data?.imageCover?.url} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />

                    </div>
                    <div>
                        <div>
                            <div>
                                <label>Ảnh Infor:</label>
                            </div>

                            <img id="target" src={data?.imageInfor?.url} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />

                        </div>
                    </div>
                </div>
                <div className="wrapper__blog--item">
                    <label>Nội dung</label>
                    <input id="my-file" type="file" name="my-file" style={{ display: "none" }} onChange="" />
                    <Editor
                        apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                        init={tinyconfigBlog}
                        value={data?.content}
                    />
                </div>
                <div className="wrapper__blog--item">
                    <button onClick={() => {
                        history.goBack()
                    }}>Quay lại</button>
                </div>
            </div>
        </>
    )
}