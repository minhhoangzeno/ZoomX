import { doGet, doPost, doDelete, doPut } from '../DataSource';
import { useEffect, useState } from 'react';


export const useInvestment = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getInvestment()
    }, []);

    async function getInvestment() {
        const path = "/investment";
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


export async function addInvestment(investment, file) {
    const path = "/investment";
    const headers = {
        Accept: "*/*",
        "Content-Type": "application/json"
    }
    const formData = JSON.stringify(investment)
    try {
        let resp = await doPost(path, headers, formData);
        if (resp.status == 200) {
            let data = new FormData();
            data.append("file", file);
            const pathUpload = `/investment/image/${resp.data._id}`;
            const headersUpload = {
                "Content-Type": "multipart/form-data"
            };
            try {
                let resp = await doPost(pathUpload, headersUpload, data);
                if (resp.status == 200) {
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


export async function updateInvestment(investment, file,investment_id) {
    const path = `/investment/${investment_id}`;
    const headers = {
        Accept: "*/*",
        "Content-Type": "application/json"
    }
    const formData = JSON.stringify(investment)
    try {
        let resp = await doPut(path, headers, formData);
        if (resp.status == 200) {
            let data = new FormData();
            data.append("file", file);
            const pathUpload = `/image/${investment_id}`;
            const headersUpload = {
                "Content-Type": "multipart/form-data"
            };
            try {
                let resp = await doPut(pathUpload, headersUpload, data);
                if (resp.status == 200) {
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


export async function deleteInvestment(investment_id) {
    const path = `/investment/${investment_id}`;
    try {
       let resp = await doPut(path);
       if(resp.status == 200){
           console.log("Xoa thanh cong")
       }
    } catch (error) {
        console.log(error);
    }
}






