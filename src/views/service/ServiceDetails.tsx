import { CRow } from "@coreui/react";
import React, { ReactPropTypes } from "react";
import Form from "react-jsonschema-form";
import { RouteComponentProps } from "react-router-dom";
import { JSONSchema6 } from "json-schema";
import useConfig from "../../hooks/configHook";

type ServiceDetailsProps = {
  namespace: string;
};

const schema: JSONSchema6 = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
  },
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
