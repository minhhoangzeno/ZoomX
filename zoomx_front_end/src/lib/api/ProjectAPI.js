import { doGet, doPost, doDelete, doPut } from '../DataSource';
import { useEffect, useState } from 'react';


export const useProject = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProject()
    }, []);

    async function getProject() {
        const path = "/project";
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status == 200) {
                setData(resp.data)
            }
        } catch (e) {
            setError(e)
        }
    }
    return { data, error, loading: (data || error ? false : true) }
}

export async function addProject(project, file) {
    const path = "/project";
    const pathUpload = "/project/image"
    let headers = {
        "Content-Type": "application/json"
    }
    let headersUpload = {
        "Content-Type": "multipart/form-data"
    }
    try {
        let resp = await doPost(path, headers, JSON.stringify(project));
        if (resp.status == 200) {
            let pathUploadCover = `${pathUpload}/cover/${resp.data._id}`;
            let pathUploadHero = `${pathUpload}/hero/${resp.data._id}`;
            let pathUploadProject = `${pathUpload}/project/${resp.data._id}`;
            let pathUploadInfor = `${pathUpload}/infor/${resp.data._id}`;
            let dataCover = new FormData();
            dataCover.append("file", file?.fileCover)
            let dataHero = new FormData();
            dataHero.append("file", file?.fileHero)
            let dataProject = new FormData();
            for (let i = 0; i < file?.fileProject.length; i++) {
                dataProject.append("file", file?.fileProject[i])
            }
            let dataInfor = new FormData();
            dataInfor.append("file", file?.fileInfor)
            try {

                let pj = await doPost(pathUploadProject, headersUpload, dataProject);
                if (pj.status == 200) {
                    doPost(pathUploadCover, headersUpload, dataCover);
                    doPost(pathUploadHero, headersUpload, dataHero);
                    doPost(pathUploadInfor, headersUpload, dataInfor);

                }
            } catch (error) {

            }

        }
    } catch (error) {
        console.log(error)
    }
}
