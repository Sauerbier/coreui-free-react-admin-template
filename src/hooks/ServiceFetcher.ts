import axios from "axios";
import { useEffect, useState } from "react";
import { Service } from "../../src/types/ServiceTypes";

export default function useServiceFetcher(setter: any) {
  useEffect(() => {
    axios.get<Service[]>("/api/services").then((response) => {
      setter(response.data);
    });
  }, []);
}
