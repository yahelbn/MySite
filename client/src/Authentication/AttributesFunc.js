import React, { createContext, useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const AttributesFuncContext = createContext();

const AttributesFunc = (props) => {
  const { getSession } = useContext(AccountContext);

  const setAttribute = (Name, Value) => {
    getSession().then(({ user }) => {
      const attributes = [new CognitoUserAttribute({ Name, Value })];
      user.updateAttributes(attributes, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });
    });
  };

  const getAttribute = (Name) => {
    return new Promise((resolve) => {
      getSession().then((data) => {
        if (data) {
          resolve(data[Name]);
        }
      });
    });
  };

  return (
    <AttributesFuncContext.Provider
      value={{
        setAttribute,
        getAttribute,
      }}
    >
      {props.children}
    </AttributesFuncContext.Provider>
  );
};

export { AttributesFunc, AttributesFuncContext };
