import React, { createContext } from "react";
import { userPool } from "./cognitoUserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useHistory } from "react-router-dom";

/**
 * component for authentication: context makes it easy to access functions from the
 * entire app
 */
const AccountContext = createContext();

const Account = (props) => {
  const history = useHistory();
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = userPool.getCurrentUser();
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject(err);
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err);
                } else {
                  const results = {};

                  for (let attribute of attributes) {
                    const { Name, Value } = attribute;
                    results[Name] = Value;
                  }

                  resolve(results);
                }
              });
            });

            resolve({
              user,
              ...session,
              ...attributes,
            });
          }
        });
      } else {
        reject();
      }
    });
  };

  const getConnectedUser = async () => {
    return await new Promise((resolve, reject) => {
      const user = userPool.getCurrentUser();
      if (user) {
        resolve(user);
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
      history.push("/");
    }
  };

  return (
    <AccountContext.Provider
      value={{
        authenticate,
        getSession,
        logout,
        getConnectedUser,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
