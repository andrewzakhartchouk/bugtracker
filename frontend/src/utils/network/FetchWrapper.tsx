import { useRecoilState } from "recoil";
import jwt_decode from "jwt-decode";
import { AuthAtom } from "state";
import { UserServices } from "services";
import Router from "next/router";

export function FetchWrapper() {
  const [auth, setAuth] = useRecoilState(AuthAtom);

  return {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    delete: request("DELETE"),
  };

  function request(method: string) {
    return async (endpoint: string, body: any) => {
      const headers = await authHeader();
      const options = {
        method,
        headers: headers,
      };
      console.log("HELP");
      if (body) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
      }
      let response = await fetch(endpoint, options);

      if (!response.ok) {
        if ([401, 403].includes(response.status)) {
          const error = await response.json();
          return Promise.reject(error["detail"]);
        }
      }
      const result = await response.json();
      return result;
    };
  }

  async function authHeader() {
    const token = await JSON.parse(localStorage.getItem("user"));
    if (!token) return {};
    let access = token.access;
    if (token && checkToken(token.access)) {
      access = await refreshToken(token.refresh);
    }

    if (access) {
      return { Authorization: `Bearer ${access}` };
    } else {
      return {};
    }
  }

  function checkToken(access: any) {
    const decodedAccess = jwt_decode(access);
    return !isExpired(decodedAccess.exp);
  }

  async function refreshToken(refresh: any) {
    if (!refresh) return false;
    const decodedRefresh = jwt_decode(refresh);
    if (isExpired(decodedRefresh.exp)) {
      setAuth(null);
      localStorage.removeItem("user");
      Router.push("/login");
    } else {
      const refreshEndpoint: string = "http://127.0.0.1:8000/api/auth/refresh/";
      const refreshResponse = await fetch(refreshEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refresh }),
      });
      const refreshResult = await refreshResponse.json();
      handleAccessTokenChange(refreshResult.access);
      return refreshResult.access;
    }
  }

  function isExpired(time: number) {
    return Date.now() >= time * 1000 ? true : false;
  }

  function handleAccessTokenChange(access: string) {
    const token = {
      access: access,
      refresh: auth?.refresh,
    };
    setAuth(token);
    localStorage.setItem("user", JSON.stringify(token));
  }
}
