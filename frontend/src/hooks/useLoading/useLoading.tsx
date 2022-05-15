import { useState } from "react";

export const useLoading = (initialValue: boolean = false) => {
  const [loading, setLoading] = useState(initialValue);

  function toggleLoading(setValue: boolean | null = null) {
    if (setValue !== null) {
      setLoading(setValue);
    } else {
      setLoading((loading) => !loading);
    }
  }

  return [loading, toggleLoading] as const;
};
