import { useState } from "react";
//import { requestOptions } from "../services/requestOptions";
export let obj: any;

export function importer() {
  const link = "https://api.artic.edu/api/v1/artworks?limit=100";
  let data1;
  const [data, setData] = useState("");
  async function getData() {
    try {
      const response = fetch(link);
      setData(await response.json());
      data1 = data;
    } catch (e) {
      console.log(e);
    }
    getData();
  }
  return setData;
}
