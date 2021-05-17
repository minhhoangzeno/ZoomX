import { useEffect, useState } from 'react';
import { doGet, doPost } from './DataSource';


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

export const useAddInvestment = (investment) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        addInvestment(investment)
    },[])

    async function addInvestment(investment) {
        setLoading(true);
        const path = "/investment";
        const headers = {
            Accept: "*/*",
            "Content-Type": "application/json"
        }
        const formData = JSON.stringify(investment)
        try {
            let resp = await doPost(path, headers, formData);
            if (resp.status == 200) {
                setData(resp.data)
            }
        } catch (error) {
            console.log(error);
            setError(error)
        }
        setLoading(false)
    }
    return { data, error, loading }
}

export const useUploadInvestment = (file,investment_id) => {
    let data = new FormData();
    data.append("file",file);
    const path = `/investment/image/${investment_id}`;
    const headers = {
        "Content-Type":"multipart/form-data"
    };
    async function uploadInvestment(){
        
    }
}

