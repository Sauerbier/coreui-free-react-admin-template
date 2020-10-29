interface Service {
  namespace: string;
  name: string;
  description: string;
  version: string;
  running: boolean;
  required: boolean;
}

interface SocketMessage{
  channel: string;
}

export type { Service, SocketMessage };
