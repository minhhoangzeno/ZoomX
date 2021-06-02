import { doGet } from './DataSource';
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
            if (resp.status  ===  200) {
                setData(resp.data)
            }
        } catch (e) {
            setError(e)
        }
    }
    return { data, error, loading: (data || error ? false : true) }
}



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


export const useRecruitmentDetail = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRecruitment()
    }, []);

    async function getRecruitment() {
        const path = "/recruitment";
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


