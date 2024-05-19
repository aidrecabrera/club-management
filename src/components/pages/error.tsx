import {
  useGo,
  useNavigation,
  useResource,
  useRouterType,
  useTranslate,
} from "@refinedev/core";
import React, { useEffect, useState } from "react";

export const ErrorComponent: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const translate = useTranslate();
  const { push } = useNavigation();
  const go = useGo();
  const routerType = useRouterType();

  const { resource, action } = useResource();

  useEffect(() => {
    if (resource && action) {
      setErrorMessage(
        translate(
          "pages.error.info",
          {
            action: action,
            resource: resource.name,
          },
          `You may have forgotten to add the "${action}" component to "${resource.name}" resource.`
        )
      );
    }
  }, [resource, action]);

  return (
    <>
      <h1>
        {translate(
          "pages.error.404",
          undefined,
          "Sorry, the page you visited does not exist."
        )}
      </h1>
      {errorMessage && <p>{errorMessage}</p>}
      <button
        onClick={() => {
          if (routerType === "legacy") {
            push("/");
          } else {
            go({ to: "/" });
          }
        }}
      >
        {translate("pages.error.backHome", undefined, "Back Home")}
      </button>
    </>
  );
};
