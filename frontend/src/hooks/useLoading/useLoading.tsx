import { useState } from "react";

export const useLoading = (initialValue: boolean = false) => {
  const [loading, setLoading] = useState(initialValue);

  function toggleLoading() {
    setLoading((loading) => !loading);
  }

  return [loading, toggleLoading] as const;
};
