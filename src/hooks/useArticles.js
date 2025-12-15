import { useEffect, useState } from "react";
import { getTopTechNews } from "../services/newsApi";


export function useArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [filters, setFilters] = useState({
        search: "",
        category: "",
        source: "",
        date: "",
    });


    useEffect(() => {
        async function fetchNews() {
        setLoading(true);
        try {
        const data = await getTopTechNews();
        setArticles(data.articles || []);
        setFilteredArticles(data.articles || []);
        } finally {
        setLoading(false);
        }
    }


    fetchNews();
        const interval = setInterval(fetchNews, 300000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        let result = articles;


        if (filters.search)
            result = result.filter(a =>
            a.title.toLowerCase().includes(filters.search.toLowerCase())
        );


        if (filters.source)
            result = result.filter(a => a.source.name === filters.source);

        if (filters.description)
            result = result.filter(a => a.description && a.description.toLowerCase().includes(filters.description.toLowerCase()));


        if (filters.date)
            result = result.filter(a => a.publishedAt.startsWith(filters.date));


        setFilteredArticles(result);
    }, [filters, articles]);


    return { filteredArticles, setFilters, loading };
}