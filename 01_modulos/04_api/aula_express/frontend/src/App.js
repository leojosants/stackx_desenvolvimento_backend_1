import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import './App.css';


const axiosInstance = axios.create(
  { baseURL: "http://localhost:3000" }
);

export default function App() {
  const [data, setData] = useState();

  const loadData = useCallback(
    async () => {
      const { data: requestData } = await axiosInstance.get("/", { params: { name: "Leo" } });
      setData(requestData);
      console.log(requestData);
    }, []
  );

  useEffect(
    () => {
      loadData();
    }, []
  );

  return (
    <div className="App">
      <h1>
        {data?.title}
      </h1>
    </div>
  );
};

