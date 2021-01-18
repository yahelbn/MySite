import React, { createContext } from "react";
import { userPool } from "./cognitoUserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

/**
 * component for authentication: context makes it easy to access functions from the
 * entire app
 */
const AccountContext = createContext();

const Account = (props) => {
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = userPool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject(err);
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  const authenticate = async (email, password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: email,
        Pool: userPool,
      });

      const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          resolve(data);
        },
        onFailure: (err) => {
          reject(err);
        },
        newPasswordRequired: (data) => {
          resolve(data);
        },
      });
    });
  };

  const logout = () => {
    const user = userPool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
