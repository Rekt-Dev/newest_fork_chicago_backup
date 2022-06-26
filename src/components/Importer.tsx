import { requestOptions } from "../services/requestOptions";
export let obj: any;

export async function Importer() {
  const link = "https://api.artic.edu/api/v1/artworks?limit=100";
    let data;
    fetch(link, requestOptions)
    .then(res=>res.json())
        .then(json=> {
            data = json
            console.log(`this is json rendered from importer ${json}`);

        })
    return data;
}

