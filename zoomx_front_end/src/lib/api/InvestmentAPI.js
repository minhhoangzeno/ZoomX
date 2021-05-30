import { doGet, doPost, doPut } from '../DataSource';
import { useEffect, useState } from 'react';


export const useInvestment = () => {
    const [data, setData] = useState(null); //tao 1 state data
    const [error, setError] = useState(null); //tao 1 state error
    const [loading, setLoading] = useState(false) //state loading
    useEffect(() => {
        getInvestment()
    }, []); //vua vao page se chay luon

    async function getInvestment() {
        const path = "/investment";
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status === 200) {
                setLoading(false)
                setData(resp.data)
            }
        } catch (e) {
            setError(e)
            setLoading(true)
        }
    }
    return { data, error, loading }
}






