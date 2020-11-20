import Axios from "axios";
import { JSONSchema6 } from "json-schema";
import { useEffect, useState } from "react";
import { ServiceSchema } from "../types/ServiceTypes";

const useConfig = (namespace: string) => {
  const [config, setConfig] = useState<ServiceSchema>();

  useEffect(() => {
    Axios.get("/api/webinterface/service/" + namespace).then((res) =>
      setConfig(res.data)
    );
  }, [namespace]);

  return [config, setConfig];
};

export default useConfig;
