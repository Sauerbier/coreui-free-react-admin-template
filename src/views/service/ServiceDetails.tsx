import { CRow } from "@coreui/react";
import React, { ReactPropTypes } from "react";
import Form from "react-jsonschema-form";
import { RouteComponentProps } from "react-router-dom";
import { JSONSchema6 } from "json-schema";
import useConfig from "../../hooks/configHook";

type ServiceDetailsProps = {
  namespace: string;
};

const ServiceDetails = (props: RouteComponentProps<ServiceDetailsProps>) => {
  const [config, setConfig] = useConfig(props.match.params.namespace);

  return (
    <>
      <CRow>
        {config && (
          <Form
            schema={config as JSONSchema6}
            onChange={() => console.log("changed")}
            onSubmit={() => console.log("submitted")}
            onError={() => console.log("errors")}
          />
        )}
      </CRow>
    </>
  );
};
export default ServiceDetails;
