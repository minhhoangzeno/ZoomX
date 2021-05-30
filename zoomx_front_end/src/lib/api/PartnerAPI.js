import { doGet, doPost, doDelete, doPut } from "../DataSource";
import { useEffect, useState } from "react";

export const usePartner = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPartner();
  }, []);

  async function getPartner() {
    const path = "/partner";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status == 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};
