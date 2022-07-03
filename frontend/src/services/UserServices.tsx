import Router from "next/router";
import { useSetRecoilState } from "recoil";
import { AuthAtom } from "state";
import { FetchWrapper } from "utils";

export function UserServices() {
  const api = FetchWrapper();
  const setAuth = useSetRecoilState(AuthAtom);

  return {
    login,
    logout,
    get,
  };

  async function login(formData: { email: string; password: string }) {
    return api
      .post(process.env.NEXT_PUBLIC_API + "auth/", formData)
      .then((token) => {
        localStorage.setItem("user", JSON.stringify(token));
        setAuth(token);
        Router.push("/");
      });
  }

  function logout() {
    localStorage.removeItem("user");
    setAuth(null);
    Router.push("/login");
  }

  async function get(endpoint: string, body = null) {
    const result = await api.get(endpoint, body);
    return result;
  }
}
