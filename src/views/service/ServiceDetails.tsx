import { CRow } from "@coreui/react";
import React, { ReactPropTypes } from "react";
import Form from "react-jsonschema-form";
import { RouteComponentProps } from "react-router-dom";
import { JSONSchema6 } from "json-schema";
import useConfig from "../../hooks/configHook";
import Axios from "axios";

type ServiceDetailsProps = {
  namespace: string;
};

const ServiceDetails = (props: RouteComponentProps<ServiceDetailsProps>) => {
  const namespace = props.match.params.namespace;
  const [config, setConfig] = useConfig(namespace);

  return (
    <>
      <CRow>
        {config && (
          <Form
            schema={config as JSONSchema6}
            onChange={() => console.log("changed")}
            onSubmit={(e) =>
              Axios.post("/api/webinterface/service/" + namespace, e.formData)
            }
            onError={() => console.log("errors")}
          />
        )}
      </CRow>
    </>
  );
};
export default ServiceDetails;
