import { useState } from "react";
//import { requestOptions } from "../services/requestOptions";
export let obj: any;

export function importer() {
  const link = "https://api.artic.edu/api/v1/artworks?limit=100";
  let data1;
  const [data, setData] = useState("");
  async function getData() {
    try {
      const response = await fetch(link);
      setData(await response.json());
      console.log(response)
      data1 = data;
      console.log(`this is data ${data}`)
    } catch (e) {
      console.log(e);
    }
    getData();
  }
  return setData;
}
