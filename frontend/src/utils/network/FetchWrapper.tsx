import { useRecoilState } from "recoil";
import jwt_decode from "jwt-decode";
import { AuthAtom } from "state";
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
    if (isExpired(token.access)) {
      access = await refreshToken(token.refresh);
    }
    if (access) {
      return { Authorization: `Bearer ${access}` };
    } else {
      return {};
    }
  }

  async function refreshToken(refresh: any) {
    if (!refresh) return false;
    if (isExpired(refresh)) {
      setAuth(null);
      localStorage.removeItem("user");
      Router.push("/login");
    } else {
      const refreshEndpoint: string =
        process.env.NEXT_PUBLIC_API + "auth/refresh/";
      const refreshResponse = await fetch(refreshEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refresh }),
      });
      const refreshResult = await refreshResponse.json();
      updateAccessToken(refreshResult.access);
      return refreshResult.access;
    }
  }

  function isExpired(token: string) {
    const decodedToken = jwt_decode(token);
    const expiryTime = decodedToken.exp;
    return Date.now() >= expiryTime * 1000 ? true : false;
  }

  async function updateAccessToken(access: string) {
    const token = {
      access: access,
      refresh: auth?.refresh,
    };
    setAuth(token);
    localStorage.setItem("user", JSON.stringify(token));
  }
}
