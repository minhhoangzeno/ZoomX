import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doGet, doPost } from '../../../lib/DataSource';
import { Editor } from '@tinymce/tinymce-react';
import { tinyconfig } from '../../../TinyConfig';
export default function BlogAdd() {
    const [blog, setBlog] = useState();
    const addBlog = async () => {
        let path = "/blog";
        let data = new FormData();
        data.append("title", blog?.title);
        data.append("categoryId", blog?.categoryId);
        data.append("content", blog?.content);
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        try {
            let resp = await doPost(path,headers,data);
            if (resp.status === 200) {
                alert("ok")
            }
        } catch (error) {
            console.log(error)
        }
    }
    console.log(blog)
    return (
        <>
            <div>
                <label>Nhap tieu de</label>
                <input onChange={(e) => setBlog({
                    ...blog,
                    title: e.target.value
                })} />
            </div>
            <div>
                <label>Nhap danh muc</label>
                <input onChange={(e) => setBlog({
                    ...blog,
                    categoryId: e.target.value
                })} />
            </div>
            <div>
                <label>Content</label>
                <input id="my-file" type="file" name="my-file" style={{display:"none"}} onChange=""  />
                <Editor
                    apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                    init={tinyconfig}
                    onEditorChange={(event) => {
                        setBlog({
                            ...blog,
                            content: event
                        })
                    }}
                />
            </div>
            <div>
                <button onClick={() => addBlog()}>Xac nhan</button>
            </div>
        </>
    )
}