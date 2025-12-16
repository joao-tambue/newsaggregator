import { useEffect, useState } from "react";
import { getNews } from "../api/news.service";

export function useNews(page, perPage, filters) {
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchNews() {
            setLoading(true);
            setError(null);

            try {
                const data = await getNews({
                    page,
                    limit: perPage,
                    ...filters,
                });

                if (isMounted) {
                    setArticles(data.articles || []);
                    setTotalResults(data.totalResults || 0);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchNews();

        return () => {
            isMounted = false;
        };
    }, [page, perPage, filters]);

    return {
        articles,
        totalResults,
        loading,
        error,
    };
}