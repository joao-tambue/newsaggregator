import { useState } from "react";
import { motion } from "framer-motion";
import ArticleCard from "../components/ArticleCard";
import SkeletonArticle from "../components/skeleton/SkeletonArticle";
import { useNews } from "../hooks/useNews";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";


export default function Home() {
  const [page, setPage] = useState(1);
  const perPage = 6;

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    source: "",
    date: "",
  });

  function handleFiltersChange(changed) {
    setPage(1); // reset pagination quando filtra
    setFilters(prev => ({ ...prev, ...changed }));
  }

  const {
    articles: current,
    loading,
    totalResults,
  } = useNews(page, perPage, filters);


return (
    <div className="text-black">

      <Filters onChange={handleFiltersChange}
      />


      <motion.div className="mx-auto max-w-full w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {loading
        ? Array.from({ length: perPage }).map((_, i) => (
            <SkeletonArticle key={i} />
          ))
        : current.map((a, i) => (
            <ArticleCard key={a.url || a.title || i} article={a} />
          ))}
      </motion.div>

      <Pagination
        page={page}
        setPage={setPage}
        hasMore={page * perPage < (totalResults || 0)}
      />
    </div>
  );
}