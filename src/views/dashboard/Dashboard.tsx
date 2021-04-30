import React, { useEffect, useState } from "react";
import {
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CWidgetDropdown,
} from "@coreui/react";
import { Service, ServiceState } from "../../types/ServiceTypes";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import io from "socket.io-client";
import useWebsocketUrl from "../../hooks/websocketFetcher";
import { useHistory } from "react-router-dom";

let ws: SocketIOClient.Socket;

function getStateStyle(service: Service) {
  switch (service.state) {
    case ServiceState.STARTING:
      return "gradient-warning";
    case ServiceState.RUNNNING:
      return "gradient-success";
    case ServiceState.IDLE:
      return "gradient-secondary";
    case ServiceState.STOPPED:
      return "gradient-dark";
    case ServiceState.ERRORED:
      return "gradient-danger";
  }
}

const Dashboard = () => {
  const [filterRequired, setFilterRequired] = useState<boolean>(true);
  const [services, setServices] = useState<Service[]>([]);

  //useServiceFetcher(setServices);
  const [websocketUrl, setWebsocketUrl] = useWebsocketUrl();
  const router = useHistory();

  useEffect(() => {
    ws = io(websocketUrl as string);
  }, [websocketUrl]);

  useEffect(() => {
    ws.on("service-update", (services: Service[]) => {
      setServices(services);
    });
    ws.on("service-crash", (crash: any) => {
      let newServices = services.slice();
      let service = services.find((s) => s.namespace === crash.namespace);
      let i = services.findIndex((s) => s.namespace === crash.namespace);
      if (service) {
        service.state = ServiceState.ERRORED;
        service.error = crash.error;

        newServices[i] = service;
        setServices(newServices);
      }
    });
  }, [websocketUrl, services]);

  return (
    <>
      <CRow>
        <CCol sm="12" lg="12" style={{ paddingBottom: "30px" }}>
          <CButton
            color="primary"
            className="pull-right"
            onClick={() => setFilterRequired(!filterRequired)}
          >
            <CIcon
              content={filterRequired ? freeSet.cilFilterX : freeSet.cilFilter}
            />
          </CButton>
        </CCol>
        {services
          .sort((a, b) => a.state - b.state)
          .filter((s) => (filterRequired && !s.required) || !filterRequired)
          .map((service) => {
            return (
              <CCol sm="6" lg="3">
                <CWidgetDropdown
                  color={getStateStyle(service)}
                  header={service.name}
                  text={"Version: " + service.version}
                  key={service.namespace}
                  footerSlot={
                    <>
                      <p className="add-padding">{service.description}</p>
                      <p className="add-padding">{service.error}</p>
                    </>
                  }
                >
                  <CDropdown>
                    <CDropdownToggle caret={false} color="transparent">
                      <CIcon name="cil-settings" />
                    </CDropdownToggle>
                    <CDropdownMenu className="pt-0 dark" placement="bottom-end">
                      <CDropdownItem
                        disabled={
                          service.required &&
                          service.state !== ServiceState.STOPPED
                        }
                        onClick={() =>
                          ws.emit("service-toggle", {
                            namespace: service.namespace,
                          })
                        }
                      >
                        {service.state === ServiceState.STOPPED
                          ? "Enable"
                          : "Disable"}
                        {service.required &&
                          service.state !== ServiceState.STOPPED && (
                            <CIcon name="cil-ban" className="pull-right" />
                          )}
                      </CDropdownItem>
                      <CDropdownItem
                        onClick={() =>
                          ws.emit("service-restart", {
                            namespace: service.namespace,
                          })
                        }
                      >
                        Restart
                        <CIcon
                          content={freeSet.cilSync}
                          className="pull-right"
                        />
                      </CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CWidgetDropdown>
              </CCol>
            );
          })}
      </CRow>
    </>
  );
};

export default Dashboard;
