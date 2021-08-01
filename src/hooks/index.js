import { useEffect, useState } from "react";
import { Api } from "../api/Api";

export function useLoadData(url, initData = []) {
  const [data, setData] = useState(initData);
  useEffect(() => {
    switch (url) {
      case "marks":
        setData(Api.getMarks());
        break;
      case "assignments":
        setData(Api.getAssignments());
        break;
      default:
        break;
    }
  }, [url]);
  return data;
}
