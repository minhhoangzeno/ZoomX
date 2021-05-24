import { doGet, doPost, doDelete, doPut } from '../DataSource';
import { useEffect, useState } from 'react';


export const useTimeLine = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTimeLine()
    }, []);

    async function getTimeLine() {
        const path = "/timeline";
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
