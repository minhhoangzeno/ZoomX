import { doGet, doPost, doDelete, doPut } from '../DataSource';
import { useEffect, useState } from 'react';


export const usePartner = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getPartner()
    }, []);

    async function getPartner() {
        setLoading(true)
        const path = "/partner";
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status == 200) {
                setData(resp.data)
                setLoading(false)
            }
        } catch (e) {
            setError(e)
            setLoading(false)
        }
    }
    return { data, getPartner, error, loading }
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

    } catch (error) {
        console.log(error)
    }
}



export async function updatePartner(partner, partner_id) {
    const path = `/partner/${partner_id}`;
    const headers = {
        Accept: "*/*",
        "Content-Type": "multipart/form-data"
    }
    let data = new FormData();
    data.append("name",partner.name);
    data.append("logo",partner.file);
    try {
        await doPut(path,headers,data)
    } catch (error) {
        console.log(error)
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

