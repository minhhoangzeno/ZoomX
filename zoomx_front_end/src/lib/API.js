import { doGet } from "./DataSource";
import { useEffect, useState } from "react";

export const useContact = () => {
  const [data, setData] = useState(null); //tao 1 state data
  const [error, setError] = useState(null); //tao 1 state error
  const [loading, setLoading] = useState(false); //state loading
  useEffect(() => {
    getContact();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getContact() {
    const path = "/contact";
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

export const useInvestment = () => {
  const [data, setData] = useState(null); //tao 1 state data
  const [error, setError] = useState(null); //tao 1 state error
  const [loading, setLoading] = useState(false); //state loading
  useEffect(() => {
    getInvestment();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

export const usePartner = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPartner();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function getPartner() {
    setLoading(true);
    const path = "/partner";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
        setLoading(false);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }
  return { data, getPartner, error, loading };
};

export const useProject = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProject();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getProject() {
    const path = "/project";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useTimeLine = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTimeLine();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getTimeLine() {
    const path = "/timeline";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useRecruitmentDetail = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRecruitment();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getRecruitment() {
    const path = "/recruitment";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useSetting = () => {
  const [data, setData] = useState({
    phone: "",
    mail: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    getSetting();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getSetting() {
    const path = "/setting";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useHero = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHero();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getHero() {
    const path = "/hero";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useDefineHome = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    getDefineHome();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getDefineHome() {
    const path = "/define-home";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useReasonSelect = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReasonSelect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getReasonSelect() {
    const path = "/reason-select";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useSlogan = () => {
  const [data, setData] = useState({
    content: "",
    author: "",
    career: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    getSlogan();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getSlogan() {
    const path = "/slogan";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useZoomx = () => {
  const [data, setData] = useState({
    content: "",
    author: "",
    career: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    getZoomx();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getZoomx() {
    const path = "/zoomx";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useYoungbusiness = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getYoungbusiness();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getYoungbusiness() {
    const path = "/youngbusiness";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      setError(e);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useHeroInvestment = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getHero();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function getHero() {
    const path = "/hero/investment";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
         
      }
    } catch (error) {
      setError(error);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useHeroZoomx = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getHeroZoomx();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function getHeroZoomx() {
    const path = "/hero/zoomx";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
         
      }
    } catch (error) {
      setError(error);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useHeroContact = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getHero();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function getHero() {
    const path = "/hero/contact";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
         
      }
    } catch (error) {
      setError(error);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useHeroLibrary = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getHero();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function getHero() {
    const path = "/hero/library";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
         
      }
    } catch (error) {
      setError(error);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useHeroRecruitment = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getHero();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function getHero() {
    const path = "/hero/recruitment";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
         
      }
    } catch (error) {
      setError(error);
    }
  }
  return { data, error, loading: data || error ? false : true };
};

export const useHeroNews = () => {
  const [hero, setHero] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getHero();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function getHero() {
    const path = "/hero/news";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setHero(resp.data);
      }
    } catch (error) {
      setError(error);
    }
  }
  return { hero, error, loading: hero || error ? false : true };
};

export const useHeroProject = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getHero();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function getHero() {
    const path = "/hero/project";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
         
      }
    } catch (error) {
      setError(error);
    }
  }
  return { data, error, loading: data || error ? false : true };
};
export const useIcon = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getIcon();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function getIcon() {
    const path = "/icon";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (error) {
      setError(error);
    }
  }
  return { data, error, loading: data || error ? false : true };
};
