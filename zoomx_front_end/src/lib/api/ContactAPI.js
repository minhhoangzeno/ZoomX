import { doGet, doPost, doPut, doDelete } from '../DataSource';
import { useEffect, useState } from 'react';


export const useContact = () => {
    const [data, setData] = useState(null); //tao 1 state data
    const [error, setError] = useState(null); //tao 1 state error
    const [loading, setLoading] = useState(false) //state loading
    useEffect(() => {
        getContact()
    }, []); //vua vao page se chay luon

    async function getContact() {
        const path = "/contact";
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






