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
import { Service } from "../../types/ServiceTypes";
import CIcon from "@coreui/icons-react";

const ws = new WebSocket("ws:/127.0.0.1:3000");

ws.onopen = () => {
  console.log("WebSocket Client Connected");
};

function send(data: any) {
  ws.send(JSON.stringify(data));
}

const Dashboard = () => {
  const [services, setServices] = useState<Service[]>([]);

  useServiceFetcher(setServices);

  useEffect(() => {
    ws.onmessage = (message) => {
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
        .sort((a, b) => (a.running === b.running ? 0 : a.running ? -1 : 1))
        .map((service) => {
          return (
            <CCol sm="6" lg="3">
              <CWidgetDropdown
                color={service.running ? "gradient-success" : "gradient-danger"}
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
                      disabled={service.required && service.running}
                      onClick={() =>
                        send({
                          channel: "service-interact",
                          namespace: service.namespace,
                          activeState: service.running
                            ? "DEACTIVATE"
                            : "ACTIVATE",
                        })
                      }
                    >
                      {service.running ? "Disable" : "Enable"}
                      {service.required && service.running && (
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
