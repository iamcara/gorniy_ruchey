import { useEffect, useState } from "react";

export function useNow(interval, enabled) {
  const [now, setNow] = useState();

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const int = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
  }, [interval, enabled]);

  return now;
}

export function useInterval(interval, enabled, cb) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const int = setInterval(() => {
      cb(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
    // TODO : useCallback
  }, [interval, enabled]);
}
