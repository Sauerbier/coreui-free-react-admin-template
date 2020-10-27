import axios from "axios";
import { useEffect, useState } from "react";
import { Service } from "../../src/types/ServiceTypes";

export default function useServiceFetcher() {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    axios.get<Service[]>("/api/services").then((response) => {
      setServices(response.data);
    });
  }, []);
  return services;
}
