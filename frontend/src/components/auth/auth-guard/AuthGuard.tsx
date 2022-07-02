import Router from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AuthAtom, LoggedAtom } from "state";

export const AuthGuard = ({ children }) => {
  const setAuth = useSetRecoilState(AuthAtom);
  const [loggedIn, setLoggedIn] = useRecoilState(LoggedAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      const storage = localStorage.getItem("user");
      const token = await JSON.parse(storage);
      if (token) {
        setLoggedIn(true);
        setAuth(token);
        setLoading(false);
      } else {
        setLoggedIn(false);
        Router.push("/login");
      }
      setLoading(false);
    }
    fetchToken();
  }, [setAuth, setLoggedIn]);

  return <>{loading && loggedIn ? <>Loading</> : <>{children}</>}</>;
};
