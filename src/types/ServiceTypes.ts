interface Service {
  namespace: string;
  name: string;
  description: string;
  version: string;
  state: ServiceState;
  required: boolean;
}

enum ServiceState {
  RUNNNING = 0,
  IDLE = 1,
  STARTING = 2,
  STOPPED = 3,
}

interface SocketMessage{
  channel: string;
}

export {ServiceState}
export type { Service, SocketMessage };
