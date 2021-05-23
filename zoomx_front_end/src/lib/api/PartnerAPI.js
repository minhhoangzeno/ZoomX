import { doGet, doPost, doDelete, doPut } from '../DataSource';
import { useEffect, useState } from 'react';


export const usePartner = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPartner()
    }, []);

    async function getPartner() {
        const path = "/partner";
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

export async function addPartner(partner) {
    const path = "/partner";
    const headers = {
        "Content-Type": "multipart/form-data"
    }
    const data = new FormData();
    data.append("name", partner?.name);
    data.append("logo", partner?.logo)
    try {
        let res = await doPost(path, headers, data)
        console.log(res)
        if (res.status === 200) {
            alert("ok")
        }
    } catch (error) {
        console.log(error)

    }
}



export async function updatePartner(partner, file, partner_id) {
    const path = `/partner/update/${partner_id}`;
    const headers = {
        Accept: "*/*",
        "Content-Type": "multipart/form-data"
    }
    const formData = JSON.stringify(partner)
    try {
        let resp = await doPut(path, headers, formData);
        if (resp.status === 200) {
            let data = new FormData();
            data.append("file", file);
            const pathUpload = `/image/${partner_id}`;
            const headersUpload = {
                "Content-Type": "multipart/form-data"
            };
            try {
                let resp = await doPut(pathUpload, headersUpload, data);
                if (resp.status === 200) {
                    console.log('ok')
                }
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error);
    }
}


export async function deletePartner(partner_id) {
    const path = `/partner/${partner_id}`;
    try {
        let resp = await doDelete(path);
    } catch (error) {
        console.log(error);
    }
}

