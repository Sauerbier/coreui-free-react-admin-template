interface Service {
  namespace: string;
  name: string;
  description: string;
  version: string;
  state: ServiceState;
  required: boolean;

  error?: string; 
}

enum ServiceState {
  RUNNNING = 0,
  IDLE = 1,
  STARTING = 2,
  STOPPED = 3,
  ERRORED = 4
}

interface SocketMessage{
  channel: string;
}

export {ServiceState}
export type { Service, SocketMessage };
