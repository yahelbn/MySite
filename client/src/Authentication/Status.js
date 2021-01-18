import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

/**
 * temporary component to check auth status
 */
export default () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setStatus(true);
      }
    });
  }, []);

  return (
    <div>
      {status ? (
        <div>
          you are logged in
          <button onClick={() => logout()}> logout</button>
        </div>
      ) : (
        "not connected"
      )}
    </div>
  );
};
