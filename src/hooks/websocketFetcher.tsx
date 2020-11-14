import Axios from "axios";
import { useEffect, useState } from "react";

function useWebsocketUrl() {
  const [websocketUrl, setWebsocketUrl] = useState<string>();

  useEffect(() => {
    Axios.get("/api/webinterface/websocket").then((res) =>
      setWebsocketUrl(res.data)
    );
  }, []);

  return [websocketUrl, setWebsocketUrl];
}

export default useWebsocketUrl;
