import { doGet, doPost, doPut } from "../DataSource";
import { useEffect, useState } from "react";

export const useInvestment = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getInvestment();
  }, []);

  async function getInvestment() {
    const path = "/investment";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setLoading(false);
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
      setLoading(true);
    }
  }
  return { data, error, loading };
};

export async function addInvestment(investment) {
  const path = "/investment";
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const data = new FormData();
  data.append("investmentName", investment?.investmentName);
  data.append("description", investment?.description);
  data.append("imageCover", investment?.imageCover);
  try {
    let res = await doPost(path, headers, data);
    console.log(res);
    if (res.status === 200) {
      alert("ok");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateInvestment(investment, file, investment_id) {
  const path = `/investment/update/${investment_id}`;
  const headers = {
    Accept: "*/*",
    "Content-Type": "multipart/form-data",
  };
  const formData = JSON.stringify(investment);
  try {
    let resp = await doPut(path, headers, formData);
    if (resp.status === 200) {
      let data = new FormData();
      data.append("file", file);
      const pathUpload = `/image/${investment_id}`;
      const headersUpload = {
        "Content-Type": "multipart/form-data",
      };
      try {
        let resp = await doPut(pathUpload, headersUpload, data);
        if (resp.status === 200) {
          console.log("ok");
        }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteInvestment(investment_id) {
  const path = `/investment/delete/${investment_id}`;
  try {
    let resp = await doPut(path);
    if (resp.status === 200) {
      console.log("Xoa thanh cong");
    }
  } catch (error) {
    console.log(error);
  }
}
