import { useEffect, useState } from "react";
import axios from "axios";

import { VideoData } from "../types";

const useFetch = (url: string): {
	data: VideoData | undefined,
	isLoading: boolean,
	error: string,
	fetchUrl: () => void;
} => {
  const [data, setData] = useState<VideoData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUrl = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response.status !== 200) {
          setError("Unsuccessful response when fetching url");
        } else {
          setData(response.data);
        }
      })
      .catch((err) => {
        setError(`Could not fetch url ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchUrl();
  }, [url]);

  return { data, isLoading, error, fetchUrl };
};

export default useFetch;
