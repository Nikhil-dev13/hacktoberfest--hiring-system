import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export default (ChildComponent) => {
  const tokenRoleCheck = (props) => {
    const [token, setToken] = useState("");

    useEffect(() => {
      setToken(localStorage.getItem("token"));
      console.log(token);
    }, [localStorage.getItem("token")]);

    if (isEmpty(token)) {
      return <Redirect to="/login" />;
    }

    return <ChildComponent {...props} />;
  };

  return tokenRoleCheck;
};
