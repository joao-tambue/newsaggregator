import api from "./axios";

export async function getNews({ page = 1, limit = 6} = {}) {
  const response = await api.get("/news", {
    params: {
      page,
      limit,
    },
  });
  return response.data;
}