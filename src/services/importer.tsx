import { useState } from "react";
import { requestOptions } from "../services/requestOptions";
export let obj: any;

export function importer() {
  const link = "https://api.artic.edu/api/v1/artworks?limit=100";

  const [data, setData] = useState("");
  async function getData() {
    try {
      const response = await fetch(link);
      setTodos(await response.json());
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
}
