import { doGet, doPost, doDelete, doPut } from '../DataSource';
import { useEffect, useState } from 'react';


async function getPartner() {
    const path = "/partner";
    const headers = {
        Accept: "*/*"
    }
    try {
        var resp = await doGet(path, headers);
        if (resp.status == 200) {
            return resp.data;
        }
    } catch (e) {
        console.log(e)
    }
}

export const UsePartner = () => {
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
        if(res.status === 200){
            UsePartner()
        }

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
    data.append("name", partner.name);
    data.append("logo", partner.file);
    try {
        let resp = await doPut(path, headers, data);
        if(resp.status === 200){
            UsePartner()
        }
    } catch (error) {
        console.log(error)
    }
}


export async function deletePartner(partner_id) {
    const path = `/partner/${partner_id}`;
    try {
        let resp = await doDelete(path);
        if(resp.status === 200){
            UsePartner()
        }
    } catch (error) {
        console.log(error);
    }
}

// export async function getDetailPartner(partner_id) {
//     const [data, setData] = useState()
//     const path = `/partner/${partner_id}`;
//     try {
//         let resp = await doDelete(path);
//         if (resp === 200) {
//             setData(data)
//         }
//     } catch (error) {
//         console.log(error);
//     }
//     return { data }
// }

