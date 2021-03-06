import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

/**
 * component for accessing global information all over the app
 * uses react context method
 */
const GlobalContext = createContext();

const Global = (props) => {
  const [data, setData] = useState(null);
  const [enums, setEnums] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUserStatusInCompany = async (email, statuses) => {
    setLoading(true);
    const userCompany = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/userCompany/getByEmailAndStatuses`,
      { params: { email, statuses: statuses } }
    );
    setData(userCompany);
    setLoading(false);
    return userCompany.data;
  };

  /**
   * returns all user information from the db (companies etc)
   * @param  email
   */
  //TODO - change it to return relevant data
  const getUserInfo = async (email) => {
    setLoading(true);
    const userCompany = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/userCompany/getByEmailAndStatuses`,
      { params: { email, statuses: ["lear", "poc", "pending"] } }
    );
    setData(userCompany);
    setLoading(false);
    return userCompany.data;
  };

  const getEnumsByTableName = async (enumsTableName) => {
    setLoading(true);
    const enums = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/enums/getEnumsByTableName`,
      {
        params: { enumsTableName },
      }
    );
    setEnums(enums);
    setLoading(false);
    return enums.data;
  };

  useEffect(() => {
    getUserInfo(props.email);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        data,
        enums,
        getUserStatusInCompany,
        getEnumsByTableName,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, Global };
