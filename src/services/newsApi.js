const API_KEY = "f50e090d1bf7437c9e9a93c86be4a532";


export async function getTopTechNews() {
const response = await fetch(
`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`
);
return response.json();
}