import Axios from "axios";
import { useEffect, useState } from "react";

function useNavigation() {
  const [navigation, setNavigation] = useState();

  useEffect(() => {
    Axios.get("/api/webinterface/nav").then((res) => setNavigation(res.data));
  }, []);

  return [navigation, setNavigation];
}

export default useNavigation;
