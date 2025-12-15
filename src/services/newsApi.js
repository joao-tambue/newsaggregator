const API_KEY = "73e4a50a76c7f10912eb0eac3e3b98b5";

export async function getTopTechNews() {
  const url = `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=10&apikey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erro GNews: ${response.status}`);
  }

  return response.json();
}
