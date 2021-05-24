import { useEffect, useState } from "react";

export const useFetch = (url, method = "get") => {
  const [response, setState] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((json) => setState({ data: json, loading: false }));
  }, [url, method]);

  return response;
};
