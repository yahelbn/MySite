import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

/**
 * component for accessing global information all over the app
 * uses react context method
 */
const GlobalContext = createContext();

const Global = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUserStatusInCompany = async (email) => {
    setLoading(true);
    const userCompany = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/userCompany/getByEmailAndStatuses`,
      { params: { email, statuses: ["lear", "poc"] } }
    );
    setData(userCompany);
    setLoading(false);
    return userCompany;
  };

  useEffect(() => {
    getUserStatusInCompany(props.email);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        data,
        getUserStatusInCompany,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, Global };
