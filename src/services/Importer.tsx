import { useState } from "react";
//import { requestOptions } from "../services/requestOptions";

export function Importer() {
  const link = "https://api.artic.edu/api/v1/artworks?limit=100";
  let data1;
  let data2
  const [data, setData] = useState("");
  async function getData() {
    try {
      const response = await fetch(link);
      setData( response.json());
      data1 = data;
      console.log(`this is response ${response}`);
      console.log(`this is data ${data}`);
    } catch (e) {
      console.log(e);
    }
    getData();
  }
  return <div> setData</div>;
}
