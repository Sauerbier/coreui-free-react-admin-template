import React, { useEffect, useState } from "react";
import {
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CWidgetDropdown,
} from "@coreui/react";
import useServiceFetcher from "../../hooks/ServiceFetcher";
import { Service, ServiceState } from "../../types/ServiceTypes";
import CIcon from "@coreui/icons-react";

let ws: WebSocket;

function connect() {
  ws = new WebSocket("ws:/127.0.0.1:3000");
  ws.onopen = () => {
    console.log("WebSocket Client Connected");
  };

  ws.onerror = function(error) {
    console.log(error);
  };

  ws.onclose = function(close) {
    if (close.code !== 1000) {
      //1000 = Normal Closure
      console.log("reconnecting in 3 seconds...");
      setTimeout(() => connect(), 3000);
    }
  };
}

function send(data: any) {
  ws.send(JSON.stringify(data));
}

function getStateStyle(service: Service) {
  switch (service.state) {
    case ServiceState.STARTING:
      return "gradient-warning";
    case ServiceState.RUNNNING:
      return "gradient-success";
    case ServiceState.IDLE:
      return "gradient-secondary";
    case ServiceState.STOPPED:
      return "gradient-danger";
  }
}

const Dashboard = () => {
  const [services, setServices] = useState<Service[]>([]);

  //useServiceFetcher(setServices);

  useEffect(() => {
    connect();
    ws.onmessage = (message) => {
      console.log(message);
      let data = JSON.parse(message.data);
      console.log(data);
      if (data && data.channel === "service-update") {
        setServices(data.services);
      }
    };
  }, []);

  return (
    <CRow>
      {services
        .sort((a, b) => a.state - b.state)
        .map((service) => {
          return (
            <CCol sm="6" lg="3">
              <CWidgetDropdown
                color={getStateStyle(service)}
                header={service.name}
                text={"Version: " + service.version}
                key={service.namespace}
                footerSlot={
                  <p className="add-padding">{service.description}</p>
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
                        send({
                          channel: "service-toggle",
                          data: {
                            namespace: service.namespace,
                          },
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
                  </CDropdownMenu>
                </CDropdown>
              </CWidgetDropdown>
            </CCol>
          );
        })}
    </CRow>
  );
};

export default Dashboard;
