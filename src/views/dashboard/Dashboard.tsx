import React from "react";
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

const Dashboard = () => {
  const services: Service[] = useServiceFetcher();
  console.log(services);
  return (
    <CRow>
      {services.map((service) => {
        return (
          <CCol sm="6" lg="3">
            <CWidgetDropdown
              color={service.running ? "gradient-success" : "gradient-danger"}
              header={service.name}
              text={"Version: " + service.version}
              footerSlot={<p className="add-padding">{service.description}</p>}
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name="cil-settings" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownItem>
                    {service.running ? "Disable" : "Enable"}
                  </CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
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
